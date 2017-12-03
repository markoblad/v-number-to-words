import {
  each as _each,
  times as _times,
  reject as _reject,
  last as _last
} from 'lodash';
import { isBlank, trim } from 'underscore.string';
import { bignumber } from 'mathjs';

const ZERO_TO_NINETEEN_MAP: string[] = [
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

const TWENTY_TO_NINETY_MAP: any = {
  '20': 'twenty',
  '30': 'thirty',
  '40': 'forty',
  '50': 'fifty',
  '60': 'sixty',
  '70': 'seventy',
  '80': 'eighty',
  '90': 'ninety',
};

const ILLIONS: string[] = [
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

function isNumeric(value?: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isString(value?: any): boolean {
  return (typeof(value) === 'string');
}

function eachSlice(value: any[], size: number = 1, callback: Function): void {
  for (let i = 0, l = value.length; i < l; i += size) {
    callback(value.slice(i, i + size));
  }
}

function parseBigOrZero(value: any) {
  return bignumber(isNumeric(value) ? value : 0.0);
}

function parseZeroPaddedInt(value?: any): number {
  if (isBlank(value) || value === 0 || value === '0' || isBlank(value.toString().replace(/0/g, ''))) {
    return 0;
  }
  value = value.toString();
  let firstNonZeroIndex = value.search(/(?!0)/);
  return parseInt(value.slice(firstNonZeroIndex, value.length), 10);
}

export function numberToWords(value: number | string) {
  let words: string[] = [], digits: string = '', decimals: string = '';
  if (typeof(value) === 'number') {
    let pieces: string[] = parseBigOrZero(value).toString().split('.').slice(0, 2);
    [digits, decimals = ''] = pieces;
  } else if (isString(value) && (/\./).test(value)) {
    let str = trim(value).replace(/\$|\%|\,|\_/g, '');
    digits = str.split('.')[0];
    decimals = str.split('.')[1] || '';
  } else {
    digits = trim(value).replace(/\$|\%|\,|\_/g, '');
    decimals = '';
  }
  decimals = decimals.replace(/0+$/g, '');
  _each(_reject([digits, decimals], function(i) {
    return !i || i.length === 0;
  }), function(numberSet, numberSetIndex) {
    let isDecimals = numberSetIndex === 1;
    if (isDecimals && decimals.length > 0) words.push('and');
    if (!isDecimals && parseZeroPaddedInt(numberSet) === 0) {
      words.push('zero');
    } else if (isDecimals && parseZeroPaddedInt(numberSet) === 0) {
      // do nothing
    } else {
      let numberZerosToAdd = ((numberSet.length % 3) === 0 ? 0 : 3 - (numberSet.length % 3));
      _times(numberZerosToAdd, function(i) {
        numberSet = (isDecimals ? (numberSet + '0') : ('0' + numberSet));
      });
      let index = 0;
      let sliceCount = Math.floor(numberSet.length / 3);
      let lastIndex = sliceCount - 1;
      let splitNumberSet = numberSet.split('');
      eachSlice(splitNumberSet, 3, function(numberPiece: string[]) {
        let number = parseZeroPaddedInt(numberPiece.join(''));
        let hundreds = Math.floor(number / 100);
        let tens = Math.floor((number - (hundreds * 100)) / 10);
        let ones = Math.floor((number - (hundreds * 100) - (tens * 10)));
        // let ones = parseZeroPaddedInt(number.toString().substr(number.toString().length - 1));
        if (isDecimals && decimals.length === 1) {
          words.push(ZERO_TO_NINETEEN_MAP[hundreds]);
          words.push((words[words.length - 2] === 'and' && _last(words) === 'one') ?
            'tenth' : 'tenths');
        } else if (isDecimals && decimals.length === 2) {
          if (hundreds < 2 && (hundreds > 0 || tens > 0)) {
            words.push(ZERO_TO_NINETEEN_MAP[10 * hundreds + tens]);
          } else if (hundreds >= 2) {
            words.push(TWENTY_TO_NINETY_MAP[hundreds * 10]);
            if (tens > 0) words.push(ZERO_TO_NINETEEN_MAP[tens]) ;
          }
          words.push((words[words.length - 2] === 'and' && _last(words) === 'one') ?
            'one-hundreth' : 'one-hundreths');
        } else {
          if (hundreds > 0) {
            words.push(ZERO_TO_NINETEEN_MAP[hundreds], 'hundred');
          }
          if (tens < 2 && (tens > 0 || ones > 0)) {
            words.push(ZERO_TO_NINETEEN_MAP[10 * tens + ones]);
          } else if (tens >= 2) {
            words.push(TWENTY_TO_NINETY_MAP[tens * 10]);
            if (ones > 0) words.push(ZERO_TO_NINETEEN_MAP[ones]);
          }
        }
        if (!((index === lastIndex) || (number === 0))) {
          words.push(ILLIONS[(lastIndex - index) - 1]);
         }
        index += 1;
      });
      if (isDecimals && decimals.length > 2) {
        let illion = ILLIONS[Math.floor(numberSet.length / 3) - 1];
        words.push('one-' + illion +
          ((words[words.length - 2] === 'and' && _last(words) === 'one') ? 'th' : 'ths')
        );
      }
    }
  });
  return words.join(' ');
}
