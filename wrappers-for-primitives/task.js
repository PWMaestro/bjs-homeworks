'use strict'

function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

	function showWrongValueMessage(name, value) {
		let phrase = `Параметр "${name}" отсутствует или содержит неправильное значение: ${value}.`;
		console.log(phrase);
		return phrase;
	}

	function checkDateValue(strDate) {
		let setYear = Number(strDate.substring(0, 4));
		let setMonth = Number(strDate.substring(5, 7));

		if ((setYear - (new Date).getFullYear()) * 12 + setMonth > ((new Date).getMonth() + 1) ) {
			return false;
		} else {
			return true;
		}
	}

	function countMortageTermInMonth(strDate) {
		return (Number(strDate.substring(0, 4)) - (new Date).getFullYear()) * 12 + ( Number(strDate.substring(5, 7)) - ((new Date).getMonth() + 1) );
	}

	if (isNaN(parseFloat(percent))) {		
		return showWrongValueMessage('процентная ставка', percent);

	} else if (isNaN(parseFloat(contribution))) {
		return showWrongValueMessage('первоначальный взнос', contribution);

	} else if (isNaN(parseFloat(amount))) {
		return showWrongValueMessage('общая стоимость', amount);

	} else if (checkDateValue(date)) {
		return showWrongValueMessage('срок ипотеки', date);
	}

	let term = countMortageTermInMonth(date);
	let monthPercent = percent / (100 * 12);
	let creditSum = amount - contribution;
	let totalAmount = ((creditSum * (monthPercent + (monthPercent / (Math.pow((1 + monthPercent), term) - 1) ))) * term).toFixed(2);

	console.log(totalAmount);
    return totalAmount;
}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
	// код для задачи №2 писать здесь
	//return greeting;
}