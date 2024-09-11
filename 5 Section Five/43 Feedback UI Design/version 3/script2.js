const rating = document.querySelectorAll('.rating')
const btn = document.getElementById('btn')
const panel = document.getElementById('panel')
const rateContainer = document.querySelector('.ratings-container')
const emojiImg = document.querySelectorAll('.rating img')

// emoji mapping for different ratings
const ratingEmojis = {
    'unhappy':'😞',
    'neutral':'😐',
    'Satisfied':'😍'
};

// console.log(ratingEmojis)          

let defaultRating = 'Satisfied';
       
rateContainer.addEventListener('click',(e)=>{
    
    if(e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling){
        removeActive()
        e.target.parentNode.classList.add('active')
        defaultRating = e.target.nextElementSibling.innerHTML

    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling && 
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive()
        e.target.parentNode.classList.add('active')
        defaultRating = e.target.innerHTML
    }
})

btn.addEventListener('click',(e) =>{
    
    const emoji = ratingEmojis[defaultRating] || '?';   //default emoji if not found

    panel.innerHTML = `
    <div class="thank">
    <i class="fas fa-heart"></i>
    <strong>Thank You!</strong>
    <br>
    </div>
    <strong>Feedback : ${defaultRating} ${emoji}</strong>
    <p>We'll use your feedback to improve our customer support</p>`
})


function removeActive(){
    for(let i = 0; i < rating.length; i++){
        rating[i].classList.remove('active')
    }
}