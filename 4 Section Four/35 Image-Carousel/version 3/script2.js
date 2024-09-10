const images = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')
const imgs = document.querySelectorAll('.image-container img')

let idx = 0
let interval = setInterval(move, 2000)

function move(){
    idx ++
    changeImg()
}

function changeImg(){
    if(idx < 0){
        idx = imgs.length - 1
    } else if(idx > imgs.length - 1){
        idx = 0
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}

leftBtn.addEventListener('click',()=>{
    idx --

    changeImg()
    stopInterval()
})

function stopInterval(){
    clearInterval(interval)
    interval = setInterval(move, 2000)
}

rightBtn.addEventListener('click',()=>{
    idx ++

    changeImg()
    stopInterval()
})