let numbers = document.getElementsByClassName('number')
let ce = document.getElementById('ce')
let cc = document.getElementById('cc')
let operators = document.getElementsByClassName('operator')
let calculate = document.getElementById('calc')

let number1 = undefined;
let number2 = undefined;

let answer = undefined;

let operation = undefined
let currentNumber = ''

calculate.addEventListener('click', function (){
    operate()
})

for (const btn of numbers) {
    btn.addEventListener('click', function (){
        if (operation == undefined) {
            if (answer != undefined ) {
                clearElements(3, false);
                clearMemory(3, true, true);
            }
            changeNumber(this.id, 1)
        }
        else if (number1 !== undefined && operation !== undefined) {
            changeNumber(this.id, 2)
        }
    })
}

for (const btn of operators) {
    btn.addEventListener('click', function (){
        if (number1 !== undefined) {
            changeOperation(this.id)
        }
        else if (number2 !== undefined) {
            operate();
            changeOperation(this.id)
        }
    }
)}

ce.addEventListener('click', function () {
    if (operation == undefined) {
        if (answer != undefined ) {
            clearElements(3, false);
            clearMemory(3, true, true);
        }
        clearEntry(1);
    }
    else if (number1 !== undefined && operation !== undefined) {
        clearEntry(2);
    }
})

cc.addEventListener('click', function () {
    clearElements(3, true);
    clearMemory(3, true, true);
})

function changeNumber (number, position) {
    if (position == 1) {
        let input = document.getElementById('number1')
        currentNumber = currentNumber.concat(number)
        number1 = parseInt(currentNumber);
        input.innerText = number1;
    }
    else if (position == 2) {
        let input = document.getElementById('number2')
        currentNumber = currentNumber.concat(number)
        number2 = parseInt(currentNumber);
        input.innerText = currentNumber;
    }
}


function clearEntry (position = 1) {
    if (position == 1 && currentNumber !== '') {
        let input = document.getElementById('number1')
        currentNumber = currentNumber.slice(0, -1);
        if (currentNumber == '') {
            number1 = 0;
        } else {number1 = parseInt(currentNumber);}
        input.innerText = number1;
    }
    else if (position == 2 && currentNumber !== '') {
        let input = document.getElementById('number2')
        currentNumber = currentNumber.slice(0, -1);
        if (currentNumber == '') {
            number2 = 0;
        } else {number2 = parseInt(currentNumber);}
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
    answer = result;
    clearElements(2);
    clearMemory(2, true);
    changeNumber(result, 1)
}

function clearElements (input, result = false) {
    let element = document.getElementsByClassName('screeElement');
    if (input == 1) {
        element[0].innerText = '';
    } else if (input == 2) {
        element[1].innerText = '';
        element[2].innerText = '';
    }
    else if (input == 3) {
        for (i = 0; i < 3; i++) { element[i].innerText = ''};
    }
    if (result == true) {
        element[3].innerText = 0;
    }
}

function clearMemory (number, op = false, ans = false) {
    currentNumber = '';
    if (number == 1) {
        number1 = undefined
    }
    else if (number == 2) {
        number2 = undefined
    }
    else if (number == 3) {
        [number1, number2] = [undefined,undefined];
    }
    if (op == true ) {
        operation = undefined;
    }
    if (ans == true) {
        answer = undefined
    }
}


function add (a, b) { return a + b};
function subtract (a, b) {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {
    if (a === 0 || b === 0) {
        return 'Infinity'
    }
    return a / b
};
