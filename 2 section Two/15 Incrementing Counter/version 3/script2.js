const theCounter = document.querySelectorAll('.counter')

theCounter.forEach(counter =>{

    counter.innerHTML = '0'

    function counterUpdate(){

        const target = counter.getAttribute('data-target')

        const c = +counter.innerHTML

        const increment = target / 1000

        if(c < target){
            counter.innerHTML = `${Math.round(c + increment)}`
            setTimeout(counterUpdate,10)
        } else{
            counter.innerHTML = target
        }
    }

    counterUpdate()
})