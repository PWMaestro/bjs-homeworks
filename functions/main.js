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
	let decryptedMessage = {
		firstName: decoder(secretData.aaa),
		lastName: decoder(secretData.bbb)
	};

	return decryptedMessage;
}

function decoder(code) {
	switch (code) {
		case 0:
			return 'Родриго';
			break;
		case 1:
			return 'Эмильо';
			break;

		default: 'Внимание! Ошибка дешифратора!';
			return;
			break;
	}
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