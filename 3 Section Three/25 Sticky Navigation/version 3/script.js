const nav = document.querySelector('.nav')
const containerOne = document.querySelector('.container')
const containerTwo = document.querySelector('.two')

containerTwo.style.display = 'none'

window.addEventListener('scroll',()=>{
    if(window.scrollY > nav.offsetHeight + 50){
        nav.classList.add('active')
        containerOne.style.display = 'none'
        containerTwo.style.display = 'flex'
    } 
    else{
        nav.classList.remove('active')
        containerTwo.style.display = 'none'
        containerOne.style.display = 'flex'
    }
})