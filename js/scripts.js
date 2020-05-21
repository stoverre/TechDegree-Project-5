randomUserURL = 'https://randomuser.me/api/?results=12'

//make the returned array of users global and create an index to be added to each
//newly created div. When the div is clicked, the stored counter attribute can be
//used to quickly access the full user data in the array
let users = []
let counter = 0

fetch(randomUserURL)
    .then(data => data.json())
    .then(data => {
        users = data.results
        users.forEach(user => {
            const newDiv = newUserDiv(
                            user.picture,
                            user.name,
                            user.email,
                            user.location,
                            counter)
            counter += 1
        })
    })

document.addEventListener('click', event => {
    
    //if the user clicks on any element encased in a cardDiv (including a cardDiv)
    //pull the counter attribute from the related cardDiv
    //use that numeral as the index on the users[] and pass that user to createModalDiv
    if(event.target.parentElement.parentElement.className === 'card'){
        let index = parseInt(event.target.parentElement.parentElement.getAttribute('counter'))
        createModalDiv(users[index])
    }
    if(event.target.parentElement.className === 'card'){
        let index = parseInt(event.target.parentElement.getAttribute('counter'))
        createModalDiv(users[index])
    }
    if(event.target.className === 'card'){
        let index = parseInt(event.target.getAttribute('counter'))
        createModalDiv(users[index])
    }
    //delete the modal from the DOM if the close btn or encased element are clicked
    if(event.target.className === 'modal-close-btn' ||
        event.target.parentElement.className === 'modal-close-btn'){
        document.body.removeChild(document.body.lastElementChild)
    }
})