const codes = document.querySelectorAll('.code');

// Focus on the first input field when the page loads
codes[0].focus();

// Function to check if all input fields have a value
function allFieldsFilled() {
    return Array.from(codes).every(code => code.value.length === 1);
}

// Function to handle Enter key when all fields are filled
function handleEnterKey() {
    if (allFieldsFilled()) {
        alert('The message is sent');
        // Clear all fields
        codes.forEach(code => code.value = '');
        // Optionally focus on the first field again
        codes[0].focus();
    } else {
        alert('Please enter all digits');
    }
}

codes.forEach((code, idx) => {
    code.addEventListener('input', () => {
        // Limit the input to one digit per field
        if (code.value.length > 1) {
            code.value = code.value.slice(0, 1);
        }

        // Move focus to the next input field if the current field has one digit
        if (code.value.length === 1 && idx < codes.length - 1) {
            codes[idx + 1].focus();
        }
    });

    code.addEventListener('keydown', (e) => {
        const key = e.key;

        // Move to the next field if the right arrow key is pressed
        if (key === 'ArrowRight') {
            if (idx < codes.length - 1) {
                codes[idx + 1].focus();
            }
            e.preventDefault();
        }
        
        // Move to the previous field if the left arrow key is pressed
        if (key === 'ArrowLeft') {
            if (idx > 0) {
                codes[idx - 1].focus();
            }
            e.preventDefault();
        }

        // Delete the current input if Backspace is pressed
        if (key === 'Backspace') {
            if (code.value.length > 0) {
                code.value = '';  // Clear the current field
            } else if (idx > 0) {
                // Move focus to the previous field if the current field is empty
                codes[idx - 1].focus();
            }
            e.preventDefault();  // Prevent the default backspace behavior
        }

        // Display alert and clear fields when Enter is pressed
        if (key === 'Enter') {
            if (idx === codes.length - 1) {  // Check if Enter is pressed in the last field
                handleEnterKey();
            }
            e.preventDefault();  // Prevent the default Enter key behavior
        }

        // Allow only digits and prevent non-numeric input
        if (key >= '0' && key <= '9') {
            // Allow digit input
        } else {
            e.preventDefault();
        }
    });

    // Prevent pasting multiple digits
    code.addEventListener('paste', (e) => {
        e.preventDefault();
    });
});