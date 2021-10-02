export default class Info {
    score=0;

    level=1;

    scoreEle:HTMLElement;

    levelEle:HTMLElement;

    maxLEVEL:number;

    upScore:number;

    constructor(maxLEVEL:number = 10, upScore:number = 3) {
      this.scoreEle = document.getElementById('score')!;
      this.levelEle = document.getElementById('level')!;
      this.maxLEVEL = maxLEVEL;
      this.upScore = upScore;
    }

    // add score
    addScore():void {
      this.score += 1;
      this.scoreEle.textContent = String(this.score);
      if (this.score % this.upScore === 0) this.levelUp();
    }

    levelUp():void {
      if (this.level < 10) {
        this.level += 1;
        this.levelEle.textContent = String(this.level);
      }
    }
}
