/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Help extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Help/costumes/costume2.svg", {
        x: 50.6504750770504,
        y: 21.87885211725694
      }),
      new Costume("costume3", "./Help/costumes/costume3.svg", {
        x: 52.62305029183531,
        y: 19.00000211725694
      })
    ];

    this.sounds = [new Sound("pop", "./Help/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "help in menu" },
        this.whenIReceiveHelpInMenu
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveHelpInMenu() {
    this.stage.vars.OfFails = 0;
    this.costumeNumber += 1;
  }

  *whenGreenFlagClicked() {
    /* TODO: Implement looks_gotofrontback */ null;
    this.costume = "costume2";
    while (true) {
      if (this.stage.costumeNumber == 1) {
        this.visible = true;
      } else {
        this.visible = false;
      }
      yield;
    }
  }
}
