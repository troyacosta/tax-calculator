'use strict';

var output = document.getElementById('output');
var amount = document.getElementById('inputAmount')
var form = document.querySelector('form');

form.addEventListener('submit', function(e) {
	var subTotal = parseInt(amount.value);
	e.preventDefault();
	if(document.getElementById('yes').checked) {
		var calculatedTotal = (subTotal * .055) + subTotal;
		calculatedTotal = calculatedTotal.toFixed(2);
		return output.innerHTML = '$ '+ calculatedTotal;
	}
	return output.innerHTML = '$ ' + subTotal;
})

