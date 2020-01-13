import * as constant from "./Constants";
import createElement from "./CreateElement";

class Food implements IFood {
  private readonly x: number;
  private readonly y: number;

  constructor() {
    this.x = this.randomNumber(10, 290);
    this.y = this.randomNumber(10, 290);
  }

  private randomNumber(min: number, max: number) {
    const randomNumber = Math.random() * (max - min + 1);
    return Math.floor(randomNumber / constant.POINT_SIZE) * constant.POINT_SIZE + min;
  }

  isEaten(item: IPoint){
    return item.equal(this.x, this.y);
  }

  render() {
    return createElement(this.x, this.y, 'green');
  }
}

export default Food;
