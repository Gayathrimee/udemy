const steps = document.querySelector('.steps')
const progress = document.querySelectorAll('.progress')
const prevBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const indicator = document.querySelector('.indicator')

let currentActive = 1

nextBtn.addEventListener('click',()=>{
    currentActive++

    if(currentActive > progress.length){
        currentActive = progress.length
    }
    console.log(123)

    update()
})

prevBtn.addEventListener('click',()=>{
    currentActive --

    if(currentActive < 1){
        currentActive = 1
    }

    update()
    console.log(123)
    
})

function update(){
    progress.forEach((progress,idx)=>{
        if(idx < currentActive){
            progress.classList.add('active')
        } else{
            progress.classList.remove('active')
        }
    })

    const activate = document.querySelectorAll('.active')
    indicator.style.width = (activate.length - 1) / (progress.length - 1 ) * 99 + '%'

    if(currentActive === 1){
        prevBtn.disabled = true
    }else if(currentActive === progress.length){
        nextBtn.disabled = true
    }else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}