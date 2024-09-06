const theFill = document.querySelector('.fill')
const allEmpties = document.querySelectorAll('.empty')

theFill.addEventListener('dragstart',start)
theFill.addEventListener('dragend',end)

function start(){
    // this.className += ' hold'
    setTimeout(()=> this.className = 'invisible')
}

function end(){
    this.className = ' fill'
}

for(empty of allEmpties){
    empty.addEventListener('dragenter',enter)
    empty.addEventListener('dragover',over)
    empty.addEventListener('dragleave',leave)
    empty.addEventListener('drop',drop)
}

function enter(e){
    e.preventDefault()
    this.className += ' hovered'
}

function over(e){
    e.preventDefault()
}

function leave(){
    this.className = 'empty'
}

function drop(){
    this.className = 'empty'
    this.append(theFill)
}