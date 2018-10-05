import {
	getRandomInteger,
	getRandomIntegers
} from './getRandomInteger_getRandomIntegers';
import { inRange } from '@writetome51/number-analysis-basic/inRange';


// Test 1: Make sure an error is triggered if you pass something other than an array:
let errorTriggered = false;
try {
	let result = getRandomInteger('10');
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 1 passed');
else console.log('test 1 failed');


// Test 2: Make sure error is triggered if array items are not both numbers:
let errorsTriggered = 0;
try {
	let result = getRandomInteger([-1, '']);
}
catch (e) {
	++errorsTriggered;
}
try {
	let result = getRandomInteger([-1, '4']);
}
catch (e) {
	++errorsTriggered;
}
try {
	let result = getRandomInteger([false, '1']);
}
catch (e) {
	++errorsTriggered;
}
if (errorsTriggered === 3) console.log('test 2 passed');
else console.log('test 2 failed');


// Test 3: Make sure error is triggered if first number is greater than the second:
errorTriggered = false;
try {
	let result = getRandomInteger([0, -1]);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 3 passed');
else console.log('test 3 failed');


// Test 4: Make sure it returns a number in the requested range:
let randomIntegers = [], i = -1;
let results = [];
let iterations = 4000;

while (++i < iterations) {
	randomIntegers.push(getRandomInteger([i, i + 9]));
}
i = -1;
while (++i < iterations) {
	results.push(inRange([i, i + 9], randomIntegers[i]));
}
if (results.length === iterations && !results.includes(false)) console.log('test 4' +
	' passed');
else console.log('test 4 failed');
