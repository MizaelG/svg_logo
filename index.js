import { createPromptModule } from 'inquirer';


import { writeFile } from 'fs';
const Shape = require('./lib');

function svgFileContent({ text, colorText, shape, colorShape }, shapeContent) {
    return `<svg version='1.1' width='300' height='200' xmlns='https://www.w3.org/2000/svg'>
    ${shapeContent}
    <text x='150' y='125' font-size='65' text-anchor='middle' fill='${colorText}'>${text}</text></svg>`;
}

createPromptModule([
    {
        type:'input',
        name:'text',
        message:'Text for the Logo (Three Characters Max)',
        validate: function(input) {
            if(input.length <= 3) {
                return true;
            }
            else{
                return 'Error code must be 3 Characters or less'
            }
        }
    },
    {
        type:'list',
        name:'colorText',
        message:'Choose a color for the text',
        choices: ['red', "green", 'blue', 'yellow', 'brown', 'black']
    },
    {
        tyoe:'list',
        name:'shape',
        message:'Type of Shape',
        choices:['triangle', 'square', 'circle']
    },
    {
        type:"input",
        name:'colorShape',
        message:'Type a color for the shape',
    },    
]).then((answers) => {
    var shapeContent = '';
    if(answers.shape == 'circle'){
        let circleObj = new circle();
        circleObj.setColor(answers.colorShape);
        shapeContent = circleObj.render();
    }
    else if(answers.shape == "square") {
        let squareObj = new square();
        squareObj.setColor(answers.colorShape);
        shapeContent = squareObj.render();
    }
    else if(answers.shape == 'triangle'){
        let trianlgeObj = new triangle();
        trianlgeObj.setColor(answers.colorShape);
        shapeContent = trianlgeObj.render();
    }
    else {
        console.log('Error: no shape');
    }
    const content = svgFileContent(answers, shapeContent);
    writeFile('logo.svg', content, (err) => 
    err ? console.log(err): console.log('Created SVG file')
    );
})
.catch((error) => {
    console.log('could not create file', error);
})
