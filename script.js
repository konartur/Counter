let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let result = document.querySelector('.result');
let count = 0;

btnMinus.addEventListener('click', () => {
    count--;
    result.innerHTML = count;
});

btnPlus.addEventListener('click', () => {
    count++;
    result.innerHTML = count;
});