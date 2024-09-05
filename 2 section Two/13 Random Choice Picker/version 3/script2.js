const areaText = document.getElementById('textarea')
const theTags = document.getElementById('tags')

areaText.focus()

areaText.addEventListener('keyup', (e)=>{
    createTheTags(e.target.value)

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        }, 10)

        randomOne()
    }
})

function createTheTags(input){

    const inTag = input.split(',')
                        .filter(tag =>tag.trim()  !== '')
                        .map(tag => tag.trim())

    theTags.innerHTML = ''

    inTag.forEach(tag => {

        const inTagElement = document.createElement('span')
        inTagElement.classList.add('tag')
        inTagElement.innerHTML = tag

        theTags.append(inTagElement)
    })         

}

function randomOne(){

    const times = 30

    const interval = setInterval(() =>{
        const randomTagEl = pickRandomOne()

        highlightTag(randomTagEl)

        setTimeout(()=>{
            unHighlightTag(randomTagEl)
        }, 100)
    }, 100)

    setTimeout(()=>{
        clearInterval(interval)

        setTimeout(()=>{
            const randomTagEl = pickRandomOne()

            highlightTag(randomTagEl)
        }, 100)
    }, times * 100)
}

function pickRandomOne(){
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
    tag.classList.add('highlight')
}

function unHighlightTag(tag){
    tag.classList.remove('highlight')
}