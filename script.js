let allButtons = document.getElementsByClassName('counter_buttons');
let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let btnReset = document.querySelector('.btn_reset');
let btnRandom = document.querySelector('.btn_rndm');
let result = document.querySelector('.result');
let resultStep = document.getElementById('result-step');
let stepLabel = document.querySelector('.step-label');

let calc = new Count(0, resultStep.step);

function render () {
    result.innerHTML = calc.count;
}
render();

resultStep.step = resultStep.value;
calc.step();

//События для каждой кнопки

btnMinus.addEventListener('click', () => {
    calc.minus();
    calc.step();
    render();
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    render();
});

btnReset.addEventListener('click', () => {
    calc.reset();
    render();
})

btnRandom.addEventListener('click', () => {
    calc.random(0,10);
    render();
})

resultStep.addEventListener('change', () => {
    stepLabel.innerHTML = resultStep.value;
})

