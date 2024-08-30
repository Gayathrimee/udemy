const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkboxes)

checkboxes()

function checkboxes(){
    // console.log(window.innerHeight / 5 * 4)  // so this our triggerBottom. now lets declare it as a variable
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom){
            box.classList.add('show')
        } else{
            box.classList.remove('show')
        }
    })
}