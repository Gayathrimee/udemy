const theLabel = document.querySelectorAll('.form-control label')

theLabel.forEach(label =>{
    label.innerHTML = label.innerText
            .split('')
            .map((letter,idx)=> `<span style = transition-delay:${idx * 300}ms> ${letter}</span>`)
            .join('')
})