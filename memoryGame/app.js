const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
]
cardArray.sort(() => 0.5 - Math.random())


const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
// const timeLeft = document.querySelector('#time-left')
const statusDisplay = document.querySelector('#status')

// let currentTime = 10 // timer
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createBoard () {
    for (this_card in cardArray){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', this_card)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()


function checkMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    // if (optionOneId == optionTwoId) {
    //     cards[optionOneId].setAttribute('src', 'images/blank.png')
    //     cards[optionTwoId].setAttribute('src', 'images/blank.png')
    //     statusDisplay.innerHTML = "Great"
    // }
    if (cardsChosen[0] == cardsChosen[1]) {
        statusDisplay.innerHTML = "Great!"
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click',flipCard)
        cards[optionTwoId].removeEventListener('click',flipCard)
        cardsWon.push(cardsChosen)
    }else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        statusDisplay.innerHTML = "Oops!"
    }

    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        statusDisplay.innerHTML = "Congratulations you found them all!!"
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}

// // --------------------Count Down Timer------------------------
// function countDown() {
//     currentTime--
//     timeLeft.textContent = currentTime

//     if (currentTime == 0){
//         clearInterval(countDownTimerId)
//         clearInterval(timerId)
//         statusDisplay.textContent = "Game Over"
//     }
// }
// let countDownTimerId = setInterval(countDown, 1000)
 