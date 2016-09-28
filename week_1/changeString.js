function bloopAppender (word) {
	return word + 'bloop';
}

function doubler (word) {
	return word + word;
}

function changeString (word, firstOperation, secondOperation) {
	console.log(secondOperation(firstOperation(word)));
}

changeString('I\'m a fish!', bloopAppender, doubler)
changeString('I\'m a fish!', doubler, bloopAppender)