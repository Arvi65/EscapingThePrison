/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite3/costumes/costume1.svg", {
        x: 27.25000000000003,
        y: 27.24999999999997
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "animation" },
        this.whenIReceiveAnimation
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pacman" },
        this.whenIReceivePacman
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenIReceiveAnimation() {
    this.visible = false;
  }

  *whenIReceivePacman() {
    this.visible = true;
    while (!this.touching(this.sprites["Sprite5"].andClones())) {
      yield;
    }
    this.broadcast("animation");
  }

  *whenGreenFlagClicked2() {
    this.visible = false;
  }
}
