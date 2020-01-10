import Direction from './Direction';
import Food from './Food';
import Snake from './SnakeFigure';

class Game implements IGame {
  btnPause: HTMLButtonElement;
  btnStart: HTMLButtonElement;
  food: IFood;
  interval: number;
  snake: ISnake;
  score: HTMLElement;
  sum: number;
  speed: number;

  constructor() {
    this.btnStart = document.querySelector('#btnStart') as HTMLButtonElement;
    this.btnPause = document.querySelector('#btnPause') as HTMLButtonElement;
    this.score = document.querySelector('.score') as HTMLElement;
    this.interval = 0;
    this.sum = 0;
    // this.speed = 100;

    this.init();
  }

  init() {
    this.startPoint();
    this.start();
    this.pause();
    this.emptyScore();
  }

  private createFood() {
    this.food = new Food();
    this.food.render();
  }

  private emptyScore() {
    this.score.innerHTML = '0';
  }

  private totalScore() {
    this.sum += 10;
    console.log(this.sum);
    return this.sum;
  }

  private ppp() {
    let speed = 100;

    if(this.totalScore() > 20) {
      speed = 3000;
    }

    return speed;
  }

  private eatFood() {
    const snakeLastItem = this.snake.getLastItem();
    if(this.food.isEaten(snakeLastItem)) {
      this.snake.addItem();
      this.createFood();

      this.score.innerHTML = `${this.totalScore()}`;
    }
  }

  private startPoint() {
    this.snake = new Snake(Direction.RIGHT);
    this.snake.initSnakeList(10);
    this.snake.init();
  }

  private start() {
    this.createFood();
    console.log(this.ppp());
    this.btnStart.addEventListener("click", () => {
      // @ts-ignore
      this.interval = setInterval(() => {
        const res = this.snake.move();
        this.food.render();
        this.eatFood();
        if(!res) {
          clearInterval(this.interval);
          this.startPoint();
          this.createFood();
          this.emptyScore();
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
