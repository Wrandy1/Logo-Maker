const Shapes = require('./Shapes.js');

class Square extends Shapes{
  constructor(text, color, textColor) {
      super(text, color, textColor);
  }
  renderShapeXML(text, color){
    const squareXML = `<rect width="300" height="200" fill="${this.color}" />
    <text x="150" y="115" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    return squareXML;
}
};
module.exports = Circle;