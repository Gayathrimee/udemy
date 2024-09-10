const images = document.getElementById('imgs')
const left = document.getElementById('left')
const right = document.getElementById('right')

const img = document.querySelectorAll('.image-container img')
console.log(img)

let idx = 0;

let interval = setInterval(run, 2000)

function imageChange(){
    if(idx > img.length - 1){
        idx = 0
    } else if(idx < 0){
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}

function run(){
    idx++
    imageChange()

}

function theInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

right.addEventListener('click',()=>{
    idx++ 
    
    imageChange()
    theInterval()
})

left.addEventListener('click',()=>{
    idx--

    imageChange()
    theInterval()
})