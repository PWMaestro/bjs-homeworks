'use strict'

//--------- Tasks 1 & 2 --------

class Weapon {
	constructor(name, attack, durability, range) {
		this.name = name,
		this.attack = attack,
		this.durability = {
			full: durability,
			current: durability
		},
		this.range = range
	}

	takeDamage(damage) {
		this.durability.current = (this.durability.current < damage) ? 0 : this.durability.current - damage;
	}

	getDamage() {
		if (!this.durability.current) {
			return 0;

		} else if (this.durability.current < 0.3 * this.durability.full) {
			return this.attack / 2;

		} else {
			return this.attack;
		}
	}

	isBroken() {
		return !this.durability.current || false;
	}
}

class Arm extends Weapon {
	constructor() {
		super('Рука', 1, Infinity, 1);
	}
}

class Bow extends Weapon {
	constructor(name = 'Лук', attack = 10, durability = 200, range = 3) {
		super(name, attack, durability, range);
		this.name = 'Лук';
	}
}

class Sword extends Weapon {
	constructor(name = 'Меч', attack = 25, durability = 500, range = 1) {
		super(name, attack, durability, range);
		this.name = 'Меч';
	}
}

class Dagger extends Weapon {
	constructor() {
		super('Кинжал', 5, 300, 1);
	}
}

class Staff extends Weapon {
	constructor(name = 'Посох', attack = 8, durability = 300, range = 2) {
		super(name, attack, durability, range);
		this.name = 'Посох';
	}
}

const arm = new Arm();
const bow = new Bow();
const sword = new Sword();
const dagger = new Dagger();
const staff = new Staff();

class LongBow extends Bow {
	constructor() {
		super('Длинный лук', 15, 200, 4);
	}
}

class Axe extends Sword {
	constructor() {
		super('Секира', 27, 800, 1);
	}
}

class StormStaff extends Staff {
	constructor() {
		super('Посох бури', 10, 300, 3);
	}
}

const longBow = new LongBow();
const axe = new Axe();
const stormStaff = new StormStaff();

//-------- Task 3 --------

class StudentLog {
	constructor(name) {
		this.name = name;
		this.subjects = {};
	}

	getName() {
		return this.name;
	}

	checkGrade(grade) {
		return !(isNaN(parseFloat(grade)) || (grade < 1 || grade > 5));
	}

	isSubjectExist(subject) {
		return (subject in this.subjects);
	}

	getGradesCountBySubject(subject) {
		return this.subjects[subject].length;
	}

	addGrade(grade, subject) {
		if (!this.checkGrade(grade)) {
			console.log(`Вы пытались поставить оценку: ${grade} по предмету: ${subject}. Допускаются только числа от 1 до 5.`);
			return (this.isSubjectExist(subject)) ? this.getGradesCountBySubject(subject) : 0;

		} else if (!this.isSubjectExist(subject)) {
			this.subjects[subject] = [];
		}

		this.subjects[subject].push(grade);
		return this.getGradesCountBySubject(subject);
	}

	getAverageBySubject(subject) {
		if (!this.isSubjectExist(subject)) {
			console.log('Указанного вами предмета в журнале не существует!');
			return 0;
		}

		let summ = 0;
		for (let i = 0; i < this.subjects[subject].length; i++) {
			summ += this.subjects[subject][i];
		}
		return (summ / this.subjects[subject].length).toFixed(2);
	}

	getTotalAverage() {
		let summ = 0;
		let subjectsCounter = 0;
		if (Object.keys(this.subjects).length === 0) {
			console.log('В журнал не занесено ни одного предмета!');
			return 0;

		} else {
			for (let prop in this.subjects) {
				summ += Number(this.getAverageBySubject(prop));
				subjectsCounter++;
			}
			return (summ / subjectsCounter).toFixed(2);
		}
	}
}

//  ----  ------- TEST --------    ----

const log = new StudentLog('Людвиг Айнцвайген');
console.log(`Ученик: ${log.name}`);

/* -------- algebra marks added --------
	average: 3.00;
	number of marks: 10;
*/

log.addGrade(1, 'algebra');
log.addGrade(2, 'algebra');
log.addGrade(3, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'algebra');
log.addGrade(3, 'algebra');
log.addGrade(3, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(2, 'algebra');
log.addGrade(3, 'algebra');

/* -------- geometry marks added --------
	average: 3.20;
	number of marks: 10;
*/
log.addGrade(1, 'geometry');
log.addGrade(4, 'geometry');
log.addGrade(4, 'geometry');
log.addGrade(3, 'geometry');
log.addGrade(5, 'geometry');
log.addGrade(3, 'geometry');
log.addGrade(3, 'geometry');
log.addGrade(2, 'geometry');
log.addGrade(3, 'geometry');
log.addGrade(4, 'geometry');

/* -------- history marks added --------
	average: 3.1(6);
	number of marks: 6;
*/
log.addGrade(2, 'history');
log.addGrade(4, 'history');
log.addGrade(3, 'history');
log.addGrade(5, 'history');
log.addGrade(2, 'history');
log.addGrade(3, 'history');

/* -------- russian marks added --------
	average: 3.2857...;
	number of marks: 7;
*/
log.addGrade(4, 'russian');
log.addGrade(2, 'russian');
log.addGrade(2, 'russian');
log.addGrade(3, 'russian');
log.addGrade(4, 'russian');
log.addGrade(3, 'russian');
log.addGrade(5, 'russian');

/* -------- physics marks added --------
	average: 3.(6);
	number of marks: 3;
*/
log.addGrade(3, 'russian');
log.addGrade(4, 'russian');
log.addGrade(4, 'russian');

/* -------- music marks added --------
	average: 4.8;
	number of marks: 5;
*/
log.addGrade(5, 'music');
log.addGrade(5, 'music');
log.addGrade(5, 'music');
log.addGrade(4, 'music');
log.addGrade(5, 'music');

// -||------||- Trying to put down Wrong Grade -||------||-

console.log(log.addGrade(0, 'geometry'));
console.log(log.addGrade(-156, 'geometry'));
console.log(log.addGrade(NaN, 'geometry'));
console.log(log.addGrade(Infinity, 'geometry'));
console.log(log.addGrade('Крэкс Пэкс Фэкс!', 'geometry'));
console.log(log.addGrade({}, 'geometry'));
console.log(log.addGrade(true, 'geometry'));

// -------- Counting Average by subject and all Subjects --------

console.log(`\nИзучает предметы: ${Object.keys(log.subjects).join(', ')}`);
console.log(`\nСреднее арифметическое по предмету algebra: ${log.getAverageBySubject('algebra')}`);
console.log(`\nСреднее арифметическое по предмету geometry: ${log.getAverageBySubject('geometry')}`);
console.log(`\nСреднее арифметическое по предмету history: ${log.getAverageBySubject('history')}`);
console.log(`\nСреднее арифметическое по предмету russian: ${log.getAverageBySubject('russian')}`);
console.log(`\nСреднее арифметическое по предмету music: ${log.getAverageBySubject('music')}`);
console.log(`\nСреднее арифметическое по всем предметам: ${log.getTotalAverage()}`);