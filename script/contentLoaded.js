let content = document.querySelector('.contentLoad'),
    preload = document.querySelector('.preloader')

window.onload = function () {
    setTimeout(() => {
        content.classList.add('hidden')
        preload.style = 'display: none'
        setTimeout(() => {
            content.style = 'display: none'
        }, 500)
    }, 500)
}
