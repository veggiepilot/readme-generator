
const inquirer = require('inquirer');
const fs       = require('fs');

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
            type: 'checkbox',
            name: 'licenseOptions',
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

const readMeMarkup = (answers) => 
`# README Generator
https://img.shields.io/npm/l/inquirer

## Description

${answers.description}

## Table of Contents

- [INSTALLATION](#Installation)
- [USAGE](#Usage)
- [CONTRIBUTING](#Contributing)
- [TESTS](#Tests)
- [QUESTIONS](#Questions)
- [LICENSE](#License)

## Installation

${answers.installationInstructions}


## Usage

${answers.information}

## Contributing

${answers.guidelines}

## Tests

${answers.testInstructions}

## Questions

If you have any questions or concerns pertaining to this project, please do not hesitate to contact me at ${answers.emailAddress} and you can find me on github at https://github.com/${answers.githubUsername}

## License

Copyright (c) Johannes Chitura. All rights reserved.

Licensed under the [MIT](LICENSE.txt) license.
`;

const generateReadMe = () => {
    promptUser()
        .then((answers) => fs.writeFile('README.md', readMeMarkup(answers), (err) => console.error(err)))
        .then(() => console.log('Successfully wrote to README.md'))
};

generateReadMe();

