const body = document.body
const slides = document.querySelectorAll('.slide')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

let activeSlide = 0

rightButton.addEventListener('click',()=>{
    activeSlide++

    if(activeSlide > slides.length -1){
        activeSlide = 0
    }

    setBackground()
    setFrontImage()
})

leftButton.addEventListener('click',()=>{
    activeSlide--

    if(activeSlide < 0){
        activeSlide = slides.length - 1
    }

    setBackground()
    setFrontImage()

}) 

setBackground()

function setBackground(){
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
}

function setFrontImage(){
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}

// ........................

const inBody = document.body
const sliders = document.querySelectorAll('.slide')
const lBtn = document.getElementById('left')
const rBtn = document.getElementById('right')

let currentSlide

rBtn.addEventListener('click',()=>{
     currentSlide++

     if(currentSlide > sliders.length){
        currentSlide = 0
     }

     setBg()

     setFg()
})

lBtn.addEventListener('click',()=>{
    currentSlide--

    if(currentSlide < 0){
       currentSlide = sliders.length
    }

    setBg()
    setFg()
})

setBg()

function setBg(){
    inBody.style.background = sliders[currentSlide].style.background
} 

function setFg(){
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}