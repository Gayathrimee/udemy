const lefts = document.querySelectorAll('.left div')
const rights = document.querySelectorAll('.right div')
const upBtn = document.querySelector('.up')
const downBtn = document.querySelector('.down')

let activeSlide = 0
let activeImage = 0

upBtn.addEventListener('click',()=>
     lefts.forEach(left =>{
        imageUpdation(left)
        slideUpdation(left)
     }))

function imageUpdation(left){
    activeImage ++

    if(activeImage > lefts.length){
        activeImage = 0
    } else if(activeImage < 0){
        activeImage = lefts.length
    }

    updateImage()
}

function updateImage(){
    lefts.forEach(left => left[activeImage])
}

function slideUpdation(){
    activeSlide ++

    if(activeSlide < 0){
        activeSlide = lefts.length
    } else if(activeSlide > lefts.length){
        activeSlide = 0
    }

    updateSlide()
}

function updateSlide(){
    lefts.forEach(left => left[activeImage])
}