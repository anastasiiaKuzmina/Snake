import Direction from './Direction.ts';

interface IPoint {
  x: number;
  y: number;
}

class Point implements IPoint {
  x: number;
  y: number;

  constructor(axisX: number, axisY: number) {
    this.x = axisX;
    this.y = axisY;
  }

  move(offset: number, direction: any) {
    if(direction === Direction.RIGHT) {
      this.x = this.x + (offset * 5);
    }
    else if(direction == Direction.LEFT) {
      this.x = this.x - (offset * 5);
    }
    else if(direction == Direction.UP)
    {
      this.y = this.y + (offset * 5);
    }
    else if(direction == Direction.DOWN)
    {
      this.y = this.y - (offset * 5);
    }
  }

  render() {
    const posX = this.x;
    const posY = this.y;
    const elem = document.createElement('div');
    elem.style.cssText = "background-color: red; border: 1px solid white; height: 5px; width: 5px; position: absolute;";
    elem.style.left = posX + "px";
    elem.style.top = posY + "px";

    return elem;
  }
}

export default Point;