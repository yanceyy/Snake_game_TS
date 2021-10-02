/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import './index.less';
import Food from './food';
import Info from './info';
import Snake from './snake';

class Game {
    snake:Snake;

    food:Food;

    info:Info;

    direction:string='ArrowRight';

    isLive = true;

    startButton:HTMLElement;

    keydownHandler = (e:KeyboardEvent) => {
      if (e.key.startsWith('Arrow')) {
        this.direction = e.key;
      }
    }

    restart = () => {
      this.snake = new Snake();
      this.food.changePosition();
      this.info = new Info();
      this.startButton.style.display = 'none';
      this.direction = 'ArrowRight';
      this.start();
    }

    constructor() {
      this.snake = new Snake();
      this.food = new Food();
      this.info = new Info();
      this.startButton = document.getElementById('restart')!;
      this.startButton.addEventListener('click', this.restart);
      document.addEventListener('keydown', this.keydownHandler);
    }

    hasEat(x:number, y:number) {
      return x === this.food.X && y === this.food.Y;
    }

    start() {
      let { X, Y } = this.snake;

      switch (this.direction) {
        case 'ArrowUp': {
          Y -= 10;
          break;
        }
        case 'ArrowDown': {
          Y += 10;
          break;
        }
        case 'ArrowLeft': {
          X -= 10;
          break;
        }
        case 'ArrowRight': {
          X += 10;
          break;
        }
        default:
      }

      if (this.hasEat(X, Y)) { // if is ture then it is safe and no error
        this.food.changePosition();
        this.info.addScore();
        this.snake.increaseLength(X, Y);
      } else {
        // may cause error since eat self or cash wall
        try {
          this.snake.eatSelf(X, Y);
          this.snake.move(X, Y);
        } catch (e) {
          this.startButton.style.display = 'block';
          return;
        }
      }
      // eslint-disable-next-line no-unused-expressions
      this.isLive && setTimeout(this.start.bind(this), (12 - this.info.level) * 50);
    }
}

const game = new Game();
