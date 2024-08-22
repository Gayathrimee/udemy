const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four'
]

button.addEventListener('click', ()=>createNotification())

function createNotification(){
    const notify = document.createElement('div')
    notify.classList.add('toast')

    notify.innerText = getRandomMessage()

    toasts.appendChild(notify)
}

function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}