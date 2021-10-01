
const inquirer = require('inquirer');
const fs       = require('fs');
const generateMarkdown = require('./util/generateMarkdown');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter the description for your project.'
        },
        {
            type: 'input',
            name: 'installationInstructions',
            message: 'Please enter the installation instructions of your project.' 
        }, 
        {
            type: 'input',
            name: 'information',
            message: 'Please describe the usage information for your project.' 
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Please describe any contribution guidelines for your project.' 
        },
        {
            type: 'input',
            name: 'testInstructions',
            message: 'Please describe any test instructions for your project.' 
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose a license for your README.',
            choices: [
                'Apache 2', 
                'BSD',
                'GPL',
                'GNU Library or "Lesser" General Public License (LGPL)',
                'MIT',
                'Mozilla Public License 2.0',
                'Common Development and Distribution License',
                'Eclipse Public License version 2.0'
            ]
        },
        {
            type: 'checkbox',
            choices:[
                'Javascript',
                'HTML',
                'CSS',
                'Node JS',
            ],
            name: 'technologiesUsed',
            message: 'What technologies did you use for the project?' 
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: 'What is your email address?' 
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your github username?' 
        }
    ])
} ;
const generateReadMe = () => {
    promptUser()
        .then((answers) => fs.writeFile('README.md', generateMarkdown(answers), (err) => console.error(err)))
};

generateReadMe();

