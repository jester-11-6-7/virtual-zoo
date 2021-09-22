const headerMenu = document.querySelector('.header__menu')
const burgerMenu = document.querySelector('.burger-menu')

console.log(headerMenu)
console.log(burgerMenu)

burgerMenu.addEventListener('click', () => {
    if (!burgerMenu.classList.contains('closed')) {
        burgerMenu.classList.add('closed')
        headerMenu.classList.add('show')
    }else{
        burgerMenu.classList.remove('closed')
        headerMenu.classList.remove('show')
    }
})