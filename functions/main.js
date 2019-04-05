'use strict'
//Задание 1

function getSolutions(a, b, c) {
	let D = Math.pow(b, 2) - 4 * a *c;
	let solution = {D};
	if (D < 0) {
		return solution;

	} else if (D === 0) {
		let x1 = -b / (2 * a);
		solution.roots = [x1];
		return solution;

	} else {
		let x1 = (-b + Math.sqrt(D)) / (2 * a);
		let x2 = (-b - Math.sqrt(D)) / (2 * a);
		solution.roots = [x1, x2];
		return solution;
	}
}

function showSolutionsMessage(a, b, c) {
	let result = getSolutions(a, b, c);
	console.log(`Высисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}.\nЗначение дискриминанта: ${result.D}.`);
	if (result.D < 0) {
		console.log('Уравнение не имеет вещественных корней.');
	} else if (result.D === 0) {
		console.log(`Уравнение имеет один корень. X₁ = ${result.roots[0]}`);
	} else {
		console.log(`Уравнение имеет два корня.  X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
	}
}

console.log('\nТест 1. Существует один корень:\n\n');
showSolutionsMessage(2, 4, 2);

console.log('\nТест 2. Существуют 2 корня:\n\n');
showSolutionsMessage(2, 5, 2);

console.log('\nТест 3. Вещественных корней нет:\n\n');
showSolutionsMessage(2, 1, 2);

//Task 2

function getPersonData(secretData) {
	return {
		firstName: decoder(secretData.aaa),
		lastName: decoder(secretData.bbb)
	};
}

function decoder(code) {
	return (code) ? 'Эмильо' : 'Родриго';
}

console.log('\n--- Task 2 ---\n\n');

console.log('Вариант 1 (aaa = 0, bbb = 0):');
console.log(getPersonData({aaa: 0, bbb: 0}));

console.log('Вариант 2 (aaa = 0, bbb = 1):');
console.log(getPersonData({aaa: 0, bbb: 1}));

console.log('Вариант 3 (aaa = 1, bbb = 0):');
console.log(getPersonData({aaa: 1, bbb: 0}));

console.log('Вариант 4 (aaa = 1, bbb = 1):');
console.log(getPersonData({aaa: 1, bbb: 1}));

//Task 3

let notepad = {
	algebra: [2, 4, 5, 2, 3, 4],
	geometry: [2, 4, 5],
	russian: [3, 3, 4, 5],
	physics: [5, 5],
	music: [2, 2, 6],
	english: [4, 4, 3],
	poetry: [5, 3, 4],
	chemistry: [2, 4, 3],
	french: [4, 4],
	history: [5, 5, 4, 5],
	['social science']: [3, 3, 4, 3]
}

function getAverageScore(data) {
	let averageScore = {};
	for (let prop in data) {
		averageScore[prop] = averageBySubject(data[prop]);
	}
	averageScore.average = averageByAllSubjects(averageScore);

	return averageScore;
}

function averageByAllSubjects(data) {
	let summ = 0;
	let numbOfObj = 0;
	for (let prop in data) {
		summ += data[prop];
		numbOfObj++;
	}

	return summ / numbOfObj;
}

function averageBySubject(subject) {
	let summ = 0;
	for (let i = 0; i < subject.length; i++) {
		summ += subject[i];
	}

	return summ / subject.length;
}

console.log('\n--- Task 3 ---\n\n');
console.log(getAverageScore(notepad));