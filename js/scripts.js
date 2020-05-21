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
    if(event.target.parentElement.parentElement.className === 'card'){
        let index = parseInt(event.target.parentElement.parentElement.getAttribute('counter'))
        formatModalDiv(users[index])
    }
    if(event.target.parentElement.className === 'card'){
        const index = event.target.parentElement
    }
})