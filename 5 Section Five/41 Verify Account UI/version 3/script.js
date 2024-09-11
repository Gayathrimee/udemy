const codes = document.querySelectorAll('.code')

codes[0].focus()            // purpose:- this lines set the focus on the 1st input field when the page loads.
                            // what it does:- It ensures that when the page is 1st displayed, the user's cursor is automatically placed in the 1st input field.

codes.forEach((code,idx)=>{
    code.addEventListener('keydown',(e)=>{
        if(e.key >= 0 && e.key <= 9){
            setTimeout(()=> codes[idx + 1].focus(), 10)

        } else if(e.key === 'backspace'){
            setTimeout(()=> codes[idx - 1].focus())
        }
    })
})

// purpose:- This section adds event listeners to each of the input fields to handle user input.
// what does:-

// * if(e.key >= 0 && e.key <= 9) :- Checks if the key pressed is a number (0-9). if so:
//      - setTimeout(()=> codes[idx + 1].focus(), 10) : 
// moves the focus to the next input field after a short delay(10 ms).
// This is useful for automatically moving to the next field when a digit is entered

// * else if(e.key === 'backspace'):- cbecks if the key pressed is the Backspace Key. if so:
//      -setTimeout(()=> codes[idx - 1].focus()):
//  moves the focus to the previous input field. This allows users to navigate backwards when deleting a character.
