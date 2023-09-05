function capitalizeWords() {
	let str = document.getElementById('texto').value;
	let cutCaracters = document.getElementById('caracters').value;

	let nameLower = str
		.toLowerCase()
		.replace(/(^|\s)\S/g, (firstLetter) => firstLetter.toUpperCase());

	let firstCaracters = nameLower.slice(0, cutCaracters);

	document.getElementById('firstCaracters').value = firstCaracters;
	document.getElementById('allCaracters').value = nameLower;
	document.getElementById(
		'labelFirstCaracters'
	).innerHTML = `Title Cutted with ${cutCaracters} caracters`;
	document.getElementById(
		'labelTituloCompletos'
	).innerHTML = `Full Title with ${nameLower.length} caracters`;
}
