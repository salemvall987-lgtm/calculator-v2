let myDisplay = '0';
let stored = '';
let pendingOperator = '';
let startNewNumber = false;

function add(a,b) {
    return a+b;
}
function minus(a,b) {
    return a-b;
}
function times(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": 
            return add(a,b);
        case "-": 
            return minus(a,b);
        case '*': 
            return times(a,b);
        case '/': 
            if (b===0) {
                return 'error';
            } else {
                return divide(a,b);
            }
        default:
            return null
    }
}

function showDisplay() {
    let display = document.querySelector('.display');
    display.textContent = myDisplay;
    return display;
}
showDisplay();

function onDigits() {
    let digits = document.querySelectorAll('.digits');
    digits.forEach((digit) => {
        digit.addEventListener('click', (e) => {
            if (startNewNumber===true || myDisplay ==='0') {
                myDisplay = e.target.textContent;
                showDisplay();
                startNewNumber = false;
            } else {
                myDisplay += e.target.textContent;
                showDisplay();
                startNewNumber = false;
            }
        })
    });
} 
onDigits();
