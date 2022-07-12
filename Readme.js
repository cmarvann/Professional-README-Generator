// add fs statement
const fs = require('fs');
const generatePage = require('./src/page-template');

// function that recieve the command line argument and 
// insert in an HTML template literl

const profileDataArgs = process.argv.slice(2);
const [name, github] = profileDataArgs;
console.log(name, github);

// The String 

// End of argument
fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('See output, index.html!');
  });

