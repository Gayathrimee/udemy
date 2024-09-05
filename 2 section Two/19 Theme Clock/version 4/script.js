const modeBtn = document.querySelector('.toggle')
const hourLeg = document.querySelector('.hour')
const minuteLeg = document.querySelector('.minute')
const secondsLeg = document.querySelector('.second')
const timeNow = document.querySelector('.time')
const dateToday = document.querySelector('.date')

modeBtn.addEventListener('click',(e)=>{
    
    const html = document.querySelector('html')

    if(html.classList.contains('dark')){
        html.classList.remove('dark')
        e.target.innerHTML = 'Dark Mode'
    } else {
        html.classList.add('dark')
        e.target.innerHTML = 'White Mode'
    }
})

const days = ["sundays","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

function dateAndTimes(){
    
    const time = new Date();
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hour = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()

    hourLeg.style.transform = `translate(-50%,-100%) rotate(
       ${scale(hour, 0, 23, 0, 360)}deg)`
    minuteLeg.style.transform = `translate(-50%,-100%) rotate(
    ${scale(minutes, 0, 59, 0, 360)}deg)`
    secondsLeg.style.transform = `translate(-50%, -100%) rotate(
    ${scale(seconds, 0, 59, 0, 360)}deg)`

    timeNow.innerHTML = `${hour < 10 ? `0${hour}`: hour} 
                        : ${minutes < 10 ? `0${minutes}` : minutes}`

    dateToday.innerHTML = `${days[day]} ${months[month]}  ${date}`

}

const scale = (num,in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) /
    (in_max - in_min) + out_min;
}

dateAndTimes()

setInterval(dateAndTimes, 1000)