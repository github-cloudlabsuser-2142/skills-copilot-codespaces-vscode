// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed";
    }
    return a / b;
}

// Function to calculate the result based on operator and operands
function calculate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "*":
            return multiply(a, b);
        case "/":
            return divide(a, b);
        default:
            return "Error: Invalid operator";
    }
}

// Example usage
const operator = "+";
const operand1 = 5;
const operand2 = 3;
const result = calculate(operator, operand1, operand2);
console.log(`Result: ${result}`);


// Test case 1: Adding two positive numbers
console.log(add(2, 3)); // Output: 5

// Test case 2: Adding a positive and a negative number
console.log(add(5, -3)); // Output: 2

// Test case 3: Adding two negative numbers
console.log(add(-2, -3)); // Output: -5

// Test case 4: Adding zero to a number
console.log(add(5, 0)); // Output: 5

// Test case 5: Adding two decimal numbers
console.log(add(2.5, 3.7)); // Output: 6.2