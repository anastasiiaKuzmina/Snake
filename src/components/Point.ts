import Direction from './Direction.ts';
import * as constant from "./Constants";
import createElement from "./CreateElement";

class Point {
  private x: number;
  private y: number;

  constructor(axisX: number, axisY: number) {
    this.x = axisX;
    this.y = axisY;
  }

  move(offset: number, direction: any) {
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

  render() {
    return createElement(this, 'red');
  }
}

export default Point;