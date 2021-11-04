//javascript goes here inside script tags
//document.write("Hi"); //write direct to webpage
document.write("<h1>Hello World!</h1>"); //using HTML tags

//this is a var declare and value assigned
var name = "Jo";
document.write("Hi " + name + "\n how are you? "); //making use of the variable

var today = new Date(); // create instance of Date
var currentTime = today.getHours() + ":" + today.getMinutes();; // gets current time from the Date object
alert(currentTime); // alert showing the current time

var baseNumber = parseInt(prompt("Enter number to find the square root of")) // asks user for a number
if (baseNumber > 0) // dont try get square root of antything less then 0
{
    alert("Result :" + Math.sqrt(baseNumber)); // show square root of prompted number
}