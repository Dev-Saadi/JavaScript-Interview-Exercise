const firstNumberInput = document.getElementById("firstNumber");
const secondNumberInput = document.getElementById("secondNumber");
const operatorsInput = document.getElementById("operators");
const calculatebtn = document.getElementById("calculate");
const resultDisplay = document.getElementById("result");
const reset = document.getElementById("resetbtn");

function calculate() {
  const firstNumber = parseFloat(firstNumberInput.value);
  const secondNumber = parseFloat(secondNumberInput.value);
  const operators = operatorsInput.value;

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    resultDisplay.textContent = "Enter valid numbers";
    return;
  }

  if (operators === "+") {
    result = firstNumber + secondNumber;
  } else if (operators === "-") {
    result = firstNumber - secondNumber;
  } else if (operators === "*") {
    result = firstNumber * secondNumber;
  } else if (operators === "/") {
    if (secondNumber === 0) {
      resultDisplay.textContent = "Divison by 0 not allowed";
      return;
    }
    result = firstNumber / secondNumber;
  }

  resultDisplay.textContent = "Result: " + result;
}
calculatebtn.addEventListener("click", calculate);

function refresh() {
  firstNumberInput.value = "";
  secondNumberInput.value = "";
  operatorsInput.value = "+";

  resultDisplay.textContent = "Result: ";
}

reset.addEventListener("click", refresh);
