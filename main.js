//Shirmung, I took the examples and changed and commented everything so you'd know I understand how it all works. 


// example of an alert that pops up as soon as it is seen by the system.
alert("Welcome to my site.");

// example of an on click event that returns a specific message when the function is called.
function sayHi() {
  document.getElementById("announcement").innerHTML = "Hope you like this site.";
}


// example of a variable and console.log
var num1 = 100;
var num2 = 200;
var result = num1 + num2;

console.log(num1 + num2); //this gets the sum by adding num1 and num2 and bypasses the var result. it prints 300.
console.log(result); //this is another way of summing that uses the var result to get the sum. it prints 300.

// example of variables and strings of info
var part1 = "I like to eat ";
var part2 = "pie.";
var bothParts = part1 + part2;

console.log(part1 + part2); //same as the example above, this strings together the sentence one way.
console.log(bothParts); //this strings together the same sentence, but in a way that uses the var bothParts

// examples of arrays
var kid = { gender: "girl", age: 8, likesReading: true }; //this holds three different pieces of info about the kid; their gender, their age, and whether they like reading.

console.log(kid.likesReading); // this will print true
console.log(kid.gender); // this will print girl

console.log("My kid is a " + kid.gender + " who is " + kid.age + "."); //this will say "My kid is a girl who is 8."

function faveColor(color) {
  return alert(color);
}

faveColor("orange"); //this returns an alert that says "orange"

// examples of if/else logic

// first example
var num = 25; 

if (num < 7) {
  console.log("Your number " + num + " is less than 7!"); //this only returns when the number is less than 7. it will not show in this case, because the number is 25.
} else {
  console.log("Your number " + num + " is greater than or equal to 7!"); //this only returns once the number gets greater than or equal to 7
}

// examples of if/else logic
var word = "poop"; 

if (word === "poop") {  //the three equal signs are checking to see if it's equal to/true
  console.log("Congrats! The correct word is poop!"); //they only see this language if they type poop exactly correctly. in this example, the visitor gets it right.
} else {
  console.log("No! The word is not " + word + ". The correct word was poop!"); //if they mistype poop or type something else, they'd see this wording instead.
}
