const container = document.querySelector('.container')
const unsplashURL = 'https://picsum.photos/'
// document.getElementsByTagName("body")[0].style.backgroundImage = "url(https://picsum.photos/200/300/?random)";

const rows = 10

for(let i = 0; i< rows * 3; i++){
    const img = document.createElement('img')
    img.src = `${unsplashURL}${getRandomSize()}`
    container.append(img)
}

function getRandomSize(){
    return `${getRandomNr()}x${getRandomNr()}`
}

console.log(getRandomSize())
// console.log(getRandomNr())

function getRandomNr(){
    return Math.floor(Math.random() * 10) + 300
}