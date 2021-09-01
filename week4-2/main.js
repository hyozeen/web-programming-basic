let firstCardElement;
let secondCardElement;
let thirdCardElement;

window.onload = function () {
    firstCardElement = document.getElementById('first-card');
    secondCardElement = document.getElementById('second-card');
    thirdCardElement = document.getElementById('third-card');
};

function clickFirstCard() {
    firstCardElement.style.backgroundImage = 'url(' + getRandomCard() + ')';
}

function clickSecondCard() {
    secondCardElement.style.backgroundImage = 'url(' + getRandomCard() + ')';
}

function clickThirdCard() {
    thirdCardElement.style.backgroundImage = 'url(' + getRandomCard() + ')';
}

function getRandomCard() {
    const index = getRandomNumber(0, 19);
    const path = 'images/card/';
    return path + 'card' + index + '.png';
}

function getRandomNumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    return random;
}
