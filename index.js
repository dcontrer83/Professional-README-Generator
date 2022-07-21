// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
const questions = 
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the your project title?',
            name: 'title',
        },
        {
            type: 'input',
            message: 'What is the description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'What are the instructions for how to use your project?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'What are your contributing guidelines?',
            name: 'contributing',
        },
        {
            type: 'input',
            message: 'What are your tests for your application?',
            name: 'test',
        },
        {
            type: 'list',
            message: 'Choose a license from the following: ',
            name: 'license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
    ]);

// // Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
    });
}

// // Function to initialize app
function init() {

    questions

    .then(data =>
        writeToFile("README.md", generateMarkdown(data))
    );
}

// Function call to initialize app
init();


 