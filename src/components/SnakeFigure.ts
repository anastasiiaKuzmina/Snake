import Direction from './Direction';
import Point from './Point';
import { canvas, ctx } from './Constants';

class Snake implements ISnake {
  private snakeList: Array<any>;
  direction: Direction;
  point: IPoint;

  constructor(direction: Direction) {
    this.snakeList = [];
    this.direction = direction;
  }

  init() {
    document.onkeydown = this.handleKey;
  }

  initSnakeList(length: number) {
    for(let i = 0; i < length; i++) {
      this.point = new Point(10, 10);
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

    return this.gameOver();
  }

  addItem() {
    return this.snakeList.push(this.nextItem());
  }

  getLastItem() {
    return this.snakeList[this.snakeList.length - 1];
  }

  private handleKey = (event: KeyboardEvent) => {
    const e = event.keyCode;
    if (e === 38) {
      if (this.direction !== Direction.DOWN) {
        this.direction = Direction.UP;
      }
    } else if (e === 40) {
      if (this.direction !== Direction.UP) {
        this.direction = Direction.DOWN;
      }
    } else if (e === 37) {
      if (this.direction !== Direction.RIGHT) {
        this.direction = Direction.LEFT;
      }
    } else if (e === 39) {
      if (this.direction !== Direction.LEFT) {
        this.direction = Direction.RIGHT;
      }
    }
  };

  private nextItem() {
    const lastItem = this.getLastItem();
    const nextPoint = new Point(lastItem.x, lastItem.y);
    nextPoint.move(1, this.direction);

    return nextPoint;
  }

  private render() {
    ctx.clearRect(0, 0, 400, 400);

    this.snakeList.forEach((item: IPoint) => {
      item.render();
    });
  }

  private gameOver() {
    const lastItem = this.getLastItem();
    const item = this.snakeList.slice(0, -1).find((item: IPoint) => lastItem.compare(item));
    let flag = true;

    if(lastItem.x <= 0 || lastItem.y <= 0 || lastItem.x >= canvas.width || lastItem.y >= canvas.height || item) {
      alert('game over');
      flag = false;
    }

    return flag;
  }
}

export default Snake;
