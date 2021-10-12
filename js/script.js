//hamburger
const hamburgerMenu = document.querySelector('.toggle');
const menu = document.querySelector('.header-nav__list');

hamburgerMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
    hamburgerMenu.classList.toggle('toggle-active');
});