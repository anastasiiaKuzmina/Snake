import Game from './components/Game.ts';
// An import path cannot end with a '.ts' extension. Consider importing './components/Game' instead.ts(2691)
import './styles/style.css';

class App {
  game: any;
  
  constructor() {
    this.game = new Game();
  }
}

const app = new App();

export default app;