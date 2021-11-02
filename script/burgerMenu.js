const headerMenu = document.querySelector('.header__menu');
const burgerMenu = document.querySelector('.burger-menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('closed')
    headerMenu.classList.toggle('show')
});
