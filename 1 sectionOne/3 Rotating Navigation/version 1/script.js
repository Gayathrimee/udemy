// own
// const container = document.querySelector('.container')
// const circles = document.querySelectorAll('.circle')
// const close = document.getElementById('close')
// const open = document.getElementById('open')

// open.addEventListener('click',function(){
//     open.classList.add('show-nav')
//     removeClass()
// })

// function removeClass(){
//     open.addEventListener('click', ()=>{
//         open.classList.remove('show-nav')
//     })
// }
// ....................

const open = document.getElementById('open')
const close = document.getElementById('close')
const container = document.querySelector('.container')

open.addEventListener('click', () => container.classList.add('show-nav'))
close.addEventListener('click', ()=> container.classList.remove('show-nav'))
