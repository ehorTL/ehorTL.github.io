function setTime() {
	var clock = document.querySelector('#clocks');
	var now = new Date();
	var seconds = zeroPad(now.getSeconds());
	var minutes = zeroPad(now.getMinutes());
	var hours = zeroPad(now.getHours());
	clock.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function zeroPad(value) {
	if (value < 10) {
		return '0' + value;
	}
	return value;
}

setInterval(setTime, 1000);

setTime();