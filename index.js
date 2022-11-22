//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description explaining the what, why, and how of your project'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.'
    },
    {
      type: 'checkbox',
      message: 'What license would you like to use?',
      name: 'license',
      choices: ['MIT']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide instructions for how to contribute'
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide instructions for testing'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your GitHub username?'
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email?'
    }
  ])
  .then((data) => {
    const readmeContent = generateMarkdown(data);

    fs.writeFile('dynamicREADME.md', readmeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created dynamicREADME.md!')
    );
  });
 