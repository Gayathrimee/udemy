const hourElement = document.querySelector('.hour')
const minuteElement = document.querySelector('.minute')
const secondsElement = document.querySelector('.second')
const timerElement = document.querySelector('.time')
const dateElement = document.querySelector('.date')
const theToggle = document.querySelector('.toggle')

const days = ["sundays","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

theToggle.addEventListener('click',(e)=>{

    const theHtml = document.querySelector('html')
    if(theHtml.classList.contains('dark')){
        theHtml.classList.remove('dark')
        e.target.innerHTML = 'White Mode'
    } else{
        theHtml.classList.add('dark')
        e.target.innerHTML = 'Dark Mode'
    }
})

function setClockTime(){

    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourElement.style.transform = `translate(-50%,-100%) rotate(
    ${scale(hours, 0, 23, 0, 360)}deg)`
    minuteElement.style.transform = ` translate(-50%, -100%) rotate(
    ${scale(minutes, 0, 59, 0, 360)}deg)`
    secondsElement.style.transform = `translate(-50%,-100%) rotate(
    ${scale(seconds,0,59, 0, 360)}deg)`

    timerElement.innerHTML = ` ${hours} : ${minutes < 10 ? 
            `0${minutes}` : minutes}`
    dateElement.innerHTML = `${days[day]}, ${months[month]} <span class = "circle"> ${date} </span>`

}

const scale = (num,in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) /
    (in_max - in_min) + out_min;
}

setClockTime()

setInterval(setClockTime, 1000)