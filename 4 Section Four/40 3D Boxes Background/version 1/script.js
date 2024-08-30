const boxesContainer = document.getElementById('boxes')
const btn = document.getElementById('btn')

btn.addEventListener('click',()=> boxesContainer.classList.toggle('big') )

function createBoxes(){
    for(let i = 0; i<4; i++){
        for(let j=0; j<4; j++){  //because we have rows and column, that's why we use anothrer variable other than i
            const box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j *125}px ${-i * 125}px`
            boxesContainer.append(box)

            console.log(box)
        }
    }
}

createBoxes()