

let cc = document.getElementById('cc')
cc.addEventListener('click', function () {
    let element = document.getElementsByClassName('screeElement');
    element[0].innerHTML = '';
    element[1].innerHTML = '';
})


function add (a, b) { return a + b};
function subtract (a, b) {return a - b};
function multiply (a, b) {return a * b};
function divide (a, b) {return a / b};

function clearContent () {

}