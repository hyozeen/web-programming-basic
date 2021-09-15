window.onload = function () {};

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

function clickCardpack() {
    //alert('카드팩이 열렸습니다!');
    let firstCard = document.getElementById('first-card');
    let secondCard = document.getElementById('second-card');
    let thirdCard = document.getElementById('third-card');
    let cardMessage = document.getElementById('card-message');

    firstCard.src = 'images/card/card0.png';
    secondCard.src = 'images/card/card1.png';
    thirdCard.src = 'images/card/card2.png';

    cardMessage.innerText = '카드가 열렸습니다!';
}
