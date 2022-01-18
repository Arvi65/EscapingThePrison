/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Warning extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Warning/costumes/costume1.svg", {
        x: 278,
        y: 117.84521245338684
      }),
      new Costume("costume2", "./Warning/costumes/costume2.svg", {
        x: 278,
        y: 139.592515
      })
    ];

    this.sounds = [new Sound("pop", "./Warning/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "warning message" },
        this.whenIReceiveWarningMessage
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveWarningMessage() {
    this.costume = "costume2";
    this.effects.ghost = 0;
    /* TODO: Implement looks_gotofrontback */ null;
    this.goto(500, 0);
    this.visible = true;
    yield* this.glide(0.3, 45, 0);
    while (!this.keyPressed("space")) {
      yield;
    }
    for (let i = 0; i < 10; i++) {
      this.effects.ghost += 10;
      yield;
    }
    this.visible = false;
  }
}
