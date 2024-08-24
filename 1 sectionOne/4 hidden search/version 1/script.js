// own
//const button = document.querySelector('.button')
//const input = document.querySelector('.input')
//
// button.addEventListener('click',()=>{
//     input.classList.add(
//         input.style.width = 100 + '%'
//     )
// })
//
// button.addEventListener('click',()=>{
//     input.classList.add('active')
// })
// ............................

const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click',()=>{
    search.classList.toggle('active')
    input.focus()
})   