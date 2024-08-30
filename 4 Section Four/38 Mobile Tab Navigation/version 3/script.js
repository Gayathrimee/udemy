document.addEventListener('DOMContentLoaded',()=>{
    const contents = document.querySelectorAll('.content')
    const itemLists = document.querySelectorAll('nav ul li')
    
    itemLists.forEach((item,idx)=>{
        item.addEventListener('click',()=>{
    
            hideContents()
            hideListColor()
    
            contents[idx].classList.add('show')
            item.classList.add('active')
        })
    })
    
    function hideContents(){
        contents.forEach(content => content.classList.remove('show'))
    }
    
    function hideListColor(){
        itemLists.forEach(item => item.classList.remove('active'))
    }
})