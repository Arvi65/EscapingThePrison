/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Sprite4/costumes/costume2.svg", {
        x: 257.7567567567568,
        y: 231.08183343843845
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite4/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "animation" },
        this.whenIReceiveAnimation
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pacman" },
        this.whenIReceivePacman
      )
    ];
  }

  *whenIReceiveAnimation() {
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceivePacman() {
    this.visible = true;
  }
}
