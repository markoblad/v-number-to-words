[![Build Status](https://travis-ci.org/markoblad/v-number-to-words.svg?branch=master)](https://travis-ci.org/markoblad/v-number-to-words)
[![Coverage Status](https://coveralls.io/repos/github/markoblad/v-number-to-words/badge.svg?branch=master)](https://coveralls.io/github/markoblad/v-number-to-words?branch=master)

# v-number-to-words
A Node.js module that returns the spelling of numbers, whether passed as a string or a float.  Generally reliable for up to 16 (or 17 in some cases) of floats.
## Installation 
```sh
npm install v-number-to-words --save
yarn add v-number-to-words
bower install pluralize --save
```
## Usage
### Javascript
```javascript
var vn2w = require('v-number-to-words');
var words = vn2w.numberToWords('1.1');
```
```sh
Output should be 'one and one tenth'
```
### TypeScript
```typescript
import { numberToWords } from 'v-number-to-words';
console.log(numberToWords(1.1))
```
```sh
Output should be 'one and one tenth'
```
### AMD
```javascript
define(function(require,exports,module){
  var vn2w = require('v-number-to-words');
});
```
## Test 
```sh
npm run test
```
