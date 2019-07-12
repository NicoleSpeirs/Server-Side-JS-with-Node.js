# Working with Node modules


## Questions
----
1.How do you import a module?

> We can create our own modules and require them in our file:

```
const myLibrary = require('./my-library');

```
>or we can add modules to `package.json` file and install them from terminal using `npm install`

2.What JavaScript statement do you use to export a module?
`module.exports` or `exports`.




## Online Research Questions
----
1.Are there other ways to export a module?

>In ES6 we use `import` instead of `require`.




2.What are ES6 modules and how do they differ from the module we created in this checkpoint?

>ES6 modules have a different system and they are not natively supported by the JavaScript engine. Node.js module is defined dynamically while ES6 module exports is defined lexically.



## Code
----

```
const fs = require('fs');
const filename = 'newTextFile.txt';
const directory = './path/';


module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
    return `${acc} ${file} `;
    }, '');
  console.log(filesToString);
  });
};

module.exports.touch = () => {
   fs.writeFile('message.txt', 'Some text.', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

module.exports.mkdir = () => {
    fs.mkdir('./new-directory',(err) => {
    if (err) throw err;
    console.log("Directory has been created");
  });
};

```