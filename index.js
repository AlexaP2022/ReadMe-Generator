// Packages required for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generatorMarkdown = require('./utils/generateMarkdown');
console.log("Welcome to the README Generator!")
console.log("Please answer the following questions to generate your professional README File")
// Array of template questions for the readme markdown
const questions = [

    {
        type: "input",
        name: "title",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a short description for your project (include your motivation, Why Did you build this project? What problem does it solve? What did you learn?"
    },
    {
        type: "input",
        name: "table of contents",
        message: "If you would like to include a table of contents, press enter"
    },
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide step-by-step guide."
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use."
    },
    {
        type: "list",
        name: "license",
        choices: ['GPLv3', 'Apache_2.0', 'MIT', "none of these"],
        message: "Select a license that best suits your project - press <space> to select"
    },
    {
        type: "input",
        name: "contributors",
        message: "List your collaborators/contributors, if any, with links to their GitHub profiles.  If you used any third-party assets that require attribution, list them.  If you followed tutorials, include links to those here as well"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },

];

// Function to write to ReadMe file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        } 
            console.log("Success!");
    
    });
};

// Function to initialize the application
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("ReadMe.md", generatorMarkdown(data));
        });
};

// Function call to initialize app
init();
