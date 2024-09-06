const remained = document.getElementById('remained')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const smallCups = document.querySelectorAll('.cup-small')

smallCups.forEach((cup,idx) =>{
    cup.addEventListener('click', ()=> fillCup(idx))
})

function fillCup(idx){

    if(smallCups[idx].classList.contains('full') && 
        (smallCups[idx].nextElementSibling === null ||
        !smallCups[idx].nextElementSibling.classList.contains('full'))){

            idx--
        }

    smallCups.forEach((cup,idx2) =>{

        if(idx2 <= idx){
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })

    updateBigCup()

}

function updateBigCup(){

    const filledCups = document.querySelectorAll('.cup-small.full').length
    const totalCups = smallCups.length

    if(filledCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${filledCups / totalCups * 292}px`
        percentage.innerText = `${filledCups / totalCups * 100}%`
    }

    if(filledCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else{
        remained.style.visibility = 'visible'
        liters.innerText = `${ 2 - (250 * filledCups / 1000) }L`
    }
}