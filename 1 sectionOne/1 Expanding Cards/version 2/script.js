// const container = document.querySelector('.container')
// const images = document.querySelectorAll('.image')

// images.forEach(image => {
//     image.addEventListener('click',()=>{
//         image.classList.toggle('active')
//     })
//     image.classList.remove('active')
// })

// 2
// const container = document.querySelector('.container')
// const images = document.querySelectorAll('.image')

// images.forEach(image => {
//     image.addEventListener('click',()=>{

//    if(clicked){
//         image.classList.remove('active')
//    } else {
//         image.classList.remove('active')
//     }
// })

// })

// 3
// const images = document.querySelectorAll('.image')

// images.forEach(image =>{
//     image.addEventListener('click', ()=>{
//         images.forEach(image => {
//             image.classList.remove('active')
//         });
//         image.classList.toggle('active')
//     })
// })

//4
// const images = document.querySelectorAll('.image')

// images.forEach(image =>{
//     image.addEventListener('click', ()=>{
//         images.forEach(image => {
//             // image.classList.remove('active')
//         });
//         image.classList.toggle('active')
//     })
// })

// 5
// const images = document.querySelectorAll('.image')

// images.forEach(image =>{
//     // removeActiveClass()
//     image.addEventListener('click', () => {
//         image.classList.toggle(active)
//     })

// })

// function removeActiveClass(){
//     images.forEach(image => image.classList.remove('active'))
// }

// final : either this:-

// const images = document.querySelectorAll('.image')

// images.forEach(image =>{
//     image.addEventListener('click', ()=>{
//         images.forEach(image => {
//             image.classList.remove('active')
//         });
//         image.classList.toggle('active')
//     })
// })

// or this:-
const images = document.querySelectorAll('.image')

images.forEach(image =>{
    image.addEventListener('click', ()=>{
        image.classList.toggle('active')
    })
})