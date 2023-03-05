// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { type } = require("os");

// TODO: Create an array of questions for user input
const questions = [
  "What is the title of your project?",
  "Can you give a brief description of your project?",
  "The steps you need to take to install this project are...",
  "How do you use your application?",
  "What license would you like to use for your project?",
  "How would you like people to contribute to your project?",
  "List some ways that people can test your project?",
  "What is your github username?",
  "What is your email? ",
  "My motivation for creating this project was...",
  "The problem I am trying to solve is...",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: questions[0],
      },
      {
        type: "input",
        name: "description",
        message: questions[1],
      },
      {
        type: "input",
        name: "motivation",
        message: questions[9],
      },
      {
        type: "input",
        name: "problem",
        message: questions[10],
      },
      {
        type: "input",
        name: "installation",
        message: questions[2],
      },
      {
        type: "input",
        name: "usage",
        message: questions[3],
      },
      {
        type: "input",
        name: "contribution",
        message: questions[5],
      },
      {
        type: "input",
        name: "tests",
        message: questions[6],
      },
      {
        type: "input",
        name: "gitUsername",
        message: questions[7],
      },
      {
        type: "input",
        name: "email",
        message: questions[8],
      },
      {
        type: "list",
        name: "license",
        message: questions[4],
        choices: [
          "afl-3.0",
          "apache-2.0",
          "artistic-2.0",
          "bsl-1.0",
          "bsd-2-clause",
          "bsd-3-clause",
          "bsd-3-clause-clear",
          "cc",
          "cc0-1.0",
          "cc-by-4.0",
          "cc-by-sa-4.0",
          "wtfpl",
          "ecl-2.0",
          "epl-1.0",
          "epl-2.0",
          "eupl-1.1",
          "agpl-3.0",
          "gpl",
          "gpl-2.0",
          "gpl-3.0",
          "lgpl",
          "lgpl-2.1",
          "lgpl-3.0",
          "isc",
          "lppl-1.3c",
          "ms-pl",
          "mit",
          "mpl-2.0",
          "osl-3.0",
          "postgresql",
          "ofl-1.1",
          "ncsa",
          "unlicense",
          "zlib",
          "No License",
        ],
      },
    ])

    .then((answers) => {
      console.log(answers);
    });
}

// Function call to initialize app
init();
