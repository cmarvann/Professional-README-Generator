// Create a function that returns a license badge based on which license is passed in
// [![MIT License](https://img.shields.io/badge/license)
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    
    
  }
  return '';
}
// Create a function that returns the license link

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return 'MIT License, All Rights Reserved 2022  (unrstricted use)';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}


## Description
A Professional ReadMEe Generator is a vital part of any developer world. This allows any developer to quickly 
generate a REadMe for each project as needed.
This is an essential part of a developers tool box.
${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}
* [Contributing](#contributing)

* [Credits](#credits)

* [Tests](#tests)

* [License](#license)


* [Questions](#questions)

<========================================================================================================================>
## User Story

AS a developer, I want to generate a  README  so that I can 
quickly create a README file for a new projects
 - Given a command-line application that accepts user input
 - WHEN I am prompted for information about my application repository
 - THEN I enter the information based on the prompts
 - THEN a high-quality, professional README.md is generated with the title of my project 
    and sections entitled Title, Description, Table of Contents, Installation, Usage, 
    Contributing, Tests, License and Questions
 - WHEN I enter my project title
 - THEN this is displayed as the title of the README
 - WHEN I enter a description, installation instructions, usage information, contribution guidelines
     and test instructions etc.
 - THEN this information is added to the sections of the README entitled Description, Installation
   Usage, Contributing, and Tests
 - WHEN I choose a license for my application from a list of options
 - THEN a badge for that license is added near the top of the README and a notice is added to the 
   section of the README entitled License that explains which license the application is covered under
 - WHEN I enter my GitHub username
 - THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
 - WHEN I enter my email address
 - THEN this is added to the section of the README entitled Questions, with instructions on how to
   reach me with additional questions
 - WHEN I click on the links in the Table of Contents
 - THEN I am taken to the corresponding section of the README
 

 <========================================================================================================================>

 ## Installation

To install necessary dependencies, run the following command:

Install

npm i,  node.js and inquirer

\`\`\`
${data.installation}
\`\`\`

## Usage
Feel free to use it for educational purposes 
${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

This prject was done based on the Rutgers Bootcamp instructor guidance and the TA's assistance
Thanks Amber Amber Robeck for your guidance

${data.contributing}

## Tests

To run tests, run the following command:
Before you test, make sure you have a .gitignore file in the root of your repository
to prevent tracking 

After yu have installed  all the reuired dependencies for yout application using the command
line. In this project, I am using Node.js and inquirer 8.2.4
To test, Run "node + filename". Here I am using "node index.js" and hit enter
This should prompt you to answer a few questions, if you get an error, read the error, fix
and start again 

To run tests, run the following command:


node index.js

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, contact me directly at ${
    data.github
  }. You can find more of my work at [${data.github}](https://github.com/cmarvann/)${
    data.github
  }/).

  ## License
  ${data.license}

  MIT License

  Copyright (c) 2022 Marvann, Covington

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.


<========================================================================================================================>
## Links
 * Twitter - @Codish22

`;
}

module.exports = generateMarkdown;