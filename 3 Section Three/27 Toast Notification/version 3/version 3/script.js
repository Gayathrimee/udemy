const btn = document.querySelector('.btn')
const notification = document.querySelector('.notify')

const messgaes = ['message one','message two','message three','message four']
const types = ['red','violet','green','blue']

setInterval(showText, 3000)

function showText(){
    btn.innerHTML = 'Show Notification'

    btn.classList.remove('animation') 

}

btn.addEventListener('click',()=> updateNotification())

function updateNotification(type = null, message = null){
    
    const not = document.createElement('div')
    not.classList.add('not')
    not.innerHTML = message? message :randomMessage()

    const notifyTypes = type? type : randomType()
    not.classList.add(notifyTypes)

    notification.append(not)

    setTimeout(() => not.remove(), 2000)

    // console.log(123)

    setBtnColor(notifyTypes)
}

let finalMessage = null
let finalType = null

function randomMessage(){

    let newMessage 

    do{
    newMessage = messgaes[Math.floor(Math.random() * messgaes.length)]
    
    } while( newMessage === finalMessage)
        finalMessage = newMessage
    return newMessage
}

function randomType(){
    let newType

    do{
        newType = types[Math.floor(Math.random() * types.length)]
        
    } while( newType === finalType)
        finalType = newType
    return newType
}

function setBtnColor(type){
    btn.style.color = type;
}