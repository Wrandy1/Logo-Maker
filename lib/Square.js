const Shapes = require('./Shapes.js');

class Square extends Shapes{
  constructor(text, color, textColor) {
      super(text, color, textColor);
  }
  renderShapeXML(text, color){
    const circleXML = `<rect width="300" height="200" fill="${this.color}" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
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
};
module.exports = Square;