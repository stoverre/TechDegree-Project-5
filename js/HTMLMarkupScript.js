/**
* @author Richard Stover
*/

//search container markup
const search = document.getElementsByClassName('search-container')[0]
const form = createElement('form')
const input1 = createElement('input', 'search', 'search-input', 'search-input')
const input2 = createElement('input', 'submit', 'search-submit', 'search-submit')
form.action = '#'
form.method = 'get'
input1.placeholder = 'Enter Name...'
input2.value = 'Search'
form.appendChild(input1)
form.appendChild(input2)
search.appendChild(form)

//modal markup

/** 
* creates and returns a new element based on the passed in attributes
* @param {string} element - the element to be created (ex: div, input, button, etc) (required)
* @param {string} type - type attribute (optional)
* @param {string} id - type attribute (optional
* @param {string} className - className attribute (optional)
* @param {string} text - innerHTML attribute (optional)
* @return {element} - the new HTML element
*/
function createElement(element, type, id, className, text){
    const ele = document.createElement(element)
    if(type){ele.type = type}
    if(id){ele.id = id}
    if(className){ele.className = className}
    if(text){ele.innerHTML = text}
    return ele
}

//removes all user divs from the DOM to make way for a new list of users
function removeUserDivs(){
    let list = document.getElementsByClassName('card')
    const length = list.length
    let galleryDiv = document.getElementById('gallery')
    for(let i=0; i<length; i++){
        galleryDiv.removeChild(galleryDiv.lastChild)
    }
}

// function newUserDiv(pic, name, email, location, counter){
function newUserDiv(user, counter){
    const gallery = document.getElementsByClassName('gallery')[0]
    const cardDiv = createElement('div', false, false, 'card')
    cardDiv.setAttribute("counter", counter)
    const cardImgDiv = createElement('div', false, false, 'card-img-container')
    const cardInfoDiv = createElement('div', false, false, 'card-info-container')
    const cardImg = createElement('img', false, false, 'card-img')
    const cardH3 = createElement('h3', false, false, 'card-name cap', `${user.name.first} ${user.name.last}`)
    const cardP1 = createElement('p', false, false, 'card-text', user.email)
    const cardP2 = createElement('p', false, false, 'card-text cap', `${user.location.city} ${user.location.state}`)

    cardImg.src = user.picture.large
    cardImg.alt = 'profile picture'

    cardImgDiv.appendChild(cardImg)
    cardInfoDiv.appendChild(cardH3)
    cardInfoDiv.appendChild(cardP1)
    cardInfoDiv.appendChild(cardP2)
    cardDiv.appendChild(cardImgDiv)
    cardDiv.appendChild(cardInfoDiv)
    gallery.appendChild(cardDiv)
}

function createModalDiv(user){
    const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}`
    //indents match the intended HTML structure of these new divs
    const body = gallery.parentElement
    const modalContDiv = createElement('div', false, false, 'modal-container')
        const modalDiv = createElement('div', false, false, 'modal')
            const modalInfoDiv = createElement('div', false, false, 'modal-info-container')
        const modalBtnDiv = createElement('div', false, false, 'modal-btn-container')

    const modalImg = createElement('img', false, false, 'modal-img')
    modalImg.src = user.picture.large
    modalImg.alt = 'profile picture'
    const modalH3 = createElement('h3', false, 'name', 'modal-name cap', `${user.name.first} ${user.name.last}`)
    const modalP1 = createElement('p', false, false, 'modal-text', user.email)
    const modalP2 = createElement('p', false, false, 'modal-text cap', user.location.city)
    const hr = createElement('hr')
    const modalP3 = createElement('p', false, false, 'modal-text', user.cell)
    const modalP4 = createElement('p', false, false, 'modal-text', address)
    const modalP5 = createElement('p', false, false, 'modal-text', `Birthday: ${user.dob.date.substring(0,10)}`)
    const modalBtn = createElement('button', 'button', 'modal-close-btn', 
                                'modal-close-btn', 'X')
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
}