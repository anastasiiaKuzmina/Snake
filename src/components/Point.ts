import Direction from './Direction';
import * as constant from "./Constants";
import createElement from "./CreateElement";

class Point implements IPoint {
  private x: number;
  private y: number;

  constructor(axisX: number, axisY: number) {
    this.x = axisX;
    this.y = axisY;
  }

  move(offset: number, direction: Direction) {
    if(direction === Direction.RIGHT) {
      this.x = this.x + (offset * constant.POINT_SIZE);
    }
    else if(direction === Direction.LEFT) {
      this.x = this.x - (offset * constant.POINT_SIZE);
    }
    else if(direction === Direction.UP)
    {
      this.y = this.y - (offset * constant.POINT_SIZE);
    }
    else if(direction === Direction.DOWN)
    {
      this.y = this.y + (offset * constant.POINT_SIZE);
    }
  }

  equal(x: number, y: number) {
    if (x === this.x && y === this.y) {
      return true;
    }
    return false;
  }

  compare(item: IPoint) {
    return item.equal(this.x, this.y);
  }

  render() {
    return createElement(this, 'red');
  }
}

export default Point;