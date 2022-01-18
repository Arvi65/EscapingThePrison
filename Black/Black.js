/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Black extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Black/costumes/costume1.svg", {
        x: 417,
        y: 211.50000000000006
      })
    ];

    this.sounds = [new Sound("pop", "./Black/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "black fade" },
        this.whenIReceiveBlackFade
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveBlackFade() {
    this.visible = true;
    this.effects.ghost = 0;
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
