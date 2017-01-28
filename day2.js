//switch statements

//var day = "Friday";
//switch(day){
//	case "Monday":
//		console.log("Not again!");
//		break;
//	case "Friday":
//		console.log("PARTAY!!!!");
//		break;
//	default:
//		console.log("Not Monday");
//}

//Array
//
//var bucket = ['cats', 12, 33];
//
////add something to the end of the array
//bucket.push
////remove something from the back of the array
//bucket.pop
////add something to the front of the array
//bucket.shift
////remove something from the front of the array
//bucket.unshift
//
//var fruits = ["cherries","apples","bananas"];
//var fruitString = fruit.join(", ");
//console.log("fruitString", fruitString);
//
//
//var catColors = 'green,red,yellow,black';
//var catColorsArray = catColors.split(",");

//var reverseFruit = fruit.reverse();
//
//var alphaFruit = fruit.sort();
//
//var nums = [9,6,8,2,4,11,66]; //2,4,6,8,9,11,66
//var numSort = nums.sort(
//	function(a,b){
//		return a-b;
//	}
//); // in order to sort numbers you need the function and return
//
//console.log("numSort", numSort);
//
//var mixedCrap = ['r','m',33,9,3];
//console.log("????",mixedCrap.sort());
//
//var animals = ['cats','turtles','fish','bears','tigers'];
//console.log("fish index", animals.indexOf("fish"));
//
//var animals2 = animals.slice(2,4);
//console.log("animals2",animals2);
//
//animals.splice(1,1);
//console.log("no turtles", animals);
//
//var colors = ["red","blue","gold","pink","orange"];
//
////sort, reverse, make a string
//var finalAnswer = colors.sort().reverse().join(" cat ");
//console.log("finalAnswer", finalAnswer);//

//for(var i=0; i<5; i++){
//	console.log("i",i);
//}
//
//var fruits = ["cherries","apples","bananas"];
//
//for (var j=0; j<fruits.length; j++) {
//	console.log("fruits",fruits[j]);
//}

//write a for loop that increments by 10 each time = 10 times 10,20,30,40,50....100
for(var i=0; i<101; i=i+10){
	console.log("i",i);
}

//for loop that pushes the index to an array for 5 times console.log the (array) \\ [0,1,2,3,4]
var myArray = [];
for (var i = 0; i<5; i++) {
	myArray.push(i);
}
console.log("myArray", myArray);
//for loop that starts at 100 and divides by 2 each time 3 times = 100,50,25
var num = 100;
for (var j = 0; j<3; j++) {
	console.log("Numbers: ", num);
	num=num/2;
}