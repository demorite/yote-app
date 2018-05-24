const five = require('johnny-five');
const board = new five.Board();

function ready() {
	const sensor = new five.Sensor("A4");
	const digital = new five.Led(11);
	let number = 0;
	let isWaiting = false;
	digital.pulse(1000);

	sensor.within([0, 10], function () {
		if (!isWaiting) {
			console.log(`GOAL n°${number++}!!!!!!`);
			digital.blink(1000);
			setTimeout(() => {
				digital.on().fadeOut();
			}, 2000);
			isWaiting = true;
			setTimeout(() => isWaiting = false, 3000)
		}

	});
}

board.on("ready", ready);
