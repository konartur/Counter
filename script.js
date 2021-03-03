let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let result = document.querySelector('.result');

let calc = new Count();
btnMinus.addEventListener('click', () => {
    calc.minus();
    result.innerHTML = calc.count;
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    result.innerHTML = calc.count;
});
