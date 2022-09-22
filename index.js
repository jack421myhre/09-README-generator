// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "What are the Table of Contents for your project?",
    "What is the description of your project?",
    "What installations are there for your project?",
    "What usage instructions are there for using your project?",
    "List the GitHub profiles of your collaborators",
    "Which license does your project have?",
    "What contribution guidelines does your project have?",
    "What test instructions does your project have?",
    "What is your GitHub profile for Questions?",
    "What is your email for Questions if users would like to reach out?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: `${questions[0]}`,
                name: "title",
            },
            {
                type: "input",
                message: `${questions[1]}`,
                name: "toc",
            },
            {
                type: "input",
                message: `${questions[2]}`,
                name: "description",
            },
            {
                type: "input",
                message: `${questions[3]}`,
                name: "installation",
            },
            {
                type: "input",
                message: `${questions[4]}`,
                name: "usage",
            },
            {
                type: "input",
                message: `${questions[5]}`,
                name: "credits",
            },
            {
                type: "list",
                message: `${questions[6]}`,
                choices: [
                    "GNU AGPLv3",
                    "GNU GPLv3",
                    "GNU LGPLv3",
                    "Mozilla Public License 2.0",
                    "Apache License 2.0",
                    "MIT License",
                    "Boost Software License 1.0",
                    "Unlicense",
                ],
                default: "Unlicense",
                name: "license",
            },
            {
                type: "input",
                message: `${questions[7]}`,
                name: "contribution",
            },
            {
                type: "input",
                message: `${questions[8]}`,
                name: "tests",
            },
            {
                type: "input",
                message: `${questions[9]}`,
                name: "githubProfile",
            },
            {
                type: "input",
                message: `${questions[10]}`,
                name: "email",
            },
        ])
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response));
        });
}

// Function call to initialize app
init();
