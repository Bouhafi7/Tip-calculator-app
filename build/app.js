let billInput = document.querySelector('.bill-input');
let numberPeopleInput = document.querySelector('.numberPeople-input');
let customInput = document.querySelector('.custom-input');
let tipsContainer = document.querySelector('.tips');

let tipAmount = document.querySelector('.amount');
let total = document.querySelector('.total-per-person');
let resetBtn = document.querySelector('.reset');
let tip = document.querySelector('.active');

if (numberPeopleInput.value == '' || billInput.value == '' || customInput.value =='') {
    tipAmount.innerText = '0.00';
    total.innerText = '0.00';
}

let tips = document.querySelectorAll('.tips > button');
tips.forEach(tip => {
    tip.addEventListener('click', (e) => {
        let tips = document.querySelectorAll('.tips > button');
        tips.forEach(tip => {
            tip.classList.remove('active');
        });
        e.target.classList.add('active');
        calculateTipTotal();
    });
    resetBtn.addEventListener('click', () => {
        resetAll();
    });
    customInput.addEventListener('click', () => {
        let tipActive = document.querySelector('.tips > .active');
        if (tipActive) {
            tipActive.classList.remove('active');
        }
    });
});


let billError = document.querySelector('.bill-error');
let numberPeopleError = document.querySelector('.numberPeople-error');
let customError = document.querySelector('.custom-error');


billInput.addEventListener('input', () => {
    let billRegex = /^[0-9]+(\.[1-9-0]+)?$/;

    if (billRegex.test(billInput.value) == false){
        billInput.style.border = '2px solid red';
        billError.style.display = 'block';
        billError.textContent = 'Wrong Format';
    } else if (billInput.value == '0') {
        billInput.style.border = '2px solid red';
        billError.style.display = 'block';
        billError.textContent = "Can't be zero";
    } else {
        billInput.style.border = '2px solid hsl(172, 67%, 45%)';
        billError.style.display = 'none';
        calculateTipTotal();
        controlTipAmount();
        resetAmountAndtip();
    }
});


customInput.addEventListener('input', () => {
    let customRegex = /^[0-9]+([.][0-9]+)?$/;

    if (customRegex.test(customInput.value) == false){
        customInput.style.border = '2px solid red';
        customError.style.display = 'block';
        customError.textContent = 'Wrong Format';
    } else if (customInput.value == '0') {
        customInput.style.border = '2px solid red';
        customError.style.display = 'block';
        customError.textContent = "Can't be zero";
    } else {
        customInput.style.border = '2px solid hsl(172, 67%, 45%)';
        customError.style.display = 'none';
        calculateTipTotal();
        controlTipAmount();
        resetAmountAndtip();
    }
});



numberPeopleInput.addEventListener('input', () => {
    let peopleRegex = /^[0-9]+([1-9]+)?$/;

    if (peopleRegex.test(numberPeopleInput.value) == false) {
        numberPeopleInput.style.border = '2px solid red';
        numberPeopleError.style.display = 'block';
        numberPeopleError.textContent = 'Wrong Format';
    }  else if (numberPeopleInput.value == '0') {
        numberPeopleInput.style.border = '2px solid red';
        numberPeopleError.style.display = 'block';
        numberPeopleError.textContent = "Can't be zero";
    } else if (numberPeopleInput.value > 15) {
        numberPeopleInput.style.border = '2px solid red';
        numberPeopleError.style.display = 'block';
        numberPeopleError.textContent = 'The Maximum Is 15';
    } else {
        numberPeopleInput.style.border = '2px solid hsl(172, 67%, 45%)';
        numberPeopleError.style.display = 'none';
        calculateTipTotal();
        // controlTipAmount();
        resetAmountAndtip();
    }
});


function resetAmountAndtip() {
    if (tipAmount.innerText == '0.00' && total.innerText == '0.00') {
        resetBtn.classList.add('pointer');
    } else {
        resetBtn.classList.remove('pointer');
    }
};


function calculateTipTotal() {
    let tip = document.querySelector('.active');
    let customTip = customInput.value * 0.01;
    if (customInput) {
        tipAmount.innerText = ((parseInt(billInput.value) * customTip) / parseInt(numberPeopleInput.value)).toFixed(2);
    }
    if (tip) {
        tipAmount.innerText = ((billInput.value * tip.value) / numberPeopleInput.value).toFixed(2);
    }
    total.innerText = ((parseInt(billInput.value) / parseInt(numberPeopleInput.value)) + parseInt(tipAmount.innerText)).toFixed(2);
};


function controlTipAmount() {
    if (billInput.value == '' || numberPeopleInput.value == '' || customInput.value == '') {
        tipAmount.innerText = '0.00';
        total.innerText = '0.00';
    } else {
        total.innerText = ((parseInt(billInput.value) / parseInt(numberPeopleInput.value)) + parseInt(tipAmount.innerText)).toFixed(2);
    }
};


function resetAll() {
    tipAmount.innerText = '0.00';
    total.innerText = '0.00';
    billInput.value = '';
    numberPeopleInput.value = '';
    customInput.value = '';
    resetBtn.classList.add('pointer');

    billInput.style.border = '2px solid hsl(189, 41%, 97%)';
    billError.style.display = 'none';
    numberPeopleInput.style.border = '2px solid hsl(189, 41%, 97%)';
    numberPeopleError.style.display = 'none';
    customInput.style.border = '2px solid hsl(189, 41%, 97%)';
    customError.style.display = 'none';

    let tipActive = document.querySelector('.tips > .active');
    if (tipActive) {
        tipActive.classList.remove('active');
    }
};