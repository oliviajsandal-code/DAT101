"use strict";
import { TSprite, TSpriteButton, TSpriteNumber } from "libSprite";
import { startGame, EGameStatus } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu {
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGetReady;
  #spGameOverBillboard;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  #highScores;
  #resetGameCallback;
  #isMuted;

  constructor(aSpcvs, aSPI, aResetGameCallback) {
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;

    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.value = 0;
    this.#spGameScore.visible = false;
    this.#spGameScore.alpha = 0.5;

    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 188, 140);
    this.#spGetReady.index = 0;
    this.#spGetReady.hidden = true;

    this.#spGameOverBillboard = new TSprite(aSpcvs, aSPI.gameOver, 175, 170);
    this.#spGameOverBillboard.hidden = true;

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 205, 222);
    this.#spMedal.hidden = true;

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberBig, 335, 224);
    this.#spFinalScore.visible = false;

    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberBig, 335, 272);
    this.#spHighScore.visible = false;

    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#highScores = [0];
    this.#isMuted = false;
    this.#resetGameCallback = aResetGameCallback;
  }

  #showMainMenu() {
    this.#spTitle.hidden = false;
    this.#spPlayBtn.hidden = false;
    this.#spGetReady.hidden = true;
    this.#spCountDown.visible = false;
    this.#spGameScore.visible = false;
    this.#spGameOverBillboard.hidden = true;
    this.#spMedal.hidden = true;
    this.#spFinalScore.visible = false;
    this.#spHighScore.visible = false;
  }

  incGameScore(aScore) {
    this.#spGameScore.value += aScore;
  }

  getCurrentScore() {
    return this.#spGameScore.value;
  }

  isMuted() {
    return this.#isMuted;
  }

  stopSound() {
    if (this.#sfRunning) {
      this.#sfRunning.stop();
    }
  }

  setSoundMute(aIsMuted) {
    this.#isMuted = aIsMuted;

    if (aIsMuted) {
      if (this.#sfRunning) {
        this.#sfRunning.stop();
      }
      if (this.#sfCountDown) {
        this.#sfCountDown.stop();
      }
      return;
    }

    if (this.#sfRunning && EGameStatus.state === EGameStatus.gaming) {
      this.#sfRunning.play();
    }
  }

  showGameOver(aScore) {
    this.stopSound();
    if (this.#sfCountDown) {
      this.#sfCountDown.stop();
    }

    this.#spGetReady.hidden = true;
    this.#spCountDown.visible = false;
    this.#spGameScore.visible = false;
    this.#spTitle.hidden = true;

    this.#spGameOverBillboard.hidden = false;
    this.#spPlayBtn.hidden = false;
    this.#spFinalScore.visible = true;
    this.#spFinalScore.value = aScore;

    this.#highScores.push(aScore);
    this.#highScores.sort((a, b) => b - a);
    this.#highScores.length = Math.min(this.#highScores.length, 5);

    this.#spHighScore.visible = true;
    this.#spHighScore.value = this.#highScores[0] ?? 0;

    this.#spMedal.hidden = false;
    if (aScore >= 3) {
      this.#spMedal.index = 0;
    } else if (aScore >= 2) {
      this.#spMedal.index = 1;
    } else if (aScore >= 1) {
      this.#spMedal.index = 2;
    } else {
      this.#spMedal.index = 3;
    }
  }

  draw() {
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spGetReady.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGameOverBillboard.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown() {
    if (EGameStatus.state !== EGameStatus.countDown) {
      return;
    }

    this.#spCountDown.value -= 1;
    if (this.#spCountDown.value > 0) {
      setTimeout(this.countDown.bind(this), 1000);
      return;
    }

    this.#spCountDown.visible = false;
    this.#spGetReady.hidden = true;
    this.#spGameScore.visible = true;
    this.#sfRunning = new TSoundFile(fnRunning);
    if (!this.#isMuted) {
      this.#sfRunning.play();
    }
    startGame();
  }

  spPlayBtnClick() {
    if (EGameStatus.state === EGameStatus.countDown || EGameStatus.state === EGameStatus.gaming) {
      return;
    }

    if (this.#sfCountDown) {
      this.#sfCountDown.stop();
    }

    if (EGameStatus.state === EGameStatus.heroIsDead || EGameStatus.state === EGameStatus.gameOver) {
      if (this.#resetGameCallback) {
        this.#resetGameCallback();
      }
      this.#spGameScore.value = 0;
    }

    EGameStatus.state = EGameStatus.countDown;
    this.#showMainMenu();
    this.#spTitle.hidden = true;
    this.#spPlayBtn.hidden = true;
    this.#spGetReady.hidden = false;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;

    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!this.#isMuted) {
      this.#sfCountDown.play();
    }

    setTimeout(this.countDown.bind(this), 1000);
  }
}
