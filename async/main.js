'use strict'

function setDailyRhythm(wakeUp = '13:13', bedTime = '23:00') {
	const checkMorningAlarm = setAlarm(wakeUp, goodMorning);
	const checkEveningAlarm = setAlarm(bedTime, goodEvening);
	console.log(`Установлены будильники на время:\n${wakeUp} и\n${bedTime}`);

	setInterval(() => {
		const time = `${(new Date).getHours()}:${(new Date).getMinutes()}`;
		checkMorningAlarm(time);
		checkEveningAlarm(time);
	}, 1000);
}

function setAlarm(time, callback) {
	return (currentTime) => (currentTime !== time) || callback();
}

const goodMorning = () => console.log('Bro, good morning! Wake up!');
const goodEvening = () => console.log('Bro, good evening! You should go to bed!');

setDailyRhythm('14:34', '19:16');