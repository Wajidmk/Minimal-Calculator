let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function setOperator(op) {
    if (currentInput === '') return;
    operator = op;
    firstNumber = currentInput;
    currentInput = '';
}

function calculate() {
    if (currentInput === '' || firstNumber === '') return;
    let result;
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            return;
    }
    display.value = result;
    currentInput = result.toString();
    operator = '';
    firstNumber = '';
}

function clearDisplay() {
    display.value = '';
    currentInput = '';
    operator = '';
    firstNumber = '';
}
