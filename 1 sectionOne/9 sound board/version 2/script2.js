const sounds = ['applaues', 'boo', 'gasp','tada','victory', 'wrong']

sounds.forEach(sound =>{
    stopSongs()
    const btn = document.createElement('button')
    btn.classList.add ('btn')

    btn.innerText = sound

    btn.addEventListener('click',()=>{
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}
// ........................................................

const musics = ['asdj','asd','slkdj','sjd','sdas']

musics.forEach(music => {
    const bUtton = document.createElement('button')
    bUtton.classList.add('.bTn').innerText = music
    
    stopMusics()

    bUtton.addEventListener('click', ()=>{
        document.getElementById(music).play()
    })

    document.getElementById('buttons-inside').appendChild(bUtton)

})
                       
function stopMusics(){
    musics.forEach(music =>{
        const rythm = document.getElementById(music)
        rythm.pause()
        rythm.currentTime = 0;
    })
}

// ......................................................................

const playLists = ['asd','sdf','sdfs','sdfas','sdfasdf','dsfasd']

playLists.forEach(plays =>{
    const listing = document.createElement('div')
    listing.classList.add('.lists').innerHTML = plays
    stopPlaying()

    listing.addEventListener('click',()=>{
        document.getElementById(plays).play()
    })

})

function stopPlaying(){
    playLists.forEach(plays=>{
        const stops = document.getElementById('plays')
        stops.pause()
        stops.currentTime = 0;
    })
}