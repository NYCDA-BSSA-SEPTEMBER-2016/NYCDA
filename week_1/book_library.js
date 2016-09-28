// =GLOBAL FUNCTIONS OBJECT
var functions = {
	readBookToConsole: function (book) {
		console.log('Title: ' + book.title);
		for (var page in book.body) {
			console.log('Page ' + (parseInt(page) + 1) + ': ' + book.body[page]);
		}
	},
	readBookToConsoleAlt: function (book) {
		console.log('Title: ' + book.title);
		for (var i = 0; i < book.body.length; i++) {
			console.log('Page ' + [i + 1] + ': ' + book.body[i]);
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
		for (var value in target) {
			target[value] = new functions.Book(target[value]);
		}
	},
	addBookContentLoop: function (bookArray, prop, value) {
		for (var book in bookArray) {
			functions.addBookContent(bookArray[book],'body',['It all begins with...']);
		}
		// TO DO: merge with normal addBookContent. Instead of 2 functions for 2 datatypes. HOW??? Probably if statement. Or code that works either way (is that possible?).
		// TO DO: build read function that takes an array.
	},
	setAllPrototypes: function (prototypes) {
		for (var prop in prototypes) {
			prototypes[prop]();	
		}
	}
};

// =GLOBAL PROTOTYPES OBJECT
var prototypes = {
	Book: function () {
		functions.Book.prototype.read = function () {
			console.log('Title: ' + this.title);
			for (var i = 0; i < this.body.length; i++) {
				console.log('Page ' + (i + 1) + ': ' + this.body[i]);
			}
		};
	}
};

// =GLOBAL VARIABLE DECLARATIONS
var book1 = new functions.Book('The Adventures of The Coding Wizard',['Cold dark room, bright glowing screen.', 'The air was tense, filled with sweat and fatigue.', 
	'It was late, or early, who could still tell.'])

var book2 = new functions.Book('The Adventures of The Coding Mage',['Cold dark room, bright glowing screen.', 'The air was tense, filled with sweat and fatigue.', 
	'The mage felt excited, it was time for the final showdown: him vs The Wizard.'])

var book3 = new functions.Book('Infinite Jest',['Written by David Foster Wallace', 'Hal Incandenza is the youngest of the Incandenza children',
	'As a child, he was very precocious.'])

var gamesThatShouldBeBooks = [999, 'Phoenix Wright', 'Final Fantasy', 'Bioshock'];

// =GLOBAL DATA MANIPULATIONS
functions.bookify(gamesThatShouldBeBooks);
functions.addBookContentLoop(gamesThatShouldBeBooks);
functions.setAllPrototypes(prototypes);

// =EXECUTABLES
functions.readBookToConsole(book1);
functions.readBookToConsoleAlt(book2);
book3.read();
console.log(gamesThatShouldBeBooks);

// TO DO
// make bookify and for loop work with non-array datatypes e.g. strings
// Change Final Fantasy to Array, get bookify to still work