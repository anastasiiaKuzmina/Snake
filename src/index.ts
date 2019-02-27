import Snake from './components/snake.ts';
import './styles/style.css';

class App {
  snake: any;
  
  constructor() {
    this.snake = new Snake();
  }
}

const app = new App();

export default app;