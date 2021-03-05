const allButtons = document.getElementsByClassName('counter_buttons');
const btnMinus = document.querySelector('.btn_minus');
const btnPlus = document.querySelector('.btn_plus');
const btnReset = document.querySelector('.btn_reset');
const btnRandom = document.querySelector('.btn_rndm');
const result = document.querySelector('.result');
const resultStep = document.getElementById('result-step');
const stepLabel = document.querySelector('.step-label');

const calc = new Count();
function render () {
    result.innerHTML = calc.count;
}
render();

//Значение для шага
resultStep.addEventListener('change', () => {
    calc.currentStep = resultStep.value;
    stepLabel.innerHTML = resultStep.value;
    calc.stepupdate();
});

//События для каждой кнопки

btnMinus.addEventListener('click', () => {
    calc.minus();
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
    calc.random();
    render();
})



