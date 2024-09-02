const tagsEl = document.getElementById('tags')
const textArea = document.getElementById('textarea')

textArea.focus()

textArea.addEventListener('keyup', (e) =>{
    createTags(e.target.value)  //create value is called with the current value of the text area

    if(e.key === 'Enter'){
        setTimeout(() =>{
            e.target.value = ''
        }, 10)

        randomSelect()  //when the enter key is pressed, randomselect() is triggered after a short delay, and textarea is cleared
    }
})

function createTags(input){
    // console.log(input)
    const taggings = input.split(',')  // creates individual tags by commas
    .filter(tag => tag.trim() 
    !== '').map(tag => tag.trim())   //trims white spaces
    // console.log(taggings)

    tagsEl.innerHTML = ''

    taggings.forEach(tag => {
        const tagElement = document.createElement('span')
        tagElement.classList.add('tag')
        tagElement.innerHTML = tag
        tagsEl.appendChild(tagElement)
    });
}

function randomSelect(){   //it highlights random tags in a repeating interval and then highlights one final random tag after stopping the interval
    // console.log(123)

    const times = 30  //number of interval

    // highlight tags in a repeating interval
    const interval = setInterval(() =>{
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

function pickRandomTag(){    //select a randomtag from the list of  tags
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}
function unHighlightTag(tag){
    tag.classList.remove('highlight')
}