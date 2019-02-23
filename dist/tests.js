"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var in_range_1 = require("@writetome51/in-range");
// Test 1: Make sure an error is triggered if you pass something other than an array:
var errorTriggered = false;
try {
    var result = index_1.getRandomInteger('10');
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 1 passed');
else
    console.log('test 1 failed');
// Test 2: Make sure error is triggered if array items are not both numbers:
var errorsTriggered = 0;
try {
    var result = index_1.getRandomInteger([-1, '']);
}
catch (e) {
    ++errorsTriggered;
}
try {
    var result = index_1.getRandomInteger([-1, '4']);
}
catch (e) {
    ++errorsTriggered;
}
try {
    var result = index_1.getRandomInteger([false, '1']);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 3)
    console.log('test 2 passed');
else
    console.log('test 2 failed');
// Test 3: Make sure error is triggered if first number is greater than the second:
errorTriggered = false;
try {
    var result = index_1.getRandomInteger([0, -1]);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 3 passed');
else
    console.log('test 3 failed');
// Test 4: Make sure it returns a number in the requested range:
var randomIntegers = [], i = -1;
var results = [];
var iterations = 4000;
while (++i < iterations) {
    randomIntegers.push(index_1.getRandomInteger([i, i + 9]));
}
i = -1;
while (++i < iterations) {
    results.push(in_range_1.inRange([i, i + 9], randomIntegers[i]));
}
if (results.length === iterations && !results.includes(false) && !results.includes(undefined))
    console.log('test 4 passed');
else
    console.log('test 4 failed');
// Test 5: Make sure getRandomIntegers returns integers in requested range:
randomIntegers = index_1.getRandomIntegers(100, [99, 100]);
i = -1;
results = [];
while (++i < randomIntegers.length) {
    results.push(in_range_1.inRange([99, 100], randomIntegers[i]));
}
if (results.length === randomIntegers.length && !results.includes(false) && !results.includes(undefined))
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 6: Make sure getRandomIntegers returns integers in requested range:
randomIntegers = index_1.getRandomIntegers(100, [-100, 100]);
i = -1;
results = [];
while (++i < randomIntegers.length) {
    results.push(in_range_1.inRange([-100, 100], randomIntegers[i]));
}
if (results.length === randomIntegers.length && !results.includes(false) && !results.includes(undefined))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
// Test 6: Make sure getRandomIntegers returns integers in requested range:
randomIntegers = index_1.getRandomIntegers(10, [-1000000, Number.MAX_VALUE]);
i = -1;
results = [];
while (++i < randomIntegers.length) {
    results.push(in_range_1.inRange([-1000000, Number.MAX_VALUE], randomIntegers[i]));
}
if (results.length === randomIntegers.length && !results.includes(false) && !results.includes(undefined))
    console.log('test 7 passed');
else
    console.log('test 7 FAILED');
