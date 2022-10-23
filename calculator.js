let numbers = document.getElementsByClassName('number')
let ce = document.getElementById('ce')
let cc = document.getElementById('cc')
let operators = document.getElementsByClassName('operator')
let calculate = document.getElementById('calc')

let number1 = 0;
let number2 = 0;
let lastResult = undefined;
let continueCalc = false;

let operation = undefined
let currentNumber = ''

calculate.addEventListener('click', function (){
    operate()
})

for (const btn of numbers) {
    btn.addEventListener('click', function (){
        if (continueCalc == true) {
            clearElements(1, true, false);
            changeNumber(this.id, 2)
        }
        else if (operation == undefined) {
            changeNumber(this.id, 1)
        }
        else {
            console.log(`Continue calc: ${continueCalc}`)
            console.log(`Operation: ${operation}`)
            changeNumber(this.id, 2)
        }
    })
}

for (const btn of operators) {
    btn.addEventListener('click', function (){
        if (lastResult !== undefined) {
            clearElements(1, false, false);
            changeOperation(this.id);
            console.log(`Last result: ${operation}}`)
            changeNumber(lastResult, 1);
        }
        changeOperation(this.id);
    }
)}

cc.addEventListener('click', function () { clearElements (3, true, true);})

function changeNumber (number, position) {
    if (position == 1) {
        let input = document.getElementById('number1')
        currentNumber = currentNumber.concat(number)
        number1 = parseInt(currentNumber);
        input.innerText = number1;
    } else {
        let input = document.getElementById('number2')
        currentNumber = currentNumber.concat(number)
        number2 = parseInt(currentNumber);
        input.innerText = currentNumber;
    }
}

function changeOperation (op) {
    let input = document.getElementById('operation')
    currentNumber = ''
    operation = op;
    if (operation == 'divide') {
        input.innerText = ' ÷ ';
    }
    else if (operation == 'multiply'){
        input.innerText = ' × ';
    }
    else if (operation == 'add') {
        input.innerText = ' + ';
    }
    else if (operation == 'subtract') {
        input.innerText = ' − ';
    }
}

function operate () {
    let input = document.getElementById('result')
    let result = 0;
    if (operation == 'divide') {
        result = divide(number1, number2)
    }
    else if (operation == 'multiply'){
        result = multiply(number1, number2)
    }
    else if (operation == 'add') {
        result = add(number1, number2)
    }
    else if (operation == 'subtract') {
        result = subtract(number1, number2)
    }
    input.innerText = result;
    lastResult = result;
    clearElements(0, false, true);
}

function clearElements (elements, memory = false, operation = false) {
    let element = document.getElementsByClassName('screeElement');
    [number1, number2] = [0,0];
    currentNumber = '';
    if (elements == 1) {
        for (i = 0; i < 3; i++) { element[i].innerText = ''};
    }
    else if (elements == 2) {
        for (i = 0; i < 3; i++) { element[i].innerText = ''};
        element[3].innerText = 0;
    }
    else if (elements == 3) {
        for (i = 0; i < 3; i++) { element[i].innerText = ''};
        element[3].innerText = 0;
    }
    if (memory == true) {
        lastResult = undefined;
        continueCalc = false;
    }
    if (operation == true) {
        console.log('limpei operation?')
        operation = undefined;
        console.log(`Operation ${operation}`)
    }
}


function add (a, b) { return a + b};
function subtract (a, b) {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {return a / b};


