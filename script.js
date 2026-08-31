const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
menuButton.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '✕' : '☰';
});
document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open'); menuButton.setAttribute('aria-expanded','false'); menuButton.textContent='☰';
}));
const video = document.querySelector('.hero-video');
video.addEventListener('error', () => video.style.display = 'none');
const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const interestForm = document.querySelector('#interest-form');
interestForm.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#interest-message').textContent = 'Thank you. Your interest has been recorded for this preview.';
  interestForm.reset();
});
const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', event => {
  event.preventDefault();
  document.querySelector('#contact-message').textContent = 'Thank you. This preview form is ready to connect to your chosen email service.';
  contactForm.reset();
});
