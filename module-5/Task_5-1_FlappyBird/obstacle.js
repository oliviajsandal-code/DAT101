"use strict";
import { TSprite } from "libSprite";
import { hero, EGameStatus, menu } from "./FlappyBird.mjs";

const EasyFlyerGap = 150;
const HardFlyerGap = 100;
const MinimumProtrusion = 30;

export class TObstacle{
  #spUp;
  #spDown;
  #spi;
  #passed;

  constructor(aSpcvs, aSPI){
    const x = 600;
    this.#spi = aSPI;
    this.#passed = false;

    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion;
    const maxTop = -MinimumProtrusion;
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion;
    let topWithGap = this.#spi.height + top + gap;

    if(topWithGap > minBottom){
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap;
    }

    this.#spDown = new TSprite(aSpcvs,aSPI,x,topWithGap);
    this.#spDown.index = 0;
    this.#spUp = new TSprite(aSpcvs,aSPI,x,top);
    this.#spUp.index = 1;
  }

  get x(){
    return this.#spDown.x;
  }

  get width(){
    return this.#spDown.width;
  }

  get passed(){
    return this.#passed;
  }

  set passed(value){
    this.#passed = value;
  }

  draw(){
    this.#spDown.draw();
    this.#spUp.draw();
  }

  setTheme(isDay){
    this.#spDown.index = isDay ? 0 : 2;
    this.#spUp.index = isDay ? 1 : 3;
  }

  animate(){
    this.#spDown.x--;
    this.#spUp.x--;
  }

  hasCollided(aSprite){
    return aSprite.hasCollided(this.#spUp) || aSprite.hasCollided(this.#spDown);
  }

}
