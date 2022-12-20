const change = e => {
	const value = e.value;
	e.value = value.replace(/\D/g, '');
}

function out() {
	let meaning = document.getElementById("inp").value;
	let lastChar = meaning.substr(meaning.length - 1);
	let lastChar2 = meaning.substr(meaning.length - 2);

	if (lastChar2 <= 20 & lastChar2 >= 10) {
		document.getElementById('result').value = `${meaning} Яблок`;
	}
	else if (lastChar == 1) {
		document.getElementById('result').value = `${meaning} Яблоко`;
	}
	else if (lastChar >= 2 && lastChar <= 4) {
		document.getElementById('result').value = `${meaning} Яблока`;
	}
	else if (lastChar == 0) {
		document.getElementById('result').value = `${meaning} Яблок`;
	}
	else
		document.getElementById('result').value = `${meaning} Яблок`;
}