[![Build Status](https://travis-ci.org/markoblad/v-tools.svg?branch=master)](https://travis-ci.org/markoblad/v-tools)[![Coverage Status](https://coveralls.io/repos/github/markoblad/v-tools/badge.svg?branch=master)](https://coveralls.io/github/markoblad/v-tools?branch=master)

# v-tools
A Node.js module with formatting tools for human documents
## Installation 
```sh
npm install v-tools --save
yarn add v-tools
bower install v-tools --save
```
## Usage
### Javascript
```javascript
var vTools = require('v-tools');
VTools = vTools.VTools;
var result = VTools.toRomanette(2);
```
```sh
Output should be 'ii'
```
### TypeScript
```typescript
import { VTools } from 'v-tools';
console.log(VTools.toRomanette(2))
```
```sh
Output should be 'ii'
```
### AMD
```javascript
define(function(require,exports,module){
  var vTools = require('v-tools');
});
```
## Test 
```sh
npm run test
```
