// own
// const background = document.querySelector('.bg')
// const loadingText = document.querySelector('.loading-text')

// let currentActive = 0

// background.addEventListener('refresh',()=>{
//     if(currentActive === 0){
//         currentActive ++
//     } else if(currentActive > 100){
//         currentActive === 100
//     }
// })
// .....................................

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let int = setInterval(blurring,30)   //every 30 seconds it works the fn blurring

function blurring(){
    load++
    if(load >99){
        clearInterval(int);
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load,0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)` 

    console.log(load)
}  

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max,) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}