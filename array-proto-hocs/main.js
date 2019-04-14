'use strict'

function compareArrays(arr1, arr2) {
	return (arr1.length === arr2.length) ? arr1.every((element, index) => element === arr2[index]) : false;
}

const summArrayItems = function (array) {
	console.log('\nNew call\nComputing...');
	let summ = 0;
	for (let prop of array) {
		summ +=prop;
	}
	return summ;
}

function memorize(fn, limit) {
	const memory = [
		{arg: [5, 7], result: 12}
	];

	return function () {
		let parametrs = Array.from(arguments);
		const index = memory.findIndex((element) => compareArrays(element.arg, parametrs));

		if (index < 0) {
			const fnResult = fn(parametrs);
			memory.push({arg: parametrs, result: fnResult});
			(memory.length <= limit) || memory.shift();
			return fnResult;

		} else {
			console.log('\nNew call\nThe result is taken from memory');
			return memory[index].result;
		}
	}
}

// -------- -------- TESTING -------- --------

const limit = 3;
const mSum = memorize(summArrayItems, limit);

console.log('\n-------- Тест функции "compareArrays" --------\n\n');

console.log('Вызвана функция compareArrays. Сравниваем массивы\n[1, 2] и\n[1, 2, 9]:');
console.log(`Результат функции: ${compareArrays([1, 2], [1, 2, 9])}`);

console.log('Вызвана функция compareArrays. Сравниваем массивы\n[1, 2] и\n[1, 2]:');
console.log(`Результат функции: ${compareArrays([1, 2], [1, 2])}`);

console.log('Вызвана функция compareArrays. Сравниваем массивы\n[1, 2, 3, 4, 5] и\n[1, 2, 3, 4, 6]:');
console.log(`Результат функции: ${compareArrays([1, 2, 3, 4, 5], [1, 2, 3, 4, 6])}`);

console.log('\n-------- -------- FINAL TEST -------- --------');

console.log(`Limit is ${limit};`);

console.log(mSum(5, 7));
console.log(mSum(5, 3));
console.log(mSum(3, 6));
console.log(mSum(5, 9));
console.log(mSum(3, 6));
console.log(mSum(5, 7, 13, 1, 134, 0, 895));
console.log(mSum(5, 3));
console.log(mSum(3, 6));
console.log(mSum(5, 7, 13, 1, 134, 0, 895));
console.log(mSum(5, 9));
console.log(mSum(3, 6));
console.log(mSum(84, 8487, 1925, 1, 1434, 0, 895));
