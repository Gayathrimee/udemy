// const sounds = ['speak','crazy','beep','stab','water','phrog']

// sounds.forEach(sound =>{
//     const button = document.getElementById('button')
//     button.classList.add('btn')

//     button.innerHTML = sound

//     button.addEventlistener('click', ()=>{
//         stopPlay()
//         btn.sound.play()
//     })

// })

// function stopPlay(){
//     btn.sound.pause()
//     currentTime = 0
// }


// version 4

// const sounds = ['speak','crazy','beep','stab','water','phrog']

// sounds.forEach(sound =>{
//     const btn = document.createElement('button')
//     btn.classList.add('btn')
//     btn.innerText = sounds
    
//     btn.addEventListener('click',()=>{
//         stopPlay()
//         document.getElementById(sound).play()
//     })
//     document.getElementById('buttons').appendChild(btn)
// })

// function stopPlay(){
//     sounds.forEach(sound =>{
//         const song = document.getElementById(sounds)

//         song.pause()
//         song.currenTime = 0;
//     })
// }

const sounds = ['speak','crazy','beep','stab','water','phrog']

sounds.forEach(sound =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerHTML = sound

    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(btn)
});

function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}



