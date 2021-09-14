const headerLinks = document.querySelectorAll('.header__link');
const slides = document.querySelectorAll('.header__slide');
const burgerIcon = document.querySelector('.burger__icon');
const headerMenu = document.querySelector('.header__menu');

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


console.log(`
Самооценка: \n 
1. Вёрстка валидная "Document checking completed. No errors or warnings to show." +10 
2. Вёрстка семантическая (header,footer, main, nav, section, h1-h5 ) +20
3. Для оформления СV используются css-стили +10 
4. Контент блоке по центру +10 
5. Вёрстка адаптивная +10
6. Адаптивное бургер меню, плавная прокрутка по якорям +10
7. На странице СV есть аватарка +10
8. Kонтакты для связи и перечень навыков оформлены в виде списка ul > li +10
9. CV содержит контакты, о себе, навыки, образовании и уровне английского +10
10. CV содержит пример кода +10
11. CV содержит изображения-ссылки на выполненные проекты
12. CV выполнено на английском языке +10
13. Выполнены требования к Pull Request,  выполнена самооценка +10
14. Есть видеорезюме CV на английском языке +10
15. Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV +10

Итого: 160 (макс.150).
`);
