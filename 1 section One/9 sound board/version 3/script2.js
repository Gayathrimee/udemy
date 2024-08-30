const sounds = ['speak','crazy','beep','stab','water','phrog']

sounds.forEach(sound =>{

    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound

    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}

const musics = ['speak','crazy','beep','stab','water','phrog']

musics.forEach(music=>{
    const playList = document.createElement('button')
    playList.classList.add('btn')
    playList.innerText = music

    playList.addEventListener('click',()=>{
        musics.forEach(music =>{
            stopMusic()
            document.getElementById(music).play()
        })
        document.getElementById('buttons').appendChild(playList)
    })
})

function stopMusic(){
    musics.forEach(music =>{
        const play = document.getElementById(music)
        play.pause()
        play.currentTime = 0;
    })
}