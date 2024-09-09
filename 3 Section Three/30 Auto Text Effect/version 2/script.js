const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = 'We Love Programming!'

// let idx = 1
// let speed = 300 / speedEl.value 

// writeText()

// function writeText(){
//     textEl.innerText = text.slice(0,idx)

//     idx++

//     if(idx > text.length){
//         idx = 1
//     }

//     setTimeout(writeText,speed)
// }

// speedEl.addEventListener('input', (e) => speed = 300/ e.target.value)

// ===================================================

// let idx = 0
// let speed = 300/ speedEl.value 

// function innerText(){
//     textEl.innerText = text.slice(0,idx) 

//     idx++

//     if(idx > text.length){
//         idx = 0
//     }
//     setTimeout(innerText, speed)
// }
// innerText()

// speedEl.addEventListener('change', (e)=> speed = 300/ e.target.value )

// ======================================================

// let idx = 0
// let speed = 300 / speedEl.value 

// function theText(){

//     textEl.innerHTML = text.slice(0,idx)

//     idx++

//     if(idx > text.length){
//         idx = 0
//     }

//     setTimeout(theText, speed)
// }
// theText()

// speedEl.addEventListener('change', (e)=> speed = 300 / speedEl.value)

// ---------------------------------------------------

let idx = 0
let speed = 300 / speedEl.value 

function theText(){
    textEl.innerHTML = text.slice(0,idx)

    idx++

    if(idx > text.length){
        idx = 0
    }

    setTimeout(theText, speed)
}
theText()

speedEl.addEventListener('change', ()=> speed = 300 / speedEl.value)

