const canvas = document.getElementById('canvas')
const decreaseButton = document.getElementById('decrease')
const sizeElement = document.getElementById('size')
const increaseButton = document.getElementById('increase')
const colorButton = document.getElementById('color')
const clearButton = document.getElementById('clear')
const ctx = canvas.getContext('2d')

let size = 10
let color = 'black'
let x 
let y 
let Pressed = false

canvas.addEventListener('mousedown',(e)=>{
    Pressed = true

    x = e.offsetX
    y = e.offsetY
})

canvas.addEventListener('mouseup',(e)=>{
    Pressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove',(e)=>{
    if(Pressed){

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
    ctx.arc(x,y,size,0,Math.PI * 2)
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

decreaseButton.addEventListener('click',()=>{
    size -= 2

    if(size < 2){
        size = 2
    }

    sizeElement.innerHTML = size
})

increaseButton.addEventListener('click',()=>{
    size += 2

    if(size > 50){
        size = 50
    }

    sizeElement.innerHTML = size
})

colorButton.addEventListener('change', (e)=> color = e.target.value)
clearButton.addEventListener('click', ()=> ctx.clearRect(0,0,canvas.width,canvas.height))