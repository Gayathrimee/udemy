const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code,idx)=>{
    code.addEventListener('input',()=>{

        if(code.value.length > 1){
            code.value = code.value.slice(0,1)
        }

        if(code.value.length === 1 && idx < codes.length - 1){
            codes[idx + 1].focus()
        }
    });

    code.addEventListener('keydown',(e)=>{

        const key = e.key;

        // move to next input field if the right arrow key is pressed:
        if(key === 'ArrowRight'){
            if(idx < codes.length - 1){
                codes[idx + 1].focus()
            }
            e.preventDefault()
        }

        // move to the previous field if the left arrow key is pressed
        if(key === 'ArrowLeft'){
            if(idx > 0){
                codes[idx - 1].focus()
            }
            e.preventDefault()
        }

        // delete the current input if backspace is pressed
        if(key === 'Backspace'){
            if(code.value.length > 0){
                code.value = '';      //clear the current field

            } else if(idx > 0){
                codes[idx - 1].focus()
                codes[idx - 1].value = ''
            }
            e.preventDefault()
        }

        // Allow only digits and prevent non-numeric input
        if(key >= '0' && key <= '9'){
            // Allow digit input
        } else{
            e.preventDefault()
        }
    });

    // prevent pasting multitple digits
    code.addEventListener('paste',(e)=>{
        e.preventDefault();
    });
})