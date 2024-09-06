const remains = document.getElementById('remained')
const litrs = document.getElementById('liters')
const percent = document.getElementById('percentage')
const cupSmall = document.querySelectorAll('.cup-small')

bigCupUpdation()

cupSmall.forEach((cup,idx) =>{
    cup.addEventListener('click', ()=> highlightCups(idx))
})

function highlightCups(idx){
    if(cupSmall[idx].classList.contains('full') && 
        (cupSmall[idx].nextElementSibling === null || 
        !cupSmall[idx].nextElementSibling.classList.contains('full'))){

            idx--
        }


cupSmall.forEach((cup,idx2) =>{
    if(idx2 <= idx){
        cup.classList.add('full')
    } else{
        cup.classList.remove('full')
    }
})
 bigCupUpdation()
}

function bigCupUpdation(){
    const smallCupsFilled = document.querySelectorAll('.cup-small.full').length

    const totalSmallCups = cupSmall.length

    if(smallCupsFilled === 0){
        percent.style.visibility = 'hidden'
        percent.style.height = 0
        percent.innerText = '0%'
    } else{
        percent.style.visibility = 'visible'
        percent.style.height = `${smallCupsFilled / totalSmallCups * 300}px`
        percent.innerText = `${smallCupsFilled / totalSmallCups * 100}%`
    }

    if(smallCupsFilled === totalSmallCups){
        remains.style.visibility = 'hidden'
        remains.style.height = 0
        litrs.innerText = 0
    } else{
        remains.style.visibility = 'visible'
        litrs.innerText = `${2 - (250 * smallCupsFilled / 1000)}L`
    }

}