const notifications = document.querySelector('.notifications')
const btn = document.getElementById('btn')

const messages = ['message 1', 'message 2','message 3', 'message 4','message 5']
const types = ['good','better','best']

btn.addEventListener('click', ()=> notifyMe())

function notifyMe(messages = null, types = null){

    const notify = document.createElement('div')
    notify.classList.add('notification')
    notify.innerText = messages? messages : randomMessage()
    
    notify.classList.add(types ? types : randomType())

    notifications.append(notify)

    setTimeout(()=>{
        notify.remove()
    }, 4000)
}

function randomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function randomType(){
    return types[Math.floor(Math.random * types.length)]
}