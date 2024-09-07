const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const p = document.getElementById('draw')
const increaseBtn = document.getElementById('increase')
const sizeInput = document.getElementById('size')
const decreaseBtn = document.getElementById('decrease')
const colorInput = document.getElementById('color')
const clearCanvas = document.getElementById('clear')

// p.style.visibility = 'hidden'

let isPressed = false
let x
let y
let size = 10
let color = 'black'

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true
    
    x = e.offsetX
    y = e.offsetY
        
    p.style.visibility = 'hidden'

})

// canvas.addEventListener('click', ()=> p.style.visibility = 'hidden')

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false

    x = undefined
    y = undefined

    console.log(x,y)
})

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){

        // p.style.visibility = 'hidden'


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

increaseBtn.addEventListener('click', ()=> {
    size += 2

    if(size > 50){
        size = 50
    }

    sizeInput.innerHTML = size
})

decreaseBtn.addEventListener('click',()=>{
    size -= 2

    if(size < 2){
        size = 2
    }

    sizeInput.innerHTML = size
})

colorInput.addEventListener('change', (e) => color = e.target.value)
clearCanvas.addEventListener('click', ()=> {
    ctx.clearRect(0,0,canvas.clientWidth, canvas.clientHeight)
    // clientWidth is the inner content area of the element plus paddings, 
    // while css width (with standard-box-sizing) is the inner content area without padding

    p.style.visibility = 'visible'
})