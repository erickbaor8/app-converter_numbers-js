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
    if (value.includes('(2)')) 
        return print([
            binToBin(value), 
            binToDec(value.slice(3)), 
            binToHex(value.slice(3)), 
            binToOct(value.slice(3))
        ]);
}

function binToBin(value) {
    return value.slice(3);
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

function binToHex(value) {
    let start = value.length;
    let end = start - 4;
    let hex = '';

    while (start >= 0) {
        let str = value.substring(end, start);
        hex += hexCharacter(binToDec(str));

        start = end;
        end = start - 4;
    }

    return hex.split('').reverse().join('');
}

function binToOct(value) {
    let start = value.length;
    let end = start - 3;
    let hex = '';

    while (start >= 0) {
        let str = value.substring(end, start);
        hex += binToDec(str);

        start = end;
        end = start - 3;
    }

    return hex.split('').reverse().join('');
}

function print(values) { 
    let formats = ['Binary', 'Decimal', 'Hexadecimal', 'Octal']
    
    for (let i=0; i < formats.length; i++) {
        let elem = document.createElement('div');
        elem.className = 'result';
        elem.innerHTML = `<h2>${formats[i]}</h2><p class="value">${values[i]}</p>`;
        outputNumber.append(elem);
        elem = null;
    }
}

function hexCharacter(decimal) {
    switch (decimal) {
        case 0: return '0'; 
        case 1: return '1';
        case 2: return '2'; 
        case 3: return '3';
        case 4: return '4'; 
        case 5: return '5';
        case 6: return '6'; 
        case 7: return '7';
        case 8: return '8'; 
        case 9: return '9';
        case 10: return 'A'; 
        case 11: return 'B';
        case 12: return 'C'; 
        case 13: return 'D';
        case 14: return 'E'; 
        case 15: return 'F'; 
    }
}