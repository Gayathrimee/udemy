const modeBtn = document.querySelector('.mode')
const hourNeedle = document.querySelector('.hour')
const minuteNeedle = document.querySelector('.minute')
const secondsNeedle = document.querySelector('.seconds')
const times = document.querySelector('.time')
const dates = document.querySelector('.date')

modeBtn.addEventListener('click', (e)=>{

    const html = document.querySelector('html')

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'White Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'Dark Mode'
    }
})

const months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"]
const days = ["Sun","Mon","Tues","Wed","Thus","Fri","Sat"]

function newTime(){

    const time = new Date()
    const year = time.getFullYear()
    const month = time.getMonth()
    const date = time.getDate()
    const day = time.getDay()
    const hour = time.getHours()
    const theHours = hour % 12
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = theHours >= 12 ? 'AM' : 'PM'

    hourNeedle.style.transform = `translate(-50%,-100%) rotate(
    ${scale(theHours, 0, 11, 0, 360)}deg)`
    minuteNeedle.style.transform = ` translate(-50%,-100%) rotate(
    ${scale(minutes, 0, 59, 0, 360)}deg)`
    secondsNeedle.style.transform = ` translate(-50%,-100%) rotate(
    ${scale(seconds, 0, 59, 0, 360)}deg)`

    times.innerHTML = `${theHours < 10 ? `0${theHours}` : theHours } : ${minutes < 10 ? `0${minutes}` : minutes} <span>${ampm}</span>`
    dates.innerHTML = `<span class ="date"> ${date < 10 ? `0${date}` : date} </span> ${months[month]} ${year}, ${days[day]}`
}

const scale = (num,in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) /
    (in_max - in_min) + out_min;
}

newTime()

setInterval(newTime, 1000)