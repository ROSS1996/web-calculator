let numbers = document.getElementsByClassName('number')
let ce = document.getElementById('ce')
let cc = document.getElementById('cc')
let operators = document.getElementsByClassName('operator')
let calculate = document.getElementById('calc')

let number1 = 0;
let number2 = 0;

let operation = undefined
let currentNumber = ''
let displayOperation = '';


calculate.addEventListener('click', function (){
    number2 = parseInt(currentNumber)
    operate()
})

for (const btn of numbers) {
    btn.addEventListener('click', function (){ changeNumber(this.id)})
}

for (const btn of operators) {
    btn.addEventListener('click', function (){
        operation = this.id;
        number1 = parseInt(currentNumber, 10)
        currentNumber = ''
        if (operation == 'divide') {
            showOperation(' ÷ ', operation)
        }
        else if (operation == 'multiply'){
            showOperation(' × ', operation)
        }
        else if (operation == 'add') {
            showOperation(' + ', operation)
        }
        else if (operation == 'subtract') {
            showOperation(' − ', operation)
        }
        else {
            return false
        }
    }
)}


cc.addEventListener('click', function () {
    let element = document.getElementsByClassName('screeElement');
    element[0].innerText = '';
    element[1].innerText = '';
    number1 = 0;
    number2 = 0;
    result = 0;
    operation = undefined
    currentNumber = ''
    displayOperation = '';
})

function changeNumber (number) {
    let input = document.getElementById('input')
    currentNumber = currentNumber.concat(number)
    displayOperation = displayOperation.concat(number)
    input.innerText = displayOperation;
}

function showOperation (symbol, operation) {
    let input = document.getElementById('input')
    displayOperation = displayOperation.concat(symbol)
    input.innerText = displayOperation;
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
}

function logNumbers () {
    console.log(`Number 1: ${number1}`)
    console.log(`Number 2: ${number2}`)
}

function add (a, b) { return a + b};
function subtract (a, b) {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {return a / b};


