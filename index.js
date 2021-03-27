const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the projects title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a description of the project."
    },
    {
        type: "input",
        name: "install",
        message: "What are the installation instructions?"
    },
    {
        type: "input",
        name: "useage",
        message: "Please write any useage information."
    },
    {
        type: "input",
        name: "contribution",
        message: "What are the guidelines for contribution?"
    },
    {
        type: "input",
        name: "test",
        message: "Please write any test instruction."
    },
    {
        type: "list",
        name: "license",
        message: "What license is the project using?",
        choices: [
            "apache-2.0",
            "ms-pl",
            "mit",
            "mpl-2.0",
            "osl-3.0",
            "ecl-2.0"
        ]
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email."
    }
    

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("Generating your README file now.");
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
