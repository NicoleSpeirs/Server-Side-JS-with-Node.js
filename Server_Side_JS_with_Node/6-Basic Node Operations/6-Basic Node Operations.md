# Basic Node Operations Answers
## Questions
1.Run the commands `sort`, `wc` and `uniq` on the `commands.js` file. Explain how they work and what the output was.
> `sort` : sorts each line in a file alphabetically and groups them by indentation.

````
 done(data);
          if (err) throw err;
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
        });
      break;
      break;
      commandLibrary.cat(userInputArray.slice(1));
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      done(userInput);
     "echo": function(userInput) {
     //the echo command
     //we will add the functionality of echo next within the object commandLibrary
     process.stdout.write('\nprompt > ');
     process.stdout.write(output);
    "cat": function(fullPath) {
    //the cat command
    case "cat":
    case "echo":
    }
   const command = userInputArray[0];
   const userInputArray = userInput.split(" ");
   switch (command) {
  //parses the user input to understand which command was typed
  }
 const commandLibrary = {
 function done(output) {
 function evaluateCmd(userInput) {
 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;
 }
 }
 };
//where we will store our commands
//where we will store the logic of our commands
//write out data
const fs = require("fs");
},
````

>`wc` : prints newline, word, and byte count for a file.

````
43     119    1121 commands.js
````

>`uniq` :sorts through each line in a file and returns the lines that are not duplicated.

````
const fs = require("fs");

//write out data
 function done(output) {
     process.stdout.write(output);
     process.stdout.write('\nprompt > ');
 }

//where we will store our commands
 function evaluateCmd(userInput) {
  //parses the user input to understand which command was typed
   const userInputArray = userInput.split(" ");
   const command = userInputArray[0];

   switch (command) {
    case "echo":
     //we will add the functionality of echo next within the object commandLibrary
      commandLibrary.echo(userInputArray.slice(1).join(" "));
      break;
    case "cat":
      commandLibrary.cat(userInputArray.slice(1));
      break;
  }
 }

//where we will store the logic of our commands
 const commandLibrary = {
     //the echo command
     "echo": function(userInput) {
      done(userInput);
},
    //the cat command
    "cat": function(fullPath) {
        const fileName = fullPath[0];
        fs.readFile(fileName, (err, data) => {
          if (err) throw err;
          done(data);
        });
    }
 };

 module.exports.commandLibrary = commandLibrary;
 module.exports.evaluateCmd = evaluateCmd;%
````

2.Using the pipe (`|`) connect at least two commands and run it on `commands.js`. Explain what the output was and why the specific data was outputted.

> `sort commands.js | uniq | wc` will remove any duplicated lines from sorted file and will print newline, word and byte count for the file.
````
      37     117    1101
````

## Programming Questions
6.
````
function reverseString(inputString) {
	var newArray = [];
	let words = inputString.split(' ');
  	words.forEach((word) => {
		let reversedWords = word.split('').reverse().join('');
		newArray.push(reversedWords);
	})
	return newArray.join(' ');
}

reverseString('Node.js is pretty cool!');
````