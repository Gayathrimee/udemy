const nav = document.querySelectorAll('.nav')
const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.open-btn')

closeBtn.addEventListener('click',()=>{
    nav.forEach(nav => nav.classList.remove('visible'))
})

openBtn.addEventListener('click',()=>{
    nav.forEach(nav => nav.classList.add('visible'))
})