/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Fails extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("FailBackground", "./Fails/costumes/FailBackground.svg", {
        x: 446,
        y: 299.5
      }),
      new Costume("ShovelDown Fail", "./Fails/costumes/ShovelDown Fail.svg", {
        x: 156.93284,
        y: 189.73501718493827
      }),
      new Costume(
        "ShovelDownMissionFail",
        "./Fails/costumes/ShovelDownMissionFail.svg",
        { x: 209.06485, y: 91.99704 }
      ),
      new Costume("Drill Fail", "./Fails/costumes/Drill Fail.svg", {
        x: 150.93284000000003,
        y: 190.73500718493827
      }),
      new Costume("DrillMissionFail", "./Fails/costumes/DrillMissionFail.svg", {
        x: 209.06485,
        y: 91.99704
      }),
      new Costume("Fall Fail", "./Fails/costumes/Fall Fail.svg", {
        x: 150.93284,
        y: 190.73499500000003
      }),
      new Costume("FallMissionFail", "./Fails/costumes/FallMissionFail.svg", {
        x: 209.06485,
        y: 91.99704
      })
    ];

    this.sounds = [
      new Sound("Fail 1", "./Fails/sounds/Fail 1.wav"),
      new Sound("Fail2", "./Fails/sounds/Fail2.wav"),
      new Sound("Fail3", "./Fails/sounds/Fail3.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "fail" }, this.whenIReceiveFail),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveFail() {
    this.costume = "FailBackground";
    this.createClone();
    if (this.stage.vars.fail == "shoveldown") {
      if (this.stage.vars.OfFails == 1) {
        this.costume = "ShovelDown Fail";
        this.createClone();
      } else {
        this.costume = "ShovelDownMissionFail";
        this.createClone();
      }
    } else {
      if (this.stage.vars.fail == "drill") {
        if (this.stage.vars.OfFails == 1) {
          this.costume = "Drill Fail";
          this.createClone();
        } else {
          this.costume = "DrillMissionFail";
          this.createClone();
        }
      } else {
        if (this.stage.vars.fail == "fallFromJael") {
          if (this.stage.vars.OfFails == 1) {
            this.costume = "Fall Fail";
            this.createClone();
          } else {
            this.costume = "FallMissionFail";
            this.createClone();
          }
        } else {
          null;
        }
      }
    }
  }

  *startAsClone() {
    if (this.costumeNumber == 1) {
      this.visible = true;
      this.goto(0, 0);
      this.effects.ghost = 50;
    } else {
      if (!this.costume.name.includes("MissionFail")) {
        this.goto(0, 0);
        this.visible = true;
        this.effects.ghost = 0;
        /* TODO: Implement looks_gotofrontback */ null;
        this.stopAllSounds();
        yield* this.startSound(this.random(1, 3));
        this.x += -10;
        yield* this.wait(0.05);
        this.x += 20;
        yield* this.wait(0.05);
        this.x += -10;
      } else {
        if (this.costume.name.includes("MissionFail")) {
          this.goto(0, 0);
          this.visible = true;
          this.effects.ghost = 0;
          /* TODO: Implement looks_gotofrontback */ null;
          this.stopAllSounds();
          yield* this.startSound(this.random(2, 3));
          this.x += -10;
          yield* this.wait(0.05);
          this.x += 20;
          yield* this.wait(0.05);
          this.x += -10;
        } else {
          null;
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }
}
