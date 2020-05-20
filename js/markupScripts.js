randomUserURL = 'https://randomuser.me/api/'

fetch(randomUserURL)
    .then(data => data.json())
    .then(data => console.log(data.results[0].name.first))

//search container markup
const search = document.getElementsByClassName('search-container')[0]
const form = createElement('form')
const input1 = createElement('input', 'search', 'search-input', 'search-input')
const input2 = createElement('input', 'submit', 'search-submit', 'search-submit')
form.action = '#'
form.method = 'get'
input1.placeholder = 'Search...'
input2.value = '&#x1F50D'
form.appendChild(input1)
form.appendChild(input2)
search.appendChild(form)

//gallery markup
const gallery = document.getElementsByClassName('gallery')[0]
// const cardDiv = document.createElement('div')
// const cardImgDiv = document.createElement('div')
// const cardInfoDiv = document.createElement('div')
// const cardImg = document.createElement('img')
// const cardH3 = document.createElement('h3')
// const cardP1 = document.createElement('p')
// const cardP2 = document.createElement('p')
const cardDiv = createElement('div', false, false, 'card')
const cardImgDiv = createElement('div', false, false, 'card-img-container')
const cardInfoDiv = createElement('div', false, false, 'card-info-container')
const cardImg = createElement('img', false, false, 'card-img')
const cardH3 = createElement('h3', false, false, 'card-name cap', 'first last')
const cardP1 = createElement('p', false, false, 'card-text', 'email')
const cardP2 = createElement('p', false, false, 'card-text cap', 'city, state')

cardImg.src = 'https://placehold.it/90x90'
cardImg.alt = 'profile picture'

cardImgDiv.appendChild(cardImg)
cardInfoDiv.appendChild(cardH3)
cardInfoDiv.appendChild(cardP1)
cardInfoDiv.appendChild(cardP2)
cardDiv.appendChild(cardImgDiv)
cardDiv.appendChild(cardInfoDiv)
gallery.appendChild(cardDiv)

//modal markup
const body = gallery.parentElement
const modalContDiv = document.createElement('div')
const modalDiv = document.createElement('div')
const modalInfoDiv = document.createElement('div')
const modalBtnDiv = document.createElement('div')
const modalImg = document.createElement('img')
const modalH3 = document.createElement('h3')
const modalP1 = document.createElement('p')
const modalP2 = document.createElement('p')
const hr = document.createElement('hr')
const modalP3 = document.createElement('p')
const modalP4 = document.createElement('p')
const modalP5 = document.createElement('p')
const modalBtn1 = document.createElement('button')
const modalBtn2 = document.createElement('button')


//helper functions
function createElement(element, type, id, className, text){
    const ele = document.createElement(element)
    ele.type = type
    if(type){ele.id = id}
    if(className){ele.className = className}
    if(text){ele.innerHTML = text}
    return ele
}

