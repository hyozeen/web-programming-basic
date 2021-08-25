let result = 0;
const outputEl = document.getElementById('output');

const pressAc = () => {
    console.log('press Ac');
    result = 0;
    displayResult('');
};

const pressPlusMinus = () => {
    result = result + 0;
    console.log('press PlusMinus');
};

const pressPercent = () => {
    console.log('press Percent');
};

const pressDivision = () => {
    console.log('press Division');
};

const press7 = () => {
    console.log('press 7');
};

const press8 = () => {
    console.log('press 8');
};

const press9 = () => {
    console.log('press 9');
};

const pressMultiply = () => {
    console.log('press Multiply');
};

const press4 = () => {
    console.log('press 4');
};

const press5 = () => {
    console.log('press 5');
};

const press6 = () => {
    console.log('press 6');
};

const pressMinus = () => {
    console.log('press Minus');
};

const pressAc = () => {
    console.log('press Ac');
};

const press1 = () => {
    console.log('press 1');
};

const press2 = () => {
    console.log('press 2');
};

const press3 = () => {
    console.log('press 3');
};
const pressPlus = () => {
    console.log('press Plus');
};

const press0 = () => {
    console.log('press 0');
};

const pressPoint = () => {
    console.log('press Point');
};

const pressEqual = () => {
    console.log('press Equal');
    displayResult(result);
};

const displayResult = (message) => {
    outputEl.innerHTML = message;
};
