'use strict';
// npm run build
// npm run test
var expect = require('chai').expect;
var index = require('../dist/index.js');
describe('numberToWords function test', () => {
  it('should return one for 1', () => {
    var result = index.numberToWords(1);
    expect(result).to.equal('one');
  });
  it('should return one for "1"', () => {
    var result = index.numberToWords('1');
    expect(result).to.equal('one');
  });
  it('should return one and one tenth for 1.1', () => {
    var result = index.numberToWords(1.1);
    expect(result).to.equal('one and one tenth');
  });
  it('should return one and one tenth for "1.1"', () => {
    var result = index.numberToWords('1.1');
    expect(result).to.equal('one and one tenth');
  });
  it(`should return nine hundred ninety nine million \
nine hundred ninety nine thousand nine hundred ninety nine and \
nine hundred ninety nine thousand \
nine hundred ninety nine one-millionths for 999999999.999999`, () => {
    var result = index.numberToWords(999999999.999999);
    expect(result).to.equal(`nine hundred ninety nine million \
nine hundred ninety nine thousand nine hundred ninety nine and \
nine hundred ninety nine thousand \
nine hundred ninety nine one-millionths`);
  });
  it(`should return nine billion nine hundred ninety nine million \
nine hundred ninety nine thousand nine hundred ninety nine and \
nine hundred ninety nine million nine hundred ninety nine thousand \
nine hundred ninety nine one-billionths for "9999999999.999999999"`, () => {
    var result = index.numberToWords('9999999999.999999999');
    expect(result).to.equal(`nine billion nine hundred ninety nine million \
nine hundred ninety nine thousand nine hundred ninety nine and \
nine hundred ninety nine million nine hundred ninety nine thousand \
nine hundred ninety nine one-billionths`);
  });
  it('should process 17 digits of large floats (not rounding last digit) \
for 12345678901234567890.12345678901234567890', () => {
    var number = 12345678901234567890.12345678901234567890;
    var result = index.numberToWords(number);
    expect(result).to.equal('twelve quintillion three hundred forty \
five quadrillion six hundred seventy eight trillion nine hundred one \
billion two hundred thirty four million five hundred sixty seven thousand');
  });
  it('should process all digits of large strings (not rounding last digit) \
for "12345678901234567890.12345678901234567890"', () => {
    var number = '12345678901234567890.12345678901234567890';
    var result = index.numberToWords(number);
    expect(result).to.equal('twelve quintillion three hundred forty five \
quadrillion six hundred seventy eight trillion nine hundred one billion \
two hundred thirty four million five hundred sixty seven thousand eight \
hundred ninety and one hundred twenty three quintillion four hundred fifty \
six quadrillion seven hundred eighty nine trillion twelve billion three \
hundred forty five million six hundred seventy eight thousand nine hundred \
one-sextillionths');
  });
  it('should process 17 digits of small floats below zero (rounding \
last digit) for 0.12345678901234567890', () => {
    var number = 0.12345678901234567890;
    var result = index.numberToWords(number);
    expect(result).to.equal('zero and one hundred twenty three quadrillion \
four hundred fifty six trillion seven hundred eighty nine billion twelve \
million three hundred forty five thousand six hundred eighty one-quintillionths');
  });
  it('should process 17 digits of small floats between 1 and 2 (rounding \
last digit) for 1.12345678901234567890', () => {
    var number = 1.12345678901234567890;
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('one and one hundred twenty three quadrillion \
four hundred fifty six trillion seven hundred eighty nine billion twelve \
million three hundred forty five thousand seven hundred one-quintillionths');
  });
  it('should process 17 digits of extra small floats below zero (rounding last digit) \
for 0.00000000000000000012345678901234567890', () => {
    var number = '0.00000000000000000012345678901234567890';
    var result = index.numberToWords(number);
    expect(result).to.equal('zero and one hundred twenty three quintillion \
four hundred fifty six quadrillion seven hundred eighty nine trillion twelve billion \
three hundred forty five million six hundred seventy eight thousand nine hundred \
one-duodecillionths');
  });
  it('should process extra small floats with 3 digits of following 18 zeros below zero (rounding last digit) \
for 0.000000000000000000123', () => {
    var number = 0.000000000000000000123;
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('zero and one hundred twenty three one-sextillionths');
  });
  it('should process extra small floats with 17 digits of following 18 zeros below zero (rounding last digit) \
for 0.00000000000000000012345678901234567890', () => {
    var number = 0.00000000000000000012345678901234567890;
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('zero and one hundred twenty three quadrillion \
four hundred fifty six trillion seven hundred eighty nine billion twelve million \
three hundred forty five thousand six hundred eighty \
one-undecillionths');
  });
  it('should process exponential numbers greater than zero \
for 12345.67890e+1', () => {
    var number = 12345.67890e+1;
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process negative exponential numbers greater than zero \
for -12345.67890e+1', () => {
    var number = -12345.67890e+1;
    var result = index.numberToWords(number);
    expect(result).to.equal('negative one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process exponential string greater than zero \
for "12345.67890e+1"', () => {
    var number = '12345.67890e+1';
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process negative exponential string greater than zero \
for "-12345.67890e+1"', () => {
    var number = '-12345.67890e+1';
    var result = index.numberToWords(number);
    expect(result).to.equal('negative one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process zero exponential numbers greater than zero \
for 123456.7890e+0', () => {
    var number = 123456.7890e+0;
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process exponential numbers greater than zero \
for 1234.567890e+2', () => {
    var number = 1234.567890e+2;
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process exponential numbers greater than zero \
for 0.01234567890e+7', () => {
    var number = 1234.567890e+2;
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process exponential numbers greater than zero \
for 1234567.890e-1', () => {
    var number = 1234567.890e-1;
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three thousand \
four hundred fifty six \
and seven hundred eighty nine one-thousandths');
  });
  it('should process 16 digits of large floats (not rounding including decimal) \
for 1234567890123456.1', () => {
    var number = 1234567890123456.1;
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('one quadrillion two hundred thirty four trillion five \
hundred sixty seven billion eight hundred ninety million one hundred twenty three \
thousand four hundred fifty six');
  });
  it('should process 17 digits of large floats (including decimal) \
for 123456789012345.123', () => {
    var number = 123456789012345.123;
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('one hundred twenty three trillion four hundred fifty \
six billion seven hundred eighty nine million twelve thousand three hundred forty \
five and twelve one-hundreths');
  });
  it('should process 17 digits of large negative floats (including decimal) \
for -123456789012345.123', () => {
    var number = -123456789012345.123;
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('negative one hundred twenty three trillion four hundred fifty \
six billion seven hundred eighty nine million twelve thousand three hundred forty \
five and twelve one-hundreths');
  });
  it('should process 17 digits of large negative string (including decimal) \
for "-123456789012345.123"', () => {
    var number = '-123456789012345.123';
    console.log('number: ', number);
    var result = index.numberToWords(number);
    expect(result).to.equal('negative one hundred twenty three trillion four hundred fifty \
six billion seven hundred eighty nine million twelve thousand three hundred forty \
five and one hundred twenty three one-thousandths');
  });
});
