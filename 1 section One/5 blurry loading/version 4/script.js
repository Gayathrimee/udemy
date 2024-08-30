const bgImage = document.querySelector('.bg-image')
const text = document.querySelector('.text')

let load = 0
let int = setInterval(blurrying,40)

function blurrying(){
    load ++

    if(load > 99){
        clearInterval(load)
    }

    text.innerText = `${load}%`
    text.style.opacity = scale(load, 0, 100, 1, 0)
    bgImage.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max,) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}