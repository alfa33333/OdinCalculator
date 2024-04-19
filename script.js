const display = document.querySelector("#display");

const operation = {
  firstNum: 0,
  secondNum: 0,
  operator: "",
  result: 0,
};

let startNumber = true;
let lockkeys = false;

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
  return a * b;
}

function divide(a, b) {
  // Code goes here
  if (b == 0) {
    return "Error";
  }
  return a / b;
}

function operate(operator, firsNum, secondNum) {
  switch (operator) {
    case "+":
      return add(firsNum, secondNum);
    case "-":
      return subtract(firsNum, secondNum);
    case "*":
      return multiply(firsNum, secondNum);
    case "/":
      return divide(firsNum, secondNum);
  }
}

function append(key) {
  if (lockkeys == false) {
    if (isNaN(parseInt(key))) {
      switch (key) {
        case "=":
          calculate();
          resetOperation();
          startNumber = true;
          break;
        case ".":
          if (!display.value.includes(".") && startNumber == false) {
            display.value += key;
          } else if (startNumber == true) {
            display.value = "0" + key;
            startNumber = false;
          }
          break;
        default:
          if (operation.operator != "") {
            calculate();
            operation.firstNum = operation.result;
          } else {
            operation.firstNum = parseFloat(display.value);
          }
          startNumber = true;
          operation.operator = key;
          break;
      }
    } else if (startNumber == true) {
      display.value = key;
      startNumber = false;
    } else {
      display.value += key;
    }
  }
}

function calculate() {
  if (startNumber != true) {
    operation.secondNum = parseFloat(display.value);
    operation.result = operate(
      operation.operator,
      operation.firstNum,
      operation.secondNum
    );
    if (operation.result == "Error") {
      display.value = "Error";
      lockkeys = true;
    } else {
      display.value = parseFloat(operation.result.toFixed(8));
      // resetOperation();
    }
  }
}

function resetOperation() {
  operation.firstNum = 0;
  operation.secondNum = 0;
  operation.operator = "";
  operation.result = 0;
}

function clearDisplay() {
  display.value = "0";
  resetOperation();
  startNumber = true;
  lockkeys = false;
}
