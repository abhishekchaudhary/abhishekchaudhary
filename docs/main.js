(() => {
  const $ = (sel, root = document) => root.querySelector(sel);
  const all = (sel, root = document) => [...root.querySelectorAll(sel)];
  const progress = $('#progress');
  let ticking = false;
  const updateProgress = () => {
    const range = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = (range > 0 ? Math.min(100, window.scrollY / range * 100) : 0) + '%';
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(updateProgress); } }, { passive: true });
  updateProgress();
  $('#year').textContent = new Date().getFullYear();

  const menu = $('.menu-toggle');
  const mobileNav = $('#mobile-nav');
  const closeMenu = () => { menu.setAttribute('aria-expanded', 'false'); menu.setAttribute('aria-label', 'Open navigation'); mobileNav.hidden = true; };
  menu.addEventListener('click', () => {
    const opening = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(opening));
    menu.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !opening;
  });
  all('#mobile-nav a').forEach(link => link.addEventListener('click', closeMenu));
  addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  const steps = [
    { title: 'Get curious before getting busy.', body: 'Start with the real problem. Challenge the obvious answer. Ask what actually matters to the person on the other side.', glyph: '?' },
    { title: 'Connect the dots others miss.', body: 'Good solutions live across disciplines. Bring together engineering, product, business, and the human context.', glyph: '↗' },
    { title: 'Make it real. Make it useful.', body: 'Move from whiteboards to working things. Prefer clarity over complexity and outcomes over impressive diagrams.', glyph: '✳' },
    { title: 'Stay wrong long enough to learn.', body: 'Ship, observe, rethink, improve. The strongest ideas get sharper when they meet the real world.', glyph: '∞' }
  ];
  const stepButtons = all('.thinking-step');
  stepButtons.forEach((button, index) => button.addEventListener('click', () => {
    stepButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    button.classList.add('active'); button.setAttribute('aria-pressed', 'true');
    $('#thinking-card-number').textContent = `FRAMEWORK / 0${index + 1}`;
    $('#thinking-card-title').textContent = steps[index].title;
    $('#thinking-card-body').textContent = steps[index].body;
    $('#thinking-glyph').textContent = steps[index].glyph;
  }));
  const reveals = all('.reveal');
  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }
    }), { threshold: .07, rootMargin: '0px 0px -25px 0px' });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add('visible'));
})();
