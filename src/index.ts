import Game from './components/Game.ts';
import './styles/style.css';

class App {
  game: any;
  
  constructor() {
    this.game = new Game();
  }
}

const app = new App();

export default app;