const tagEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)

    // to reload if enter

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''
        }, 10)

        randomSelect()
    }
})

function createTags(input){
    const tags = input.split(',')  //to seperate words by ,
    .filter(tag  => tag.trim() !== '')  // not to include spaces before ','
    .map(tag => tag.trim())  // ,,

    tagsEl.innerHTML = ''

    tags.forEach(tag => {
        const tagElement = document.createElement('span')
        tagsEl.classList.add('tag').innerHTML = tag
        tagsEl.appendChild(tagsEl)
    });
}
                                      
function randomSelect(){
    const times = 30

    const interval = setInterval(()=>{
        const randomTag = pickRandomTag()

        highlightTag(randomTag)

        setTimeout(()=>{
            unHighlightTag(randomTag)
        }, 100)

    }, 100);

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)
    }, times * 100)
}

function pickRandomTag(){
    const tags = document.querySelectorAll('.tags')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}
