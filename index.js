// TODO: Include packages needed for this application

const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateMarkdown = require(`./utils/generateMarkdown.js`);

// TODO: Create an array of questions for user input
const questions = [
  `What would you like your project title to be?`,
  `Give a detailed description of your application:`,
  `What are the instructions to install your application?`,
  `Provide instructions for the use of your application:`,
  `If available, how would others contribute to your project?`,
  `How would you test this project?`,
  `What license is your project under?`,
  `What is your Github username?`,
  `What is your Email address?`,
  `Where is the live deployment of your application?`
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log(`Your README has been generated!`)
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: `input`,
        message: questions[0],
        name: `title`,
      },
      {
        type: `input`,
        message: questions[1],
        name: `description`,
      },
      {
        type: `input`,
        message: questions[2],
        name: `installation`,
      },
      {
        type: `input`,
        message: questions[3],
        name: `usage`,
      },
      {
        type: `input`,
        message: questions[4],
        name: `contribution`,
      },
      {
        type: `input`,
        message: questions[5],
        name: `test`,
      },
      {
        type: `list`,
        message: questions[6],
        name: `license`,
        choices: [
          "None",
          "Apache",
          "BSD3",
          "BSD2",
          "EPL",
          "GPLv3",
          "GPLv2",
          "AGPLv3",
          "LGPLv3",
          "FDLv1.3",
          "IPL",
          "MIT",
          "MPL",
          "ODC_BY",
          "ODbL",
          "PDDL",
          "Perl",
          "Artistic2.0",
          "Zlib",
        ],
      },
      {
        type: `input`,
        message: questions[7],
        name: `username`,
      },
      {
        type: `input`,
        message: questions[8],
        name: `email`,
      },
      {
        type: `input`,
        message: questions[9],
        name: `deployment`
      }
    ])
    .then((data) => {
        writeToFile(`${data.title}`, data)
    })
}

// Function call to initialize app
init();
