//Objects

var myCat = {
	tail:"long",
	age:29,
	color: "white",
	friends: ['Tiffany','Roshell','Sharonda']
}

console.log("Age of cat: ", myCat.age);
console.log("Color of cat: ", myCat["color"]);

for (var myKey in myCat){
	console.log("myKey", myKey); //Get Keys if you don't know what they are
	console.log("values", myCat[myKey]); //Get values now that you know the keys
}

//Functions
var nuggetElement = document.getElementById("nuggetShack");
console.log("nuggetElement", nuggetElement);

function nuggetMaker(animal) {
	var myNugget = "breading" + animal + "breading"; //At this point myNugget is stuck in this function
	return myNugget; //to get myNugget out you have to return it
}

var chickenNuggets = nuggetMaker("chicken"); //The idea is that you feed something
console.log("chickenNuggets", chickenNuggets);
nuggetElement.innerHTML = chickenNuggets;

var lobsterNuggets = nuggetMaker("lobster"); //into a function and get stuff out of it
console.log("lobsterNuggets",lobsterNuggets);
nuggetElement.innerHTML = lobsterNuggets;


//var ____ = nuggetMaker("myComputer");

//*****new function*****//
// function myLooper(myArray){
// 	for (var i = 0; i < myArray.length; i++) {
// 		console.log(myArray[i]);
// 	}
// }

// var babyNames = ["Jasmine","Marie","Frances","Katia","Paula"];
// var babyShowerColors = ["pink","purple","lavender","teal","flax"]
// myLooper(babyNames);
// myLooper(babyShowerColors);