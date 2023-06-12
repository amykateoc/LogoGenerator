const { Circle, Square, Triangle, Svg } = require("./lib/shapes");
const inquirer = require("inquirer");

async function init() {
    const {text, textColor, shape, shapeColor} = await inquirer.prompt([
        {
            name: "text",
            message: "What text do you want?",
            type: "input"
        },
        {
            name: "textColor",
            message: "What color will the text be?",
            type: "input"
        },
        {
            name: "shape",
            message: "What shape do you want?",
            type: "list",
            choices: [
                "Square",
                "Circle",
                "Triangle"
            ]
        },
        {
            name: "shapeColor",
            message: "What color will the shape be?",
            type: "input"
        }
    ])
    let chosenShape;
    switch(shape) {
        case "Square":
            chosenShape = new Square(shapeColor);
        break;
        case "Circle":
            chosenShape = new Circle(shapeColor);
        break;
        case "Triangle":
            chosenShape = new Triangle(shapeColor);
        break;
    }
    const svg = new Svg(text, textColor, chosenShape)
    const logo = svg.render()
    console.log(logo)
}

init();