// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones 
// (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long
//  as your purchase amount is below your mental spending threshold.
// After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, 
// properly formatted.
// Finally, check the amount against your bank account balance to see if you can afford it or not.
// You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending 
// threshold," as well as a variable for your "bank account balance.""
// You should define functions for calculating the tax and for formatting the price with a "$" and 
// rounding to two decimal places.
// Bonus Challenge: Try to incorporate input into this program, perhaps with the prompt(..) covered 
// in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!

function totalPhonePurchases (bank, phonePrice, accessPrice, taxRate, accessLimit) {
// buy phones & accessories until out of money.	
	taxRate = taxRate || 0.21;
	if (taxRate > 1) {
		taxRate /= 100;
	}
	accessLimit = accessLimit || Infinity;
	phonePrice *= taxRate + 1;
	accessPrice *= taxRate + 1;
	var receipt = {
		phones: 0,
		accessories: 0,
		taxesPaid: 0,
		totalPrice: 0
	};
	while (receipt.totalPrice + phonePrice <= bank) {
		receipt.totalPrice += phonePrice;
		receipt.phones += 1;
		if (receipt.totalPrice + accessPrice <= bank && accessPrice <= accessLimit) {
			receipt.totalPrice += accessPrice;
			receipt.accessories += 1;
		}
	}
	receipt.taxesPaid = receipt.totalPrice - receipt.totalPrice / (taxRate + 1);
	receipt.taxesPaid = '$' + receipt.taxesPaid.toFixed(2);
	receipt.totalPrice = '$' + receipt.totalPrice.toFixed(2);
	return receipt;
}

totalPhonePurchases(1000,200,100,0.20);

// bank account
// phone price
// accessory price
// tax rate
// spending threshold

// phones
// accessories
// taxes
// return total
// format into $