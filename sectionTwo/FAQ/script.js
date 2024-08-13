// own
// const container = document.querySelector('.container')
// const faq = document.querySelectorAll('.faq')
// const button = document.querySelector('button')

// faq.forEach(()=>{
//     button.addEventListener('click', ()=>{
//         faqToggle()
//         faq.classList.add('active')
//     })
// })

// function faqToggle(){
//     button.forEach(()=>{
//         button.addEventListener('click',()=>{
//             button.classList.toggle('faq-toggle')
//      })
//     })
// }
// .............................................

// own after getting hints
// - Bring in toggle buttons(querySelectorAll)
// - Loop through nodelist (forEach)
// - Add click event (addEventListener)
// - toggle the active class on the parent node (.parentNode & classList.toggle())

// const buttons = document.querySelectorAll('.faq-toggle')
// const faq = document.querySelector('.faq')

// buttons.forEach((button)=>{
//     button.addEventListener('click',()=>{
//         button.classList.toggle('active')
//     })
// })
// ............................................

// original

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle =>{
    toggle.addEventListener('click', () =>{
        toggle.parentNode.classList.toggle('active')
    })
})
// and the only problem in my pgm is I did'nt add parentNode :(
