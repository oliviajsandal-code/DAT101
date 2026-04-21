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
  constructor(aSpcvs, aSPI){
    const x = 600;
    this.#spi = aSPI;
    // Generate random gap height, based on difficulty settings
    const gap = Math.ceil(Math.random() * (EasyFlyerGap - HardFlyerGap) + HardFlyerGap);
    const minTop = -this.#spi.height + MinimumProtrusion; // Minimum top position for upper obstacle
    const maxTop = -MinimumProtrusion; // Maximum top position for upper obstacle
    // Generate random top position for upper obstacle
    let top = Math.ceil(Math.random() * (maxTop - minTop) + minTop);
    const minBottom = 400 - MinimumProtrusion; // Minimum bottom position for lower obstacle
    let topWithGap = this.#spi.height + top + gap; // Initial position of bottom obstacle based on the height of the sprite, gap, and top 
    if(topWithGap > minBottom){
      // The top with gap is too low, adjust top and keep the gap constant
      const adjustment = topWithGap - minBottom;
      top -= adjustment;
      topWithGap = this.#spi.height + top + gap; // Recalculate topWithGap after adjustment
    }

    this.#spDown = new TSprite(aSpcvs, aSPI, x, topWithGap);
    this.#spDown.index = 0;  // Default to day mode
    this.#spUp = new TSprite(aSpcvs, aSPI, x, top);
    this.#spUp.index = 1;    // Default to day mode
  }

  // Properties
  get x(){
    return this.#spDown.x;
  }

  get width(){
    return this.#spDown.width;
  }

  draw(){
    this.#spDown.draw();
    this.#spUp.draw();
  }

  setTheme(isDay){
    // For day mode, use lighter pipes (index 0,1), for night mode use darker pipes (index 2,3)
    this.#spDown.index = isDay ? 0 : 2;
    this.#spUp.index = isDay ? 1 : 3;
  }
  
  animate(){
    this.#spDown.x--;
    this.#spUp.x--;
  }

}// End of class TObstacle