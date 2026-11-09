'use strict';
// Telefone central para links configurados dinamicamente.
const WHATSAPP = '5531991913583';
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() {
  menu.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menu');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') !== 'true';
  menu.classList.toggle('is-open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.classList.contains('is-open')) {
    closeMenu(); menuButton.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// Comparador nativo: mouse, toque e teclado. As imagens mantêm largura fixa;
// somente a máscara é alterada para revelar a foto de baixo.
const range = document.querySelector('#comparison-range');
const comparison = document.querySelector('.comparison');
function updateComparison() {
  const value = Math.max(0, Math.min(100, Number(range.value)));
  comparison.style.setProperty('--position', `${value}%`);
  range.setAttribute('aria-valuetext', `${value}% da foto antes visível`);
}
range.addEventListener('input', updateComparison);
updateComparison();

// Mensagem específica para cada serviço; links HTML também funcionam sem JS.
document.querySelectorAll('[data-service]').forEach(link => {
  const text = `Olá! Gostaria de um orçamento para ${link.dataset.service}. Meu bairro é: `;
  link.href = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
});

// Conteúdo sempre visível caso o navegador não suporte IntersectionObserver.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('will-reveal');
    observer.observe(element);
  });
}

// Durante a reprodução, mostrar todo o vídeo vertical, sem cortar o serviço.
const video = document.querySelector('#service-video');
video.addEventListener('play', () => video.classList.add('is-playing'));
video.addEventListener('ended', () => video.classList.remove('is-playing'));
