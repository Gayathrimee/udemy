// const joke = document.getElementById('joke')
// const jokeButton = document.getElementById('jokeBtn')

// jokeButton.addEventListener('click',generateJoke)

// generateJoke()

// async function generateJoke(){

//     const config = {
//         headers:{
//             'Accept':'application/json'
//         }
//     }

//     const res = await fetch('https://icanhazdadjoke.com', config)

//     const data = await res.json()

//     joke.innerHTML = data.joke
// }


// ...............................

const theJokes = document.getElementById('joke')
const btnJoke = document.getElementById('jokeBtn')

btnJoke.addEventListener('click',jokeGenerator)

jokeGenerator()

// async function jokeGenerator(){

//     const configurartion ={
//         headers:{
//             "Accept":"application/json"
//         }
//     }

//     const res = await fetch('https://icanhazdadjoke.com',configurartion)

//     const data = await res.json()

//     theJokes.innerHTML = data.joke
// }           

function jokeGenerator(){

    const config = {
        headers:{
            "Accept":"application/json"
        }

    }
    fetch('https://icanhazdadjoke.com',config)
    .then((res)=> res.json())
    .then((data)=> theJokes.innerHTML = data.joke)

}                                                                               