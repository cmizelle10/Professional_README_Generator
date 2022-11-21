//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'projectTitle',
    },
    {
      type: 'input',
      message: 'Describe your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the steps required to install your project?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Provide instructions and examples for use',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Provide contribution guidelines',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'Provide any examples on how to run tests on your project',
      name: 'contribution',
    }
  ]);
// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
 