// map
function test(name) {
    const MAPMARKER = document.querySelectorAll('.zoo-map__marker')
    const CARD = document.querySelectorAll('.zoo-map__card')

    for (let i = 0; i < CARD.length; i++) {
        CARD[i].classList.remove('show__card')
        MAPMARKER[i].classList.remove('zoo-map__marker__active')
        if (MAPMARKER[i].dataset.animal === name) {
            MAPMARKER[i].classList.add('zoo-map__marker__active')
        }
        if (CARD[i].dataset.animal === name) {
            CARD[i].classList.add('show__card')
        }
    }
};

// sliderFn
function slider() {
    let offset = 0

    return function (direction, sliderChildren, sliderChildrenGap = 0, slider, columns = 1) {
        let sliderElemsWidth = +(direction + sliderChildren[0].offsetWidth),
            sliderContainerGap = +(direction + parseFloat(sliderChildrenGap)),
            sliderWidth = (
                ((Math.floor(sliderChildren.length / columns) - columns) * sliderChildrenGap) +
                (sliderChildren[0].offsetWidth * Math.floor(sliderChildren.length / columns))) +
                ((sliderContainerGap * columns) - (sliderChildren[0].offsetWidth * columns)
                ),
            oneShift = sliderElemsWidth + sliderContainerGap;

        if (offset + oneShift < 1 && offset + oneShift > -sliderWidth) {
            slider.style.transform = `translateX(${offset += oneShift}px)`
        }
    }
};

!function reviewsSliderFn() {
    const btn = document.querySelector('.testimonials__btn-slider').children
    const sliderContainer = document.querySelector('.testimonials__slider-bar')
    const sliderElems = document.querySelectorAll('.testimonials__user-reviews')
    let reviewsSlider = slider()

    btn[0].addEventListener('click', () => reviewsSlider(
        '+',
        sliderElems,
        parseFloat(window.getComputedStyle(sliderContainer).gap),
        sliderContainer,
    ))

    btn[1].addEventListener('click', () => reviewsSlider(
        '-',
        sliderElems,
        parseFloat(window.getComputedStyle(sliderContainer).gap),
        sliderContainer
    ))
}();
!function animalSliderFn() {
    const btn = document.querySelector('.famous-pets__btn-slider').children
    const sliderContainer = document.querySelector('.famous-pets__slider-bar')
    const sliderElems = document.querySelectorAll('.famous-pets__animal')
    let animalSlider = slider()

    btn[0].addEventListener('click', () => animalSlider(
        '+',
        sliderElems,
        parseFloat(window.getComputedStyle(sliderContainer).gap),
        sliderContainer,
        2
    ))

    btn[1].addEventListener('click', () => animalSlider(
        '-',
        sliderElems,
        parseFloat(window.getComputedStyle(sliderContainer).gap),
        sliderContainer,
        2
    ))
}();

// card animation
!function animateCardAnimal() {
    let animalName = ''
    let sliderElems = document.querySelectorAll('.animal-container')

    return function () {
        for (let i = 0; i < sliderElems.length; i++) {

            sliderElems[i].addEventListener('mouseover', (e) => {
                animalName = e.currentTarget.children[1].innerHTML
                e.currentTarget.children[1].innerHTML = 'follow &#8594'
            })

            sliderElems[i].addEventListener('mouseout', (e) => {
                e.currentTarget.children[1].innerHTML = animalName
            })
        }
    }
}()();