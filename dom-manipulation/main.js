document.querySelector('h3').innerHTML = "Hello from  JavaScript"

let pElement = document.createElement('p')
pElement.innerHTML = 'I am a paragraph!'

//append adds last
document.querySelector('body').append(pElement)

let imageElement = document.createElement('img')
imageElement.src = 'https://images.unsplash.com/photo-1468070454955-c5b6932bd08d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
imageElement.className = 'img-to-prepend'

//adds first
document.querySelector('body').prepend(imageElement)