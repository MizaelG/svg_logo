const Square = require("../lib/square");
const Circle = require("../lib/circle");
const Triangle = require("../lib/triangle");

function generateLogo(data) {
    let shape = undefined
    if (data.shape === 'Circle') {
        shape = new Circle(data.shape_color, data.text, data.text_color)
    } else if (data.shape === 'Triangle') {
        shape = new Triangle(data.shape_color, data.text, data.text_color)
     } else if (data.shape === 'Square') {
        shape = new Square(data.shape_color, data.text, data.text_color)
     }
     return shape.render();
}

module.exports = generateLogo;