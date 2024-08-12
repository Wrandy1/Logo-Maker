const fs = require("fs");
const inquirer = require("inquirer");
const Square = require("./lib/Square");
const Triangle = require("./lib/Triangle");
const Circle = require("./lib/Circle");
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

const promptArray = [
    {
        type: 'maxlength-input',
        message: 'Enter Logo Text. Max 3 Char.',
        name: 'logoText',
        maxLength: 3
    },
    {
        type: 'input',
        message: 'Enter text color Keyword or hexadecimal number.',
        name: 'textColor'
    },
    {
        type: 'input',
        message: 'Enter logo color Keyword or hexadecimal number.',
        name: 'logoColor'
    },
    {
        type: "list",
        message: "Choose a Shape:",
        name: "logoShape",
        choices: ["circle", "triangle", "square"]
    }
];

inquirer
  .prompt(promptArray)
  .then((response) => generateSVGLogoFile(response));


function generateSVGLogoFile(response){
        const shapeObject = generateShapeObject(response);
        const dataToWrite = shapeObject.render();

        fs.writeFile("logo.svg", dataToWrite, (err)=>{
            if (err)
                console.log(err);
              else {
                console.log("Generated logo.svg\n");
              }
        });
}

function generateShapeObject(userResponse){
    switch(userResponse.logoShape){
        case "circle":
            const circleObj = new Circle(userResponse.logoText.substring(0,3), userResponse.logoColor, userResponse.textColor);
            return circleObj;
        case "square":
            const squareObj = new Square(userResponse.logoText.substring(0,3), userResponse.logoColor, userResponse.textColor);
            return squareObj;
    }
}