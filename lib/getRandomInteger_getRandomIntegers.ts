import { isInteger } from 'basic-data-handling/isInteger_isFloat';
import { getRoundedDown } from '@writetome51/get-rounded-up-down';
import { errorIfNotIntegerZeroOrGreater } from 'basic-data-handling/errorIfNotIntegerZeroOrGreater';
import { errorIfNotPopulatedArray } from 'error-if-not-populated-array';


export function getRandomInteger(range: [number, number]): number {
	errorIfNotPopulatedArray(range);
	if (isInteger(range[0]) && isInteger(range[1])) {
		let min = range[0];
		let max = range[1];
		if (min > max) {
			throw new Error('In the range array, the first number must be less than or' +
				' equal to the second number');
		}
		let totalRange = max - min + 1;
		return getRoundedDown(Math.random() * totalRange + min);
	}
	else throw new Error('Both items in the range array must be integers');
}


export function getRandomIntegers(howMany, range: [number, number]): number[] {
	let randomIntegers = [];
	errorIfNotIntegerZeroOrGreater(howMany);

	for (let i = 0; i < howMany; ++i) {
		let intWithinRange = getRandomInteger(range);
		randomIntegers.push(intWithinRange);
	}
	return randomIntegers;
}
