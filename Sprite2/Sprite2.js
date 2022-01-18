/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "Screenshot 2021-12-12 4",
        "./Sprite2/costumes/Screenshot 2021-12-12 4.svg",
        { x: 256.999995, y: 200.284535 }
      )
    ];

    this.sounds = [new Sound("pop", "./Sprite2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.effects.ghost = 100;
      /* TODO: Implement looks_gotofrontback */ null;
      yield;
    }
  }
}
