
const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    card.addEventListener('click', ()=>{
        removeActive()
        card.classList.toggle('active')
    })

    // setTimeout(300, removeActive)
})

function removeActive(){
    cards.forEach(card => {
        card.addEventListener('click',()=>{
            card.classList.toggle('active')
        })
    })
}