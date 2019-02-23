# getRandomInteger(range): number

# getRandomIntegers(howMany, range): number[]

`range` is an array of 2 numbers: [min, max]

## Examples
```
getRandomInteger([-10, 10]);
    // returns int value anywhere from -10 to 10

getRandomIntegers(5, [-10, 10]);
    // returns 5 integers of value anywhere from -10 to 10
```

## Installation
`npm i  @writetome51/get-random-integer-s`

## Loading
```
// if using TypeScript:
import { getRandomInteger, getRandomIntegers} from '@writetome51/get-random-integer-s'; 
// if using ES5 JavaScript:
var getRandomInteger  = require('@writetome51/get-random-integer-s').getRandomInteger;
var getRandomIntegers = require('@writetome51/get-random-integer-s').getRandomIntegers;
```