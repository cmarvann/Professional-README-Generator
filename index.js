const inquirer = require('inquirer');

// const fs = require('fs');

const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-markdown');

// array
const promptUser = () => {
    return inquirer.prompt([
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
      }
    ]);
};
const promptProject = portfolioData => {
    console.log(`
  =================
  Professional README Project
  =================
  `);

  return inquirer
 .prompt([
    
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
}

])
.then(projectData => {
  portfolioData.projects.push(projectData);
  if (projectData.confirmAddProject) {
    return promptProject(portfolioData);
  } else {
    return portfolioData;
  }
});
};

promptUser()
  .then(promptProject)
  .then(portfolioData => {
    return generatePage(portfolioData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });