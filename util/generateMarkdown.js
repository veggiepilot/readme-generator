let licenses = [
    
    {   licenseName: 'Apache2',
        licenseImage: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]',
        licenseLink: '(https://opensource.org/licenses/Apache-2.0)'
    },
     
    {
        licenseName: 'GNUGPv3',
        licenseImage: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]',
        licenseLink: '(https://www.gnu.org/licenses/gpl-3.0)'
    },

    {
        licenseName: 'MIT',
        licenseImage: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]',
        licenseLink: '(https://opensource.org/licenses/MIT)'
    },

    {
        licenseName: 'Mozilla',
        licenseImage: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]',
        licenseLink: '(https://opensource.org/licenses/MPL-2.0)'
    },

    {
        licenseName: 'BSD',
        licenseImage: '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]',
        licenseLink: '(https://opensource.org/licenses/BSD-3-Clause)' 
    }, 

    {
        licenseName: 'IBM',
        licenseImage: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]',
        licenseLink: '(https://opensource.org/licenses/IPL-1.0)' 
    }
]

// Rendering the license badge.
function renderLicenseBadge(license) {
    for ( let licenseObj of licenses ) {
        if (licenseObj.licenseName === license) {
            return licenseObj.licenseImage
        }
    }
}

// Render the license link.
function renderLicenseLink(data) {
    for ( let licenseObj of licenses ) {
        if (!data.license) {
            return '';
        } else if (licenseObj.licenseName === data.license) {
            return licenseObj.licenseLink;
        }
    }
}
  
// Render the license section.
function renderLicenseSection(data) {
    
    if (!data.license) {
        return '';
    }else {
        return `
## License

Copyright (c) Johannes Chitura. All rights reserved.

Licensed under the [${data.license}]${renderLicenseLink(data)} license.`
    } 
        
}

//Render technologies used.
function renderTechnologiesUsed(data) {
    let technologies = '';
    if (data.technologiesUsed.length != 0) {
        data.technologiesUsed.forEach( technology => {
            technologies += `- ${technology} \n`;
        })
    } else {
        return '';
    }

    return technologies;
}

  // Generating markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
${renderLicenseBadge(data.license)}${renderLicenseLink(data)}

## Description

${data.description}

## Table of Contents

1. [INSTALLATION](#Installation)
2. [USAGE](#Usage)
3. [CONTRIBUTING](#Contributing)
4. [TESTS](#Tests)
5. [QUESTIONS](#Questions)
6. [LICENSE](#License)

## Installation

${data.installationInstructions}

## Usage

${data.information}

## Contributing

${data.guidelines}

## Techonologies Used

${renderTechnologiesUsed(data)}

## Tests

${data.testInstructions}

## Questions

If you have any questions or concerns pertaining to this project, please do not hesitate to contact me at ${data.emailAddress} and you can find me on github at https://github.com/${data.githubUsername}

${renderLicenseSection(data)}
`;
} 
  module.exports = generateMarkdown;
  