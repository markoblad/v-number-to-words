"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var underscore_string_1 = require("underscore.string");
var mathjs_1 = require("mathjs");
var ZERO_TO_NINETEEN_MAP = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
];
var TWENTY_TO_NINETY_MAP = {
    '20': 'twenty',
    '30': 'thirty',
    '40': 'forty',
    '50': 'fifty',
    '60': 'sixty',
    '70': 'seventy',
    '80': 'eighty',
    '90': 'ninety',
};
var ILLIONS = [
    'thousand',
    'million',
    'billion',
    'trillion',
    'quadrillion',
    'quintillion',
    'sextillion',
    'septillion',
    'octillion',
    'nonillion',
    'decillion',
    'undecillion',
    'duodecillion',
    'tredecillion',
    'quattuordecillion',
    'quindecillion',
    'sexdecillion',
    'septendecillion',
    'octodecillion',
    'novemdecillion',
    'vigintillion',
    'unvigintillion',
    'dovigintillion',
    'trevigintillion',
    'quattuorvigintillion',
    'quinvigintillion',
    'sexvigintillion',
    'septenvigintillion',
    'octovigintillion',
    'novemvigintillion',
    'trigintillion',
    'untrigintillion',
    'dotrigintillion',
    'tretrigintillion',
    'quattuortrigintillion',
    'quintrigintillion',
    'sextrigintillion',
    'septentrigintillion',
    'octotrigintillion',
    'novemtrigintillion',
];
function isNumeric(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}
function isString(value) {
    return (typeof (value) === 'string');
}
function eachSlice(value, size, callback) {
    if (size === void 0) { size = 1; }
    for (var i = 0, l = value.length; i < l; i += size) {
        callback(value.slice(i, i + size));
    }
}
function parseBigOrZero(value) {
    return mathjs_1.bignumber(isNumeric(value) ? value : 0.0);
}
function parseZeroPaddedInt(value) {
    if (underscore_string_1.isBlank(value) || value === 0 || value === '0' || underscore_string_1.isBlank(value.toString().replace(/0/g, ''))) {
        return 0;
    }
    value = value.toString();
    var firstNonZeroIndex = value.search(/(?!0)/);
    return parseInt(value.slice(firstNonZeroIndex, value.length), 10);
}
function numberToWords(value) {
    var words = [], digits = '', decimals = '';
    if (typeof (value) === 'number') {
        var pieces = parseBigOrZero(value).toString().split('.').slice(0, 2);
        digits = pieces[0], _a = pieces[1], decimals = _a === void 0 ? '' : _a;
    }
    else if (isString(value) && (/\./).test(value)) {
        var str = underscore_string_1.trim(value).replace(/\$|\%|\,|\_/g, '');
        digits = str.split('.')[0];
        decimals = str.split('.')[1] || '';
    }
    else {
        digits = underscore_string_1.trim(value).replace(/\$|\%|\,|\_/g, '');
        decimals = '';
    }
    decimals = decimals.replace(/0+$/g, '');
    lodash_1.each(lodash_1.reject([digits, decimals], function (i) {
        return !i || i.length === 0;
    }), function (numberSet, numberSetIndex) {
        var isDecimals = numberSetIndex === 1;
        if (isDecimals && decimals.length > 0)
            words.push('and');
        if (!isDecimals && parseZeroPaddedInt(numberSet) === 0) {
            words.push('zero');
        }
        else if (isDecimals && parseZeroPaddedInt(numberSet) === 0) {
            // do nothing
        }
        else {
            var numberZerosToAdd = ((numberSet.length % 3) === 0 ? 0 : 3 - (numberSet.length % 3));
            lodash_1.times(numberZerosToAdd, function (i) {
                numberSet = (isDecimals ? (numberSet + '0') : ('0' + numberSet));
            });
            var index_1 = 0;
            var sliceCount = Math.floor(numberSet.length / 3);
            var lastIndex_1 = sliceCount - 1;
            var splitNumberSet = numberSet.split('');
            eachSlice(splitNumberSet, 3, function (numberPiece) {
                var number = parseZeroPaddedInt(numberPiece.join(''));
                var hundreds = Math.floor(number / 100);
                var tens = Math.floor((number - (hundreds * 100)) / 10);
                var ones = Math.floor((number - (hundreds * 100) - (tens * 10)));
                // let ones = parseZeroPaddedInt(number.toString().substr(number.toString().length - 1));
                if (isDecimals && decimals.length === 1) {
                    words.push(ZERO_TO_NINETEEN_MAP[hundreds]);
                    words.push((words[words.length - 2] === 'and' && lodash_1.last(words) === 'one') ?
                        'tenth' : 'tenths');
                }
                else if (isDecimals && decimals.length === 2) {
                    if (hundreds < 2 && (hundreds > 0 || tens > 0)) {
                        words.push(ZERO_TO_NINETEEN_MAP[10 * hundreds + tens]);
                    }
                    else if (hundreds >= 2) {
                        words.push(TWENTY_TO_NINETY_MAP[hundreds * 10]);
                        if (tens > 0)
                            words.push(ZERO_TO_NINETEEN_MAP[tens]);
                    }
                    words.push((words[words.length - 2] === 'and' && lodash_1.last(words) === 'one') ?
                        'one-hundreth' : 'one-hundreths');
                }
                else {
                    if (hundreds > 0) {
                        words.push(ZERO_TO_NINETEEN_MAP[hundreds], 'hundred');
                    }
                    if (tens < 2 && (tens > 0 || ones > 0)) {
                        words.push(ZERO_TO_NINETEEN_MAP[10 * tens + ones]);
                    }
                    else if (tens >= 2) {
                        words.push(TWENTY_TO_NINETY_MAP[tens * 10]);
                        if (ones > 0)
                            words.push(ZERO_TO_NINETEEN_MAP[ones]);
                    }
                }
                if (!((index_1 === lastIndex_1) || (number === 0))) {
                    words.push(ILLIONS[(lastIndex_1 - index_1) - 1]);
                }
                index_1 += 1;
            });
            if (isDecimals && decimals.length > 2) {
                var illion = ILLIONS[Math.floor(numberSet.length / 3) - 1];
                words.push('one-' + illion +
                    ((words[words.length - 2] === 'and' && lodash_1.last(words) === 'one') ? 'th' : 'ths'));
            }
        }
    });
    return words.join(' ');
    var _a;
}
exports.numberToWords = numberToWords;
