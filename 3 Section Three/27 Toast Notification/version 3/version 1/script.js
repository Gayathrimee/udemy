const notifications = document.querySelector('.notifications')
const btn = document.getElementById('btn')

const messages = ['hey',
    'how are you',
    'hope you are doing good',
    'here I\'m fine',
    'coming home soon',
    'eager to meet you'
]

setInterval(notBtn,2500)

function notBtn(){
    btn.innerHTML = `Show Notification`
}

const types = ['happy','happier','happiest']

btn.addEventListener('click',()=> notifyMe())

function notifyMe(divT = null, idM = null){
    
    const note = document.createElement('div')
    note.classList.add('notification')
    note.innerText = idM ? idM : randomMessage()
    note.classList.add(divT ? divT : randomType())

    notifications.append(note)

    setTimeout(()=>{
        note.remove()
    }, 2000)
}

function randomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function randomType(){
    return types[Math.floor(Math.random() * types.length)]
}