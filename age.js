//1. How many hours are in a year
var hoursInYear = 365 * 24;
console.log(hoursInYear);
//2. How many minutes are in a decade
var minsInDecade = 60 * (hoursInYear * 10);
console.log(minsInDecade);
//3. How many seconds old they are
var age = prompt("How old are you?");
var secsPerYear =  60 * (hoursInYear * 60);
var SecondsOld = age * secsPerYear;
console.log(SecondsOld);
//4. If they are older than some arbitrary number, console "I'm old", else "I'm young"
if (age >= 20) {
	alert("I'm old");
} else {
	alert("I'm young");
}

 