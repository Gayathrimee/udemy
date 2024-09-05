const slide = document.querySelectorAll('.slide')
const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')
const body = document.body

let presentSlide = 0

rightArrow.addEventListener('click', ()=>{
    presentSlide ++

    if(slide.length -1 < presentSlide){
        presentSlide = 0
    } 
    console.log(123)
    backGroundChanges()
    frontImageChange()
})

leftArrow.addEventListener('click', ()=>{
    presentSlide --

    if(presentSlide < 0){
        presentSlide = slide.length - 1
    } 
    console.log(123)
    backGroundChanges()
    frontImageChange()
})

backGroundChanges()

function backGroundChanges(){
    // slide.classList.add('active')

    body.style.backgroundImage = slide[presentSlide].style.backgroundImage
}

function frontImageChange(){
    slide.forEach(item => item.classList.remove('active'))

    slide[presentSlide].classList.add('active')
}