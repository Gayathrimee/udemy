const formLabel = document.querySelectorAll('.form-control label')

// formLabel.addEventListener('click',()=>{

// formLabel.forEach(label => {
//     label.innerHTML = label.innerText
//     .split('')
//     .map((letter,idx) =>`<span
//     style='transition-delay:${idx * 300}ms'>${letter}</span>`)
//     .join('')
// })
// })

// formLabel.forEach(label =>{
//     label.innerHTML = label.innerText
//     .split('')
//     .map((letter,idx) => `<span
//     style = 'transition-delay:${idx * 300}ms'>${letter}</span>`)
//     .join('')
// })

formLabel.forEach(label =>{
    label.innerHTML = label.innerText
    .split('')
    .map((letter,idx) => `<span style = transition-delay:${idx * 300}ms>
    ${letter}</span>`)
    .join('')
})