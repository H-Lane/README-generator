// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Badge](https://img.shields.io/badge/License-${license}-green.svg)`
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `- [License](#license)`
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `## License
    This application is covered under the ${license} license.`
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [Contribution](#contribution)
  - [Contact](#contact)
  - [Deployed Application](#deployed-application)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Test
  ${data.test}

  ## Contribution
  ${data.contribution}

  ## Contact
  For any issues or questions feel free to reach out to me via email at: ${data.email}
  
  Find me on GitHub at: [${data.username}](https://www.github.com/${data.username})

  ## Deployed Application
  This application is deployed live at [${data.deployment}](${data.deployment})

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
