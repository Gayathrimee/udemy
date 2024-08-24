const inBoxes = document.querySelectorAll('.box')

window.addEventListener('scroll',slideEffect)

slideEffect()

function slideEffect(){
    const windowHeight = window.innerHeight / 5 * 4

    inBoxes.forEach(box =>{
        
        const boxHeight = box.getBoundingClientRect().top

        if(boxHeight < windowHeight){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}