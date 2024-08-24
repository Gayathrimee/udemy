const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', slidEffect)

slidEffect()

function slidEffect(){
    const windowHeight = window.innerHeight / 5 * 4
    console.log(window.innerHeight / 5 * 4)

    boxes.forEach(box =>{
        const scrollHeight = box.getBoundingClientRect().top

        if(scrollHeight < windowHeight){
            box.classList.add('show')
            console.log(123)
        } else{
            box.classList.remove('show')
        }
    })
}