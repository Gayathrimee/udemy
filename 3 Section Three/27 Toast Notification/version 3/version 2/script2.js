const notifis = document.querySelector('.notifications')
const button = document.getElementById('btn')

const theMessages = ['meow','bow bow','crow crow','mmeeeh', 'phiii phii']
const theTypes = ['happy','happier','happiest']

function btnData(){
    button.innerHTML = `Show Notification`
}

setInterval(btnData, 2000)

button.addEventListener('click',()=> getNotification())

function getNotification(message = null, type = null){

    const notify = document.createElement('div')
    notify.classList.add('notification')
    notify.innerHTML = message? message : getUniqueMessage()
    
    notify.classList.add(type? type: getUniqueType())

    notifis.append(notify)

    setInterval(()=>{
        notify.remove()
    }, 2000)
}

let finalMessage = null
let finalType = null

function getUniqueMessage(){

    let freshMessage

    do{
        freshMessage = theMessages[Math.floor(Math.random() * theMessages.length)]
    } while( freshMessage === finalMessage)
        finalMessage = freshMessage

    return freshMessage
}

function getUniqueType(){

    let freshType

    do{
        freshType = theTypes[Math.floor(Math.random() * theTypes.length)]

    } while(freshType === finalType)
        finalType = freshType

    return freshType
}