const screens = document.querySelectorAll('.screen')
const chooseInsect = document.querySelectorAll('.choose-insect-btn')
const startButton = document.getElementById('start-btn')
const timeElement = document.getElementById('time')
const scoreElement = document.getElementById('score')
const message = document.getElementById('message')
const gameContainer = document.getElementById('game-container')

let seconds = 0
let score = 0
let selectedInsect = {}

startButton.addEventListener('click',()=> screens[0].classList.add('up'))

chooseInsect.forEach(insect => { 
    insect.addEventListener('click',()=>{
        const img = insect.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')

        selectedInsect = {src, alt}
        screens[1].classList.add('up')

        setTimeout(createInsect, 1000)
        startGame()
    })
})

function startGame(){
    setInterval(increaseTime, 1000)
}

function increaseTime(){
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s 
    timeElement.innerHTML = `Time: ${m}:${s}`

    seconds++
} 

function createInsect(){
    const insect = document.createElement('div')
    insect.classList.add('insect')
    const {x,y} = makeRandomLocation()
    insect.style.top = `${y}px`
    insect.style.left = `${x}px`
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}"
     style = "transform: rotate(${Math.random()* 360}deg"/>`

     gameContainer.append(insect)
     insect.addEventListener('click', catchTheInsect)
}

function makeRandomLocation(){
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return {x,y}
}

function catchTheInsect(){
    increaseScore()
    this.classList.add('caught')
    setTimeout(()=> this.remove(), 2000)
    addInsects()
}

function increaseScore(){
    score++
  
    if(score > 19 && score<= 25){
        message.classList.add('visible')

    } else if(score > 25){
        message.classList.remove('visible')
    }

    if(score > 50 && score <= 56){
        message.classList.add('visible')
        message.innerHTML = `You still think you can win? <br> Quit Already!!`

    } else if(score > 56){
        message.classList.remove('visible')
    }

    let newScore = score < 10 ? `0${score}` : score
    scoreElement.innerHTML =  `score: ${newScore}`

}

function addInsects(){
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}