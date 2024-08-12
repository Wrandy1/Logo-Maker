class Shapes {
  constructor(text, color, textColor) {
      this.text = text;
      this.color = color;
      this.textColor = textColor;
  }
  
  renderStarterXML(){
      return "<svg version=\"1.1\" width=\"300\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\">"
  }

  renderEndingXML(){
      return "</svg>"
  }
}

module.exports = Shapes;