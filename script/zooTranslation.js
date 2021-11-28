const APIKEY = 'AIzaSyAQNwgSCwNaw91ydsR_gGsA1zBht45vbww'
// const videoUrl = 'https://www.youtube.com/embed/'
const getVideoData = 'https://www.googleapis.com/youtube/v3/videos?id='

const animalData = {
    eagle: {
        zoo: { name: 'Raptor resourse project', img: '../assets/img/bruce-hong-1o8VV8yOw40-unsplash4.png' },
        donateText: `
            Alligators will receive a piece of meat 
            or fresh fish. Animals will receive your
            gift in about 5-15 minutes
        `,
        videoId: ['UmclL6funN8', 'RmmAzrAkKqI', 'ZvX4KElPq2k', 'eTAsANPVqB8'],
        interestingFacts: `
            Welcome to Decorah, Iowa! This live cam overlooks a bald
            eagle nest high in a white oak tree in a secluded valley north
            of Decorah. Watch live and learn more about the eagles.
        `,
        moreInterestingFacts: [
            `Most American alligators live in Florida and Louisiana. In Florida alone, their number is 1 million individuals.<br>
                Florida is the only place on Earth where alligators and real crocodiles coexist.
            `,
            `The distribution area of eagles is quite wide, and the habitat depends on the species of bird. Nevertheless, all representatives of the representatives prefer to settle
                away from civilization and humans, choosing mountainous or semi-open landscapes.<br><br>
                For example, the golden eagle inhabiting the territory of Russia (in the north of the Caucasus and the south of Primorye) nests in a hard-to-reach forest zone, and its
                Australian relative, the wedge-tailed golden eagle, feels comfortable in the forests of New Guinea. <br>
                Steppe eagles live in steppes and semi-desert zones, inhabiting them from Transbaikalia to the Black Sea coast. <br>
                The burial eagle took a fancy to the forest-steppes of Ukraine, the Kazakh steppe regions, the forests of the Czech Republic, Spain and Romania. <br>
                Eagles are found in Iran and China, in Hungary and Slovakia, in Greece and Germany. <br>
            `,
            `Currently, birds of prey from the Hawk family, represented by: <br><br>
                Hawk eagle (A.fаsciata or H.fаsciatus);<br>
                Indian hawk eagle (Lorhotriorchis kieneri);<br>
                Berkut (A. chrysaetos);<br>
                Stone eagle (A. arakh);<br>
                Kaffir eagle (A.verreauuxii);<br>
                Silver eagle (A.wahlbergi);<br>
                Wedge-tailed eagle (A.audax).<br><br>
                The birds received the conservation status "Vulnerable Species":<br><br>
                Burial ground (A. helias);<br>
                Spanish burial ground (A.adalberti);<br>
                Greater spotted eagle (A. clanga).<br>
                The endangered species is represented by the Steppe eagle (A. niralensis), and the close to vulnerable position is the Moluccan eagle (Аquila gurneyi). The dwarf
                eagle (A. renata or H. renata) and the burial ground in a number of countries are included in the pages of the national Red Book.
            `,
        ]

    },

    alligator: {
        zoo: { name: 'ST. Augustine alligator farm', img: '../assets/img/bruce-hong-1o8VV8yOw40-unsplash2.png' },
        donateText: `
            Alligators will receive a piece of meat 
            or fresh fish. Animals will receive your
            gift in about 5-15 minutes
        `,
        videoId: ['EnxRJii_dp8'],
        interestingFacts: `
            Keep an eye out for alligators basking in the sun and tune in
            for feeding demonstrations at 12:00 PM and 3:00 PM ET.
            Watch live and learn more about the alligators.
        `,
        moreInterestingFacts: [
            `Most American alligators live in Florida and Louisiana. In Florida alone, their number is 1 million individuals. <br>
                Florida is the only place on Earth where alligators and real crocodiles coexist.
            `,
            `There are only two countries in the world where representatives of this genus live - these are the United States of America and China. <br>
                The Chinese alligator is endangered and lives only in the Yangtze River Valley. <br>
                The American alligator lives on the east coast of the United States from North Carolina to Texas.
            `,
            `Alligators feed on almost anything they can catch. Juveniles prey on fish, insects, snails and crustaceans. As they grow, Mississippi alligators choose larger prey:
                large fish, such as carapace pike (Lepisosteidae); turtles, small mammals, birds and other reptiles, while Chinese alligators, due to their small size, still consume a
                large number of very small animals. Foreign bodies are often found in the stomachs of alligators. <br><br>
                If alligators are hungry enough, they can eat carrion as well. Adult Mississippi alligators can sometimes hunt deer, feral pigs, or even younger alligators, although they
                are much inferior to most true crocodiles and black caimans for capturing large prey.
            `,
        ]
    },

    gorilla: {
        zoo: { name: 'Grace gorillas', img: '../assets/img/bruce-hong-1o8VV8yOw40-unsplash3.png' },
        donateText: `
            Alligators will receive a piece of meat 
            or fresh fish. Animals will receive your
            gift in about 5-15 minutes
        `,
        videoId: ['80LssXQ5kAs',],
        interestingFacts: `
            The Gorilla Rehabilitation and Conservation Education Center
            is located near the Tayna Nature Reserve in the Republic of
            Congo.  Watch live and learn more about the gorillas.
        `,
        moreInterestingFacts: [
            `All species (and subspecies) of gorilla are listed as endangered or critically endangered on the IUCN Red List. <br>
                Now, over 100,000 western lowland gorillas are thought to exist in the wild, with 4,000 in zoos, thanks to conservation; eastern lowland gorillas have a population of
                under 5,000 in the wild and 24 in zoos.
            `,
            `In nature, gorillas live in the equatorial forests of western and central Africa, mountain gorillas - on the slopes of the volcanic mountains of Virunga, covered with
                forest. They keep in small groups, consisting of a male leader, several females and their cubs (from 5 to 30 individuals in total).
            `,
            `The gorilla's diet is based on plant foods. Among the plants used, one can distinguish wild celery, bedstraw, nettles, bamboo shoots, blue pygeum fruits. Fruits and
                nuts are an addition to the main diet, while animal foods.<br><br>
                Gorillas also use various mineral supplements in their diet: they eat, for example, some types of clay, thus compensating for the lack of salt in food. Gorillas hardly
                have to drink: juicy greens already have enough moisture. Reservoirs and water in general are avoided whenever possible, and rain is disliked.`
        ]
    },

    panda: {
        zoo: { name: 'Shenshuping Panda Center', img: '../assets/img/bruce-hong-1o8VV8yOw40-unsplash1.png' },
        donateText: `
            Pandas will receive a mixture of bamboo
            shoots, carrots and apples. Animals will
            receive your gift in about 5-15 minutes
        `,
        videoId: ['OObOQ2GElhA', '65JHo3Cy2tY',],
        interestingFacts: `
            The yards at the Shenshuping Panda Center in China's
            Wolong Valley are filled with bamboo, making them very
            happy. Watch live and learn more about pandas.
        `,
        moreInterestingFacts: [
            `A total of 60 giant panda cubs were born in 2019, bringing the total population of these animals in captivity around the world to 600. <br>
                And in the wild there are less than 2,000 giant pandas left. They mainly live in Sichuan and Shaanxi provinces. <br>
                This animal is not only a symbol of the Celestial Empire, but is also under the protection of the Chinese authorities. Harming a panda is punished very severely.
                <br><br>
                Details: <a href="https://regnum.ru/news/society/2776077.html">https://regnum.ru/news/society/2776077.html</a>
            `,
            `The habitat of the giant panda includes the mountainous regions of the Tibet-Qinghai Plateau, western central China and southwest China. <br>
                The giant panda lives mainly in the Sichuan province. There are also small populations of this animal in the Shaanxi and Gansu provinces. <br>
                Before extensive land reclamation and deforestation began, the giant panda lived in many low-lying areas of China's interior.
            `,
            `The giant panda is a unique predator. Her digestion was originally focused on animal feed. But - millions of years have passed in the process of evolution, digestion has
                adapted to the digestion of bamboo. The exact reason is unknown. Most likely - there were few animals around that could be caught. And the plant won't run away. Despite
                the 99% bamboo diet, pandas extract only 17% of the nutrients from it. This is too little. Therefore, these bears must constantly eat. The rest of the time is sleep and rest to
                save energy.<br><br>
                The food process is perfected by pandas. Optimal seated position, freeing the front legs - to take more bamboo. On the paws there are special skin pads and a false thumb -
                to hold food more tightly. Strong jaws and complex intestinal microflora - to better digest bamboo. He has no chance. In fairness - giant pandas, on occasion, can eat fish,
                honey, eggs, leaves, fruits, roots and even small animals. But bamboo is somehow easier. More familiar.
            `,
        ],
    },
}

