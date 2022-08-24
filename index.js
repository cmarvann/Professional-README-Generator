const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generate-Markdown');

  
// ray
const questions = [

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
        type: 'list',
        message: 'What is your preferred method of communication?',
        name: 'contact',
        choices: ['email', 'phone', 'github']
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
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Enter some information about yourself for an "About" section!',
        default: true
      },
      {
        type: 'input',
        name: 'about',
        message: 'Provide  information about yourself:',
        when: ({ confirmAbout }) => confirmAbout
      },
      {
        type: 'input',
        name: 'project',
        message: 'Would you like to add a project?:',
        default:false
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
        type: 'checkbox',
        name: 'language',
        message: 'What did you build this project with? (Check all that apply)',
        choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
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
        type: 'confirm',
        name: 'feature',
        message: 'Would you like to feature this project?',
        default: false
      },

      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?',
        default: 'npm i'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?'
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?'
      },
      {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?',
        default: 'node index.js'
      },
      
      
      {
        type: 'input',
        name: 'add',
        message: 'Would you like to add another project?:',
        default:true
      },
    {
    type: 'input',
    name: 'license',
    message: 'Enter your project License (Required)',
    choices: ['MIT', 'ISC', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    validate: licenseInput => {
        if (licenseInput) {
            return true;
        } else {
            console.log('Enter name of license used for your project!');
            return false;
        }
    }
}

]





// Function to write README file using the user input
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(inquirerResponses => {
    console.log('Generating README...');
    writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
  });
}

init();
