const result = document.getElementById('result')
const input = document.querySelector('input')
const lists = []

input.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    
    const js = await fetch('https://randomuser.me/api?results=100')
    
    const {results} = await js.json()
    console.log(results)

    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')
        lists.push(li)

        li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>`

        result.append(li)
    })
}

getData()

function filterData(item) {
    lists.forEach(list =>{

        if(list.innerHTML.toLowerCase().includes(item.toLowerCase())){
            list.classList.remove('hide')

        } else{
            list.classList.add('hide')
        }
    })    
}