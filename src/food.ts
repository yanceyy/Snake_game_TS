export default class Food {
    element:HTMLElement;

    constructor() {
      // get food element and store
      this.element = document.getElementById('food')!;
    }

    // get position of the food
    get X():number {
      return this.element.offsetLeft;
    }

    get Y():number {
      return this.element.offsetTop;
    }

    // change food position
    changePosition():void {
      const top = Math.round(Math.random() * 29) * 10;
      const left = Math.round(Math.random() * 29) * 10;
      this.element.style.left = `${top}px`;
      this.element.style.top = `${left}px`;
    }
}
