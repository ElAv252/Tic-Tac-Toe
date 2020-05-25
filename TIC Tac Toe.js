let player1 = 'X';
const docqueryTD = document.querySelector(".Ctd");
const classCtd = document.getElementsByClassName('Ctd');
const table = document.getElementById('table');

function turns() {
	this.innerHTML = player1;
	if (player1 === 'X') {
		player1 = 'O'
		document.getElementById('OPoints').style.backgroundColor = 'rgba(167, 184, 41, 0.507)';
		document.getElementById('XPoints').style.backgroundColor = 'rgba(175, 167, 167, 0.507)';
	} else {
		player1 = 'X'
		document.getElementById('XPoints').style.backgroundColor = 'rgba(167, 184, 41, 0.507)';
		document.getElementById('OPoints').style.backgroundColor = 'rgba(175, 167, 167, 0.507)';
	}
	WinnerCheck()
	document.getElementById('XPoints').innerHTML;
	document.getElementById('OPoints').innerHTML;
}
Object.keys(classCtd).map((key) => {
	classCtd[key].addEventListener('click', turns, { once: true })
})

function endgame() {
	Object.keys(classCtd).map((key) => {
		classCtd[key].innerHTML = '';
		classCtd[key].style.cursor = 'pointer';
		classCtd[key].style.opacity = '1.0';
		classCtd[key].style.backgroundColor = '';
		classCtd[key].addEventListener('click', turns, { once: true })
	})
}

function DeclarationOfVictory() {
	document.getElementById('VictoryMessage').style.display = 'block';
	Object.keys(classCtd).map((key) => {
		classCtd[key].removeEventListener('click', turns)
		classCtd[key].style.cursor = 'not-allowed';
		classCtd[key].style.opacity = '0.3';
	})
	document.getElementById('restart').addEventListener('click', () => {
		document.getElementById('VictoryMessage').style.display = 'none';
		endgame()
	})
	if (player1 !== 'X') {
		document.getElementById('WinnerName').innerHTML = 'The winner is X'
		document.getElementById('XPoints').innerHTML = `X ${ScoringX()}`;
	} else {
		document.getElementById('WinnerName').innerHTML = 'The winner is O'
		document.getElementById('OPoints').innerHTML = `${ScoringO()} O`;
	}
	document.getElementById('Encouraging').style.backgroundColor = 'green';
	Encouraging('Well done', 'you are Champion', 'very good', 'excellent', 'you are awesome')
}

function DeclarationOfEquality() {
	document.getElementById('VictoryMessage').style.display = 'block';
	Object.keys(classCtd).map((key) => {
		classCtd[key].removeEventListener('click', turns)
		classCtd[key].style.cursor = 'not-allowed';
		classCtd[key].style.opacity = '0.3';
	})
	document.getElementById('restart').addEventListener('click', () => {
		document.getElementById('VictoryMessage').style.display = 'none';
		endgame()
	})
	document.getElementById('WinnerName').innerHTML = 'draw';
	document.getElementById('Encouraging').style.backgroundColor = 'red';
	Encouraging('No one won', 'try next time to win', 'No one won', 'try next time to win', 'No one won')
}

function WinnerCheck() {
	let WinCombos = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	]
	for (let i = 0; i < 8; i++) {
		if (classCtd[WinCombos[i][0]].innerHTML === 'X' &&
			classCtd[WinCombos[i][1]].innerHTML === 'X' &&
			classCtd[WinCombos[i][2]].innerHTML === 'X' ||
			classCtd[WinCombos[i][0]].innerHTML === 'O' &&
			classCtd[WinCombos[i][1]].innerHTML === 'O' &&
			classCtd[WinCombos[i][2]].innerHTML === 'O') {
			classCtd[WinCombos[i][0]].style.backgroundColor = 'green';
			classCtd[WinCombos[i][1]].style.backgroundColor = 'green';
			classCtd[WinCombos[i][2]].style.backgroundColor = 'green';
			DeclarationOfVictory();
			break;

		} else if (classCtd[0].innerHTML !== '' &&
			classCtd[1].innerHTML !== '' &&
			classCtd[2].innerHTML !== '' &&
			classCtd[3].innerHTML !== '' &&
			classCtd[4].innerHTML !== '' &&
			classCtd[5].innerHTML !== '' &&
			classCtd[6].innerHTML !== '' &&
			classCtd[7].innerHTML !== '' &&
			classCtd[8].innerHTML !== '') {
			DeclarationOfEquality()
		}
	}
};

let ScoringX = (function () {
	let counter = 0;
	return function () {
		return counter += 1;
	}
})()

let ScoringO = (function () {
	let counter = 0;
	return function () {
		return counter += 1;
	}
})()

function Encouraging(a, b, c, d, e) {
	let array1 = [a, b, c, d, e];
	let ar1 = array1[Math.floor(Math.random() * 5)]
	document.getElementById('Encouraging').innerHTML = ar1;
}