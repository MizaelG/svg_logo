const inquirer = require('inquirer');
const fs = require('fs')
const generateLogo = require('./utils/generateLogo')

const questions = [
    {
        type: 'list',
        message: 'What shape did you want the svg to be?',
        name: 'shape',
        choices: [
            'Triangle',
            'Square',
            'Circle'
        ]
    },
    {
        type: 'input',
        message: 'What color would you like the shape to be?',
        name: 'shape_color',
        choices: [
            'red',
            'green',
            'blue'
        ]
    },
    {
        type: 'input',
        message: 'Type in a character-set of 3 Letters.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color would you like the text to be?',
        name: 'text_color'
    }
];

function writeToFile(fileName, data) {
    var content = generateLogo(data);
    fs.writeFile(fileName, content, function(error) {
        if (error) {
            return console.log(error);
        }
        console.log('Generated logo.svg');
    });
}

function init() {
    inquirer.prompt(questions).then(function (data) {
        var fileName = 'logo.svg';
        writeToFile(fileName, data);
    });
}

init();