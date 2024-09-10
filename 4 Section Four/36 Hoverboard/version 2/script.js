const container = document.getElementById('container')
const colors = ['violet','indigo','blue','green','yellow','orange','red','#fff']

let count = 495

for(let i = 0; i < count; i++){
    const box = document.createElement('div')
    box.classList.add('box')
    box.value = ''
    
    container.append(box) 

    box.addEventListener('mouseover', ()=> addColor(box))
    box.addEventListener('mouseout', ()=> removesColor(box))
}

function addColor(e){
    e.style.backgroundColor = randomColor()
}

function removesColor(e){
    e.style.backgroundColor = '#232323'
}

// setInterval(addColor, 2000)

function randomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}