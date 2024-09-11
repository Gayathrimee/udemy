const codes = document.querySelectorAll('.code')

codes[0].focus()

codes.forEach((code,idx) =>{
    code.addEventListener('input', ()=>{

        // limit the input to one digit per field
        if(code.value.length > 1){
            code.value = code.value.slice(0,1)
        }

        // move focus to the next input field if not the last field
        if(code.value.length === 1 && idx < codes.length - 1){
            codes[idx + 1].focus()
        }
    })

    code.addEventListener('keydown',(e) =>{

        // Allow digits and Backspace only
        if(e.key >= '0' && e.key <= '9'){
            // Allow digit input
        } else if(e.key === 'Backspace'){
            // handle backspace: move focus to previous field if current field is empty
            if(code.value.length === 0 && idx > 0){
                // move focus to previous field
                codes[idx - 1].focus();
                e.preventDefault();     // prevent the default backspace behavior
            }
        } else{
            e.preventDefault();     //prevent non-numeric input
        }
    });

    // prevent pasting more than one object
    code.addEventListener('paste', (e)=>{
        e.preventDefault();     //prevent pasting
    })
});         