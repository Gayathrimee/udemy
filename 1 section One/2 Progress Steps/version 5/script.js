const circles = document.querySelectorAll('.circle')
const indicator = document.querySelector('.indicator')
const previousBtn = document.getElementById('previous')
const nextBtn = document.getElementById('next')

let activeCircle = 1
// let idx = 0

nextBtn.addEventListener('click',()=>{
    activeCircle ++

    if(activeCircle > circles.length){
        activeCircle = circles.length
    }

    changeCircle()
})

previousBtn.addEventListener('click',()=>{
    activeCircle --

    if(activeCircle < 1){
        activeCircle = 1
    }

    changeCircle()
})

function changeCircle(){
    circles.forEach((circle,idx) =>{
        if(idx < activeCircle){
            circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }

        const theActives = document.querySelectorAll('.active')
        indicator.style.width = (theActives.length - 1) / (circles.length - 1) * 95.5 + '%'

        if(activeCircle === circles.length){
            nextBtn.disabled = true
        } 
         else if(activeCircle === 1){
            previousBtn.disabled = true
        }
        else{
            previousBtn.disabled = false
            nextBtn.disabled = false
        }
    })
}