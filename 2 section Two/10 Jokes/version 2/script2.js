const jokeBtn = document.getElementById('jokeBtn')
const jokeEl = document.getElementById('joke')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// using .THEN()

function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com',config)
    .then((res) => res.json())
    .then((data) => {
        jokeEl.innerHTML = data.jokeBtn
    })
}

// using ASYNC/AWAIT

async function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjokes.com', config)
    const data = await res.json()
    jokeEl.innerHTML = data.joke
}