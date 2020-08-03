import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { errorIfLengthIsZero } from 'error-if-length-is-zero';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { isInteger } from '@writetome51/is-integer-is-float';


export function getRandomInteger([min, max]): number {
	errorIfLengthIsZero(arguments[0]);
	if (!(isInteger(min)) || !(isInteger(max))) throw new Error(
		'Both items in the range array must be integers'
	);
	if (min > max) throw new Error(
		'In the range array, the first number must be less than or equal to the second number'
	);
	let totalRange = max - min + 1;
	return getRoundedDown(Math.random() * totalRange + min);
}


export function getRandomIntegers(howMany, [min, max]): number[] {
	errorIfNotIntegerZeroOrGreater(howMany);

	let randomIntegers = [];
	for (let i = 0; i < howMany; ++i) randomIntegers[i] = getRandomInteger([min, max]);
	return randomIntegers;
}
