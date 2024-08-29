const container = document.getElementById('container')
const colors = ['violet','indigo','blue','green','yellow','orange','red']
const eraser = document.querySelector('.eraser')

const SQUARES = 750;

let eraserMode = false;

for(let i = 0 ; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('click',()=> setColor(square))
    square.addEventListener('mouseout',()=> removeColor(square))

    container.append(square)
}

// function setColor(){
//     if(container.hover){
//         container.add(colors)
//     }
// }

eraser.addEventListener('click',()=>{
    eraserMode = !eraserMode;
    eraser.classList.toggle('active',eraserMode)
})

function handleClick(element){
    if(eraserMode){
        removeColor(element);
    } else{
        setColor(element)
    }
}

function handleMouseOver(element){
    if(eraserMode){
        removeColor(element)
    }
}

function setColor(element){
    // console.log(element)
    const color = getRandomColor()
    element.style.background = 'red'
    element.style.boxShadow = '0 0 2px yellow, 0 0 10px yellow'
    console.log(color)
}

function removeColor(element){
    // console.log(1234)
    // element.style.background = '#1d1d1d'
    // element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}