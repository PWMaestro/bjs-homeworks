
'use strict';

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
	let discriminant = b**2 - 4 * a * c;
	let x = [];
	if (discriminant < 0) {
		console.log('Корней нет.');
	} else if (discriminant === 0) {
		console.log(discriminant);
		x.push(-b / 2 * a);
		return x;
	} else {
		console.log(discriminant);
		x.push((-b + Math.sqrt(discriminant)) / 2 * a,
			(-b - Math.sqrt(discriminant)) / 2 * a);
		return x;
	}
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
	let now = new Date();
	let fullYear = (now.getFullYear() - dateOfBirthday.getFullYear());
	let conclusion;
	if (fullYear > 18) {
		conclusion = `Не желаете ли олд-фэшн, ${name}`
	} else {
		conclusion = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
	}
    console.log(conclusion);

    return conclusion;
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
	if (marks.length > 5) {
		console.log(`Количество введённых оценок: ${marks.length}.\nДальнейший расчёт среднего арифметического будет выполнен для первых пяти оценок.`);
		marks.length = 5;
	}

	let marksSum = 0;
	for (let i = 0; i < marks.length; i++) {
		marksSum += marks[i];
	}
	let averageMark = marksSum / marks.length;

	return averageMark.toFixed(2);
}