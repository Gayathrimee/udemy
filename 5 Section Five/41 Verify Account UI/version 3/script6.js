const codes = document.querySelectorAll('.code')

codes[0].focus()

// function to check if all the input fields have a value
function allFieldsFilled(){
    return Array.from(codes).every(code => code.value.length === 1)
}

// function to handle the enter key when all fields are filled
function handleEnterKey(){
    if(allFieldsFilled()){
        alert('The message is sent')

        // clear all the field
        codes.forEach(code => code.value = '');

        // optionally focus on the 1st field again
        codes[0].focus()
        
    } else{
        alert('Please enter all digits')
    }
}

codes.forEach((code,idx)=>{
    code.addEventListener('input', ()=>{
        
        if(code.value.length > 1){
            code.value = code.value.slice(0,1)
        }

        if(code.value.length === 1 && idx < codes.length - 1){
            codes[idx + 1].focus()
        }
    });

    code.addEventListener('keydown',(e)=>{
        
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
                code.value = '';    //clear current input field
            
            }   else if(idx > 0){
                codes[idx - 1].focus()
                codes[idx - 1].value = ''
            }
            e.preventDefault()
        }

        if(key === 'Enter'){
            if(idx === codes.length - 1){   //check if enter is pressed in the last field
                handleEnterKey();   
            }
            e.preventDefault()
            
        }

        // Allow only digits and prevent non-numeric input
        if(key >= '0' && key <= '9'){
            // Allow digit input
        } else{
            e.preventDefault()
        }
    })
})