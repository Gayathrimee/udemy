const theContainer = document.querySelector('.container')
const leftSlide = document.querySelector('.left')
const rightSlide = document.querySelector('.right')
const upButton = document.querySelector('.up')
const downButton = document.querySelector('.down')
const slideLength = leftSlide.querySelectorAll('div').length

let currentSlide = 0

upButton.addEventListener('click', ()=> changeSlide('up'))
downButton.addEventListener('click',()=> changeSlide('down'))

const changeSlide = (direction)=>{

    if(direction === 'up'){
        currentSlide ++

        if(currentSlide > slideLength - 1){
            currentSlide = 0
        }
    } else if( direction === 'down'){
        currentSlide --

        if(currentSlide < 0){
            currentSlide = slideLength - 1
        }
    }

    const totalHeight = theContainer.clientHeight

    leftSlide.style.transform = `translateY(-${currentSlide * totalHeight}px)`
    rightSlide.style.transform = `translateY(${currentSlide * totalHeight}px)`
}