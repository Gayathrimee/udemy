const slides = document.querySelectorAll('.slide')
const leftArrow = document.getElementById('left')
const rightArrow = document.getElementById('right')
const body = document.body

let activeSlide = 0
     
    leftArrow.addEventListener('click', ()=>{
        activeSlide --

        if(activeSlide < 0){
            activeSlide = slides.length
        } 

        setBackground()
        setInFront()
    })

    rightArrow.addEventListener('click', ()=>{
        activeSlide ++

        if(activeSlide > slides.length){
            activeSlide = 0
        }

        setBackground()
        setInFront()
    })

setBackground()

function setBackground(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setInFront(){
    slides.forEach(slide => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}