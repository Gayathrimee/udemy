// own
// const smallCup = document.querySelectorAll('.cup-small')
// const percentage = document.getElementById('percentage')

// smallCup.forEach(cup =>{
//     cup.addEventListener('click',()=>{
//         percentage.style.height = 100%  //not working
//         cup.classList.toggle('full')
//     })
// })
// .................................................

const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx)=>{
    // console.log(cup,idx)
    cup.addEventListener('click', ()=> highlighCups(idx))
})

function highlighCups(idx){
    // console.log(idx)
// step2:   to keep the filled ones full even the last one is then unfilled
if(smallCups[idx].classList.contains('full') &&
 (smallCups[idx].nextElementSibling === null || 
    !smallCups[idx].nextElementSibling.classList.contains('full'))){
    idx--
}
// This checks if the current 'smallCups' element (smallCups[idx]) has the class 'full'.
// It also checks if the next sibling of this element does not have the class 'full'.


//step1:   if clicked 1st cup then 4th cup, to fill the whole cup bw them:
    smallCups.forEach((cup,idx2) =>{
        if(idx2 <= idx){    //idx is implies the 1st and last cup we click. idx2 implies the cups between them
            cup.classList.add('full')
            console.log(idx,idx2)   
        } else{
            cup.classList.remove('full')
        }
    })

    updateBigCup()
}

function updateBigCup(){
    const fullCups = document.querySelectorAll
    ('.cup-small.full').length

    const totalCups = smallCups.length

    if(fullCups === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.style.height = `${fullCups / totalCups * 330}px`
        percentage.innerText = `${fullCups / totalCups * 100}%`
    }

    if(fullCups === totalCups){
        remained.style.visibility = 'hidden'
        remained.style.height = 0
    } else {
        remained.style.visibility = 'visible'
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }
}