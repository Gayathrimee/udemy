const counters = document.querySelectorAll('.counter')

counters.forEach(counter =>{
    counter.innerHTML = '0'

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target')  //here it shows the type of target as string. to make it to number, add '+'
        // console.log(typeof target,target)

        const c = +counter.innerText
        // console.log(typeof c,c)

        // to set the increment number:
        const increment = target / 1023   //each number will increment by (the exact no. / 200) 
        console.log(increment)

        // to make sure that the c number is less than the target
        if(c < target){
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,10)
        } else{
            counter.innerText = target
        }
    }

    updateCounter()
})

