const canvas = document.getElementById('canvas')
const decrease = document.getElementById('decrease')
const increase = document.getElementById('increase')
const sizeElement = document.getElementById('size')
const colorBtn = document.getElementById('color')
const clear = document.getElementById('clear')
const ctx = canvas.getContext('2d')

// let size = 10
// let color = 'black'
// let isPressed = false
// let x
// let y 

// canvas.addEventListener('mousedown',(e)=>{
//     isPressed = true

//     x = e.offsetX
//     y = e.offsetY
// })

// canvas.addEventListener('mouseup',()=>{
//     isPressed = false

//     x = undefined
//     y = undefined
// })

// canvas.addEventListener('mousemove',(e)=>{
    
//     if(isPressed){
//         const x2 = e.offsetX
//         const y2 = e.offsetY

//         drawCircle(x2,y2)
//         drawLine(x,y,x2,y2)

//         x = x2
//         y = y2
//     }
// })

// function drawCircle(x2,y2){
//     ctx.beginPath()
//     ctx.arc(x,y,size,0,Math.PI * 2)
//     ctx.fillColor = color
//     ctx.fill()
// }

// function drawLine(x,y,x2,y2){
//     ctx.beginPath()
//     ctx.moveTo(x,y)
//     ctx.lineTo(x2,y2)
//     ctx.line(x,y,size,0,Math.PI * 2)
//     ctx.fillColor = color
//     ctx.fill()
// }

// increase.addEventListener('click',()=>{
//     size += 2

//     if(size > 50){
//         size = 50
//     }

//     sizeElement.innerHTML = size
// })

// decrease.addEventListener('click', ()=>{
//     size -= 2

//     if(size < 2){
//         size = 2
//     }

//     sizeElement.innerHTML = size
// })

// =====================================================

let x 
let y 
let isPressed = false
let color = 'black'
let size = 10

canvas.addEventListener('mousedown', (e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup',(e)=>{
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

function drawCircle(x,y){
    ctx.beginPath()
    ctx.arc(x,y,size,0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()
    ctx.moveTo(x1,y1)
    ctx.lineTo(x2,y2)
    ctx.lineWidth = size * 2
    ctx.strokeStyle = color
    ctx.stroke()
}

increase.addEventListener('click',()=>{
    size += 2

    if(size > 50){
        size = 50
    }
    sizeElement.innerHTML = size
})

decrease.addEventListener('click',()=>{
    size -= 2

    if(size < 2){
        size = 2
    }
    sizeElement.innerHTML = size
})

colorBtn.addEventListener('change', (e) => color = e.target.value)
clear.addEventListener('click',(e) => ctx.clearRect(0,0, canvas.width, canvas.height))