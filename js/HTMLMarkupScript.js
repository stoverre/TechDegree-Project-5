/**
* @author Richard Stover
*/

//search container markup
const search = document.getElementsByClassName('search-container')[0]
let html = 
    `<form action="#" method="get">
        <input type="search" id="search-input" class="search-input" placeholder="Enter Name...">
        <input type="submit" value="Search;" id="search-submit" class="search-submit">
    </form>`
search.innerHTML = html

/** 
* Removes all user divs from the DOM to make way for a new list of users
* @param {} - none
* @return {} - none
*/
function removeUserDivs(){
    const gallery = document.getElementsByClassName('gallery')[0]
    gallery.innerHTML = ''
}

/** 
* Creates a new div for the passed in user and adds it to the DOM
* @param {object} user - a JSON object that represents a user
* @param {number} counter - an integer that represents the position of the user in the DOM
* @return {} - none
*/
function newUserDiv(user, counter){
    const gallery = document.getElementsByClassName('gallery')[0]
    
    html = 
    `<div class="card" counter=${counter}>
        <div class="card-img-container">
            <img class="card-img" src=${user.picture.large} alt="profile picture">
        </div>
        <div class="card-info-container">
            <h3 id="name" class="card-name cap">${user.name.first} ${user.name.last}</h3>
            <p class="card-text">${user.email}</p>
            <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
        </div>
    </div>`

    gallery.innerHTML += html
}

/** 
* Creates a new div for the clicked on user and overlays it on the DOM
* @param {object} user - a JSON object that represents a user
* @return {} - none
*/
function createModalDiv(user){
    const address = `${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state} ${user.location.postcode}`
    const dob = `${user.dob.date.substring(5,7)}/${user.dob.date.substring(8,10)}/${user.dob.date.substring(0,5)}`
    //indents match the intended HTML structure of these new divs
    const body = gallery.parentElement
    html = 
    `<div class="modal-container">
        <div class="modal">
            <button type="button" id="modal-close-btn" class="modal-close-btn">X</button>
            <div class="modal-info-container">
                <img class="modal-img" src=${user.picture.large} alt="profile picture">
                <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                <p class="modal-text">${user.email}</p>
                <p class="modal-text cap">${user.location.city}</p>
                <hr>
                <p class="modal-text">${user.cell}</p>
                <p class="modal-text">${address}</p>
                <p class="modal-text">Birthday: ${dob}</p>
            </div>
        </div>

        // IMPORTANT: Below is only for exceeds tasks 
        <div class="modal-btn-container">
            <button type="button" id="modal-prev" class="modal-prev btn">Prev</button>
            <button type="button" id="modal-next" class="modal-next btn">Next</button>
        </div>
    </div>`

    body.innerHTML += html
}