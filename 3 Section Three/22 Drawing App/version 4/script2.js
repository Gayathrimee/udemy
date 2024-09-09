const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const draw = document.getElementById('draw')
const increase = document.getElementById('increase')
const sizeSpan = document.getElementById('size')
const decrease = document.getElementById('decrease')
const colorInput = document.getElementById('color')
const clear = document.getElementById('clear')

let size = 10
let isPressed = false
let x
let y
let color = 'black'

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true

    x = e.offsetX
    y = e.offsetY

    draw.style.display = 'none'
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

increase.addEventListener('click',()=>{
    size += 2

    if(size > 50){
        size = 50
    }
    console.log(size)
    sizeSpan.innerHTML = size

})

decrease.addEventListener('click',()=>{
    size -= 2

    if(size < 2){
        size = 2
    }
    sizeSpan.innerHTML = size
    console.log(size)
})

colorInput.addEventListener('change', (e)=> color = e.target.value)
clear.addEventListener('click', ()=>{
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    draw.style.display = 'block'
})