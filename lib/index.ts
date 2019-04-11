import { errorIfNotIntegerZeroOrGreater } from 'error-if-not-integer-zero-or-greater';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { isInteger } from '@writetome51/is-integer-is-float';


export function getRandomInteger([min, max]): number {
	errorIfNotPopulatedArray(arguments[0]);

	if (isInteger(min) && isInteger(max)) {
		if (min > max) {
			throw new Error('In the range array, the first number must be less than or' +
				' equal to the second number');
		}
		let totalRange = max - min + 1;
		return getRoundedDown(Math.random() * totalRange + min);
	}
	else throw new Error('Both items in the range array must be integers');
}


export function getRandomIntegers(howMany, [min, max]): number[] {
	let randomIntegers = [];
	errorIfNotIntegerZeroOrGreater(howMany);

	for (let i = 0; i < howMany; ++i) {
		let intWithinRange = getRandomInteger([min, max]);
		randomIntegers.push(intWithinRange);
	}
	return randomIntegers;
}
