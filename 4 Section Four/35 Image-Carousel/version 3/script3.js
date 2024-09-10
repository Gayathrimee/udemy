const imgs = document.getElementById('imgs')
const theImages = document.querySelectorAll('.image-container img')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')

let idx = 0

let mainInterval = setInterval(newSlide, 2000)

function changeSlide(){
    if(idx < 0){
        idx = theImages.length - 1

    } else if(idx > theImages.length - 1){
        idx = 0
    }

    imgs.style.transform = `translate(${-idx * 500}px)` 
}

function newSlide(){
    idx ++
    changeSlide()
}

function changeInterval(){
    clearInterval(mainInterval)
    mainInterval = setInterval(newSlide, 2000)
}

leftButton.addEventListener('click',()=>{
    idx--
    changeSlide()
    changeInterval()
})

rightButton.addEventListener('click',()=>{
    idx ++
    changeSlide()
    changeInterval()
})