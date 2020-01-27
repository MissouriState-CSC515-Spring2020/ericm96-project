import format from 'date-fns/format';

var span = document.querySelector('#greeting');

export default function start() {
	span.textContent = 'Hello World!';
	// setTimeout(update, 1000);
}
