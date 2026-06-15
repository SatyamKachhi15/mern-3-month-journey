const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const operation = document.getElementById("operation");

const calculateBtn =
document.getElementById("calculateBtn");

const result =
document.getElementById("result");

function calculate(a, b, operator){

    switch(operator){

        case "+":
            return a + b;

        case "-":
            return a - b;

        case "*":
            return a * b;

        case "/":

            if(b === 0){
                return "Cannot divide by zero";
            }

            return a / b;

        default:
            return "Invalid Operation";
    }
}

calculateBtn.addEventListener("click", () => {

    const firstNumber = Number(num1.value);
    const secondNumber = Number(num2.value);

    const answer = calculate(
        firstNumber,
        secondNumber,
        operation.value
    );

    result.textContent =
    `Result: ${answer}`;

});