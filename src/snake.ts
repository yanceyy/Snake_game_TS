export default class Snake {
    head:HTMLElement;

    bodies:HTMLCollection;

    snake:HTMLElement;

    constructor() {
      this.snake = document.getElementById('snake')!;
      this.init();
      this.head = document.querySelector('#snake > div')!;
      this.bodies = this.snake.getElementsByTagName('div')!;
    }

    init() {
      this.snake.innerHTML = '<div></div>'; // restart and make sure only one div exists
    }

    // get the head of the Snake
    get X() {
      return this.head.offsetLeft;
    }

    get Y() {
      return this.head.offsetTop;
    }

    // set the head position of the snake
    setPosition(x: number, y: number) {
      if (x < 0 || x > 290 || y < 0 || y > 290) throw new Error('dead');
      this.head.style.left = `${x}px`;
      this.head.style.top = `${y}px`;
    }

    // test whether next move will eat self
    eatSelf(x:number, y:number) {
      if ([...this.bodies].some((body) => body !== this.head
        && x === (<HTMLScriptElement>body).offsetLeft
        && y === (<HTMLScriptElement>body).offsetTop)) { throw new Error('dead'); }
    }

    // increase length at the next setp position
    increaseLength(x: number, y: number) {
      const step = document.createElement('div');
      this.snake.insertBefore(step, this.head);
      this.head = step;
      this.setPosition(x, y);
    }

    // move
    // remove the last child add to the front of the child
    move(x: number, y: number) {
      if (x < 0 || x > 290 || y < 0 || y > 290) throw new Error('dead');
      const lastChild:HTMLElement = this.snake.querySelector('div:last-child')!;
      const step = document.createElement('div');
      this.snake.insertBefore(step, this.head);
      this.head = step;
      this.snake.removeChild(lastChild);
      this.setPosition(x, y); // use set position to add new div to right position
    }
}
