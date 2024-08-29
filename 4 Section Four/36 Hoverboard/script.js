const container = document.getElementById('container')
const colors = ['violet','indigo','blue','green','yellow','orange','red']

const SQUARES = 690;

for(let i = 0 ; i < SQUARES; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover',()=> setColor(square))
    square.addEventListener('mouseout',()=> removeColor(square))

    container.append(square)
}

// function setColor(){
//     if(container.hover){
//         container.add(colors)
//     }
// }

function setColor(element){
    // console.log(element)
    const color = getRandomColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    console.log(color)
}

function removeColor(element){
    // console.log(1234)
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}