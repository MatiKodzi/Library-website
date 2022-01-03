const textDisplay = document.getElementById('txt-type');
const words = ['World', 'Word'];

let i = 0;
let j = 0;
let currentword = []
let isDeleting = false;
let isEnd = false;
let isBeg = false

function loop() {

	isBeg = false
	isEnd = false

	if (i < words.length) {

		if (!isDeleting && j <= words[i].length) {
			currentword.push(words[i][j])
			j++
			textDisplay.innerHTML = currentword.join('');
		}

		if (isDeleting && j <= words[i].length) {
			currentword.pop(words[i][j])
			j--
			textDisplay.innerHTML = currentword.join('');
		}

		if (j == words[i].length) {
			isEnd = true;
			isDeleting = true;
		}

		if (isDeleting && j === 0) {
			currentword = []
			isBeg = true;
			isDeleting = false;
			i++
			if (i == words.length) {
				i = 0;
			}
		}

	}
	const removing = 300
	const writting = 500
	const time = isBeg ? 1300 : isEnd ? 2000 : isDeleting ? removing : writting

	setTimeout(loop, time)

}

loop();





