const theLabel = document.querySelector('.form-control label')

theLabel.forEach(label =>{
    label.innerHTML = label.innerText
            .split('')
            .map((letters,idx)=> `<span
            transition-delay: 
            >`)
})


