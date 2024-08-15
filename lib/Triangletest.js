const Shapes = require('./Shapes.js');


class Triangle extends Shapes{
    constructor(text, color, textColor) {
        super(text, color, textColor);
    }

    renderShapeXML(){
        const circleXML = `<polygon points="150,0 300,200 0,200" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
        return circleXML;
    }

    callRenderStartingXML(){
        return super.renderStarterXML();
    }

    callRenderEndingXML(){
        return super.renderEndingXML();
    }


    render(){
        const startingXML = this.callRenderStartingXML()
        const middleXML = this.renderShapeXML()
        const endingXML = this.callRenderEndingXML()

        const returnedXMLString = `
        ${startingXML}
        ${middleXML}
        ${endingXML}
        `;
        return returnedXMLString;
    }
    
}

module.exports = Triangle;