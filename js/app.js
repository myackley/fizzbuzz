$(document).ready(function() {

	//user input parsed
	var number = parseFloat(prompt("Please enter a number"));

	//function
	var toNum = function(number) {
		//loop the number
		for (var i = 1; i <= number; i++) {
			if (i % 3 == 0 && i % 5 == 0) {
				//if divisible by 3 and 5 print "fizz buzz"
				$("body").append("fizzbuzz\n");
			} else if (i % 3 == 0) {
				//if divisible by only 3 print "fizz"
				$("body").append("fizz\n");
			} else if (i % 5 == 0) {
				//if divisible by only 5 print "buzz"
				$("body").append("buzz\n");
			} else {
				//print i if not divisible
				$("body").append(i + "\n");
			}
		}
	};

	//validate input
	if (number % 1 != 0) {
		alert("Please enter a whole number");
	} else if (number < 0) {
		alert("Please enter a positive number");
	} else if (number == NaN) {
		alert("Please enter a valid number");
	} else {
		toNum(number);
	}
	
	$("#newnum").on("click", function() {
		location.reload();
	})

});