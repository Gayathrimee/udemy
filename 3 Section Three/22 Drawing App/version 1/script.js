const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const sizeEl= document.getElementById('size')
const colorEl= document.getElementById('color')
const clearEl= document.getElementById('clear')


let size = 10
let isPressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) =>{
    isPressed = true
    
    x = e.offsetX
    y = e.offsetY

    // console.log(isPressed, x, y)
})

canvas.addEventListener('mouseup', (e) =>{
    isPressed = false
    
    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e) =>{
    if(isPressed){
      const  x2 = e.offsetX
       const y2 = e.offsetY

       drawCircle(x2,y2)
       drawLine(x,y,x2,y2)

    //if ispressed is true, it draws a circle and line from the last coordinates to the 
    // current coordinates. 

       x = x2
       y = y2

    // It then updates the last coordinates to the current ones.


    }
 

    console.log(isPressed, x, y)
})

function drawCircle(x,y){
    ctx.beginPath()   // Begin a new path 
    ctx.arc(x,y,size,0,Math.PI * 2)   // Create an arc(circle)
    ctx.fillStyle = color   // Set the fill color
    ctx.fill()      // Fill the circle with the color

    // draws a filled circle at (x,y) with a radius of 'size' and fills it with the current clr.
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath()             // Begin a new path
    ctx.moveTo(x1,y1)           // Move the pen to the starting point
    ctx.lineTo(x2,y2)           // Draw a line to the end point
    ctx.strokeStyle = color     // Set the stroke color
    ctx.lineWidth = size * 2    //Set the line width
    ctx.stroke()                // Apply the stroke

    // draws a line from (x1,y1) to (x2,y2) with the current color and a line width of size * 2
}

function updateSizeOnScreen(){
    sizeEl.innerText = size

    // update tge size display element (sizeEl) with the current brush size.
}

increaseBtn.addEventListener('click', ()=>{
    size += 2

    if(size > 50){
        size = 50
    }
    updateSizeOnScreen()

})

decreaseBtn.addEventListener('click', ()=>{
    size -= 2

    if(size < 2){
        size = 2
    }
    updateSizeOnScreen()

})

colorEl.addEventListener('change',(e) => color = e.target.value)

clearEl.addEventListener('click',() => ctx.clearRect(0,0, canvas.width, canvas.height) )

// drawCircle(100,200)
// drawLine(300,300,200,500)

// .........................................................................

// ctx.beginPath() :- this method resets the current path. it's necessary to call this before starting a new shape so that the previous shapes don't interfere with the current one.
// ctx.arc(x,y,size,0,Math.PI * 2) :-
//  ctx.arc() creates an arc/curve. In this case, it's used to draw a full circle.
// x: x-coordinate of the circle's center.
// y: y-coordinate of the circle's center.
// size : The radius of the circle
// 0 : The starting angle(0 radians, or 0 degrees)
// Math.Pi * 2: The ending angle(2pi radians, which is a full circle)

// ctx.fillStyle = color :- Sets the fill color for the shape. The color is defined by the color variable, which is updated by the color input element.
// ctx.fill() :- Fills the current path with the color defined by ctx.fillStyle. In this case, it fills the circle with the chosen color.

// ctx.moveTo(x1,y1) :- moves the drawing cursor to the coordinates (x1,y1) without drawing anything. This sets the starting point of the line.
// ctx.lineTo(x2,y2) :- draws a line from the current position (set by 'moveTo') to the coordinates (x2,y2). This creates the actual line segment.
// ctx.stroke() :- Applies the stroke to the current path. It renders the line on the canvas with the color and width specified.