/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite7 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Sprite7/costumes/backdrop1.svg", {
        x: 282.5,
        y: 223
      }),
      new Costume("backdrop2", "./Sprite7/costumes/backdrop2.svg", {
        x: 282.5,
        y: 223
      }),
      new Costume("backdrop3", "./Sprite7/costumes/backdrop3.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop4", "./Sprite7/costumes/backdrop4.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop5", "./Sprite7/costumes/backdrop5.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop6", "./Sprite7/costumes/backdrop6.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop7", "./Sprite7/costumes/backdrop7.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop8", "./Sprite7/costumes/backdrop8.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop9", "./Sprite7/costumes/backdrop9.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop10", "./Sprite7/costumes/backdrop10.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop11", "./Sprite7/costumes/backdrop11.svg", {
        x: 282.5,
        y: 216.75
      }),
      new Costume("backdrop12", "./Sprite7/costumes/backdrop12.svg", {
        x: 416.45570570570567,
        y: 334.7368618618618
      }),
      new Costume("backdrop13", "./Sprite7/costumes/backdrop13.svg", {
        x: 273.81306306306305,
        y: 261.1632882882883
      }),
      new Costume("backdrop14", "./Sprite7/costumes/backdrop14.svg", {
        x: 335.37462462462463,
        y: 261.1632882882883
      }),
      new Costume("backdrop15", "./Sprite7/costumes/backdrop15.svg", {
        x: 318.8581081081081,
        y: 271.67379879879877
      })
    ];

    this.sounds = [new Sound("pop", "./Sprite7/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "zipline" },
        this.whenIReceiveZipline
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveZipline() {
    this.visible = true;
    this.costume = "backdrop1";
    for (let i = 0; i < 8; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.1);
      yield;
    }
    yield* this.wait(1);
    this.stage.vars.sayx = -44;
    this.stage.vars.sayy = -146;
    this.stage.vars.string = "You like the ride?";
    this.costume = "backdrop10";
    yield* this.broadcastAndWait("begin say script");
    this.costume = "backdrop9";
    yield* this.wait(1.3);
    this.stage.vars.sayx = 10;
    this.stage.vars.sayy = -91;
    this.stage.vars.string = "WHAT DO YOU MEAN!?";
    this.costume = "backdrop11";
    yield* this.broadcastAndWait("begin say script");
    this.costume = "backdrop9";
    yield* this.wait(2);
    this.broadcast("End wind");
    this.costume = "backdrop12";
    yield* this.wait(1);
    this.costume = "backdrop13";
    yield* this.wait(1);
    this.costume = "backdrop14";
    yield* this.wait(1);
    this.costume = "backdrop15";
    yield* this.wait(2);
    this.visible = false;
  }
}
