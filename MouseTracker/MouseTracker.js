/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class MouseTracker extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./MouseTracker/costumes/costume1.svg", {
        x: 1.25,
        y: 1.25
      })
    ];

    this.sounds = [new Sound("pop", "./MouseTracker/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "hide choice" },
        this.whenIReceiveHideChoice
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHideChoice() {
    while (
      !(
        this.mouse.down &&
        (this.touching(Color.rgb(39, 255, 6)) ||
          this.touching(Color.rgb(102, 255, 78)))
      )
    ) {
      yield;
    }
    if (this.touching(Color.rgb(39, 255, 6))) {
      this.stage.vars.hidechoice = "emergencyExit";
    } else {
      this.stage.vars.hidechoice = "ventHide";
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.goto(this.mouse.x + 5, this.mouse.y + 5);
      if (this.mouse.down && this.touching(Color.rgb(31, 31, 31))) {
        this.broadcast("reset pacman");
      }
      if (this.mouse.down && this.touching(Color.rgb(119, 48, 48))) {
        this.broadcast("help in menu");
      }
      yield;
    }
  }
}
