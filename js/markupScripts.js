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
//indents match the intended HTML structure of these new divs
const body = gallery.parentElement
    const modalContDiv = createElement('div', false, false, 'modal-container')
        const modalDiv = createElement('div', false, false, 'modal')
            const modalInfoDiv = createElement('div', false, false, 'modal-info-container')
        const modalBtnDiv = createElement('div', false, false, 'modal-btn-container')

const modalImg = createElement('img', false, false, 'modal-img')
modalImg.src = 'https://placehold.it/125x125'
modalImg.alt = 'profile picture'
const modalH3 = createElement('h3', false, 'name', 'modal-name cap', 'name')
const modalP1 = createElement('p', false, false, 'modal-text', 'email')
const modalP2 = createElement('p', false, false, 'modal-text cap', 'city')
const hr = createElement('hr')
const modalP3 = createElement('p', false, false, 'modal-text', '(555) 555-5555')
const modalP4 = createElement('p', false, false, 'modal-text', '123 Portland Ave., Prtland, OR 97204')
const modalP5 = createElement('p', false, false, 'modal-text', 'Birthday: 10/21/2015')
const modalBtn = createElement('button', 'button', 'modal-close-btn', 
                                'modal-close-btn', '<strong>X</strong>')
const modalContBtn1 = createElement('button', 'button', 'modal-prev', 'modal-prev btn', 'Prev')
const modalContBtn2 = createElement('button', 'button', 'modal-next', 'modal-next btn', 'Next')

modalInfoDiv.appendChild(modalImg)
modalInfoDiv.appendChild(modalH3)
modalInfoDiv.appendChild(modalP1)
modalInfoDiv.appendChild(modalP2)
modalInfoDiv.appendChild(hr)
modalInfoDiv.appendChild(modalP3)
modalInfoDiv.appendChild(modalP4)
modalInfoDiv.appendChild(modalP5)
modalDiv.appendChild(modalBtn)
modalDiv.appendChild(modalInfoDiv)
modalContDiv.appendChild(modalDiv)

modalBtnDiv.appendChild(modalContBtn1)
modalBtnDiv.appendChild(modalContBtn2)
modalContDiv.appendChild(modalBtnDiv)

body.appendChild(modalContDiv)

//helper function
function createElement(element, type, id, className, text){
    const ele = document.createElement(element)
    ele.type = type
    if(id){ele.id = id}
    if(className){ele.className = className}
    if(text){ele.innerHTML = text}
    return ele
}