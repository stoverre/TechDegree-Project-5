randomUserURL = 'https://randomuser.me/api/'

fetch(randomUserURL)
    .then(data => data.json())
    .then(data => console.log(data.results[0].name.first))

//search container markup
const search = document.getElementsByClassName('search-container')[0]
const form = document.createElement('form')
const input1 = document.createElement('input')
const input2 = document.createElement('input')
form.action = '#'
form.method = 'get'
input1.type = 'search'
input1.id = 'search-input'
input1.className = 'search-input'
input1.placeholder = 'Search...'
input2.type = 'submit'
input2.value = '&#x1F50D'
input2.id = 'search-submit'
input2.className = 'search-submit'
form.appendChild(input1)
form.appendChild(input2)
search.appendChild(form)

//gallery markup
const gallery = document.getElementsByClassName('gallery')[0]
const cardDiv = document.createElement('div')
const cardImgDiv = document.createElement('div')
const cardInfoDiv = document.createElement('div')
const cardImg = document.createElement('img')
const cardH3 = document.createElement('h3')
const cardP1 = document.createElement('p')
const cardP2 = document.createElement('p')
cardImgDiv.className = 'card'
cardImgDiv.className = 'card-img-container'
cardImg.className = 'card-img'
cardImg.src = 'https://placehold.it/90x90'
cardImg.alt = 'profile picture'
cardInfoDiv.className = 'card-info-container'
cardH3.id = 'name'
cardH3.className = 'card-name cap'
cardH3.innerHTML = 'first last'
cardP1.className = 'card-text'
cardP1.innerHTML = 'email'
cardP2.className = 'card-text cap'
cardP2.innerHTML = 'city, state'
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


