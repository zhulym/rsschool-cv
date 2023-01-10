const headerLinks = document.querySelectorAll('.header__link');
const slides = document.querySelectorAll('.header__slide');
const burgerIcon = document.querySelector('.burger__icon');
const headerMenu = document.querySelector('.header__menu');
const copyRight = document.querySelector('.footer__rs-link');

headerLinks.forEach(item => item.addEventListener('click', addActiveLink));

function addActiveLink(event) {
  headerLinks.forEach(item => item.classList.remove('header__active'));
  !event.target.classList.contains('header__active') ? event.target.classList.add('header__active') : null;
}

burgerIcon.addEventListener('click', showHideMenu);

function showHideMenu() {
  headerMenu.classList.toggle('menu__active');
  burgerIcon.classList.toggle('menu__active');
  document.body.classList.toggle('lock_page-scroll');
}

function getYear() {
  const date = new Date;
  copyRight.textContent = '© ' + date.getFullYear();
}

window.addEventListener('load', getYear);