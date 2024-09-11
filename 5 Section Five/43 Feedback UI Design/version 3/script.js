const rating = document.querySelectorAll('.rating')
const btn = document.getElementById('btn')
const panel = document.getElementById('panel')
const rateContainer = document.querySelector('.ratings-container')
const img = document.querySelectorAll('.rating img')

let defaultRating = 'satisfied'

rateContainer.addEventListener('click',(e) =>{
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling){
        // console.log(e.target)

        removeActive()
        e.target.parentNode.classList.add('active')
        defaultRating = e.target.nextElementSibling.innerHTML
        console.log(defaultRating)                
    
    }   else if(
        e.target.parentNode.classList.contains('rating') && 
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ){
        removeActive()
        e.target.parentNode.classList.add('active')
        defaultRating = e.target.innerHTML
        // console.log(defaultRating)
    }
})

btn.addEventListener('click',(e)=>{
    panel.innerHTML = `
    <div class="thank">
    <i class = "fas fa-heart"></i>
    <strong> Thank You!</strong></div>
    <br>
    <strong> Feedback : ${defaultRating} ${defaultRating.img}</strong>
    <p>We'll use your feedback to improve our customer support</p>`
})

function removeActive(){
    for (let i = 0; i < rating.length; i++){
        rating[i].classList.remove('active')
    }
}                             