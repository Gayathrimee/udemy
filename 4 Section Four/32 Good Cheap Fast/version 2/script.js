const good = document.getElementById('good')
const cheap = document.getElementById('cheap')
const fast = document.getElementById('fast')
const label = document.querySelector('.label')
const ball = document.querySelector('.ball')
const toggle = document.querySelector('.toggle')
const toggleContainer = document.querySelector('.toggle-container')

// label.addEventListener('click',()=>{
//     if(label === checked){
//         label.classList.add('slideOn')
//     } 
// }) 

let check;

label.addEventListener('click',()=>{
    if(label.checked === toggleContainer.lentgh){
        check = toggleContainer.lentgh - 1
    }
})