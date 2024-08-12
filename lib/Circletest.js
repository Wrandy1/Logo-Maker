const circle = require('./Circle.js');
const Shapes = require('./Shapes.js');


describe('Circle', () => {

const circleObj = new circle("123", "green", "white");

describe('shapeClass', () => {
  it('should verify that Shape class on object.', () => {
    expect(circleObj).toBeInstanceOf(Shapes);
  })
});

describe('shapeClass', () => {
  it('should verify that circle class on object.', () => {
    expect(circleObj) .toBeInstanceOf(circle);
  })
});

describe('circleRender', () => {
  it('should verify that Triangle class on object.', () => {
    expect(circleObj.render()).toEqual(expect.stringContaining(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`));
  })
});

});