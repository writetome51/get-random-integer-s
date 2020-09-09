import {getArrFilled} from '@writetome51/get-arr-filled';
import {getRoundedDown} from '@writetome51/get-rounded-up-down';
import {isInteger} from '@writetome51/is-integer-is-float';
import {not} from '@writetome51/not';


export function getRandomInteger([min, max]) {
	if (not(isInteger(min)) || not(isInteger(max))) throw new Error(
		'Both items in the range array must be integers'
	);
	if (min > max) throw new Error(
		'In the range array, the min number must be less than or equal to the max number'
	);
	let totalRange = max - min + 1;
	return getRoundedDown(Math.random() * totalRange + min);
}


export function getRandomIntegers(howMany, [min, max]) {
	return getArrFilled(howMany, () => getRandomInteger([min, max]));
}
