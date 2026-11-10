(() => {
  const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const closeButton = document.querySelector('.nav-close');

if (menuButton && nav) {

  function openMenu() {
    nav.classList.add('open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close navigation');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    document.body.style.overflow = '';
  }

  menuButton.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  if (closeButton) {
    closeButton.addEventListener('click', closeMenu);
  }

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
}

  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const progress = document.querySelector('.scroll-progress');
  const updateProgress = () => {
    if (!progress) return;
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  };
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach(item => observer.observe(item));
  } else revealItems.forEach(item => item.classList.add('visible'));

  const filters = [...document.querySelectorAll('.filter')];
  const cards = [...document.querySelectorAll('.work-card')];
  const count = document.querySelector('.portfolio-count');
  function applyFilter(category) {
    filters.forEach(button => button.classList.toggle('active', button.dataset.filter === category));
    let shown = 0;
    cards.forEach(card => {
      const visible = category === 'all' || card.dataset.category === category;
      card.classList.toggle('is-hidden', !visible);
      if (visible) shown++;
    });
    if (count) count.textContent = `${String(shown).padStart(2, '0')} PROJECT${shown === 1 ? '' : 'S'} SHOWN`;
  }
  filters.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
    const select = document.getElementById('project-type');
    if (select) {
      const service = link.dataset.service;
      const option = [...select.options].find(item => item.text.toLowerCase() === service.toLowerCase());
      if (option) select.value = option.value;
      else if (service.toLowerCase().includes('graphic')) select.value = 'Graphic design & branding';
    }
  }));

  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    const image = lightbox.querySelector('img');
    const type = lightbox.querySelector('small');
    const title = lightbox.querySelector('h3');
    const description = lightbox.querySelector('p');
    let current = 0;
    let previousFocus = null;
    const visibleCards = () => cards.filter(card => !card.classList.contains('is-hidden'));
    function showCard(index) {
      const list = visibleCards();
      if (!list.length) return;
      current = (index + list.length) % list.length;
      const card = list[current];
      const thumb = card.querySelector('img');
      image.src = thumb.src; image.alt = thumb.alt;
      type.textContent = card.dataset.type;
      title.textContent = card.dataset.title;
      description.textContent = card.dataset.description;
    }
    function openCard(card) {
      previousFocus = document.activeElement;
      current = visibleCards().indexOf(card);
      showCard(current);
      lightbox.classList.add('open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      lightbox.querySelector('.lightbox-close').focus();
    }
    function closeCard() {
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      if (previousFocus) previousFocus.focus();
    }
    cards.forEach(card => card.addEventListener('click', () => openCard(card)));
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeCard);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showCard(current - 1));
    lightbox.querySelector('.lightbox-next').addEventListener('click', () => showCard(current + 1));
    lightbox.addEventListener('click', event => { if (event.target === lightbox) closeCard(); });
    document.addEventListener('keydown', event => {
      if (!lightbox.classList.contains('open')) return;
      if (event.key === 'Escape') closeCard();
      if (event.key === 'ArrowLeft') showCard(current - 1);
      if (event.key === 'ArrowRight') showCard(current + 1);
    });
  }

  const form = document.getElementById('project-form');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();
    const body = `Hello MagieGraphics, my name is ${name}.\n\nI'm interested in: ${service}.${message ? `\n\nProject details: ${message}` : ''}\n\nPlease let me know the next steps. `;
    window.open(`https://wa.me/256763975808?text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  });
})();
