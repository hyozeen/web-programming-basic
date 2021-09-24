// main.js
window.onload = function () {
    let result = prompt('구구단 몇 단이 궁금하십니까?', '');
    showGugudan(result);
};

function showGugudan(number) {
    for (let i = 1; i < 10; i++) {
        document.getElementById('number' + i).innerText = number + ' X ' + i + ' = ' + number * i;
    }
}
