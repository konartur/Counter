let allButtons = document.getElementsByClassName('counter_buttons');
let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let btnReset = document.querySelector('.btn_reset');
let btnRandom = document.querySelector('.btn_rndm');
let result = document.querySelector('.result');
let resultStep = document.getElementById('result-step');

let calc = new Count();
result.innerHTML = calc.count;

//События для каждой кнопки

btnMinus.addEventListener('click', () => {
    calc.minus();
    calc.view(calc.count,result);
    // result.innerHTML = calc.count;
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    calc.view(calc.count,result);
    // result.innerHTML = calc.count;
});

btnReset.addEventListener('click', () => {
    calc.reset();
    calc.view(calc.count,result);
    // result.innerHTML = calc.count;
})

btnRandom.addEventListener('click', () => {
    calc.random(0,100);
    calc.view(calc.count,result);
    // result.innerHTML = calc.count;
})

resultStep.addEventListener('change', () => {
    result.innerHTML = resultStep.value;
    calc.count = resultStep.value;
})

