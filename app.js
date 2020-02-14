'use strict';

let inputNumber = document.querySelector('#entryNumber');
let outputNumber = document.querySelector('.output-box');

inputNumber.addEventListener('keyup', event => {
    event.preventDefault();

    if (event.code === 'Enter') {
        convertNumber(inputNumber.value.trim());
    }
});

function convertNumber(value) {
    if (value.includes('(2)')) return print(binToDec(value.slice(3)));
}

function binToDec(value) { 
    let length = value.length - 1;
    let i = 0;
    let dec = 0;

    while (length >= 0) {
        dec += parseInt(value.charAt(i)) * Math.pow(2, length);
        length--;
        i++;
    }

    return dec;
}

function print(value) { 
    let elem = document.createElement('div');
    elem.className = 'result';
    elem.innerHTML = `<p>${value}</p>`;
    outputNumber.append(elem);
}