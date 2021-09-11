let resultEl;
let result = 0;
let currentNumber = 0;

window.onload = function () {
    resultEl = document.getElementById('result');
};

function pressAc() {
    console.log('press Ac');
    result = 0;
    currentNumber = 0;
    displayResult();
}

function pressPlusMinus() {
    console.log('press PlusMinus');
}

function pressPercent() {
    console.log('press Percent');
}

function pressDivision() {
    console.log('press Division');
}

function press7() {
    console.log('press 7');
    currentNumber = 7;
}

function press8() {
    console.log('press 8');
    currentNumber = 8;
}

function press9() {
    console.log('press 9');
    currentNumber = 9;
}

function pressMultiply() {
    console.log('press Multiply');
}

function press4() {
    console.log('press 4');
    currentNumber = 4;
}

function press5() {
    console.log('press 5');
    currentNumber = 5;
}

function press6() {
    console.log('press 6');
    currentNumber = 6;
}

function pressMinus() {
    console.log('press Minus');
    result = result - currentNumber;
}

function press1() {
    console.log('press 1');
    currentNumber = 1;
}

function press2() {
    console.log('press 2');
    currentNumber = 2;
}

function press3() {
    console.log('press 3');
    currentNumber = 3;
}
function pressPlus() {
    console.log('press Plus');
    result = result + currentNumber;
}

function press0() {
    console.log('press 0');
    currentNumber = 0;
}

function pressPoint() {
    console.log('press Point');
}

function pressEqual() {
    console.log('press Equal');
    displayResult();
    currentNumber = 0;
}

function displayResult() {
    resultEl.innerText = result;
}
