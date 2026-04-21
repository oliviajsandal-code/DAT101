"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, EGameStatus } from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
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
  #highScore;
  #resetGameCallback;
  #resetGameCallback;
  constructor(aSpcvs, aSPI, aResetGameCallback){
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);
    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 240, 180);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));
    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;
    this.#sfRunning = null;
    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;
    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 200, 150);
    this.#spGetReady.visible = false;
    this.#spGetReady.index = 0;  // Index 0 = "Get Ready"
    this.#spGameOverBillboard = new TSprite(aSpcvs, aSPI.gameOver, 175, 200);
    this.#spGameOverBillboard.visible = false;
    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 130, 190);
    this.#spMedal.visible = false;
    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberBig, 230, 235);
    this.#spFinalScore.visible = false;
    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberBig, 230, 280);
    this.#spHighScore.visible = false;
    this.#highScore = 0;  // Track best score
    this.#resetGameCallback = aResetGameCallback;
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

setSoundMute(aIsMuted){
  if(aIsMuted && this.#sfRunning){
    this.#sfRunning.stop();
  } else if(!aIsMuted && this.#sfRunning){
    this.#sfRunning.play();
  }
}

getCurrentScore(){
  return this.#spGameScore.value;
}

showGameOver(aScore){
  // Stop music
  if(this.#sfRunning){
    this.#sfRunning.stop();
  }
  
  // Hide in-game stuff
  this.#spCountDown.visible = false;
  this.#spGameScore.visible = false;
  this.#spGetReady.visible = false;
  
  // Show game over
  this.#spGameOverBillboard.visible = true;
  this.#spPlayBtn.visible = true;
  
  // Show scores
  this.#spFinalScore.visible = true;
  this.#spFinalScore.value = aScore;
  
  if(aScore > this.#highScore){
    this.#highScore = aScore;
  }
  
  this.#spHighScore.visible = true;
  this.#spHighScore.value = this.#highScore;
  
  // Medal logic
  this.#spMedal.visible = true;
  if(aScore >= 3) this.#spMedal.index = 0;
  else if(aScore >= 2) this.#spMedal.index = 1;
  else if(aScore >= 1) this.#spMedal.index = 2;
  else this.#spMedal.index = 3;
}

draw(){
  this.#spTitle.draw();
  this.#spPlayBtn.draw();
  this.#spCountDown.draw();
  this.#spGameScore.draw();
  this.#spGetReady.draw();
  this.#spGameOverBillboard.draw();
  this.#spMedal.draw();
  this.#spFinalScore.draw();
  this.#spHighScore.draw();
}

countDown(){
  this.#spCountDown.value--;
  if(this.#spCountDown.value > 0){
    setTimeout(this.countDown.bind(this), 1000);  
  }else{
    this.#spCountDown.visible = false;
    this.#spGetReady.visible = false;  // Hide "Get Ready"
    this.#spTitle.hidden = true;
    this.#sfRunning = new TSoundFile(fnRunning);
    this.#sfRunning.play();
    startGame();
  }
}

spPlayBtnClick(){
  // If restarting from game over, reset everything
  if(this.#spGameOverBillboard.visible){
    this.#spGameOverBillboard.visible = false;
    this.#spMedal.visible = false;
    this.#spFinalScore.visible = false;
    this.#spHighScore.visible = false;
    
    if(this.#resetGameCallback) this.#resetGameCallback();
    this.#spGameScore.value = 0;
  }
  
  // Normal menu logic
  console.log("Click!");
  EGameStatus.state = EGameStatus.countDown;
  this.#spPlayBtn.hidden = true;
  this.#spTitle.hidden = true;
  this.#spGetReady.visible = true;  // Show "Get Ready"
  this.#spCountDown.visible = true;
  this.#spCountDown.value = 3;
  this.#sfCountDown = new TSoundFile(fnCountDown);
  this.#sfCountDown.play();
  setTimeout(this.countDown.bind(this), 1000);
}
}



  
