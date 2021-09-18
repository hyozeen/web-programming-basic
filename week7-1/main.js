// main.js
window.onload = function () {
    let result = prompt('구구단 몇 단이 궁금하십니까?', '');
    showGugudan(result);
};

function showGugudan(number) {
    document.getElementById('number1').innerText = number * 1;
    document.getElementById('number2').innerText = number * 2;
    document.getElementById('number3').innerText = number * 3;
    document.getElementById('number4').innerText = number * 4;
    document.getElementById('number5').innerText = number * 5;
    document.getElementById('number6').innerText = number * 6;
    document.getElementById('number7').innerText = number * 7;
    document.getElementById('number8').innerText = number * 8;
    document.getElementById('number9').innerText = number * 9;
}
