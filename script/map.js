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
function sliderFn() {
    let offset = 0

    return function (direction, sliderChildren, sliderChildrenGap = 0, sliderContainer, slider, columns = 1,) {
        let row
        for (let i = 1; i < 10; i++) {
            if ((sliderChildren[0].offsetWidth * i) + (sliderChildrenGap * (i - 1)) === slider.offsetWidth) {
                row = i
            }
        }

        let sliderElemsWidth = +(direction + sliderChildren[0].offsetWidth),
            sliderContainerGap = +(direction + parseFloat(sliderChildrenGap)),
            sliderWidth = (
                ((Math.ceil(sliderChildren.length / columns) - row) * sliderChildrenGap) +
                (sliderChildren[0].offsetWidth * Math.ceil(sliderChildren.length / columns))) -
                (sliderChildren[0].offsetWidth * (row === 1 ? row : row - 1)
                ),
            oneShift = sliderElemsWidth + sliderContainerGap;

        if (offset + oneShift < 1 && offset + oneShift >= -sliderWidth) {
            sliderContainer.style.transform = `translateX(${offset += oneShift}px)`
        }
    }
};

!function reviewsSliderFn() {
    const btn = document.querySelector('.testimonials__btn-slider').children,
        reviewsSlider = sliderFn(),
        derection = ['+', '-']

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            const slider = document.querySelector('.testimonials__slider'),
                sliderContainer = document.querySelector('.testimonials__slider-bar'),
                sliderElems = document.querySelectorAll('.testimonials__user-reviews');
            reviewsSlider(
                derection[i],
                sliderElems,
                parseFloat(window.getComputedStyle(sliderContainer).gap),
                sliderContainer,
                slider,
            )
        })
    }
}();


!function animalSliderFn() {
    const btn = document.querySelector('.famous-pets__btn-slider').children,
        animalSlider = sliderFn(),
        derection = ['+', '-']

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', () => {
            const slider = document.querySelector('.famous-pets__slider'),
                sliderContainer = document.querySelector('.famous-pets__slider-bar'),
                sliderElems = document.querySelectorAll('.famous-pets__animal');
            animalSlider(
                derection[i],
                sliderElems,
                parseFloat(window.getComputedStyle(sliderContainer).gap),
                sliderContainer,
                slider,
                2,
            )
        })
    }
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
