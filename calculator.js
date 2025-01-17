// Arithmetic functions
function add (number1, number2) {
    return number1 + number2;
}

function subtract (number1, number2) {
    return number1 - number2;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
    // Handling division by zero
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Function to get the values from input fields and perform the calculation
function performCalculation (operation) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    let result;

    // Based on the operation, call the respective function
    switch (operation) {
        case 'add':
            result = add(number1, number2);
            break;
        case 'subtract':
            result = subtract(number1, number2);
            break;
        case 'multiply':
            result = multiply(number1, number2);
            break;
        case 'divide':
            result = divide(number1, number2);
            break;
        default:
            result = "Invalid operation";
    }

    // Display the result in the result span
    document.getElementById('calculation-result').textContent = result;
}

// Attach event listeners to each button
document.getElementById('add').addEventListener('click', function() {
    performCalculation('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    performCalculation('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    performCalculation('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    performCalculation('divide');
});
