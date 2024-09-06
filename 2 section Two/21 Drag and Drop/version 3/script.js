const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', doDrag)
fill.addEventListener('dragend', endDrag)

for(const empty of empties){
    empty.addEventListener('dragover', overDrag)
    empty.addEventListener('dragenter', enterDrag)
    empty.addEventListener('dragleave', leaveDrag)
    empty.addEventListener('drop',dropDrag)
}

function doDrag(){
    this.className += ' hold'
    setTimeout(() => this.className = 'invisible', 0)
    console.log(this.className)
}

function endDrag(){
    this.className = 'fill'
    console.log(123)
}

function overDrag(e){
    e.preventDefault()
}

function enterDrag(e){
    e.preventDefault()
    this.className += ' hovered'
}

function leaveDrag(){
    this.className = 'empty'
}

function dropDrag(){
    this.className = 'empty'
    this.append(fill)
}