const inputs = document.querySelectorAll('input')
const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')

// inputs.forEach(input => input.addEventListener('change',
//      (e)=> changeSlide(e.target)))

// function changeSlide(clickedOne){
//     if(good.checked && cheap.checked && fast.checked){

//         if(good === clickedOne){
//             fast.checked = false
//         } 
//         if(fast === clickedOne){
//             cheap.checked = false
//         }
//         if(cheap === clickedOne){
//             good.checked = false
//         }
//     }
// }

inputs.forEach(input => input.addEventListener('click', (y)=> changeSlide(y.target)))

function changeSlide(x){
    if(good.checked && cheap.checked && fast.checked){

        if(good === x){
            cheap.checked = false
        }
        if(cheap === x){
            fast.checked = false
        }
        if(fast === x){
            good.checked = false
        }
    }
}            