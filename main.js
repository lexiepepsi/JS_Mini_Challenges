// Create a script with two variables, each assigned to a number. Add them together and output the result to the console. Now do the same with two strings.

var x = 25;
var y = 38;

console.log(x + y);


var x = "hi there";
var y = "shirmung!";

console.log(x + " " + y);

// Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var seasonal = ["cotton candy", "guardians mix", "brownie batter"];

var DQ_blizzards = ["oreo", "butterfinger", "M&M", seasonal];

console.log(DQ_blizzards[3][0]);
console.log(DQ_blizzards[3][2]);

// Write a script that checks if a variable is less than 100. If it is, alert the user that their variable is less than 100. If it is not alert the user of what the value was and that it was greater than 100.

var x = 8140;

if (x < 100) {
	alert("your number is SO small! It's less than 100.");
} else if (x >= 100){
	alert("your number " + x + " is greater than 100.");
} else {
	alert("did you type a number?");
}

// Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.


function yourName(entry) {
	return "the name you entered was " + entry;
}

console.log(yourName("bob"));

// Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options. There must be at least 3 doors.

function openThisDoor(doorNumber) {
	if (doorNumber === 1) {
		return alert("You picked door number " + doorNumber + "! You win . . . an ice cream cone! Lucky you!!!");
	} else if (doorNumber === 2) {
		return alert("You picked door number " + doorNumber + "! You win . . . a raccoon! . . . that's super weird.");
	} else if (doorNumber === 3) {
		return alert("You picked door number " + doorNumber + "! You win . . . a BRAND NEW pen! OMG that's the best prize ever!");
	} else {
		return alert("You picked door number " + doorNumber + "! Did you enter a number? There are only 3 doors.");
	}
}

openThisDoor(2);