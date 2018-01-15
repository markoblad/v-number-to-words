'use strict';
var expect = require('chai').expect;
var index = require('../dist/index.js');
var VTools = index.VTools;

describe('VTools functions test', () => {
  it('should return the ALPHABET', () => {
    var result = VTools.ALPHABET[0];
    expect(result).to.equal('a');
  });
  it('should return the ROMAN_MAP', () => {
    var result = VTools.ROMAN_MAP[1000];
    expect(result).to.equal('M');
  });
  it('should return the ORDERED_ROMAN_MAP', () => {
    var result = VTools.ORDERED_ROMAN_MAP[0];
    expect(result.join('')).to.equal([1000, 'M'].join(''));
  });
  it('should return the PERIOD_FREQUENCY_LEGEND', () => {
    var result = VTools.PERIOD_FREQUENCY_LEGEND[366];
    expect(result).to.equal('One day');
  });
  // it('should return the PERIOD_FREQUENCY_TO_PERIOD', () => {
  //   var result = VTools.PERIOD_FREQUENCY_TO_PERIOD[1];
  //   expect(result).to.equal('TBD');
  // });
  it('should return the ANNUAL_FREQUENCY_TO_LABEL', () => {
    var result = VTools.ANNUAL_FREQUENCY_TO_LABEL[1];
    expect(result).to.equal('Annual');
  });
  // it('should return the ANNUAL_FREQUENCY_TO_TIME', () => {
  //   var result = VTools.ANNUAL_FREQUENCY_TO_TIME[1];
  //   expect(result).to.equal('TBD');
  // });
  it('should return the PERIOD_FREQ_OPTIONS', () => {
    var result = VTools.PERIOD_FREQ_OPTIONS['Annual'];
    expect(result).to.equal(1);
  });
  it('should return the ALL_FISCAL_PERIODS', () => {
    var result = VTools.ALL_FISCAL_PERIODS[1];
    expect(result).to.equal('FY');
  });
  it('should return the PERIODLY', () => {
    var result = VTools.PERIODLY[0];
    expect(result).to.equal('annually');
  });
  it('should return the PERIODS', () => {
    var result = VTools.PERIODS[0];
    expect(result).to.equal('years');
  });
  it('should return SINGULAR_PERIODS', () => {
    var result = VTools.SINGULAR_PERIODS[0];
    expect(result).to.equal('year');
  });

  it('should return isBlank for various', () => {
    var result = [
      VTools.isBlank(null),
      VTools.isBlank(),
      VTools.isBlank(undefined),
      VTools.isBlank(0),
      VTools.isBlank('0'),
      VTools.isBlank(1),
      VTools.isBlank(''),
      VTools.isBlank({}),
      VTools.isBlank({0:null}),
      VTools.isBlank([]),
      VTools.isBlank([0]),
      VTools.isBlank(['']),
      VTools.isBlank(true),
      VTools.isBlank(false),
    ];
    var expectation = [
      true,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      false,
      true,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isObject for various', () => {
    var result = [
      VTools.isObject(null),
      VTools.isObject(),
      VTools.isObject(undefined),
      VTools.isObject(0),
      VTools.isObject('0'),
      VTools.isObject(1),
      VTools.isObject(''),
      VTools.isObject({}),
      VTools.isObject({0:null}),
      VTools.isObject([]),
      VTools.isObject([0]),
      VTools.isObject(['']),
      VTools.isObject(true),
      VTools.isObject(false),
      VTools.isObject(RegExp('\\d')),
      VTools.isObject(new RegExp('\\d')),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return isArray for various', () => {
    var result = [
      VTools.isArray(null),
      VTools.isArray(),
      VTools.isArray(undefined),
      VTools.isArray(0),
      VTools.isArray('0'),
      VTools.isArray({}),
      VTools.isArray({0:null}),
      VTools.isArray([]),
      VTools.isArray([0]),
      VTools.isArray(true),
      VTools.isArray(false),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isDate for various', () => {
    var result = [
      VTools.isDate(null),
      VTools.isDate(),
      VTools.isDate(undefined),
      VTools.isDate(0),
      VTools.isDate('0'),
      VTools.isDate({}),
      VTools.isDate({0:null}),
      VTools.isDate([]),
      VTools.isDate([0]),
      VTools.isDate(true),
      VTools.isDate(false),
      VTools.isDate(Date.now()), // returns a number
      VTools.isDate(new Date()),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isString for various', () => {
    var result = [
      VTools.isString(null),
      VTools.isString(),
      VTools.isString(undefined),
      VTools.isString(0),
      VTools.isString('0'),
      VTools.isString({}),
      VTools.isString({0:null}),
      VTools.isString([]),
      VTools.isString([0]),
      VTools.isString(true),
      VTools.isString(false),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isNumeric for various', () => {
    var result = [
      VTools.isNumeric(null),
      VTools.isNumeric(),
      VTools.isNumeric(undefined),
      VTools.isNumeric(0),
      VTools.isNumeric('0'),
      VTools.isNumeric({}),
      VTools.isNumeric({0:null}),
      VTools.isNumeric([]),
      VTools.isNumeric([0]),
      VTools.isNumeric(true),
      VTools.isNumeric(false),
      VTools.isNumeric(NaN),
      VTools.isNumeric(Infinity),
    ];
    var expectation = [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isTrue for various', () => {
    var result = [
      VTools.isTrue(null),
      VTools.isTrue(),
      VTools.isTrue(undefined),
      VTools.isTrue(0),
      VTools.isTrue('0'),
      VTools.isTrue({}),
      VTools.isTrue({0:null}),
      VTools.isTrue([]),
      VTools.isTrue([0]),
      VTools.isTrue(true),
      VTools.isTrue(false),
      VTools.isTrue('yEs'),
      VTools.isTrue('Y'),
      VTools.isTrue('TRUE'),
      VTools.isTrue('T'),
      VTools.isTrue(1),
      VTools.isTrue('On'),
    ];
    var expectation = [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isFalse for various', () => {
    var result = [
      VTools.isFalse(null),
      VTools.isFalse(),
      VTools.isFalse(undefined),
      VTools.isFalse(0),
      VTools.isFalse('0'),
      VTools.isFalse({}),
      VTools.isFalse({0:null}),
      VTools.isFalse([]),
      VTools.isFalse([0]), // gets stringified
      VTools.isFalse(true),
      VTools.isFalse(false),
      VTools.isFalse('nO'),
      VTools.isFalse('N'),
      VTools.isFalse('FALSE'),
      VTools.isFalse('F'),
      VTools.isFalse(0),
      VTools.isFalse('OFF'),
    ];
    var expectation = [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return isTrueOrFalse for various', () => {
    var result = [
      VTools.isTrueOrFalse(null),
      VTools.isTrueOrFalse(),
      VTools.isTrueOrFalse(undefined),
      VTools.isTrueOrFalse(0),
      VTools.isTrueOrFalse('0'),
      VTools.isTrueOrFalse({}),
      VTools.isTrueOrFalse({0:null}),
      VTools.isTrueOrFalse([]),
      VTools.isTrueOrFalse([0]), // gets stringified
      VTools.isTrueOrFalse(true),
      VTools.isTrueOrFalse(false),
      VTools.isTrueOrFalse('yEs'),
      VTools.isTrueOrFalse('Y'),
      VTools.isTrueOrFalse('TRUE'),
      VTools.isTrueOrFalse('T'),
      VTools.isTrueOrFalse(1),
      VTools.isTrueOrFalse('On'),
      VTools.isTrueOrFalse('nO'),
      VTools.isTrueOrFalse('N'),
      VTools.isTrueOrFalse('FALSE'),
      VTools.isTrueOrFalse('F'),
      VTools.isTrueOrFalse(0),
      VTools.isTrueOrFalse('OFF'),
    ];
    var expectation = [
      false,
      false,
      false,
      true,
      true,
      false,
      false,
      false,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
      true,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return eachSlice for various', () => {
    var result = '';
    VTools.eachSlice([1, 2, 3, 4, 5, 6], 3, function(numberPiece) {
      result += numberPiece.join('');
    });
    var expectation = [1, 2, 3, 4, 5, 6];
    expect(result).to.equal(expectation.join(''));
  });

  it('should return arraySum for various', () => {
    var result = [
      VTools.arraySum(null),
      VTools.arraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, '3.0001%', '$1', 0.1, '0.01']),
      VTools.arraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, '$1', 0.1, '0.01']),
      VTools.arraySum([null, undefined, 0, '0', 1, '1', {}, {0:null}, [], [1], true, false, NaN, Infinity, 0.1, '0.1']),
    ];
    var expectation = [
      0,
      2.11,
      2.11,
      Infinity,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return arrayItemCounts for null', () => {
    var result = VTools.arrayItemCounts(null);
    expect(VTools.hashes_to_lines([null])).to.equal(VTools.hashes_to_lines([result]));
  });

  it('should return arrayItemCounts', () => {
    var result = VTools.arrayItemCounts([0, 1, 0, '0', null, null, 'null', '1', 2.1, 2.10, 'v', 'va', 'v', 3]);
    expect(VTools.hashes_to_lines([result])).to.equal(VTools.hashes_to_lines([{'0': 3, '1': 2, null: 3, '2.1': 2, 'v': 2, 'va': 1, 3: 1}]));
  });

  it('should return hasRangeOverlap for various', () => {
    var result = [
      VTools.hasRangeOverlap([0, 1], [1, 2]),
      VTools.hasRangeOverlap([0, 1], [1, 2], {strict: true}),
      VTools.hasRangeOverlap([0, 1.1], [1, 2], {strict: true}),
      VTools.hasRangeOverlap([1, 2], [0, 1.1], {strict: true}),
      VTools.hasRangeOverlap([1, 2], [1.1, 0], {strict: true}),
      VTools.hasRangeOverlap([1, 2], [1.1, 0], {strict: true, sort: true}),
      VTools.hasRangeOverlap([-1, 2], [1, 2]),
      VTools.hasRangeOverlap([0, 1.1], [1, 2]),
      VTools.hasRangeOverlap([1, 2], [0, 1.1]),
      VTools.hasRangeOverlap([2, 1], [0, 1.1]),
      VTools.hasRangeOverlap([2, 1], [0, 1.1], {sort: true}),
      VTools.hasRangeOverlap([2], [0, 1.1]),
      VTools.hasRangeOverlap([2, 2, 2], [0, 1.1]),
    ];
    var expectation = [
      true,
      false,
      true,
      true,
      false,
      true,
      true,
      true,
      true,
      false,
      true,
      false,
      false,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return makeString for various', () => {
    var result = [
      VTools.makeString(null),
      VTools.makeString(),
      VTools.makeString(undefined),
      VTools.makeString(0),
      VTools.makeString('0'),
      VTools.makeString(1),
      VTools.makeString(''),
      VTools.makeString({}),
      VTools.makeString({0:null}),
      VTools.makeString([]),
      VTools.makeString([0]),
      VTools.makeString(['']),
      VTools.makeString(true),
      VTools.makeString(false),
    ];
    var expectation = [
      '',
      '',
      '',
      '0',
      '0',
      '1',
      '',
      '[object Object]',
      '[object Object]',
      '',
      '0',
      '',
      'true',
      'false',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return coerceToString for various', () => {
    var result = [
      VTools.coerceToString(null),
      VTools.coerceToString(),
      VTools.coerceToString(undefined),
      VTools.coerceToString(0),
      VTools.coerceToString('0'),
      VTools.coerceToString(1),
      VTools.coerceToString(''),
      VTools.coerceToString({}),
      VTools.coerceToString({0:null}),
      VTools.coerceToString([]),
      VTools.coerceToString([0]),
      VTools.coerceToString(['']),
      VTools.coerceToString(true),
      VTools.coerceToString(false),
    ];
    var expectation = [
      '',
      '',
      '',
      '0',
      '0',
      '1',
      '',
      '[object Object]',
      '[object Object]',
      '',
      '0',
      '',
      'true',
      'false',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });  
  it('should return pluralize', () => {
    var result = [
      VTools.pluralize('mark'),
      VTools.pluralize('die'),
      VTools.pluralize('person'),
      VTools.pluralize('addendum'),
    ];
    var expectation = [
      'marks',
      'dice',
      'people',
      'addenda',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return reverse', () => {
    var result = VTools.reverse('1234');
    expect(result).to.equal('4321');
  });
  it('should return pluralize', () => {
    var result = [
      VTools.ambipluralize(null),
      VTools.ambipluralize(''),
      VTools.ambipluralize('mark'),
      VTools.ambipluralize('country'),
      VTools.ambipluralize('share'),
      VTools.ambipluralize('shares'),
    ];
    var expectation = [
      null,
      '',
      'mark(s)',
      'countr(ies)',
      'share(s)',
      'share(s)',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return normalizeString', () => {
    var result = [
      VTools.normalizeString(null),
      VTools.normalizeString(''),
      VTools.normalizeString('1m!@#$%^&*()~=+,./?><o0'),
    ];
    var expectation = [
      null,
      '',
      'pre_1mo0',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return parseZeroPaddedInt for number', () => {
    var result = [
      VTools.parseZeroPaddedInt('0'),
      VTools.parseZeroPaddedInt('010'),
      VTools.parseZeroPaddedInt(100),
      VTools.parseZeroPaddedInt(100.001),
      VTools.parseZeroPaddedInt('00100.001'),
    ];
    var expectation = [
      0,
      10,
      100,
      100,
      100,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return stringToDecimal', () => {
    var result = [
      VTools.stringToDecimal(null),
      VTools.stringToDecimal(0),
      VTools.stringToDecimal('0'),
      VTools.stringToDecimal('010'),
      VTools.stringToDecimal(100),
      VTools.stringToDecimal(100.001),
      VTools.stringToDecimal('00100.001'),
      VTools.string_to_decimal('00100.001'),
    ];
    var expectation = [
      0.0,
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return stringToInteger', () => {
    var result = [
      VTools.stringToInteger('0'),
      VTools.stringToInteger('010'),
      VTools.stringToInteger(100),
      VTools.stringToInteger(100.001),
      VTools.stringToInteger('00100.001'),
      VTools.string_to_integer('00100.001'),
    ];
    var expectation = [
      0,
      10,
      100,
      100,
      100,
      100,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return parseBigOrZero', () => {
    var result = [
      VTools.parseBigOrZero(null),
      VTools.parseBigOrZero('0'),
      VTools.parseBigOrZero('010'),
      VTools.parseBigOrZero(100),
      VTools.parseBigOrZero(100.001),
      VTools.parseBigOrZero('00100.001'),
      VTools.parseBigOrZero('00100.001'),
    ];
    var expectation = [
      0.0,
      0.0,
      10.0,
      100.0,
      100.001,
      100.001,
      100.001,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return variableCurrency', () => {
    var result = [
      VTools.variableCurrency(null),
      VTools.variableCurrency('0'),
      VTools.variableCurrency('010'),
      VTools.variableCurrency(100.1),
      VTools.variableCurrency(100),
      VTools.variableCurrency(100.001),
      VTools.variableCurrency('00100.001'),
      VTools.variableCurrency('00100.001'),
      VTools.variableCurrency('$00100.001'), // to check this case
      VTools.variableCurrency(100.0000009),
      VTools.variableCurrency(100.0000009, '£'),
    ];
    var expectation = [
      '$0.00',
      '$0.00',
      '$10.00',
      '$100.10',
      '$100.00',
      '$100.001',
      '$100.001',
      '$100.001',
      '$100.00',
      '$100.0000009',
      '£100.0000009',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return variableInteger', () => {
    var result = [
      VTools.variableInteger(null), // to check this case
      VTools.variableInteger('0'),
      VTools.variableInteger('010'),
      VTools.variableInteger(100),
      VTools.variableInteger(100.001),
      VTools.variableInteger('00100.001'),
      VTools.variableInteger('00100.001'),
      VTools.variableInteger(100.0000009),
      VTools.variableInteger(100.0000009),
    ];
    var expectation = [
      '',
      '0',
      '10',
      '100',
      '100.001',
      '100.001',
      '100.001',
      '100.0000009',
      '100.0000009',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return noExponentsStr', () => {
    var result = [
      VTools.noExponentsStr(null), // to check this case
      VTools.noExponentsStr('0'),
      VTools.noExponentsStr('010'),
      VTools.noExponentsStr(100),
      VTools.noExponentsStr(-1e2),
      VTools.noExponentsStr(1e2),
      VTools.noExponentsStr(100.001),
      VTools.noExponentsStr('00100.001'),
      VTools.noExponentsStr('00100.001'),
      VTools.noExponentsStr(100.0000009),
      VTools.noExponentsStr(100.0000009),
      VTools.noExponentsStr(1.000000009e2),
      VTools.noExponentsStr('1.000000009e2'),
      VTools.noExponentsStr(10000.00009e-2),
    ];
    var expectation = [
      'NaN',
      '0',
      '10',
      '100',
      '-100',
      '100',
      '100.001',
      '100.001',
      '100.001',
      '100.0000009',
      '100.0000009',
      '100.0000009',
      '100.0000009',
      '100.0000009',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return decimalToStr', () => {
    var result = [
      VTools.decimalToStr(null),
      VTools.decimalToStr('0'),
      VTools.decimalToStr('010'),
      VTools.decimalToStr(100),
      VTools.decimalToStr(1e2),
      VTools.decimalToStr(100.001),
      VTools.decimalToStr('00100.001'),
      VTools.decimalToStr('00100.001'),
      VTools.decimalToStr(100.0000009),
      VTools.decimalToStr(100.0000009),
      VTools.decimalToStr(1.000000009e2),
      VTools.decimalToStr('1.000000009e2'),
      VTools.decimalToStr(10000.00009e-2),
    ];
    var expectation = [
      '',
      '0.00',
      '10.00',
      '100.00',
      '100.00',
      '100.001',
      '100.001',
      '100.001',
      '100.0000009',
      '100.0000009',
      '100.0000009',
      '100.0000009',
      '100.0000009',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return decimalToPercStr', () => {
    var result = [
      VTools.decimalToPercStr(null),
      VTools.decimalToPercStr('0'),
      VTools.decimalToPercStr('010'),
      VTools.decimalToPercStr(100),
      VTools.decimalToPercStr(1e2),
      VTools.decimalToPercStr(100.001),
      VTools.decimalToPercStr('00100.001'),
      VTools.decimalToPercStr('00100.001'),
      VTools.decimalToPercStr(100.0000009),
      VTools.decimalToPercStr(100.0000009),
      VTools.decimalToPercStr(1.000000009e2),
      VTools.decimalToPercStr('1.000000009e2'),
      VTools.decimalToPercStr(10000.00009e-2),
    ];
    var expectation = [
      '0.00%',
      '0.00%',
      '1000.00%',
      '10000.00%',
      '10000.00%',
      '10000.10%',
      '10000.10%',
      '10000.10%',
      '10000.00009%',
      '10000.00009%',
      '10000.00009%',
      '10000.00009%',
      '10000.00009%',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return percToDecimal', () => {
    var result = [
      VTools.percToDecimal(null),
      VTools.percToDecimal('0'),
      VTools.percToDecimal('010'),
      VTools.percToDecimal(100),
      VTools.percToDecimal(1e2),
      VTools.percToDecimal(100.001),
      VTools.percToDecimal('00100.001'),
      VTools.percToDecimal('00100.001'),
      VTools.percToDecimal(100.0000009),
      VTools.percToDecimal(100.0000009),
      VTools.percToDecimal(1.000000009e2),
      VTools.percToDecimal('1.000000009e2'),
      VTools.percToDecimal(10000.00009e-2),
    ];
    var expectation = [
      '0',
      '0',
      '0.1',
      '1',
      '1',
      '1.00001',
      '1.00001',
      '1.00001',
      '1.000000009',
      '1.000000009',
      '1.000000009',
      '1.000000009',
      '1.000000009',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return percentThreshold', () => {
    var result = [
      VTools.percentThreshold(null),
      VTools.percentThreshold('0'),
      VTools.percentThreshold('010'),
      VTools.percentThreshold(100),
      VTools.percentThreshold(1e2),
      VTools.percentThreshold(100.001),
      VTools.percentThreshold('00100.001'),
      VTools.percentThreshold('00100.001'),
      VTools.percentThreshold(100.0000009),
      VTools.percentThreshold(100.0000009),
      VTools.percentThreshold(1.000000009e2),
      VTools.percentThreshold('1.000000009e2'),
      VTools.percentThreshold(10000.00009e-2),
      VTools.percentThreshold(66.6666666666),
      VTools.percentThreshold(66.66),
      VTools.percentThreshold(33.33),
      VTools.percentThreshold(50),
    ];
    var expectation = [
      '',
      'at least 0%',
      'at least 010%', // check
      'at least 100%',
      'at least 100%',
      'at least 100.001%',
      'at least 00100.001%', // check
      'at least 00100.001%', // check
      'at least 100.0000009%',
      'at least 100.0000009%',
      'at least 100.0000009%',
      'at least 1.000000009e2%', // check
      'at least 100.0000009%',
      'at least two-thirds',
      'at least two-thirds',
      'at least one-third',
      'a majority',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return numberWithCommas', () => {
    var result = [
      // VTools.numberWithCommas(null),
      VTools.numberWithCommas('0'),
      VTools.numberWithCommas('010'),
      VTools.numberWithCommas(100),
      VTools.numberWithCommas(1e2),
      VTools.numberWithCommas(100.001),
      VTools.numberWithCommas('1100100.001'),
      VTools.numberWithCommas('00100.001'),
      VTools.numberWithCommas(100.0000009),
      VTools.numberWithCommas(100.0000009),
      VTools.numberWithCommas(1.000000009e2),
      VTools.numberWithCommas('1.000000009e2'),
      VTools.numberWithCommas(10000.00009e-2),
    ];
    var expectation = [
      // '',
      '0',
      '010', // check
      '100',
      '100',
      '100.001',
      '1,100,100.001',
      '00,100.001', // check
      '100.0,000,009', // check
      '100.0,000,009', // check
      '100.0,000,009', // check
      '1.000,000,009e2', // check
      '100.0,000,009', // check
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return decimalToPercentage', () => {
    var result = [
      VTools.decimalToPercentage(null),
      VTools.decimalToPercentage('0'),
      VTools.decimalToPercentage('010'),
      VTools.decimalToPercentage(100),
      VTools.decimalToPercentage(1e2, 4),
      VTools.decimalToPercentage(100.001),
      VTools.decimalToPercentage('00100.001'),
      VTools.decimalToPercentage('00100.001', 2),
      VTools.decimalToPercentage(100.0000009, 5),
      VTools.decimalToPercentage(100.0000009),
      VTools.decimalToPercentage(1.000000009e2),
      VTools.decimalToPercentage('1.000000009e2', 5),
      VTools.decimalToPercentage(10000.00009e-2),
    ];
    var expectation = [
      '0.00',
      '0.00',
      '1000.00',
      '10000.00',
      '10000.0000',
      '10000.10',
      '10000.10',
      '10000.10',
      '10000.00009',
      '10000.00',
      '10000.00',
      '10000.00009',
      '10000.00',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return roundToDecimal', () => {
    var result = [
      VTools.roundToDecimal(null),
      VTools.roundToDecimal('0'),
      VTools.roundToDecimal('010'),
      VTools.roundToDecimal(100),
      VTools.roundToDecimal(1e2, 2),
      VTools.roundToDecimal(100.001),
      VTools.roundToDecimal('00100.001'),
      VTools.roundToDecimal('00100.001', 3),
      VTools.roundToDecimal(100.0000009, 7),
      VTools.roundToDecimal(100.0000009, 6),
      VTools.roundToDecimal(1.000000009e2),
      VTools.roundToDecimal('1.000000009e2', 7),
      VTools.roundToDecimal(10000.00009e-2),
    ];
    var expectation = [
      'NaN',
      '0', // check
      '10', // check
      '100', // check
      '100', // check
      '100', // check
      '100', // check
      '100.001',
      '100.0000009',
      '100.000001',
      '100', // check
      '100.0000009',
      '100', // check
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return numberToWords for number', () => {
    // tested in v-number-to-words
    var result = VTools.numberToWords(2);
    expect(result).to.equal('two');
  });
  it('for enumDate should get unix UTC timestamp given a unix UTC timestamp', () => {
    var result = VTools.enumDate(1439344269);
    expect(result).to.equal(1439344269);
  });
  it('for enumDate should get unix UTC timestamp given a date', () => {
    var result = VTools.enumDate('August 11, 2015');
    // 1439265600000
    expect(result).to.equal(1439251200000);
  });
  it('for enumDate should get unix UTC timestamp given a date', () => {
    var result = VTools.enumDate('August 11, 2015 21:51:09');
    expect(result).to.equal(1439329869000);
  });
  it('for enumDate should get NaN given a date wrapped in an array', () => {
    var result = VTools.enumDate(['August 11, 2015 21:51:09']);
    expect(result.toString()).to.equal(NaN.toString());
  });
  it('should return coerceToDate', () => {
    var now = Date.now();
    var date = new Date();
    var result = [
      VTools.coerceToDate(null),
      VTools.coerceToDate('0'),
      VTools.coerceToDate('010'),
      VTools.coerceToDate(100),
      VTools.coerceToDate(1e2),
      VTools.coerceToDate('00100.001', 3),
      VTools.coerceToDate(1439344269),
      VTools.coerceToDate('August 11, 2015'),
      VTools.coerceToDate(1439251200000),
      VTools.coerceToDate('August 11, 2015 21:51:09'),
      VTools.coerceToDate(1439329869000),
      VTools.coerceToDate('Tue Aug 11 2015 21:51:09 GMT+0000'),
      VTools.coerceToDate('August 11, 2015 21:51:09 UTC'),
      new Date(VTools.coerceToDate(now)).toString(),
      new Date(VTools.coerceToDate(date)).toString(),
      VTools.coerceToDate(['August 11, 2015 21:51:09 UTC']),
    ];
    var expectation = [
      'Thu Jan 01 1970 00:00:00 GMT+0000',
      'Sat Jan 01 2000 00:00:00 GMT+0000',
      'Mon Oct 01 2001 00:00:00 GMT+0000', // check
      'Thu Jan 01 1970 00:00:00 GMT+0000',
      'Thu Jan 01 1970 00:00:00 GMT+0000',
      'Fri Jan 01 0100 00:00:00 GMT+0000', // check
      'Sat Jan 17 1970 15:49:04 GMT+0000', // check

      'Tue Aug 11 2015 00:00:00 GMT+0000',
      'Tue Aug 11 2015 00:00:00 GMT+0000',
      'Tue Aug 11 2015 21:51:09 GMT+0000',
      'Tue Aug 11 2015 21:51:09 GMT+0000',
      'Tue Aug 11 2015 21:51:09 GMT+0000',
      'Tue Aug 11 2015 21:51:09 GMT+0000',
      new Date(now).toString(),
      date.toString(),
      'Thu Jan 01 1970 00:00:00 GMT+0000',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return formatDate', () => {
    var now = Date.now();
    var date = new Date();
    var result = [
      VTools.formatDate(null),
      VTools.formatDate('0', {utc: true}),
      VTools.formatDate('010', {utc: true}),
      VTools.formatDate(100, {utc: true}),
      VTools.formatDate(1e2, {utc: true}),
      VTools.formatDate('00100.001', {utc: true}),
      VTools.formatDate(1439344269, {utc: true}),
      VTools.formatDate('20150811', {utc: true}),
      VTools.formatDate('2015-08-11', {utc: true}),
      VTools.formatDate('August 11, 2015', {utc: true}),
      VTools.formatDate(1439251200000, {utc: true}),
      VTools.formatDate('August 11, 2015 21:51:09'),
      VTools.formatDate(1439329869000, {utc: true}),
      VTools.formatDate('Tue Aug 11 2015 21:51:09 GMT+0000'),
      VTools.formatDate('August 11, 2015 21:51:09 UTC'),
      VTools.formatDate(VTools.coerceToDate(now)),
      VTools.formatDate(date),
    ];
    var expectation = [
      '',
      'January 1, 2000',
      'October 1, 2001',
      'January 1, 1970',
      'January 1, 1970',
      'January 1, 0100',
      'August 12, 2015', // August 12, 2015
      'August 11, 2015', // August 12, 2015
      'August 11, 2015', // August 12, 2015
      'August 11, 2015',
      'January 21, 47578', // 'January 20, 47578'
      'August 11, 2015',
      'July 19, 47580',
      'August 11, 2015',
      'August 11, 2015',
      VTools.coerceToDate(now).format("MMMM D, YYYY"),
      VTools.coerceToDate(date.toString()).format("MMMM D, YYYY"),
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return formatDateSentence', () => {
    var result = VTools.formatDateSentence('August 11, 2015');
    expect(result).to.equal('11th day of August, 2015');
  });
  it('should return formatDateSentence', () => {
    var result = VTools.formatDateSentence(null);
    expect(result).to.equal(null);
  });
  it('should return titleize', () => {
    var result = [
      VTools.titleize(null),
      VTools.titleize('oneTwo'),
      VTools.titleize('OneTwo'),
      VTools.titleize('One Two'),
      VTools.titleize('one two'),
      VTools.titleize('one Two'),
      VTools.titleize('ONE TWO'),
      VTools.titleize('one-two'),
      VTools.titleize('ONE-TWO'),
    ];
    var expectation = [
      null,
      'Onetwo',
      'Onetwo',
      'One Two',
      'One Two',
      'One Two',
      'One Two',
      'One-Two',
      'One-Two',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return toRoman for null', () => {
    var result = VTools.toRoman(null);
    expect(result).to.equal('');
  });
  it('should return toRoman for number', () => {
    var result = VTools.toRoman(2);
    expect(result).to.equal('II');
  });
  it('should return toRoman', () => {
    var result = [
      VTools.toRoman(2),
      VTools.toRoman(2018),
    ];
    var expectation = [
      'II',
      'MMXVIII',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return toRomanette for number', () => {
    var result = VTools.toRomanette(2);
    expect(result).to.equal('ii');
  });
  it('should return toRomanette for null', () => {
    var result = VTools.toRomanette(null);
    expect(result).to.equal('');
  });
  it('should return toAlpha', () => {
    var result = [
      VTools.toAlpha(0),
      VTools.toAlpha(2),
      VTools.toAlpha(27),
    ];
    var expectation = [
      '',
      'b',
      'aa',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return toOrdinal', () => {
    var result = [
      VTools.toOrdinal(21),
      VTools.toOrdinal(2),
      VTools.toOrdinal(3),
      VTools.toOrdinal(27),
    ];
    var expectation = [
      '21st',
      '2nd',
      '3rd',
      '27th',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return join_array', () => {
    var result = [
      VTools.join_array({}),
      VTools.join_array([1, 2]),
      VTools.join_array(['1', '2']),
      VTools.join_array([[1, 2], [3, 4]]),
      VTools.join_array([[1, 2], {'3': 4}]),
    ];
    var expectation = [
      undefined,
      '1, 2',
      '1, 2',
      '1,2, 3,4',
      '1,2, [object Object]',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return join_array2d', () => {
    var result = [
      VTools.join_array2d({}),
      VTools.join_array2d([[1, 2]]),
      VTools.join_array2d([['1', '2']]),
      VTools.join_array2d([[1, 2], [3, 4]]),
      VTools.join_array2d([[1, 2], {'3': 4}]),
    ];
    var expectation = [
      undefined,
      '1 - 2',
      '1 - 2',
      '1 - 2; 3 - 4',
      '1 - 2; [object Object]',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return join_array_of_hashes_values', () => {
    var result = [
      VTools.join_array_of_hashes_values(null),
      VTools.join_array_of_hashes_values([[1, 2]]),
      VTools.join_array_of_hashes_values({1: 2}),
      VTools.join_array_of_hashes_values([['1', '2']]),
      VTools.join_array_of_hashes_values([[1, 2], [3, 4]]),
      VTools.join_array_of_hashes_values([[1, 2], {'3': 4}]),
      VTools.join_array_of_hashes_values([{1: 2}, {'3': 4}]),
    ];
    var expectation = [
      '',
      '1,2',
      undefined, // check
      '1,2',
      '1,2; 3,4',
      '1,2; 4',
      '2; 4',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return hashes_to_lines', () => {
    var result = [
      VTools.hashes_to_lines(null),
      VTools.hashes_to_lines([{1: 2}]),
    ];
    var expectation = [
      null,
      '1: 2',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return smartRecursiveFormat, smart_array_values, smart_hash_values, \
    smart_array2d_values and smart_array_of_hash_values', () => {
    var result1 = VTools.smartRecursiveFormat([{1: 2000, 3: {4000: [5000]}}]);
    var result2 = VTools.smartRecursiveFormat({1: 2000, 3: {4000: [5000, {6: 7000}, {8: '2018-01-06'}]}});
    var result3 = VTools.smart_array_values([1, 2, '2018-01-06']);
    var result4 = VTools.smart_hash_values({8: '2018-01-06'});
    var result5 = VTools.smart_array2d_values([[1, 2, '2018-01-06'], [3]]);
    var result6 = VTools.smart_array_of_hash_values([{8: '2018-01-06'}]);
    var result = [
      result1[0][1],
      result1[0][3][4000][0],
      result2[1],
      result2[3][4000][1][6],
      result2[3][4000][2][8],
      result3.join(', '),
      result4[8],
      result5.join(', '),
      result6[0][8],
    ];
    var expectation = [
      '2,000',
      '5,000',
      '2,000',
      '7,000',
      'January 6, 2018',
      '1, 2, January 6, 2018',
      'January 6, 2018',
      '1,2,January 6, 2018, 3',
      'January 6, 2018',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return smart_format_value', () => {
    var result = [
      VTools.smart_format_value(null),
      VTools.smart_format_value(),
      VTools.smart_format_value(VTools.coerceToDate('August 11, 2015 21:51:09 UTC')),
      VTools.smart_format_value(10000),
      VTools.smart_format_value(10000.00),
      VTools.smart_format_value(10000.001),
    ];
    var expectation = [
      '',
      '',
      'August 11, 2015',
      '10,000',
      '10,000',
      '10,000.001',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return valueOrHolder', () => {
    var result = [
      VTools.valueOrHolder(null),
      VTools.valueOrHolder(),
      VTools.valueOrHolder('August 11, 2015 21:51:09 UTC'),
      VTools.valueOrHolder(10000),
      VTools.valueOrHolder(10000.00),
      VTools.valueOrHolder(10000.001),
    ];
    var expectation = [
      '_________________',
      '_________________',
      'August 11, 2015 21:51:09 UTC',
      10000,
      10000.0,
      10000.001,
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return arrayToHumanList', () => {
    var result = [
      VTools.arrayToHumanList(null), // without serial comma
      VTools.arrayToHumanList(['Mark', 'Paul', 'Stephen']), // without serial comma
      VTools.arrayToHumanList(['Mark', 'Paul', 'Stephen'], {serial: true}), // with serial comma
      VTools.arrayToHumanList(['Mark', 'Paul', 'Stephen'], {junctive: 'or'}), // disjunctive list without a serial comma
      VTools.arrayToHumanList(['Mark', 'Paul', 'Stephen'], {separator: ';'}), // with a semicolon
      VTools.arrayToHumanList(['Mark', 'Paul', 'Stephen'], {serial: false, separator: ';'}), // with a semicolon
      VTools.arrayToHumanList(['Mark', 'Paul', 'Stephen'], {serial: true, separator: ';'}), // with a serial semicolon
      VTools.arrayToHumanList(['Mark']), // single
      VTools.arrayToHumanList(['Mark', 'Paul']), // double
      VTools.arrayToHumanList(['Mark', 'Paul'], {serial: true, junctive: 'or'}), // double serial disjunctive
      VTools.arrayToHumanList(['Mark', 'Paul'], {junctive: 'or'}), // double disjunctive
      VTools.arrayToHumanList(['Mark', 'Paul'], {serial: false, separator: ';'}), // double disjunctive semicolon
    ];
    var expectation = [
      null,
      'Mark, Paul and Stephen',
      'Mark, Paul, and Stephen',
      'Mark, Paul or Stephen',
      'Mark; Paul; and Stephen',
      'Mark; Paul and Stephen',
      'Mark; Paul; and Stephen',
      'Mark',
      'Mark and Paul',
      'Mark or Paul',
      'Mark or Paul',
      'Mark and Paul',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });
  it('should return jsFormat', () => {
    var result = [
      VTools.jsFormat(null),
      VTools.jsFormat(),
      VTools.jsFormat('August 11, 2015 21:51:09 UTC'),
      VTools.jsFormat('August 11, 2015 21:51:09 UTC', 'formatDate'),
      VTools.jsFormat('August 11, 2015 21:51:09 UTC', ['formatDate']),
      VTools.jsFormat(10000),
      VTools.jsFormat(10000.00),
      VTools.jsFormat(10000.001),
      VTools.jsFormat(10000.001, ['variableInteger']),
      VTools.jsFormat(10000.001, ['variableInteger', 'variableCurrency']),
      VTools.jsFormat(10000.001, ['variableCurrency']),
      VTools.jsFormat(10000.001, ['variableCurrency1']),
    ];
    var expectation = [
      '',
      '',
      'August 11, 2015 21:51:09 UTC',
      'August 11, 2015',
      'August 11, 2015',
      '10000',
      '10000',
      '10000.001',
      '10,000.001',
      '$10,000.00',
      '$10,000.001',
      '10000.001',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return jsFormatVField', () => {
    var result = [
      VTools.jsFormatVField(null),
      VTools.jsFormatVField(),
      VTools.jsFormatVField('August 11, 2015 21:51:09 UTC', {}, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField('August 11, 2015 21:51:09 UTC', {js_formatters: 'formatDate'}, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField('August 11, 2015 21:51:09 UTC', {jsInputProcessors: ['formatDate']}, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField(10000, null, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField(10000.00, null, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField(10000.001, null, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField(10000.001, {js_formatters: ['variableInteger']}, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField(10000.001, {js_formatters: ['variableInteger', 'variableCurrency']}, ['jsInputProcessors', 'js_formatters']),
      VTools.jsFormatVField(10000.001, {js_formatters: ['variableCurrency']}, ['jsInputProcessors', 'js_formatters']),
    ];
    var expectation = [
      '',
      '',
      'August 11, 2015 21:51:09 UTC',
      'August 11, 2015',
      'August 11, 2015',
      '10000',
      '10000',
      '10000.001',
      '10,000.001',
      '$10,000.00',
      '$10,000.001',
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

  it('should return jsFormatVFields', () => {
    var result = [
      VTools.jsFormatVFields(null),
      VTools.jsFormatVFields(),
      VTools.hash_to_lines(VTools.jsFormatVFields({1: 'August 11, 2015 21:51:09 UTC'},
        {}, ['jsInputProcessors', 'js_formatters'])),
      VTools.hash_to_lines(VTools.jsFormatVFields({key1: new Date('August 11, 2015 21:51:09 UTC'), key2: 10000},
        {key1: {js_formatters: ['formatDate']}, key2: {jsInputProcessors: 'variableCurrency'}}, ['jsInputProcessors', 'js_formatters'])),
      VTools.hash_to_lines(VTools.jsInputProcess({key1: 10000.001}, {key1: {js_formatters: ['variableInteger', 'variableCurrency']}}, ['jsInputProcessors', 'js_formatters'])),
      VTools.hash_to_lines(VTools.jsInputProcess({key1: 10000.001}, {key1: {jsInputProcessors: ['variableInteger', 'variableCurrency']}}, ['jsInputProcessors', 'js_formatters'])),
      VTools.hash_to_lines(VTools.jsDisplay({key1: 10000.001}, {key1: {js_formatters: ['variableInteger', 'variableCurrency']}})),
      VTools.hash_to_lines(VTools.jsDisplay({key1: 10000.001}, {key1: {jsInputProcessors: ['variableInteger', 'variableCurrency']}})),
      VTools.hash_to_lines(VTools.jsInputDisplay({key1: 10000.001}, {key1: {js_formatters: ['variableInteger', 'variableCurrency']}})),
      VTools.hash_to_lines(VTools.jsInputDisplay({key1: 10000.001}, {key1: {jsInputProcessors: ['variableInteger', 'variableCurrency']}})),
    ];
    var expectation = [
      null,
      undefined,
      VTools.hash_to_lines({1: 'August 11, 2015 21:51:09 UTC'}),
      VTools.hash_to_lines({key1: 'August 11, 2015', key2: '$10,000.00'}),
      VTools.hash_to_lines({key1: '10,000.001'}),
      VTools.hash_to_lines({key1: '$10,000.00'}),
      VTools.hash_to_lines({key1: '$10,000.00'}),
      VTools.hash_to_lines({key1: '10,000.001'}),
      VTools.hash_to_lines({key1: '$10,000.00'}),
      VTools.hash_to_lines({key1: '$10,000.00'}),
    ];
    expect(result.join('')).to.equal(expectation.join(''));
  });

});