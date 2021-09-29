const MAPMARKER = document.querySelectorAll('.zoo-map__marker')
const CARD = document.querySelectorAll('.zoo-map__card')


function test(name) {
    for (let i = 0; i < CARD.length; i++) {
        CARD[i].classList.remove('show__card')
        MAPMARKER[i].classList.remove('zoo-map__marker__active')
        if(MAPMARKER[i].dataset.animal === name){
            MAPMARKER[i].classList.add('zoo-map__marker__active')
        }
        if (CARD[i].dataset.animal === name) {
            CARD[i].classList.add('show__card')
        }
    }
}