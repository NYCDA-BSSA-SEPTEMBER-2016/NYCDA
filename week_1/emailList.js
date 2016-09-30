// Create a new class called EmailList. The constructor function should take in one parameter, "name", 
// and return an instance which contains the following:

// name, the name of the email list
// list, an array of all the emails in that list. Note that initially, the array will be empty.
// Add a function to the EmailList's prototype. This function should be called "addEmail", 
// and it should take one parameter, the email address, and add it to the "list" array of the instance.

// Add another function to the prototype, called "sendEmailToAll". This function should take in one parameter:
//  the text of the email, and then "send an email to each address". Since that lecture will be sometime in week 6, 
//  for now, simply print out the following:

// "Email content:"
// <list the text of the email to be sent>

// "Sending email to:"
// <list all email addresses>

function EmailList (name) {
	this.name = name;
	this.list = [];
	this.addEmail = function (address) {
		this.list.push(address);
	}
	this.sendEmailToAll = function (text) {
		console.log("Email content:");
		console.log(text);
		console.log('Sending email to:');
		console.log(this.list);
		return function () {
			for (var i = 0; i < this.list.length; i++) {
				console.log('Sent email with ' + text + ' to ' + this.list[i]);
			}
		}
	}
}

var coders = new EmailList ('coders');
coders.addEmail('harrypotter@gmail.com');
coders.addEmail('jantjepapper@tt.com');
var sendMail = coders.sendEmailToAll('Gegroet heren.');
sendMail.call(coders);