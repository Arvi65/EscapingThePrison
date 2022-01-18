/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite6/costumes/costume1.svg", {
        x: 243.41591591591586,
        y: 79.0467919194234
      })
    ];

    this.sounds = [
      new Sound("pop", "./Sprite6/sounds/pop.wav"),
      new Sound("Reveal", "./Sprite6/sounds/Reveal.wav")
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "YOU DID IT" },
        this.whenIReceiveYouDidIt
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveYouDidIt() {
    yield* this.startSound("Reveal");
    this.effects.pixelate = 100;
    this.effects.ghost = 100;
    this.visible = true;
    for (let i = 0; i < 10; i++) {
      /* TODO: Implement looks_gotofrontback */ null;
      this.effects.pixelate += -10;
      this.effects.ghost += -10;
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
