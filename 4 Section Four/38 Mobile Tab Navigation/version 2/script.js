const contents = document.querySelectorAll('.content')
const lists = document.querySelectorAll('nav ul li')

lists.forEach((item) => {
    item.addEventlistener('click',()=>{
        item.classList.add('active')

        update()
    })
})

let idx = 0;

function update(){
    for(let i=0; i<lists.length; i++){

        if(idx < lists.length - 1){
            idx ++
        } else if(idx < 0){
            idx = lists.length -1
        } else{
            idx--
        }
    }
}
