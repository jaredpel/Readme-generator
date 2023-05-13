const inquirer = require('inquirer');
 const fs = require('fs');
 const generateMarkdown = require('./generateMarkdown');

 inquirer.prompt([
    {
        type: 'input',
        Message: 'Project name',
        name: 'title',
    },
    {
        type: 'input',
        Message: 'Description of project',
        name: 'description',
    },
    {
        type: 'input',
        Message: 'What are the steps',
        name: 'installation',
    },
    {
        type: 'Input',
        Message: 'Provide instructions and examples',
        name: 'usage',
    },
    {
        type: 'list',
        Message: 'Whats your lisence',
        name: 'lisence',
        choices: [
            {value: 'Apache'},
            {value: 'BSD3'},
            {value: 'LGPL'},
            {value: 'MIT'},
            {value: 'MPL'},
            {value: 'None'},
        ]
    },
    {
        type: 'Input',
        Message: 'Explpain how people can contribute',
        name: 'contributing',
    },
    {
        type: 'Input',
        Message: 'Provide tests for project',
        name: 'test',
    },
    {
        type: 'Input',
        Message: 'Enter GitHub username',
        name: 'username',
    },
    {
        type: 'Input',
        Message: 'Enter Email',
        name: 'email',
    }
])

function init() { }

init();