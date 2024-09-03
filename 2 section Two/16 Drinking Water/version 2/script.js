// own

const smallCup = document.querySelectorAll('.cup-small')
const percentage = document.getElementById('percentage')

smallCup.forEach(cup =>{
    cup.addEventListener('click',()=>{
        percentage.style.height = 100%  //not working
        cup.classList.toggle('full')
    })
})