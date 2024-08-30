const steps = document.querySelector('.steps')
const progress = document.querySelector('.progress')
const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')
const indicator = document.querySelector('.indicator')

let activeClass = 0
let idx = 0

nextBtn.addEventListener('click',()=>{
        if(activeClass <= steps.length){
            activeClass++
        } else{
            activeClass = activeClass
        }
        
        btn.classList.add('active')
})