const steps = document.querySelector('.steps')
const progress = document.querySelectorAll('.progress')
const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const indicator = document.querySelector('.indicator')

let currentActive = 0

nextBtn.addEventListener('click',()=>{
    currentActive++

    if(currentActive > steps.length){
        currentActive = steps.length
    }
    console.log(123)

    update()
})

function update(){
    progress.forEach((progress,idx)=>{
        if(idx < currentActive){
            progress.classList.add('active')
        } else{
            progress.classList.remove('active')
        }
    })
}