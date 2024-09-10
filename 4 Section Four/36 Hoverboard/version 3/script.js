const container = document.getElementById('container')
const colors = ['violet','indigo','blue','green','yellow','orange','red','#fff']

let count = 495

for(let i = 0; i<count; i++ ){

    const box = document.createElement('div')
    box.className = 'box'
    box.value = ''

    container.append(box)

    box.addEventListener('mouseover', ()=> randomColor(box))
    box.addEventListener('mouseout',()=> removeColor(box))
}

function randomColor(e){
    
    const color = getColor()
    e.style.background = color
    console.log(color)
}

function removeColor(e){
    e.style.background = '#232323';
}

function getColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}