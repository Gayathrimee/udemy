const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')

let selectedRating = 'satisfied'

panel.addEventListener('click', (e) =>{
    if(e.target.classList.contains('rating')){
        console.log(e.target)

        removeActive()
        e.target.parentNode.classList.add('active')
    }
})

function removeActive(){
    for(let i = 0; i< ratings.length; i++){
        ratings[i].classList.remove('active')
    }
}