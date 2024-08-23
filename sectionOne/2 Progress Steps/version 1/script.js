// my way
// const progress = document.getElementById('progress')
// const nextButton = document.querySelectorAll('.btn')

// nextButton.forEach(button=>{
//     button.addEventListener('click',()=>{
//         button.classList.add('active')
//     })
// })
// ................................

const progress = document.getElementById('progress')
const circles = document.querySelectorAll('.circle')
const prev = document.getElementById('prev')
const next = document.getElementById('next')

let currentActive = 1 // it represents whichever one is active

next.addEventListener('click', ()=>{
    currentActive++

    if(currentActive > circles.length){
        currentActive = circles.length
    }                                          //it will print only upto 4
    update()
    // console.log(currentActive)              //will shows that when the next btn is clicked it will printout the incremented values like 2,3,4,5....
})    

// to set the values of prev btn:

prev.addEventListener('click',()=>{
    currentActive --

    if(currentActive < 1){
        currentActive = 1
    }
    update()
})

// setting up a fn called update()  it will 
function update(){
    circles.forEach((circle,idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
          } 
          else {
            circle.classList.remove('active')
          }
          console.log(idx,currentActive)
        }) 

    const actives = document.querySelectorAll('.active')
    // console.log(actives.length/circles.length * 100)
    progress.style.width = (actives.length - 1) / (circles.length - 1 ) * 100 + '%'

    // to set the prev and next btn active and disabled

    if (currentActive === 1){
        prev.disabled = true
    } else if (currentActive === circles.length){
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false 
    }

} 
