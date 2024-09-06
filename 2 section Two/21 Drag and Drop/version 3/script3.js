const fill = document.querySelector('.fill')
const empTies = document.querySelectorAll('.empty')

fill.addEventListener('dragstart',startDrag)
fill.addEventListener('dragend',endsDrag)

function startDrag(){
    this.className += ' hold'
    setTimeout(()=> this.className = 'invisble',0)
}

function endsDrag(){
    this.className = ' fill'
}

for(empty of empTies){
    empty.addEventListener('dragenter',enter)
    empty.addEventListener('dragleave',leave)
    empty.addEventListener('dragover',over)
    empty.addEventListener('drop',dropIt)
}

function enter(e){
    e.preventDefault()
    this.className += ' hold'
}

function leave(){
    this.className = ' empty'
}

function over(e){
    e.preventDefault()
    this.className += ' hovered'
}

function dropIt(){
    this.className = 'empty'
    this.append(fill)
}