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

function isBlank(value?: any): boolean {
  return (/^\s*$/).test(makeString(value));
}

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

function last(value: any[]) {
  return value ? value[value.length - 1] : undefined;
}

function makeString(value?: any): string {
  if (value == null) return '';
  return '' + value;
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
  let words: string[] = [], integerPart: string = '', fractionalPart: string = '';
  if (typeof(value) === 'number') {
    let numberParts: string[] = parseBigOrZero(value).toString().split('.').slice(0, 2);
    [integerPart, fractionalPart = ''] = numberParts;
  } else {
    let str = makeString(value).replace(/^\s+|\s+$/gm,'').replace(/\$|\%|\,|\_/g, '');
    integerPart = str.split('.')[0];
    if ((/\./).test(str)) {
      fractionalPart = str.split('.')[1] || '';
    } else {
      fractionalPart = '';
    }
  }
  fractionalPart = fractionalPart.replace(/0+$/g, '');
  [integerPart, fractionalPart].forEach(function(numberPart, numberPartIndex) {
    if (!numberPart || numberPart.length === 0) return;
    let isFractionalPart = numberPartIndex === 1;
    if (isFractionalPart && fractionalPart.length > 0) words.push('and');
    if (!isFractionalPart && parseZeroPaddedInt(numberPart) === 0) {
      words.push('zero');
    } else if (isFractionalPart && parseZeroPaddedInt(numberPart) === 0) {
      // do nothing
    } else {
      let numberZerosToAdd = ((numberPart.length % 3) === 0 ? 0 : 3 - (numberPart.length % 3));
      let step;
      for (step = 0; step < numberZerosToAdd; step++) {
        numberPart = (isFractionalPart ? (numberPart + '0') : ('0' + numberPart));
      }

      let index = 0;
      let sliceCount = Math.floor(numberPart.length / 3);
      let lastIndex = sliceCount - 1;
      let splitNumberPart = numberPart.split('');
      eachSlice(splitNumberPart, 3, function(numberPiece: string[]) {
        let number = parseZeroPaddedInt(numberPiece.join(''));
        let hundreds = Math.floor(number / 100);
        let tens = Math.floor((number - (hundreds * 100)) / 10);
        let ones = Math.floor((number - (hundreds * 100) - (tens * 10)));
        // let ones = parseZeroPaddedInt(number.toString().substr(number.toString().length - 1));
        if (isFractionalPart && fractionalPart.length === 1) {
          words.push(ZERO_TO_NINETEEN_MAP[hundreds]);
          words.push((words[words.length - 2] === 'and' && last(words) === 'one') ?
            'tenth' : 'tenths');
        } else if (isFractionalPart && fractionalPart.length === 2) {
          if (hundreds < 2 && (hundreds > 0 || tens > 0)) {
            words.push(ZERO_TO_NINETEEN_MAP[10 * hundreds + tens]);
          } else if (hundreds >= 2) {
            words.push(TWENTY_TO_NINETY_MAP[hundreds * 10]);
            if (tens > 0) words.push(ZERO_TO_NINETEEN_MAP[tens]) ;
          }
          words.push((words[words.length - 2] === 'and' && last(words) === 'one') ?
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
      if (isFractionalPart && fractionalPart.length > 2) {
        let illion = ILLIONS[Math.floor(numberPart.length / 3) - 1];
        words.push('one-' + illion +
          ((words[words.length - 2] === 'and' && last(words) === 'one') ? 'th' : 'ths')
        );
      }
    }
  });
  return words.join(' ');
}
