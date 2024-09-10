const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.getElementById('replay')

animationFun()
DOMreset()

function DOMreset(){
    counter.classList.remove('hide')
    final.classList.remove('show')

    nums.forEach(num => num.classList.value = '')
    nums[0].classList.add('in')
}

function animationFun(){

    nums.forEach((num,idx) =>{
        const nextLast = nums.length - 1

        num.addEventListener('animationend', (e) =>{
            if(e.animationName === 'goIn' && idx !== nextLast){
                num.classList.remove('in')
                num.classList.add('out')
            } else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in')
            } else{
                counter.classList.add('hide')
                final.classList.add('show')
            }
        })
    })
}

replay.addEventListener('click',()=> {
    DOMreset()
    animationFun()
})                                                                                           