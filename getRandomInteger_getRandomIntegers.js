"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRounded_getRoundedDown_getRoundedUp_1 = require("@writetome51/get-rounded-up-down/getRounded_getRoundedDown_getRoundedUp");
var errorIfNotIntegerZeroOrGreater_1 = require("basic-data-handling/errorIfNotIntegerZeroOrGreater");
var isInteger_isFloat_1 = require("basic-data-handling/isInteger_isFloat");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
function getRandomInteger(range) {
    error_if_not_populated_array_1.errorIfNotPopulatedArray(range);
    if (isInteger_isFloat_1.isInteger(range[0]) && isInteger_isFloat_1.isInteger(range[1])) {
        var min = range[0];
        var max = range[1];
        if (min > max) {
            throw new Error('In the range array, the first number must be less than or' +
                ' equal to the second number');
        }
        var totalRange = max - min + 1;
        return getRounded_getRoundedDown_getRoundedUp_1.getRoundedDown(Math.random() * totalRange + min);
    }
    else
        throw new Error('Both items in the range array must be integers');
}
exports.getRandomInteger = getRandomInteger;
function getRandomIntegers(howMany, range) {
    var randomIntegers = [];
    errorIfNotIntegerZeroOrGreater_1.errorIfNotIntegerZeroOrGreater(howMany);
    for (var i = 0; i < howMany; ++i) {
        var intWithinRange = getRandomInteger(range);
        randomIntegers.push(intWithinRange);
    }
    return randomIntegers;
}
exports.getRandomIntegers = getRandomIntegers;
