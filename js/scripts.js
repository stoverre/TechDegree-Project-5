/**
* @author Richard Stover
*/

randomUserURL = 'https://randomuser.me/api/?nat=au,gb,us,nz&results=12'

//make the returned array of users global and create an index to be added to each
//newly created div. When the div is clicked, the stored counter attribute can be
//used to quickly access the full user data in the array
let allUsers = []
let activeUsers = allUsers
let index;

fetch(randomUserURL)
    .then(data => data.json())
    .then(data => {
        allUsers = data.results
        //initialize active users array to all users. activeUsers will be udpated
        //later if a search is performed
        activeUsers = allUsers
        listUsers(allUsers)
    })

/**
* checks if the search input contains any invalid characters. 
* If input is valid then update the users
* @param {event} - passed in event object
* @return {} - none
*/
function validateInput(event){
    const input = event.target.value
    const regex = /\d/
    //if the the input is not valid and we need to display a 
    //message. Else check the input against the list
    if (regex.test(input)){
        removeUserDivs()
        const gallery = document.getElementsByClassName('gallery')[0]
    
        html = 
        `<div class="card">
            <div class="card-info-container">
                <h3 id="search-error" class="search-error">That is not a valid input</h3>
            </div>
        </div>`

        gallery.innerHTML += html
    }else {
        let searchList = allUsers
                            .filter(user => user.name.first.toLowerCase().includes(input.toLowerCase()) || 
                                        user.name.last.toLowerCase().includes(input.toLowerCase()))
                            .map(user => user)
        listUsers(searchList)
        activeUsers = searchList
        //if no search results, display a message
        if(activeUsers.length === 0){
            const gallery = document.getElementsByClassName('gallery')[0]
    
            html = 
            `<div class="card">
                <div class="card-info-container">
                    <h3 id="search-error" class="search-error">There are no users that match your search</h3>
                </div>
            </div>`
    
            gallery.innerHTML += html
        }
    }
}

/** 
* calls the html update functions to update the displayed list of users
* @param {array} list - list of users to display
* @return {} none
*/
function listUsers(list){
    //remove any current user divs from the DOM
    removeUserDivs()
    //call newUserDiv for each user in the passed in list
    for (let i=0; i<list.length; i++){
        newUserDiv(list[i], i)
    }
}

document.addEventListener('click', event => {
    //if the user clicks on any element encased in a cardDiv (including a cardDiv)
    //pull the counter attribute from the related cardDiv
    //use that numeral as the index on the users[] and pass that user to createModalDiv
    if(event.target.parentElement.parentElement.className === 'card'){
        event.target.parentElement.parentElement.style.borderColor = ''
        index = parseInt(event.target.parentElement.parentElement.getAttribute('counter'))
        createModalDiv(activeUsers[index])
    }
    if(event.target.parentElement.className === 'card'){
        event.target.parentElement.style.borderColor = ''
        index = parseInt(event.target.parentElement.getAttribute('counter'))
        createModalDiv(activeUsers[index])
    }
    if(event.target.className === 'card'){
        event.target.style.borderColor = ''
        index = parseInt(event.target.getAttribute('counter'))
        createModalDiv(activeUsers[index])
    }
    //delete the modal from the DOM if the close btn is clicked
    if(event.target.className === 'modal-close-btn' ){
        document.body.removeChild(document.body.lastElementChild)
    }
    //cycle through activeUsers
    if(event.target.className === 'modal-next btn' && index < activeUsers.length-1){
        document.body.removeChild(document.body.lastElementChild)
        index += 1
        createModalDiv(activeUsers[index])
    } 
    if(event.target.className === 'modal-prev btn' && index > 0){
        document.body.removeChild(document.body.lastElementChild)
        index -= 1
        createModalDiv(activeUsers[index])
    }
})

document.addEventListener('keyup', event => {
    validateInput(event)
})
// document.addEventListener('mouseover', (event) => console.log(event.target))
document.getElementById('gallery').addEventListener('mouseover', event => {
    console.log(event.target)
    if(event.target.parentElement.parentElement.className === 'card'){
        event.target.parentElement.parentElement.style.borderColor = 'red'
        event.target.parentElement.parentElement.style.borderStyle = 'double'
    }
    if(event.target.parentElement.className === 'card'){
        event.target.parentElement.style.borderColor = 'red'
        event.target.parentElement.style.borderStyle = 'double'
    }
    if(event.target.className === 'card'){
        event.target.style.borderColor = 'red'
        event.target.style.borderStyle = 'double'
    }
})

document.getElementById('gallery').addEventListener('mouseout', event => {
    if(event.target.className === 'card'){
        event.target.style.borderColor = ''
    }
})