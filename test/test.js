'use strict';
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
});
