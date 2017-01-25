//var phrase = "\"the quick brown fox jumped over the lazy dog\"";
////alert("There are " + quote.length +" characters in this sentence");
//var element = document.getElementById("container");
//console.log(document);
//
//element.innerHTML = phrase;

//grab the contents of the div from index.html
var element = document.getElementById("sonnet");
var sonnet = element.innerHTML;

//display the index of the word orphan in the console
var indexOfOrphans = sonnet.indexOf("orphans");


//display the number if characters in the sonnet
alert("There are " + sonnet.length +" characters in this sonnet");

//replace "winter" with "yuletide"
var textreplace = sonnet.replace("winter","yuletide");


//globally replace all "the" with "a large"
var globalreplace = textreplace.replace(/the/g,"a large");


//replace the text of the div on screen **this will not change the index.html
document.getElementById("sonnet").innerHTML = "The quick brown fox jumped over the lazy dog!"


//Or you can replace text using this line as well
element.innerHTML = globalreplace;