/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wind extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wind/costumes/costume1.svg", {
        x: 231.5,
        y: 161
      }),
      new Costume("costume2", "./Wind/costumes/costume2.svg", {
        x: 288.5,
        y: 197
      }),
      new Costume("costume3", "./Wind/costumes/costume3.svg", {
        x: 349.5,
        y: 235
      })
    ];

    this.sounds = [new Sound("pop", "./Wind/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "End wind" },
        this.whenIReceiveEndWind
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "zipline" },
        this.whenIReceiveZipline
      )
    ];
  }

  *whenIReceiveEndWind() {
    this.stage.vars.stapwind = 1;
    this.stopAllSounds();
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.visible = false;
    while (true) {
      yield* this.wait(0.07);
      this.costumeNumber += 1;
      yield;
    }
  }

  *whenIReceiveZipline() {
    this.visible = true;
  }
}
