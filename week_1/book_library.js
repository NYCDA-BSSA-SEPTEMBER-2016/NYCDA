// Book library

// Create an object that represents a book:

// Part 1 Give it a title property with a value that is the title of your book.
// Give it a body� property which has an array of strings as the value. 
// There should be at least three strings within the array. This array represents the pages of text within your book.

// Part 2 Create another object with the same format, but different title and different body.

// Part 3 Now, create a function that reads the book by first printing out the title, 
// then printing out each element (page) in the body. For a book with title "Infinite Jest" and pages 
// "Written by David Foster Wallace", "Hal Incandenza is the youngest of the Incandenza children.", 
// and "As a child, he was very precocious.", the output should read as follows:

// Title: Infinite Jest
// Page 1: Written by David Foster Wallace
// Page 2: Hal Incandenza is the youngest of the Incandenza children.
// Page 3: As a child, he was very precocious.

var book1 = {
	title: 'The Adventures of The Coding Wizard',
	body: ['Cold dark room, bright glowing screen.', 'The air was tense, filled with sweat and fatigue.', 
	'It was late, or early, who could still tell.']
};

var book2 = {
	title: 'The Adventures of The Coding Mage',
	body: ['Cold dark room, bright glowing screen.', 'The air was tense, filled with sweat and fatigue.', 
	'The mage felt excited, it was time for the final showdown: him vs The Wizard.']
};

var book3 = {
	title: 'Infinite Jest',
	body: ['Written by David Foster Wallace', 'Hal Incandenza is the youngest of the Incandenza children',
	'As a child, he was very precocious.']
}
// global functions object
var functions = {
	readBookToConsole: function (book) {
		console.log(book.title);
		for (var page in book.body) {
			console.log('page ' + (parseInt(page) + 1) + ': ' + book.body[page]);
		}
	},
	readBookToConsoleAlt: function (book) {
		console.log(book.title);
		for (var i = 0; i < book.body.length; i++) {
			console.log('page ' + (i + 1) + ': ' + book.body[i]);
		}
	},
	Book: function (title, body) {
		this.title = title;
		this.body = body;
	},
	addBookContent: function (book, prop, value ) {
		book[prop] = value;
	},
	bookify: function (target) {
		for (value in target) {
			target[value] = new functions.Book(target[value]);
		}
	},
	setPrototypes: function () {
		for (prop in prototypes) {
			console.log(prop);
		}
	}
}

// global prototypes object
var prototypes = {
	Book: function () {
		functions.Book.prototype.read = function () {
			console.log(this.title);
			for (var i = 0; i < this.body.length; i++) {
				console.log('page ' + (i + 1) + ': ' + this.body[i]);
			}
		}
	}
	// fix this, doesn't work like it should.
}

var gamesThatShouldBeBooks = [999, 'Phoenix Wright'
, 'Final Fantasy', 'Bioshock'];
functions.bookify(gamesThatShouldBeBooks);
// what happens if I array.join this?

for (book in gamesThatShouldBeBooks) {
	functions.addBookContent(gamesThatShouldBeBooks[book],'body',['It all begins with...']);
}

//executables
functions.readBookToConsoleAlt(book3);
functions.setPrototypes();

// TO DO
// make bookify and for loop work with non-array datatypes e.g. strings
// Change Final Fantasy to Array, get bookify to still work
// Figure out readBookToConsole.
// Prototypes