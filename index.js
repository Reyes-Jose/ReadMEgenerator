const inquirer = require('inquirer');
const fs = require('fs');

//prompt
inquirer
.prompt([
        {
            type: 'input',
            message: 'Enter your ReadME title: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter the description: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions: ',
            name: 'installInstr'
        },
        {
            type: 'input',
            message: 'Enter usage information: ',
            name: 'usageInform',
        },
        {
            type: 'input',
            message: 'Enter contribution guidlines: ',
            name: 'contribution',
        },
        {
            type: 'input',
            message: 'Enter test instructions: ',
            name: 'test'
        },
        {
            type: 'input',
            message: 'Enter github user name: ',
            name: 'githubUser',
        },
        {
            type: 'input',
            message: 'Enter your email to be reached at: ',
            name: 'email',
        }
        
    ])
    .then((data) => {
        const generateReadME = (title, description, installInstr, usageInform, contribution, test, githubUser, email ) =>
        //template 
        `
        # ${title}
        
        ## Description
        
        ${description}

        ## Table of Contents
        - [Installation](#installation)
        - [Usage](#Usage)
        - [Contribute](#Contribute)
        - [License](#license)
        - [Questions](#Questions)
        
        ## Installation
        
        ${installInstr}

        ## Usage

        ${usageInform}

        ## How to contribute
        
        ${contribution}

        ## Tests

        ${test}

        ## Questions
        Reach me at:[Github](https://github.com/${githubUser})
        Email me at:[Email](${email})
        `
            
        fs.writeFile('README.md', generateReadME(data.title, data.description, data.installInstr, data.usageInform, data.contribution, data.test, data.githubUser, data.email), (err) =>
        err ? console.error(err) : console.log('Success! File has been created.'));
    })