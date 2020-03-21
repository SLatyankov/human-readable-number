module.exports = function toReadable(number) {
    if (number == 0) {
        return ZERO;
    }
    var str = String(number);
    number = str.split('');
    if (number.length < 2) {
        number.unshift('0');
        number.unshift('0');
    } else if (number.length < 3) {
        number.unshift('0');
    }

    let x = '';
    if (number[0] != 0) {
        x = UNITS[number[0]] + HUNDREDS;
    }


    if (number[1] > 1) {
        if (x != '') {
           x += z + DOZENS[number[1]];
        } else {
         x += DOZENS[number[1]];   
        }
        
        if (number[2] != 0) {
            if (x != '') {
                x += z + UNITS[number[2]];
            } else {
                x += UNITS[number[2]];
            }
        }
        return x;
    }

    if (number[1] == 1) {
        if (x != '') {
            x += z + TEEN[number[2]];
        }else {
            x +=  TEEN[number[2]];
        }
       return x;
    }

    if (number[2] != 0) {
        if (x != '') {
            x += z + UNITS[number[2]];
        } else {
            x += UNITS[number[2]];
        }
    }
    return x;
}

const ZERO = 'zero';
const HUNDREDS = ' hundred';
const z = ' ';

const UNITS = {
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine',
};

const TEEN = {
    '0': 'ten',
    '1': 'eleven',
    '2': 'twelve',
    '3': 'thirteen',
    '4': 'fourteen',
    '5': 'fifteen',
    '6': 'sixteen',
    '7': 'seventeen',
    '8': 'eighteen',
    '9': 'nineteen',
};

const DOZENS = {
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety',
};
