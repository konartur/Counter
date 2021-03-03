let btnMinus = document.querySelector('.btn_minus');
let btnPlus = document.querySelector('.btn_plus');
let result = document.querySelector('.result');
class Count {
    constructor(count) {
        this.count = count;
    }

    minus() {
        this.count--;
        result.innerHTML = this.count;
    }

    plus() {
        this.count++;
        result.innerHTML = this.count;
    }


}

let calc = new Count(0);

btnMinus.addEventListener('click', calc.minus());
btnPlus.addEventListener('click', calc.plus());