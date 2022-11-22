// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `This project is licensed under the <a href="https://opensource.org/licenses/MIT">MIT</a> license.`;
    default:
      return '';
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  
  # ${data.title}
 
  ## Description

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ${data.description}
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ---

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Contributing

  ${data.contribution}
  
  ## Tests

  ${data.tests}
  
  ## Questions
  If you have any questions, you may contact me via email at ${data.email} or you may follow me on <a href="https://github.com/${data.username}">Github</a>

`;
}

module.exports = generateMarkdown;
