const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {

    counter.innerHTML = '0'

    const counterUpdation = ()=>{

        const target = +counter.getAttribute('data-target')

        const c = +counter.innerText

        const increase = target / 1234
        // console.log(increase)

        if(c < target){
            counter.innerText = ` ${Math.ceil(c + increase)}`
            setTimeout(counterUpdation, 1)
        } else{
            counter.innerText = target
        }
    }

    counterUpdation()
})