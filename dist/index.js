"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var error_if_not_integer_zero_or_greater_1 = require("error-if-not-integer-zero-or-greater");
var error_if_not_populated_array_1 = require("error-if-not-populated-array");
var get_rounded_up_down_1 = require("@writetome51/get-rounded-up-down");
var is_integer_is_float_1 = require("@writetome51/is-integer-is-float");
function getRandomInteger(_a) {
    var min = _a[0], max = _a[1];
    error_if_not_populated_array_1.errorIfNotPopulatedArray(arguments[0]);
    if (is_integer_is_float_1.isInteger(min) && is_integer_is_float_1.isInteger(max)) {
        if (min > max) {
            throw new Error('In the range array, the first number must be less than or' +
                ' equal to the second number');
        }
        var totalRange = max - min + 1;
        return get_rounded_up_down_1.getRoundedDown(Math.random() * totalRange + min);
    }
    else
        throw new Error('Both items in the range array must be integers');
}
exports.getRandomInteger = getRandomInteger;
function getRandomIntegers(howMany, _a) {
    var min = _a[0], max = _a[1];
    var randomIntegers = [];
    error_if_not_integer_zero_or_greater_1.errorIfNotIntegerZeroOrGreater(howMany);
    for (var i = 0; i < howMany; ++i) {
        var intWithinRange = getRandomInteger([min, max]);
        randomIntegers.push(intWithinRange);
    }
    return randomIntegers;
}
exports.getRandomIntegers = getRandomIntegers;
