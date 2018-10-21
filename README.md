This package has 2 functions:  

getRandomInteger(range);

getRandomIntegers(howMany, range);

range is an array of 2 integers: [minPossibleNum, maxPossibleNum]

Examples:

let randomInteger = getRandomInteger([-10, 10]); // returns int between -10 and 10

let randomIntegers = getRandomIntegers(5, [-10, 10]) // returns 5 integers between -10 and 10