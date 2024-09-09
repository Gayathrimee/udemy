const loveMe = document.querySelector('.loveme')
const times = document.getElementById('times')

// let clickingTime = 0
// let totalClicked = 0

// loveMe.addEventListener('click',(e)=>{
//     if(clickingTime === 0){
//         clickingTime = new Date().getTime()

//         console.log(clickingTime)
//     } else{
//         if((new Date().getTime() - clickingTime) < 800){
//             console.log(123)
//             createHeart(e)
//             clickingTime = 0
//         } else{
//             clickingTime = new Date().getTime()
//         }
//     }
// })

// const createHeart = (e) =>{
//     const heart = document.createElement('i')
//     heart.classList.add('fas')
//     heart.classList.add('fa-heart')

//     const x = e.clientX
//     const y = e.clientY

//     const leftOffset = e.target.offsetLeft
//     const topOffset = e.target.offsetTop

//     const xInside = x - leftOffset
//     const yInside = y - topOffset

//     heart.style.top = `${yInside}px`
//     heart.style.left = `${xInside}px`

//     loveMe.append(heart)

//     times.innerHTML = ++totalClicked

//     setTimeout(()=> heart.remove(), 1000)

//     console.log(x,y)
// }

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click',(e)=>{

    if(clickTime === 0){
        clickTime = new Date().getTime()

        // if clicktime is 0(meaning this is the first click), record the current time in ms

    } else{

        if((new Date().getTime() - clickTime) < 800){
            createHeart(e)
            clickTime = 0
        } else{
            clickTime = new Date().getTime
        }

        // if clickTime is not 0 :-
        // * check if the time elapsed since the first click is less than 800 ns
        // * if it is, call createHeart(e) to create a heart icon and reset clicktime to 0
        // * if it's not, update clickTime with the current time(start timing again for the next possible double-click)
    }
})

const createHeart = (e) =>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    //x = get the horizontal coordinate of the mouse click relative to the viewport.
    // y = get the vertical coordinate of the mouse click relative to the viewport

    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop

    // left = gets the horizontal offset of the clicked element(loveMe) relative to its offset parent
    // top = gets the vertical offset of the clicked element(loveMe) relative to its offset parent

    const xInside = x - leftOffset
    const yInside = y - topOffset

    // x = calculates the horizontal position of the click relative to the clicked element.
    // y = calculates the vertical position of the click relative to the clicked element.

    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`

    // top = sets the top css property of the heart element to position it vertically at the calculated yInside value.
    // left = sets the left css property of the heart element to position it horizontally at the calculated xInside value

    loveMe.appendChild(heart)

    setTimeout(()=> heart.remove(), 600)

    times.innerHTML = ++timesClicked
    // increments the timesClicked counter and updates the innerHTML of th etimes element to display the new count
}