let hours = 0;
let minutes = 0;
let seconds = 0;

let interval;

function start() {
	interval = setInterval(counting, 1000);
}

function pause() {
	clearInterval(interval);
}

function stop() {
	clearInterval(interval);

	hours = 0;
	minutes = 0;
	seconds = 0;

	document.getElementById('counter').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`;
}

function counting() {
	seconds ++;
		
	if (seconds === 60) {
		seconds = 0;
		minutes ++;

		if (minutes === 60) {
			minutes = 0;
			hours ++;
		}
	}

	document.getElementById('counter').innerText = `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds)}`
}

function twoDigits(digit) {
	if (digit < 10) {
		return ('0' + digit);
	} else {
		return (digit)
	}
}