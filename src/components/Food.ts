import * as constant from "./Constants";
import createElement from "./CreateElement";

interface IFood {
  x: number;
  y: number;
}

class Food implements IFood {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }

  randomNumber() {
    const max = 280;
    const min = 0;
    this.x = Math.floor(Math.floor(Math.random() * (max + 1) - min) / constant.POINT_SIZE) * constant.POINT_SIZE;
    this.y = Math.floor(Math.floor(Math.random() * (max + 1) - min) / constant.POINT_SIZE) * constant.POINT_SIZE;

    return this;
  }

  render() {
    return createElement(this, 'green');
  }
}

export default Food;