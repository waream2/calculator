let display = document.querySelector(".display-screen");
let buttons = document.querySelectorAll(".calc");
let addButton = document.getElementById("add")
let subButton = document.getElementById("sub")
let multButton = document.getElementById("mult")
let diviButton = document.getElementById("divi")

let firstValue = "";
let secondValue = ""; 
let operatorValue = "";
let isFirst = false;
let isAnswer = false;
let answer = "";

function operate(firstNumber, operator, secondNumber) {

    if (firstNumber == "")
        answer = secondNumber

    else if (firstNumber.endsWith(".") || secondNumber.endsWith("."))
        answer = "Error"

    else if (firstNumber != "" && isAnswer == true && secondNumber == "")
        answer = answer

    else if (secondNumber == "" && answer == "")
        answer = "Error"

    else if (firstNumber == "" || secondNumber == "")
        answer = "Error"

    else if (firstNumber == "" || secondNumber == "" && answer != "") {
        answer = answer;
    }
    else if (operator == "+") {
        answer = parseFloat(firstNumber) + parseFloat(secondNumber);
    }
    else if (operator == "-") {
        answer = parseFloat(firstNumber) - parseFloat(secondNumber);
    }
    else if (operator == "x") {
        answer = parseFloat(firstNumber) * parseFloat(secondNumber);
    }
    else if (operator == "/") {
        answer = parseFloat(firstNumber) / parseFloat(secondNumber);
        if (secondNumber == 0){
            answer = "Boiii"
        }
    }
    
    removeDisplay();

    if (typeof(answer) == "string") {
        display.textContent += answer
    }
    else {
        if (numberTest(answer) == true) 
            display.textContent += answer.toFixed(1)
        else
            display.textContent += answer

    firstValue = answer.toString();
    secondValue = "";  
}};

for (let i=0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
        
        if (buttons[i].classList.contains("num")) {
            inputNum(buttons[i].textContent);
            addButton.classList.remove("button-activated")
            subButton.classList.remove("button-activated")
            multButton.classList.remove("button-activated")
            diviButton.classList.remove("button-activated")
            
    
        };
        
        if (buttons[i].classList.contains("op")) {
            inputOp(buttons[i].textContent)
            if (buttons[i].textContent == "+"){
                addButton.className += " button-activated"
                subButton.classList.remove("button-activated")
                diviButton.classList.remove("button-activated")
                multButton.classList.remove("button-activated")
            }

            else if (buttons[i].textContent == "-") {
                subButton.className += " button-activated"
                addButton.classList.remove("button-activated")
                diviButton.classList.remove("button-activated")
                multButton.classList.remove("button-activated")
            }

            else if (buttons[i].textContent == "x"){
                multButton.className += " button-activated"
                subButton.classList.remove("button-activated")
                diviButton.classList.remove("button-activated")
                addButton.classList.remove("button-activated")
            }
            else if (buttons[i].textContent == "/"){
                diviButton.className += " button-activated"
                subButton.classList.remove("button-activated")
                addButton.classList.remove("button-activated")
                multButton.classList.remove("button-activated")
            }
        };

        if (buttons[i].classList.contains("equals")) {
            operate((firstValue), operatorValue, (secondValue));
            // actButt.classList.remove("button-activated") 
        };

        if (buttons[i].classList.contains("clear")) {
            removeDisplay();
            firstValue = "";
            secondValue = "";
            operatorValue = "";
            answer = "";
            isFirst = false;
            isAnswer = false;
            addButton.classList.remove("button-activated")
            subButton.classList.remove("button-activated")
            multButton.classList.remove("button-activated")
            diviButton.classList.remove("button-activated")
            
        }

    });
};

function inputNum(num) {

    if (isAnswer == true && secondValue == ""){
        removeDisplay();
    }

    display.textContent += num;

    if (isFirst == false) {
        firstValue += num;
    }
    else
        secondValue += num;

    if (display.textContent.includes("+") || display.textContent.includes("-") || display.textContent.includes("x") || display.textContent.includes("/")) {
        removeDisplay();
    
    if (isAnswer == true)
        removeDisplay();
        display.textContent += num

    
}};

function inputOp(op) {
    
    if (firstValue != "" && secondValue != "") {
        operate((firstValue), operatorValue, (secondValue))
        isAnswer  = true;
    }

    //added to fix first answer blank and second answer not
    if (firstValue == "" && isAnswer == true) {
        firstValue = secondValue;
        secondValue = "";
    }

    operatorValue = op;
    isFirst = true;
    isAnswer = true;
    
    
    
};

function removeDisplay() {
    display.textContent = "";
};

function numberTest(answer) {
    let result = (answer - Math.floor(answer)) !== 0;
    if (result == true)
        return true
    else
        return false
};

