/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stuffforsaying extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "DO NOT DELETE",
        "./Stuffforsaying/costumes/DO NOT DELETE.svg",
        { x: 1.25, y: 1.25 }
      )
    ];

    this.sounds = [new Sound("sfx", "./Stuffforsaying/sounds/sfx.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "begin say script" },
        this.whenIReceiveBeginSayScript
      )
    ];

    this.vars.letter = 42;
    this.vars.currentstring = "Who cares! Let's get on before it leaves!";
  }

  *whenIReceiveBeginSayScript() {
    this.vars.currentstring = 0;
    this.goto(this.stage.vars.sayx, this.stage.vars.sayy);
    this.vars.letter = 1;
    for (let i = 0; i < this.stage.vars.string.length; i++) {
      if (this.keyPressed("space") || this.keyPressed("" + "enter" + 0)) {
        yield* this.sayAndWait(this.vars.currentstring, 0.02);
        return;
      }
      this.vars.currentstring =
        "" +
        this.vars.currentstring +
        this.stage.vars.string[this.vars.letter - 1];
      yield* this.startSound("sfx");
      this.say(this.vars.currentstring);
      this.vars.letter += 1;
      yield* this.wait(0.05);
      if (this.keyPressed("space") || this.keyPressed("" + "enter" + 0)) {
        yield* this.sayAndWait(this.vars.currentstring, 0.02);
        return;
      }
      yield;
    }
    yield* this.sayAndWait(this.vars.currentstring, 1);
  }
}
