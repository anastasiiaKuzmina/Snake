import Point from './Point.ts';
import SnakeFigure from './SnakeFigure.ts';
import Direction from './Direction.ts';

interface ISnake {}

class Snake implements ISnake {
  snakeGame: any;
  point: any;
  snake: any;

  constructor() {
    this.snakeGame = document.querySelector('.snake-game');
    this.point = new Point(10, 20);
    this.snake = new SnakeFigure;
    
    this.render();
  }

  /**
   * Render HTML
   */

  generateItemHTML() {
    return this.snake.drawSnakeList(this.point, 5, Direction.RIGHT);
  }

  render() {
    this.snakeGame.append(this.generateItemHTML());
  }
}

export default Snake;