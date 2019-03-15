function ayeHowMuchForThePhone() {

var phonePrices = [46, 78, 68, 100];
var phoneSales = [58, 26, 85, 90];
var phoneNames = ["Razor", "Chocolate", "Nokia", "iPhone"];

for (var i = 0; i < phoneNames.length; i++) {
	console.log("Total", phoneNames[i], "sales are", "$" + phoneSales[i] * phonePrices[i])
	document.getElementById('phoneName').innerHTML = phoneNames[i];
	document.getElementById('phodeSales').innerHTML = phoneSales[i];
	document.getElementById('phonePrices').innerHTML = phonePrices[i];
};

}



ayeHowMuchForThePhone(); //add this to a button