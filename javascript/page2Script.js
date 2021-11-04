//javascript goes here inside script tags

var name = "unnamed" // default user name

var potentialName = prompt("Please enter your name") // get user name
if (potentialName != null) // only sets name if user entered anything
    name = potentialName;

document.write("<h1>Hello " + name + "</h1>"); //using HTML tags, using result of prompt