randomUserURL = 'https://randomuser.me/api/?results=12'

fetch(randomUserURL)
    .then(data => data.json())
    .then(data => {
        data.results.forEach(user => {
            const newDiv = newUserDiv(
                            user.picture,
                            user.name,
                            user.email,
                            user.location)
        })
    })

document.addEventListener('click', event => {
    // console.log(event.target)
    if(event.target.className === 'card' || 
        event.target.parentElement.className === 'card' ||
        event.target.parentElement.parentElement.className === 'card'
    ){
        console.log(event.target)
    }
})