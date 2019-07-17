# Callback and Acynchronicity
## Questions
1. What is the difference between `readdirSync` and `readdir`?
>`readdirSync` is a blocking and synchronous method which means that one process or one line of code will be executing at a time. `readdir`is non-blocking and asynchronous which allows other processes to be executed while the results of the function are being returned.

2. What is the event loop and how does it handle asynchronous requests?

>the event loop is a loop that is constantly checking the queue of events (system of events that are being precessed by `libuv` a library that is dealing with events at a lower level such as requests of uploading a file). Once the event inside a queue is completed the event loop processes it and runs a callback (code that should run once the event is complete).

3. Given the following code, specify whether the program is asynchronous and non-blocking or synchronous and blocking or synchronous and non-blocking.

```
const fs = require('fs');
const file = fs.readFileSync('foo.txt');
console.log(file.toString());
```
>The program is synchronous and blocking.

4. Given the following code, specify whether the program is asynchronous and non-blocking or synchronous and blocking or synchronous and non-blocking.

```
const fs = require('fs');
fs.readFile('foo.txt', (err, file) => {
 if (err) throw err;
 console.log(file.toString());
});
console.log("test");
```
>The program is asynchronous and non-blocking.

5. In what order will the `console.log` statements execute in the code below?

```
const fs = require('fs');
fs.readFile('foo.txt', (err, file) => {
 if (err) throw err;
 console.log("A");
 console.log("B")
});
console.log("C");
```

>  `console.log("C")` -> `console.log("A")` -> `console.log("B")`

6. `setTimeout` is a JavaScript function which calls a function after a set amount of milliseconds. Given the following code, explain in what sequence the functions will run and why.

```
function greeting() {
 setTimeout(() => {
   console.log("friend");
 }, 100);
}

function hello(){
 console.log("hello");
}

greeting();
hello();
```
>`greeting` is set to run after a 100ms hold. Once `hello` is executed, `greeting` will move from queue and will be executed next.

7. Create a function which utilizes a callback. Make sure to add `console.log` statements to understand when your callback function is called.

```
function greet(callback){
  console.log('Hello coder!');
  var data = {
      fullName: 'Zoe Speirs'
  };
  callback(data);
}

greet(function(data) {
  console.log('The callback was invoked!');
});
```