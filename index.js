
const inquirer = require('inquirer');
const fs       = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your README?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your README.'
    },
    {
        type: 'input',
        name: 'installation-instructions',
        message: 'Please enter the installation instructions of your README.' 
    }, 
    {
        type: 'input',
        name: 'information',
        message: 'Please describe the usage information for your README.' 
    },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Please describe any contribution guidelines for your README.' 
    },
    {
        type: 'input',
        name: 'test-instructions',
        message: 'Please describe any test instructions for your README.' 
    },
    {
        type: 'checkbox',
        name: 'license-options',
        message: 'Choose a license for your README.',
        choices: [
            'Apache License 2.0', 
            'BSD 3-Clause "New" or "Revised" license',
            'BSD 2-Clause "Simplified" or "FreeBSD" license', 
            'GNU General Public License (GPL)',
            'GNU Library or "Lesser" General Public License (LGPL)',
            'MIT license',
            'Mozilla Public License 2.0',
            'Common Development and Distribution License',
            'Eclipse Public License version 2.0'
        ]
    },
    {
        type: 'input',
        name: 'github-username',
        message: 'What is your github username?' 
    },
    {
        type: 'input',
        name: 'email-address',
        message: 'What is your email address?' 
    },
])
.then(answers => {

})
.catch(err => console.log(err.message))
