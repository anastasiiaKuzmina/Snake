import Direction from './Direction';
import Food from './Food';
import Snake from './SnakeFigure';

class Game implements IGame {
  btnPause: HTMLButtonElement;
  btnStart: HTMLButtonElement;
  food: IFood;
  interval: number;
  snake: ISnake;
  snakeGame: HTMLElement;

  constructor() {
    this.snakeGame = document.querySelector('.snake-game') as HTMLElement;
    this.btnStart = document.querySelector('#btnStart') as HTMLButtonElement;
    this.btnPause = document.querySelector('#btnPause') as HTMLButtonElement;
    this.interval = 0;

    this.init();
  }

  init() {
    this.startPoint();
    this.start();
    this.pause();
  }
  
  private createFood() {
    this.food = new Food();
    this.snakeGame.append(this.food.render());
  }

  private eatFood() {
    const snakeLastItem = this.snake.getLastItem();
    if(this.food.isEaten(snakeLastItem)) {
      this.snake.addItem();
      this.createFood();
    }
  }

  private startPoint() {
    this.snake = new Snake(Direction.RIGHT);
    this.snake.initSnakeList(10);
    this.snake.init();
  }

  private start() {
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

  private pause() {
    this.btnPause.addEventListener("click", () => {
      clearInterval(this.interval);
    });
  }
}

export default Game;