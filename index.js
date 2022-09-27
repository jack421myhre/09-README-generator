// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
// Questions for the user
const questions = [
    "What is the title of your project?",
    "What is the description of your project?",
    "What installations are there for your project?",
    "What usage instructions are there for using your project?",
    "List the GitHub profiles of your collaborators",
    "Which license does your project have?",
    "What contribution guidelines does your project have?",
    "What test instructions does your project have?",
    "What is your GitHub username for Questions?",
    "What is your email for Questions if users would like to reach out?",
];

// TODO: Create a function to write README file
// Grabs the users answers and calls the generateMarkdown function.
// This writes to the README.md file dynamically
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log("Success!");
    });
}

// TODO: Create a function to initialize app

// Prompts questions for the user on the command line
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
                name: "description",
            },
            {
                type: "input",
                message: `${questions[2]}`,
                name: "installation",
            },
            {
                type: "input",
                message: `${questions[3]}`,
                name: "usage",
            },
            {
                type: "input",
                message: `${questions[4]}`,
                name: "credits",
            },
            {
                type: "list",
                message: `${questions[5]}`,
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
                message: `${questions[6]}`,
                name: "contribution",
            },
            {
                type: "input",
                message: `${questions[7]}`,
                name: "tests",
            },
            {
                type: "input",
                message: `${questions[8]}`,
                name: "githubProfile",
            },
            {
                type: "input",
                message: `${questions[9]}`,
                name: "email",
            },
        ])
        .then((response) => {
            writeToFile("./customReadme/README.md", response);
        });
}

// Function call to initialize app
init();
