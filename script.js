 

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

console.log(operate("/", 2, 7));