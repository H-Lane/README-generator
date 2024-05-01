// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
// TODO: Create an array of questions for user input
const questions = [`Name of your Project`, `Project Description`, `Installation Instructions`, `Usage Information`, `Contribution Guidelines`, `Test Instructions`, `License`, `Github Username`, `Email Address`, ];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) =>
        err ? console.error(err) : console.log(`Write Success`)
    );
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