const videoData = []

function createFacts(animal) {
    const interestFacts = document.querySelectorAll('.facts__information-text')
    for (let i = 0; i < interestFacts.length; i++) {
        interestFacts[i].innerHTML = animalData[animal].moreInterestingFacts[i]
    }
}

async function setViewersNumberTitle(videoId) {
    await fetch(`${getVideoData}${videoId}&key=${APIKEY}&part=snippet,statistics,liveStreamingDetails`, { method: 'GET' })
        .then(props => props.json())
        .then(props => document.querySelector('.translation__views-number').innerHTML = props.items[0].liveStreamingDetails.concurrentViewers);
}

function defMainVideo(videoId) {
    const link = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`
    document.querySelector('.translation__video').setAttribute('src', link)
}

function setMainVideo(number, animal) {
    document.querySelectorAll('.translation__cam-viewers_play')[number].addEventListener('click', (e) => {
        let player = document.querySelector('.translation__video'),
            videoId = animalData[animal].videoId[number];

        player.setAttribute('src', `https://www.youtube.com/embed/${animalData[animal].videoId[number]}?autoplay=1&mute=1`)

        for (let videoLink of document.querySelectorAll('.translation__cam')) {
            videoLink.classList.remove('translation__watch-now')
        }
        e.currentTarget.parentElement.parentElement.classList.add('translation__watch-now')
        setViewersNumberTitle(videoId)
    })
}

