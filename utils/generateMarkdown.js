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
  return `# ${data.title}
  ${renderLicenseBadge(data.license)} 
     ## Description
  
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
  
   ## How to Contribute

   ${data.contribution}
  
   ## Tests

   ${data.tests}
  
   ## Questions

   ${data.username}
   Github Profile: github.com/${data.username}
   ${data.email}

`;
}

module.exports = generateMarkdown;
