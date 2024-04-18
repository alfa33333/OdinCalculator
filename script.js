const display = document.querySelector('#display');

const operation = {
        firstNum: 0,
        secondNum: 0,
        operator:'',
        result: 0,
    };

let startNumber = true;


function add(a, b) {
    // Code goes here
    return a + b;
}

function subtract(a, b) {
    // Code goes here
    return a - b;
}

function multiply(a, b) {
    // Code goes here
    return a*b;
}

function divide(a, b) {
    // Code goes here
    return a/b;
}

function operate(operator, firsNum, secondNum) {
    switch (operator) {
        case '+':
            return add(firsNum, secondNum);
        case '-':
            return subtract(firsNum, secondNum);
        case '*':
            return multiply(firsNum, secondNum);
        case '/':
            return divide(firsNum, secondNum);
    };
}

function append(key) {

    if (isNaN(parseInt(key)))
    {
        if (key != '.') {
        operation.operator = key;
        operation.firstNum = parseInt(display.value);   
        startNumber = true;
        }

    } else if (startNumber == true) {
        display.value = key;
        startNumber = false;
    } else {
        display.value += key;
    }
    
}

function calculate() {
    operation.secondNum = parseInt(display.value);
    operation.result = operate(operation.operator, operation.firstNum, operation.secondNum);
    display.value = operation.result;
}

function clearDisplay() {
    display.value = '0';
    operation.firstNum = 0;
    operation.secondNum = 0;
    operation.operator = '';
    operation.result = 0;
    startNumber = true;
}