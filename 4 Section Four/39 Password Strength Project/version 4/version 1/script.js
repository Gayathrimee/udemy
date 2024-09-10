const password = document.getElementById('password')
const backgroundImg = document.getElementById('background')

password.addEventListener('input',(e)=>{

    const inputValue = e.target.value
    const valueLength = inputValue.length 
    const blur = 20 - valueLength * 1

    backgroundImg.style.filter = `blur(${blur}px)`
})    