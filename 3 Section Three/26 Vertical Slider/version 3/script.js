// const container = document.querySelector('.container')
// const left = document.querySelector('.left')
// const right = document.querySelector('.right')
// const upArrow = document.querySelector('.up')
// const downArrow = document.querySelector('.down')
// const slidesLength = left.querySelectorAll('div').length

// let activeSlideIndex = 0

// right.style.top = `-${(slidesLength -1) * 100}vh`
// // right.style.top = `-300vh`

// upArrow.addEventListener('click', ()=> updateSlide('up'))
// downArrow.addEventListener('click',()=> updateSlide('down'))

// const updateSlide = (direction) =>{
//     const sliderHeight = container.clientHeight

//     if(direction === 'up'){
//         activeSlideIndex ++
//         if(activeSlideIndex > slidesLength -1){
//             activeSlideIndex = 0
//         } 
//     } else if(direction === 'down'){
//         activeSlideIndex --
//         if(activeSlideIndex < 0){
//             activeSlideIndex = slidesLength -1
//         }
//     }

//     right.style.transform = ` translateY(${activeSlideIndex * sliderHeight}px)`
//     left.style.transform = ` translateY(-${activeSlideIndex * sliderHeight}px)`
// }

const sliderContainer = document.querySelector('.container')
const rightSlider = document.querySelector('.right')
const leftSlider = document.querySelector('.left')
const upBtn = document.querySelector('.up')
const downBtn = document.querySelector('.down')
const sliderLength = leftSlider.querySelectorAll('div').length

// let activeSlide = 0

// // rightSlider.style.top = `-${(sliderLength - 1) * 100}vh`
// // rightSlider.style.top = `-300vh`

// upBtn.addEventListener('click', ()=> slideChanger('up'))
// downBtn.addEventListener('click', ()=> slideChanger('down'))

// const slideChanger = (direction) =>{
//     const containerHeight = sliderContainer.clientHeight

//     if(direction === 'up'){
//         activeSlide ++
//         if(activeSlide > sliderLength - 1 ){
//             activeSlide = 0
//         }
//     } else if(direction === 'down'){
//         activeSlide --
//         if(activeSlide < 0){
//             activeSlide = sliderLength - 1
//         }
//     } 

//     rightSlider.style.transform = ` translateY(${activeSlide * containerHeight}px)`
//     leftSlider.style.transform = ` translateY(-${activeSlide * containerHeight}px)`
// }

let activeSlide = 0

upBtn.addEventListener('click',()=> changeSlider('up'))
downBtn.addEventListener('click',()=> changeSlider('down'))

const changeSlider = (arrow) =>{
    const heightOfContainer = sliderContainer.clientHeight

    if(arrow === 'up'){
        activeSlide ++

        if(activeSlide > sliderLength - 1){
            activeSlide = 0
        }
    } else if(arrow === 'down'){
        activeSlide --

        if(activeSlide < 0){
            activeSlide = sliderLength - 1
        }
    }

    rightSlider.style.transform = ` translateY(${activeSlide * heightOfContainer}px)`
    leftSlider.style.transform = ` translateY(-${activeSlide * heightOfContainer}px)`
}    