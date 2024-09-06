const fill = document.querySelector('.fill')
const theEmpties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(empty of theEmpties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',drop)
}

function dragStart(){
    console.log(this)
    this.className += ' hold'
    setTimeout(() => this.className = ' invisible', 0)
}

function dragEnd(){
    console.log(456)
    this.className += ' fill'
}

function dragOver(e){
    e.preventDefault()
    this.className += ' hovered'
}

function dragEnter(e){
    e.preventDefault()
    this.className += ' hold'
}

function dragLeave(){
    // this.className += ' fill'
}

function drop(){
    this.className += ' fill'
}