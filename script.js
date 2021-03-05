const allButtons = document.getElementsByClassName('counter_buttons');
const btnMinus = document.querySelector('.btn_minus');
const btnPlus = document.querySelector('.btn_plus');
const btnReset = document.querySelector('.btn_reset');
const btnRandom = document.querySelector('.btn_rndm');
const result = document.querySelector('.result');
const resultStep = document.getElementById('result-step');
const stepLabel = document.querySelector('.step-label');

//Значение для шага
let currentStep = 1;

const calc = new Count(0, currentStep);
function render () {
    result.innerHTML = calc.count;
}
render();

resultStep.addEventListener('change', () => {
    currentStep = resultStep.value;
    stepLabel.innerHTML = resultStep.value;
    calc.stepState = currentStep;
});
//События для каждой кнопки

btnMinus.addEventListener('click', () => {
    calc.minus();
    render();
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    render();
    console.log(currentStep);
});

btnReset.addEventListener('click', () => {
    calc.reset();
    render();
})

btnRandom.addEventListener('click', () => {
    calc.random(0,10);
    render();
})



