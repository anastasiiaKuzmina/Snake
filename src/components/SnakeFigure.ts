import Point from './Point.ts';

interface ISnakeFigure {
  // length: number;
  // direction: any;
  x: number;
  y: number;
}

class SnakeFigure implements ISnakeFigure {
  // length: number;
  // direction: any;
  // startPoint: any;
  point: any;
  x: number;
  y: number;

  constructor() {
    // this.startPoint = startPoint;
    // this.length = length;
    // this.direction = direction;

    // this.drawSnakeList(this.startPoint, this.length, this.direction);
  }

  drawSnakeList(startPoint: any, length: number, direction: any) {
    const snakeList = [];
    for(let i = 0; i < length; i++) {
      this.point = new Point(startPoint.x, startPoint.y);
      this.point.move(i, direction);
      this.point.render();
      snakeList.push(this.point);
    }
    console.log(snakeList);
    return snakeList;
  }

  render() {

  }
}

export default SnakeFigure;