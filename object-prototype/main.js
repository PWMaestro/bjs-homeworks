'use strict'

function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
	if (birthday == '') {//empty data value check
		return false;
	}

	birthday = new Date(Date.parse(birthday));
	let dateOfAge18 = birthday.setFullYear(birthday.getFullYear() + 18);
	if (new Date(dateOfAge18) > new Date()) {
		return false;
	} else {
		return true;
	}
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
	let sound = animal.sound;
	return (sound) ? sound : 'null';
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
	let marksSum = 0;
	for (let i = 0; i < marks.length; i++) {
		marksSum += Number(marks[i]);
	}

	return Math.round(marksSum / marks.length);
}