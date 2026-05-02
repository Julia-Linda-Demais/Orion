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

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});

//cards da equipe
const containerCards = document.querySelector('.container-cards');
const btnDirEquipe = document.querySelector('.direita-equipe');
const btnEsqEquipe = document.querySelector('.esquerda-equipe');

btnDirEquipe.addEventListener('click', () => {
  containerCards.scrollBy({
    left: 520,
    behavior: "smooth"
  });
});

btnEsqEquipe.addEventListener('click', () => {
  containerCards.scrollBy({
    left: -520,
    behavior: "smooth"
  });
});
