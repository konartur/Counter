import Count from './Count';

let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let result = document.querySelector('.result');

let calc = new Count(0);

btnMinus.addEventListener('click', () => {
    calc.minus();
    result.innerHTML = this.count;
});

btnPlus.addEventListener('click', () => {
    calc.plus();
    result.innerHTML = this.count;
});