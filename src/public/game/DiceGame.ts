'use strict';

/**
  * This is my TypeScript go at Jonas Schmedtmann's
  * challenge to write a PigGame
  *
  *
  */

class DiceGame {
  private scores: number[] = [0, 0];
  private currentScore: number = 0;
  private activePlayer: number = 0 ;
  private playing: boolean = true;
  private goalScore: number = 30;

  private playerEls: HTMLElement[];
  private scoreEls: HTMLElement[];
  private currentEls: HTMLElement[];

  private diceEl: HTMLImageElement;
  private btnNew: HTMLButtonElement;
  private btnRoll: HTMLButtonElement;
  private btnHold: HTMLButtonElement;

  constructor() {
    // Selecting elements
    this.playerEls = [
      document.querySelector('.player-0')!,
      document.querySelector('.player-1')!
    ];
    
    this.scoreEls = [
      document.querySelector('.score-0')!,
      document.querySelector('.score-1')!
    ];

    this.currentEls = [
      document.querySelector('.buffer-0')!,
      document.querySelector('.buffer-1')!
    ];

    this.diceEl = document.querySelector('.dice') as HTMLImageElement;
    this.btnNew = document.querySelector('.btn-new') as HTMLButtonElement;
    this.btnRoll = document.querySelector('.btn-roll') as HTMLButtonElement;
    this.btnHold = document.querySelector('.btn-hold') as HTMLButtonElement;

    // Initialize game
    this.init();
    this.addEventListeners();
  }

  private init(): void {
    this.scores = [0, 0];
    this.currentScore = 0;
    this.activePlayer = 0;
    this.playing = true;

    this.scoreEls.forEach(el => (el.textContent = '0'));
    this.currentEls.forEach(el => (el.textContent = '0'));

    this.diceEl.classList.add('hidden');
    this.playerEls.forEach(player => player.classList.remove('player-winner'));
    this.playerEls[0].classList.add('player-active');
    this.playerEls[1].classList.remove('player-active');
  }

  private switchPlayer(): void {
    this.currentEls[this.activePlayer].textContent = '0';
    this.currentScore = 0;
    this.activePlayer = this.activePlayer === 0 ? 1 : 0;
    this.playerEls.forEach(player => player.classList.toggle('player-active'));
  }

  private rollDice(): void {
    if (this.playing) {
      const dice = Math.trunc(Math.random() * 6) + 1;
      this.diceEl.classList.remove('hidden');
      this.diceEl.src = `../assets/img/dice/dice-${dice}.png`;

      if (dice !== 1) {
        this.currentScore += dice;
        this.currentEls[this.activePlayer].textContent = String(this.currentScore);
      } else {
        this.switchPlayer();
      }
    }
  }

  private holdScore(): void {
    if (this.playing) {
      this.scores[this.activePlayer] += this.currentScore;
      this.scoreEls[this.activePlayer].textContent = String(this.scores[this.activePlayer]);

      if (this.scores[this.activePlayer] >= this.goalScore) {
        this.playing = false;
        this.diceEl.classList.add('hidden');

        this.playerEls[this.activePlayer].classList.add('player-winner');
        this.playerEls[this.activePlayer].classList.remove('player-active');
        this.scoreEls[this.activePlayer].textContent = "Winner!";
      } else {
        this.switchPlayer();
      }
    }
  }

  private addEventListeners(): void {
    this.btnRoll.addEventListener('click', this.rollDice.bind(this));
    this.btnHold.addEventListener('click', this.holdScore.bind(this));
    this.btnNew.addEventListener('click', this.init.bind(this));
  }
}

new DiceGame();

