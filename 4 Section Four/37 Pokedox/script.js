const poke_container = document.getElementById('poke-container')
const pokemon_count = 150;

const colors = {
    fire:'#fddfdf',
    grass:'#defde0',
    electric:'#fcf7de',
    water:'#def3fd',
    ground:'#f4e7da',
    rock:'#fceaff',
    fairy:'#98d7a5',
    poison:'#f8d5a3',
    bug:'#97b3e6',
    dragon:'#eaeda1',
    psychic:'#f5f5f5',
    flying:'#e6e0d4',
    fighting:'#e6e0d4',
    normal:'#f5f5f5',
}

const main_types = Object.keys(colors)
// console.log(main_types)

const fetchPokemons = async() =>{
    for(let i = 1; i <= pokemon_count; i++){
        await getPokemon(i)
    }
}

const getPokemon = async(id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)

    // console.log(data)
}

const createPokemonCard = (pokemon) =>{
    const pokemonEl = document.createElement('div')
    pokemonEl.classList.add('pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3,'0')

    const poke_types = pokemon.types.map(type => type.type.name)
    const type = main_types.find(type => poke_types.indexOf(type) > -1)
    const color = colors[type]

    pokemonEl.style.backgroundColor = color

    const pokemonInnerHTML = `
      <div class="img-container">
                       <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"" alt="${name}">

            </div>
            <span class="info">#${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type">Type: <span>${type}</span></small>
        </div>`

        pokemonEl.innerHTML = pokemonInnerHTML

        poke_container.append(pokemonEl)
}

fetchPokemons()

