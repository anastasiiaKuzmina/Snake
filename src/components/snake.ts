import Point from './Point.ts';
import SnakeFigure from './SnakeFigure.ts';
import Direction from './Direction.ts';

interface ISnake {
  btnStart: any;
  btnPause: any;
}

class Snake implements ISnake {
  point: any;
  snake: any;
  btnStart: any;
  btnPause: any;
  interval: number;

  constructor() {
    this.btnStart = document.querySelector('#btnStart');
    this.btnPause = document.querySelector('#btnPause');
    this.interval = 0;

    this.init();
  }

  init() {
    this.startPoint();
    this.start();
    this.pause();
  }

  startPoint() {
    this.point = new Point(30, 30);
    this.snake = new SnakeFigure(Direction.RIGHT);
    this.snake.drawSnakeList(this.point, 5);
    this.snake.init();
  }

  start() {
    this.btnStart.addEventListener("click", () => {
      this.interval = setInterval(() => {
        const res = this.snake.move();
        if(!res) {
          clearInterval(this.interval);
          this.startPoint();
        }
      }, 500);
    });
  }

  pause() {
    this.btnPause.addEventListener("click", () => {
      clearInterval(this.interval);
    });
  }
}

export default Snake;