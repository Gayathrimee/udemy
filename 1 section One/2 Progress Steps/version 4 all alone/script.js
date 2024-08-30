const steps = document.querySelector('.steps')
const progress = document.querySelectorAll('.progress')
const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const indicator = document.querySelector('.indicator')

let currentActive = 1

nextBtn.addEventListener('click',()=>{
    currentActive ++

    if(currentActive > progress.length){
        currentActive = progress.length
    }

    update()
})

previousBtn.addEventListener('click', ()=>{
    currentActive --

    if(currentActive === 1){
        currentActive = 1
    }

    console.log(123)
    update()
})

function update(){
    progress.forEach((progress,idx) =>{
        if(idx < currentActive){
            progress.classList.add('active')
        } else{
            progress.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    indicator.style.width = (actives.length - 1) / (progress.length - 1) * 99 + '%'

    if(currentActive <= 1){
        previousBtn.disabled = true
    } else if(currentActive === progress.length){
        nextBtn.disabled = true
    } else{
        previousBtn.disabled = false
        nextBtn.disabled = false
    }
}