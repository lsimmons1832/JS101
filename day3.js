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