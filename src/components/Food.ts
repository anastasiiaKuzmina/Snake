// import Point from './Point.ts';
// import SnakeFigure from './SnakeFigure.ts';
// import Direction from './Direction.ts';

interface IFood {
  x: number;
  y: number;
}

class Food implements IFood {
  x: number;
  y: number;

  constructor(axisX: number, axisY: number) {
    this.x = axisX;
    this.y = axisY;
  }

  render() {
    const posX = this.x;
    const posY = this.y;
    const elem = document.createElement('div');
    elem.style.cssText = "background-color: green; border: 1px solid white; border-radius: 50%; height: 5px; width: 5px; position: absolute;";
    elem.style.left = posX + "px";
    elem.style.top = posY + "px";

    return elem;
  }
}

export default Food;