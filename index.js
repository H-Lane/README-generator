// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const markdown = require(`./utils/generateMarkdown`);
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${fileName}.md`, data, (err) =>
    err ? console.error(err) : console.log(`Write Success`)
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
        name: `constribution`,
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
          "Apache 2.0",
          "BSD 3-Clause",
          "BSD 2-Clause",
          "Attribution 4.0 Intnl.",
          "Attribution-ShareAlike 4.0 Intnl.",
          "Attribution-NonCommercial 4.0 Intnl.",
          "Attribution-NoDerivatives 4.0 Intnl.",
          "Attribution-NonCommercial-ShareAlike 4.0 Intnl.",
          "Attribution-NonCommercial-NoDerivatives 4.0 Intnl.",
          "Eclipse Public 1.0",
          "GNU GPL v3",
          "GNU GPL v2",
          "GNU AGPL v3",
          "GNU LGPL v3",
          "GNU FDL v1.3",
          "IBM Public v1.0",
          "MIT",
          "Mozilla Public 2.0",
          "Attribution License (BY)",
          "Open Database License (ODbL)",
          "Public Domain Dedication and License (PDDL)",
          "The Perl License",
          "The Artistic License 2.0",
          "The zlib/libpng License",
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
    ])
    .then((data) => markdown.generateMarkdown(data));
}

// Function call to initialize app
init();
