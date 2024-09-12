const resetButtton = document.getElementById('reset')
const playButton = document.getElementById('play')
const timerElement = document.getElementById('timer')
const theRoot = document.querySelector(':root')

const totalTime= 60;
let playing = false
let currentTime = totalTime
timerElement.innerText = formatTime(totalTime)

const timeInterval = setInterval(start, 1000)

function start(){
    if(playing){
        currentTime -= 1;

        if(currentTime <=0){
            clearInterval(timeInterval)

            resetTimer()
        }

        timerElement.innerText = formatTime(currentTime)
        root.style.setProperty('--degrees', calcDeg())
    }
}  

function formatTime(time){
    const minutes = Math.floor(time / 60)
    const newTime = time % 60

    return `${minutes.toString().padStart(2,'0')}: ${newTime.toString().padStart(2,'0')}`
    // minutes.toString() :- Converts the minutes value to a string
    // padStart() :- Pads the string on the left with 0 if its length is less than 2. This ensures that the string always has at least 2 digits.
    //              eg: if minutes is 5, it becomes '05'
    // newTime.toString() :- Coverts the newTime value to a string
    // padStart(): Similarly pads the string with 0 on the left if its length is less than 2. For instance, if newTime is 9, it becomes '09'.         

    // resulting string: The return statement creates a string in the format MM:SS, where MM and SS are zero-padded to ensure they are always 2 digits.
}

function calcDeg(){
    return `${360 - (currentTime / totalTime) * 360} deg`
}

function resetTimer(){
    playing = false
    playButton.classList.remove('play')
    playButton.classList.remove('bg-green-500')

    const playIcon = playButton.querySelector('i')
    playIcon.classList.remove('fa-pause')
    playIcon.classList.add('fa-play')

    currentTime = totalTime;
    timerElement.innerText = formatTime(totalTime);
    root.style.setProperty('--degrees', '0deg')
}