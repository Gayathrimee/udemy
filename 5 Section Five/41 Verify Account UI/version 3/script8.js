const codes = document.querySelectorAll('.code')
codes[0].focus()

function allFieldsFilled(){
    return Array.from(codes).every(code => code.value.length === 1)
}

function handleEnterKey(){
    if(allFieldsFilled()){
        alert('The message is sent')

        codes.forEach(code => code.value = '')

        codes[0].focus()
    } else {
        alert('please enter all digits')
    }
}

codes.forEach((code,idx) =>{
    code.addEventListener('input', () =>{
        if(code.value.length > 1){
            code.value = code.value.slice(0,1)
        }

        if(code.value.length === 1 && idx < codes.length - 1){
            codes[idx + 1].focus()
        }

        console.log('codes.length', codes.length)
        console.log('idx', idx)
        console.log('code value', code.value)
    })

    code.addEventListener('keydown', (e) =>{
        const key = e.key

        if(key === 'ArrowRight'){
            if(idx < codes.length - 1){
                codes[idx + 1].focus()
            }
            e.preventDefault()
        }

        if(key === 'ArrowLeft'){
            if(idx > 0){
                codes[idx - 1].focus()
            }
            e.preventDefault()
        }

        if(key === 'Backspace'){
            if(code.value.length > 0){
                code.value = ''
            
            } 
            else if(idx > 0){
                codes[idx - 1].focus()
            }
        }

        if(key === 'Enter'){
            if(idx === codes.length - 1){
                handleEnterKey()
            }
            e.preventDefault()
        }
    })
})  