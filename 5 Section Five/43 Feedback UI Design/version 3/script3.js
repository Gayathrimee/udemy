const rating = document.querySelectorAll('.rating')
const btn = document.getElementById('btn')
const panel = document.getElementById('panel')
const rateContainer = document.querySelector('.ratings-container')
const emojiImg = document.querySelectorAll('.rating img')

const ratingEmojis = {
    'unhappy':'😞',
    'neutral':'😐',
    'Satisfied':'😍'
};

let defautlRating = 'satisfied'

rateContainer.addEventListener('click', (e) =>{
    if(
        e.target.parentNode.classList.contains('rating') &&
         e.target.nextElementSibling
        ){
        removeActive()
        e.target.parentNode.classList.add('active')
        defautlRating = e.target.nextElementSibling.innerHTML
    
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling && 
        e.target.previousElementSibling.nodeName === 'IMG'
    ){
        removeActive()
        e.target.parentNode.classList.add('active')
        defautlRating = e.target.innerHTML
    }
})

btn.addEventListener('click', () =>{
    const emoji = ratingEmojis[defautlRating] || '?'

    panel.innerHTML = ``
})

function removeActive(){
    for(let i = 0; i < rating.length; i++){
        rating[i].classList.remove('active')
    }
}