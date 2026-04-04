let index = 0;

const container = document.querySelector('.imgProjeto');
const slides = document.querySelectorAll('.imgProjeto img');
const btnDir = document.querySelector('.direita');
const btnEsq = document.querySelector('.esquerda');

function mostrarProjetos() {
  container.style.transform = `translateX(-${index * 100}%)`;
}

btnDir.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  mostrarProjetos();
});

btnEsq.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarProjetos();
});