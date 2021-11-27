let firstInput = document.getElementById("first-number");
let secondInput = document.getElementById("second-number");
let operator = document.getElementById("operator");
let equal = document.getElementById("equal");
let result = document.getElementById("result");

equal.addEventListener("click", count);

// operator.addEventListener("change", count);
function count () {
    let answer = null;
    let num1 = parseFloat(firstInput.value);
    let num2 = parseFloat(secondInput.value);

    switch(operator.value) {
        case "+":
                answer = num1 + num2;
                console.log(answer);
                break;
        case "-":
            answer = num1 - num2;
                break;
        case "*":
            answer = num1 * num2;
                break;
        case "/":
            answer = num1 / num2;
                break;
    }
    
    result.value  = answer; 
}