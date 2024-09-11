// const result = document.getElementById('result')
// const filter = document.getElementById('filter')
// const listItems = []

// filter.addEventListener('input', (e) => filterData(e.target.value))

// async function getData() {
//     const res = await fetch('https://randomuser.me/api?results=50')

//     const {results} = await res.json()

//     result.innerHTML = ''

//     results.forEach(user => {
        
//         const li = document.createElement('li')
//         listItems.push(li)

//         li.innerHTML = `
//         <img src = "${user.picture.large}" alt="${user.name.first}">
//         <div class="user-info">
//         <h4>${user.name.first} ${user.name.last}</h4>
//         <p>${user.location.city}, ${user.location.country}</p>`

//         result.append(li)
//     });
// }

// getData()

// function filterData(searchTerm){
//     listItems.forEach(item => {
        
//     if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())){
//         item.classList.remove('hide')
//     } else{
//         item.classList.add('hide')
//     }
//     })
// }

// ===================================================

const result = document.getElementById('result')
const input = document.querySelector('input')
const lists = []

input.addEventListener('input',(e)=> filterData(e.target.value))

async function getTheData(){

    const js = await fetch('https://randomuser.me/api?results=100')

    const {results} = await js.json()

    console.log(results)

    result.innerHTML = ''

    results.forEach(user =>{

        const li = document.createElement('li')
        lists.push(li)

        li.innerHTML =`
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>`

        result.append(li)
    })
}

getTheData()

function filterData(item){

    lists.forEach(list =>{

        if(list.innerHTML.toLowerCase().includes(item.toLowerCase())){
            list.classList.remove('hide')
        } else{
            list.classList.add('hide')
        }
    })
}