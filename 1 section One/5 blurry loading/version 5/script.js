const image = document.getElementById('img')
const text = document.querySelector('.text')

let load = 0
let int = setInterval(blurry, 40)

function blurry(){
    load++

    if(load > 99){
        clearInterval(int)
    }

    text.innerHTML = `${load}%`
    text.style.opacity = scale(load, 0, 100, 1, 0)
    image.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max,) =>{
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}