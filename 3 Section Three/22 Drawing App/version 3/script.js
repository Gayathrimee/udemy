const canvas = document.getElementById('canvas')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const sizeBtn = document.getElementById('size')
const colorBtn = document.getElementById('color')
const clear = document.getElementById('clear')
const ctx = canvas.getContext('2d')

// let size = 10
// let isClicked = false
// let color = 'black'
// let x
// let y

// canvas.addEventListener('keydown', (e) =>{
//     isClicked = true

//     x = e.offsetX
//     y = e.offsetY
// })

// canvas.addEventListener('keyup', (e) =>{
//     isClicked = false

//     x2 = e.offsetX
//     y2 = e.offsetY

//     x = x2
//     y = y2
// })

// canvas.addEventListener('keypress', (e) =>{
//     if(isPressed){

//         createCircle()
//     }
// })

// function createCircle(){}

// increase.addEventListener('click', ()=>{
//     size++

//     if(size > 50){
//         size = 50
//     }
// })

// decrease.addEventListener('click', () =>{
//     size --

//     if(size < 2){
//         size = 2
//     }
// })     


// .....................................................

// let isClicked = false
// let color = 'black'
// let x
// let y

// canvas.addEventListener('mousedown',(e) =>{
//     isClicked = true

//     x = e.offsetX
//     y = e.offsetY

//     // console.log(x,y, isClicked)
// })

// canvas.addEventListener('mouseup', (e)=>{

//     isClicked = false

//     x = undefined
//     y = undefined

//     console.log(x,y)
// })

// canvas.addEventListener('mousemove', (e)=>{
//     if(isClicked){

//          x2 = e.offsetX
//          y2 = e.offsetY

//         drawCircle()
//         drawLine()

//         x = x2
//         y = y2

//         console.log(x,y)
//     }
// })

// function drawCircle(){

// }

// function drawLine(){

// }

// .....................................................

let isPressed = false
let size = 0
let color = 'Black'
let x
let y

canvas.addEventListener('mousedown', (e)=>{
    
    isPressed = true

    x = e.offsetX
    y = e.offsetY
    
})

canvas.addEventListener('mouseup',(e) =>{
    isPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
       const x2 = e.offsetX
       const y2 = e.offsetY

       drawCircle(x2,y2)
       drawLine(x,y,x2,y2)

       x = x2
       y = y2
    }
})

function drawCircle(x2,y2){
    ctx.beginPath()
    ctx.arc(size,0,Math.pi * 2)
    ctx.color.style = e.target.color
}