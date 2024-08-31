const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.open-btn')
const nav = document.querySelectorAll('.nav')

nav.forEach((item) =>{

    openBtn.addEventListener('click',()=> {
        console.log('open')
        item.classList.add('visible')
    })

    closeBtn.addEventListener('click', ()=>{
        console.log('close')
        item.classList.remove('visible')
    })
})