// const contents = document.querySelectorAll('.content')
// const items = document.querySelectorAll('nav ul li')

// items.forEach((a,b) =>{
//     a.addEventListener('click',()=>{

//         console.log(a,b)

//         hideContents()
//         hideLists()

//         contents[b].classList.add('show')
//         a.classList.add('active')

//         console.log(123)
//     })
// })

// function hideContents(){
//     contents.forEach(content => content.classList.remove('show'))
// }
// function hideLists(){
//     items.forEach(item => item.classList.remove('active'))
// }

// ===============================================================

// const contents = document.querySelectorAll('.content')
// const itemss = document.querySelectorAll('nav ul li')

// itemss.forEach((item,idx)=> {
//     item.addEventListener('click',()=>{

//         changeContent()
//         changeImage()

//         console.log(123)

//         contents[idx].classList.add('show')
//         item.classList.add('acitve')            
//     })
// })

// function changeContent(){
//     contents.forEach(item => item.classList.remove('show'))
// }

// function changeImage(){
//     itemss.forEach(item => item.classList.remove('active'))
// }

// =============================================================

const contents = document.querySelectorAll('.content')
const lists = document.querySelectorAll('nav ul li')

lists.forEach((list,idx) =>{
    list.addEventListener('click',()=>{

        changeSlide()
        changeLis()

        contents[idx].classList.add('show')
        list.classList.add('active')
    })
})

function changeSlide(){
    contents.forEach(content => content.classList.remove('show'))
}

function changeLis(){
    lists.forEach(list => list.classList.remove('active'))
}