async function createDOM(animal = sessionStorage.getItem('zooTranslation')) {
    animal = animal || 'panda'

    createFacts(animal)
    setViewersNumberTitle(animalData[animal].videoId[0])
    defMainVideo(animalData[animal].videoId[0])

    document.querySelector('.translation__zoo-name').innerHTML = animalData[animal].zoo.name
    document.querySelector('.facts__text').innerHTML = animalData[animal].interestingFacts
    document.querySelector('.translation__text').innerHTML = animalData[animal].donateText
    document.querySelector('.translation__zoo-account-img').setAttribute('src', animalData[animal].zoo.img)
    document.querySelector('.translation__zoo-btn').innerHTML = `Feed the ${animal}`

    for (let i = 0; i < animalData[animal].videoId.length; i++) {
        document.querySelector('.translation__slider-bar').insertAdjacentHTML('beforeend', `
            <div class="translation__cam">
                <div class="translation__cam-viewers">
                    <p class="translation__cam-viewers__quantities"></p>
                    <button class="translation__cam-viewers_play">Watch →</button>
                </div>
            </div>
            `);

        fetch(`${getVideoData}${animalData[animal].videoId[i]}&key=${APIKEY}&part=snippet,statistics,liveStreamingDetails`, { method: 'GET' })
            .then(props => props.json())
            .then(props => {
                const data = props.items[0],
                    views = data.liveStreamingDetails?.concurrentViewers + ' viewers' ?? data.statistics.viewCount + ' view';

                videoData.unshift(data)

                document.querySelectorAll('.translation__cam')[i].style = `background-image: url("${data.snippet.thumbnails.high?.url}")`
                document.querySelectorAll('.translation__cam-viewers__quantities')[i].innerHTML = views

                setMainVideo(i, animal)

                if (i === 0) {
                    document.querySelector('.translation__cam').classList.add('translation__watch-now')
                }
            })
    }
}
createDOM()

let animals = ['panda', 'alligator', 'eagle', 'gorilla', '']
function rand() {
    let randNumber = Math.floor(Math.random() * (animals.length - 1))
    if (animals[randNumber] === sessionStorage.getItem('zooTranslation')) {
        return rand()
    }
    return randNumber
}

for (let i = 0; i < document.querySelectorAll('.render-page').length; i++) {
    if (document.querySelectorAll('.render-page')[i].classList.contains('random-page')) {
        document.querySelectorAll('.render-page')[i].addEventListener('click', () => {
            let randAnimal = rand()
            document.querySelector('.translation__slider-bar').innerHTML = ''
            createDOM(animals[randAnimal])
            sessionStorage.setItem('zooTranslation', animals[randAnimal])
        })
    } else {
        document.querySelectorAll('.render-page')[i].addEventListener('click', () => {
            document.querySelector('.translation__slider-bar').innerHTML = ''
            sessionStorage.setItem('zooTranslation', animals[i])
            createDOM(animals[i])
        })
    }
}
