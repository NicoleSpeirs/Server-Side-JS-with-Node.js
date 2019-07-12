# Basic Node App

## Answers
____

1.What is a Node module?
>Node module is a set of functions that we want to include in our application. The modules are encapsulated, easy to import and are reusable.

2.What is the main difference between exports and module.exports?
>`module.exports` is an empty object that will be returned when we require the encapsulated function. `exports` is a JavaScript variable that is set to `module.exports` and cannot be reassigned.

3.Why is using exports recommended?
>Unless we plan on having a module to be a specific object type it is recomended using `exports` since it will reference the same object as `module.exports` without overriding `exports` or having our properties exposed outside of the module.


## Programming Questions
____
4.Add two more functions, greetingSpanish and greetingIcelandic, in greeting.js.


5.Utilize the two functions in main.js just like greetingEnglish and greetingJapanese.


6.Create another Node module and import it into main.js. Your Node module should have at least two functions within it. Then, call a function from your Node module in main.js.

main.js

````
const greetings = require("./greeting.js");
const goodbyes = require("./goodbye.js");


// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

// "Hola"
greetings.greetingSpanish();

// "Halló"
greetings.greetingIcelandic();

//"Goodbye"
goodbyes.goodbyeEnglish();

//"Sayōnara"
goodbyes.goodbyeJapanese();

//"Adiós"
goodbyes.goodbyeSpanish();

//"Vertu blessaður"
goodbyes.goodbyeIcelandic();

````

greeting.js

````
exports.greetingEnglish = function() {
    console.log("Hello");
  }

exports.greetingJapanese = function() {
    console.log("Konichiwa");
  }

exports.greetingSpanish = function() {
    console.log("Hola");
  }

exports.greetingIcelandic = function() {
    console.log("Halló");
  }
````

goodbye.js

````
exports.goodbyeEnglish = function() {
  console.log("Goodbye");
}

exports.goodbyeJapanese = function() {
  console.log("Sayōnara");
}

exports.goodbyeSpanish = function() {
  console.log("Adiós");
}

exports.goodbyeIcelandic = function() {
  console.log("Vertu blessaður");
}

````