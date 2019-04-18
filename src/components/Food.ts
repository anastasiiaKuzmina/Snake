import * as constant from "./Constants";
import createElement from "./CreateElement";

class Food implements IFood {
  private readonly x: number;
  private readonly y: number;

  constructor() {
    this.x = this.randomNumber();
    this.y = this.randomNumber();
  }

  private randomNumber() {
    const randomNumber = Math.random() * 280;
    return Math.floor(randomNumber / constant.POINT_SIZE) * constant.POINT_SIZE;
  }
  
  isEaten(item: IPoint){
    return item.equal(this.x, this.y);
  }

  render() {
    return createElement(this, 'green');
  }
}

export default Food;