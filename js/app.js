$(document).ready(function() {

	//establish for loop from 1 to 100
	for (var i = 1; i < 101; i++) {
		if (i%3==0 && i%5==0) {
			//if divisible by 3 and 5 print "fizz buzz"
			$("body").append("fizzbuzz\n");
		} else if (i%3==0) {
			//if divisible by only 3 "fizz"
			$("body").append("fizz\n");
		} else if (i%5==0) {
			//if divisible by only 5 "buzz"
			$("body").append("buzz\n");
		} else {
			//if not divisible by 3 or 5 list the number
			$("body").append(i + "\n");
		}
	//end for loop
	}

});