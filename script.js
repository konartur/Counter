let allButtons = document.getElementsByClassName('counter_buttons');
let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let btnReset = document.querySelector('.btn_reset');
let btnRandom = document.querySelector('.btn_rndm');
let result = document.querySelector('.result');
let resultStep = document.getElementById('result-step');

let calc = new Count();
result.innerHTML = calc.count;

function view () {
    result.innerHTML = calc.count;
}

//События для каждой кнопки

btnMinus.addEventListener('click', () => {
    calc.minus();
    view();
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    view();
});

btnReset.addEventListener('click', () => {
    calc.reset();
    view();
})

btnRandom.addEventListener('click', () => {
    calc.random(0,100);
    view();
})

resultStep.addEventListener('change', () => {
    result.innerHTML = resultStep.value;
    calc.count = resultStep.value;
})

