import Point from './Point.ts';
import Direction from './Direction.ts';

interface ISnakeFigure {
  x: number;
  y: number;
}

class SnakeFigure implements ISnakeFigure {
  private snakeList: Array<any>;
  x: number;
  y: number;
  direction: any;
  snakeGame: any;
  point: any;

  constructor(direction: any) {
    this.snakeGame = document.querySelector('.snake-game');
    this.snakeList = [];
    this.direction = direction;
  }

  init() {
    document.onkeydown = this.handleKey;
  }

  drawSnakeList(startPoint: any, length: number) {
    for(let i = 0; i < length; i++) {
      this.point = new Point(startPoint.x, startPoint.y);
      this.point.move(i, this.direction);
      this.snakeList.push(this.point);
    }

    this.render();
    return this.snakeList;
  }

  move() {
    this.snakeList.shift();
    const nextItem = this.nextItem();
    this.snakeList.push(nextItem);

    this.render();

    return this.compare();
  }

  handleKey = (event: any) => {
    const e = event.keyCode;
    if (e === 38) {
      this.direction = Direction.UP;
    } else if (e === 40) {
      this.direction = Direction.DOWN;
    } else if (e === 37) {
      if (this.direction !== Direction.RIGHT) {
        this.direction = Direction.LEFT;
      }
    } else if (e === 39) {
      this.direction = Direction.RIGHT;
    }
  };

  nextItem() {
    const lastItem = this.getLastItem();
    const nextPoint = new Point(lastItem.x, lastItem.y);
    nextPoint.move(1, this.direction);
    
    return nextPoint;
  }

  addItem() {
    return this.snakeList.push(this.nextItem());
  }

  render() {
    this.snakeGame.innerHTML = "";

    this.snakeList.forEach((item: any) => {
      this.snakeGame.append(item.render());
    });
  }

  compare() {
    const coordinate = this.snakeGame.getBoundingClientRect();
    const lastItem = this.getLastItem();
    let flag = true;

    const test = this.snakeList.slice(0, -1).find((item: any) => lastItem.x === item.x && lastItem.y === item.y);
    
    if(lastItem.x <= 0 || lastItem.y <= 0 || lastItem.x >= coordinate.width - 15 || lastItem.y >= coordinate.height - 15 || test) {
      alert('game over');
      flag = false;
    }
    return flag;
  }

  getLastItem() {
    return this.snakeList[this.snakeList.length - 1];
  }
}

export default SnakeFigure;