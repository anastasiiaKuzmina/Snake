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

    this.render(this.snakeList);
    return this.snakeList;
  }

  move() {
    this.snakeList.shift();
    const nextItem = this.nextItem();
    this.snakeList.push(nextItem);

    this.render(this.snakeList);

    return this.compare();
  }

  handleKey = (event: any) => {
    const e = event.keyCode;
    if (e === 38) {
      this.direction = Direction.UP;
    } else if (e === 40) {
      this.direction = Direction.DOWN;
    } else if (e === 37) {
      this.direction = Direction.LEFT;
    } else if (e === 39) {
      this.direction = Direction.RIGHT;
    }
  };

  nextItem() {
    const lastItem = this.snakeList[this.snakeList.length - 1];
    const nextPoint = new Point(lastItem.x, lastItem.y);
    nextPoint.move(1, this.direction);

    return nextPoint;
  }

  render(list: any) {
    this.snakeGame.innerHTML = "";

    list.forEach((item: any) => {
      this.snakeGame.append(item.render());
    });
  }

  compareWithItems(lastItem: any){
    this.snakeList.forEach((item: any) => {
      if(item.x === lastItem.x){

      }
    });
  }
  
  compare() {
    const coordinate = this.snakeGame.getBoundingClientRect();
    const lastItem = this.snakeList[this.snakeList.length - 1];
    // const newArr = this.snakeList.slice(1, this.snakeList.length - 1);

    // newArr.map((item: any) => item.x === lastItem.x);

    if(lastItem.x <= 0 || lastItem.y <= 0 || lastItem.x >= coordinate.width - 15 || lastItem.y >= coordinate.height - 15) {
      alert('game over');
      return false;
    } else {
      return true;
    }
  }
}

export default SnakeFigure;