const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

// jokeBtn.addEventListener('click',()=>{
//     jokeBtn.classList.add(generateJoke())
// })

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// USING .then()

// function generateJoke(){
//     const config = {
//         headers:{
//             'Accept':'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     // .then((data) => console.log(data))
//     .then((data) => {
//         jokeEl.innerHTML = data.joke   // here just data means get only the [object], .joke means get the jokes into the jokeEl id
//     })
// }

// USING ASYNC/AWAIT:

async function generateJoke(){
    const config = {
        headers:{
            'Accept':'application/json'
        }
    }

    const res = await fetch('https://icanhazdadjoke.com',config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke 
} 
