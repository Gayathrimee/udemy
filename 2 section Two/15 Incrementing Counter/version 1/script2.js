const counters = document.querySelectorAll('.counter')

counters.forEach((counter)=>{
    counter.innerHTML = '0'

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')
        // console.log(target)

        const c = +counter.innerText

        const increment = target/200
        console.log(increment)

        if(c < target){
            counter.innerText = `${Math.round(c + increment)}`
            setTimeout(updateCounter, 11)
        } else{
            counter.innerText = target
        }
    }
    updateCounter()
})