import Direction from './Direction.ts';
import Food from './Food.ts';
import Point from './Point.ts';
import Snake from './SnakeFigure.ts';

interface IGame {
  btnStart: any;
  btnPause: any;
}

class Game implements IGame {
  // Try to reduce number of `any` types, the main idea of TypeScript is to provide sctrict typization to reduce issues propablity
  point: any;
  snake: any;
  btnStart: any;
  btnPause: any;
  interval: number;
  food: any;
  snakeGame: any;

  constructor() {
    this.snakeGame = document.querySelector('.snake-game');
    this.btnStart = document.querySelector('#btnStart');
    this.btnPause = document.querySelector('#btnPause');
    this.interval = 0;
    this.food = new Food();

    this.init();
  }

  init() {
    this.startPoint();
    this.start();
    this.pause();
  }
  
  createFood() {
    const food = this.food.randomNumber();
    this.snakeGame.append(food.render());
  }

  eatFood() {
    const snakeLastItem = this.snake.getLastItem();
    // this.food.isEaten(snakeLastItem)
    // In this manner you can make x / y private forever
    if(snakeLastItem.x === this.food.x && snakeLastItem.y === this.food.y) {
      this.snake.addItem();
      this.createFood();
    }
  }

  startPoint() {
    this.point = new Point(30, 30);
    this.snake = new Snake(Direction.RIGHT);
    this.snake.drawSnakeList(this.point, 10);
    this.snake.init();
  }

  start() {
    this.createFood();
    this.btnStart.addEventListener("click", () => {
      this.interval = setInterval(() => {
        const res = this.snake.move();
        this.snakeGame.append(this.food.render());
        this.eatFood();
        if(!res) {
          clearInterval(this.interval);
          this.startPoint();
          this.createFood();
        }
      }, 100);
    });
  }

  pause() {
    this.btnPause.addEventListener("click", () => {
      clearInterval(this.interval);
    });
  }
}

export default Game;