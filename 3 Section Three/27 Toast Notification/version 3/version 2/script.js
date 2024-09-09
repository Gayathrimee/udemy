const notifications = document.querySelector('.notifications')
const btn = document.getElementById('btn')

const messages = ['hey',
    'how are you',
    'hope you are doing good',
    'here I\'m fine',
    'coming home soon',
    'eager to meet you'
]
const types = ['happy','happier','happiest']

setInterval(notBtn,2500)

function notBtn(){
    btn.innerHTML = `Show Notification`
}

btn.addEventListener('click',()=> notifyMe())

function notifyMe(type = null, message = null){
    
    const note = document.createElement('div')
    note.classList.add('notification')
    note.innerText = message ? message : randomUniqueMessage()
    note.classList.add(type ? type : randomUniqueType())

    notifications.append(note)

    setTimeout(()=>{
        note.remove()
    }, 3000)
}


let lastMessage = null
let lastType = null

function randomUniqueMessage(){

    let newMessage 

    do{
        newMessage = messages[Math.floor(Math.random() * messages.length)]

        // a random message is selected from the messages array and assigned tp newMessage
        
    } while(newMessage === lastMessage)
        lastMessage = newMessage
    return newMessage

    // the while condition checks if the newly selected message(newMessage) is the same as the last used message(lastMessage)
    // if it is the same, the loop repeats, selecting a new message until a different one is found.
    // once a unique message is found, lastMessage is updated to this new message.
    // the fn returns the unique message(newMessage).
}


function randomUniqueType(){

    let newType 

    do{
        newType = types[Math.floor(Math.random() * types.length)]
    } while(newType === lastType)
        lastType = newType
    return newType
}


// ==================================================

// do... while loop is a control flow statement in programming that allows us to execute a block of code repeatedly as long as a specified condition remains true.
// while loop: checks the condition before executing the code block
// unlike while loop, 'do... while' loop checks the condition after executing the block. This gurantees that the code block will be executed at least once, regardless of the condition.

// ==================================================
// How it Works
// 1. Execution of code block: The code inside the 'do' block is executed first.
// 2. Condition Check: After executing the code block, the condition specified in the while statement is evaluated.
// 3. Repetition: if the condition evaluates to true, the code block is executed again. If it evaluates to false, the loop terminates, and execution continues with the code following the loop.

// eg: 

// let count = 0;

// do{
//     console.log(count)
//     count ++;
// } while(count < 5)