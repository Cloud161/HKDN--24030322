(() => {
  document.documentElement.classList.add('js-ready');

  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const navLinks = [...document.querySelectorAll('.nav a')];
  const backTop = document.querySelector('.back-top');
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Mở menu' : 'Đóng menu');
    nav.classList.toggle('open', !expanded);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Mở menu');
      nav.classList.remove('open');
      menuButton.focus();
    }
  });

  navLinks.forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Mở menu');
    nav.classList.remove('open');
  }));

  const setActive = () => {
    const marker = window.scrollY + 150;
    let current = '';
    sections.forEach((section) => {
      if (section.offsetTop <= marker) current = section.id;
    });
    navLinks.forEach((link) => {
      const active = link.hash === `#${current}`;
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    backTop.classList.toggle('visible', window.scrollY > 500);
  };
  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

  const revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
    revealItems.forEach((item) => observer.observe(item));
  }

  document.querySelectorAll('.asset-image').forEach((image) => {
    const updateImageState = () => {
      const loaded = image.naturalWidth > 0;
      image.classList.toggle('asset-missing', !loaded);
      image.parentElement.classList.toggle('has-photo', loaded);
    };
    image.addEventListener('load', updateImageState, { once: true });
    image.addEventListener('error', updateImageState, { once: true });
    if (image.complete) updateImageState();
  });
})();
