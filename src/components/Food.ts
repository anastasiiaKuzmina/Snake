import * as constant from "./Constants";
import createElement from "./CreateElement";

// interface should describe public method and properties
interface IFood {
  x: number;
  y: number;
}

class Food implements IFood {
  // use private modifier for properties,
  // if you need to reach them from outside, then create getters / setters
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  // We can try to use Food class using create / destroy strategy
  // In this case after the Food eaten we remove old object, and create a new instance of Food class
  // After that we will be able to remove randomNumber method, and generate coords under constuctor and make x / y as readonly
  randomNumber() {
    const max = 280;
    const min = 0;

    // make general method for this formula to reuse it in both places
    // remove inner Math.floor
    // max + 1 meens this point might be outside of range
    this.x = Math.floor(Math.floor(Math.random() * (max + 1) - min) / constant.POINT_SIZE) * constant.POINT_SIZE;
    this.y = Math.floor(Math.floor(Math.random() * (max + 1) - min) / constant.POINT_SIZE) * constant.POINT_SIZE;

    return this;
  }

  render() {
    return createElement(this, 'green');
  }
}

export default Food;