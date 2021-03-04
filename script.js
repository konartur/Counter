let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let btnReset = document.querySelector('.btn_reset');
let result = document.querySelector('.result');
let resultStep = document.getElementById('result-step');

let calc = new Count();
result.innerHTML = calc.count;

btnMinus.addEventListener('click', () => {
    calc.minus();
    result.innerHTML = calc.count;
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    result.innerHTML = calc.count;
});

btnReset.addEventListener('click', () => {
    calc.reset();
    result.innerHTML = calc.count;
})

resultStep.addEventListener('change', () => {
    result.innerHTML = resultStep.value;
})

