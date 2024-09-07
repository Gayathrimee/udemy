const nav = document.querySelector('.nav')
window.addEventListener('scroll',()=>{

    if(nav.scrollY > nav.offsetHeight){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
})