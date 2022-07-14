const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// array
let questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name? (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log('Enter your GitHub username!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: linkInput => {
            if (linkInput) {
                return true;
            } else {
                console.log('Enter your project GitHub link!');
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter the title of your  project!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project (Required)',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your project description!');
                return false;
            }
        }
    },
    {
    type: 'input',
    name: 'license',
    message: 'Enter your project License (Required)',
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Enter name of license used for your project!');
            return false;
        }
    }
},

];

// Declare function
function startQuestions(){

    // prompt
    inquirer.prompt(questions)
    // grab answers
    // .then(function(answers){
    //  console.log(answers);
    //  console.log(answers.title)
    // })
    .then(answers => {
        fs.writeFile("example.md", generateMarkdown(answers), err => {
            if (err) {
                console.log(err);
                return;
              }
              console.log('Style sheet copied successfully!');
          
        })
    // }
        // generateMarkdown(answers)
    })
}
// call function - run function
startQuestions()

