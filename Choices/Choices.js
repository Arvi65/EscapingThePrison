/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Choices extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Choices/costumes/costume1.svg", {
        x: 168.721565,
        y: 22.667267962966065
      }),
      new Costume("costume2", "./Choices/costumes/costume2.svg", {
        x: 54.8338380020395,
        y: 25.43780573759463
      }),
      new Costume("costume3", "./Choices/costumes/costume3.svg", {
        x: 50.395895000000024,
        y: 63.19066533617236
      }),
      new Costume("costume4", "./Choices/costumes/costume4.svg", {
        x: 31.192829999999987,
        y: 51.40273174224467
      }),
      new Costume("arrow", "./Choices/costumes/arrow.svg", {
        x: 18.182179479691627,
        y: 47.23326758585668
      }),
      new Costume("costume5", "./Choices/costumes/costume5.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("select", "./Choices/sounds/select.wav")];

    this.triggers = [
      new Trigger(Trigger.CLONE_START, this.startAsClone),
      new Trigger(Trigger.CLONE_START, this.startAsClone2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Choice1" },
        this.whenIReceiveChoice1
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone3),
      new Trigger(Trigger.CLONE_START, this.startAsClone4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "ShovelChoice" },
        this.whenIReceiveShovelchoice
      ),
      new Trigger(Trigger.CLONE_START, this.startAsClone5),
      new Trigger(Trigger.BROADCAST, { name: "Menu" }, this.whenIReceiveMenu),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *createStartMenu() {
    this.costume = "costume1";
    this.createClone();
    this.costume = "costume2";
    this.createClone();
  }

  *startAsClone() {
    if (this.costumeNumber == 1) {
      this.direction = 90;
      this.visible = true;
      this.effects.ghost = 0;
      this.goto(0, 110);
    } else {
      if (this.costumeNumber == 2) {
        this.direction = 90;
        this.visible = true;
        this.effects.ghost = 0;
        this.goto(0, -139);
        while (true) {
          if (this.touching("mouse")) {
            this.effects.brightness = 10;
            if (this.mouse.down) {
              this.stage.vars.playing = 1;
              return;
            }
          } else {
            this.effects.brightness = 0;
          }
          yield;
        }
      }
    }
  }

  *startAsClone2() {
    if (!(this.stage.vars.currentChoice == 0)) {
      return;
    } else {
      while (!(this.stage.vars.playing == 1)) {
        yield;
      }
      this.broadcast("Start");
      if (this.costumeNumber == 1) {
        yield* this.glide(0.1, 0, 180);
        for (let i = 0; i < 4; i++) {
          this.effects.ghost += 25;
          yield;
        }
        this.deleteThisClone();
      } else {
        if (this.costumeNumber == 2) {
          yield* this.startSound("select");
          yield* this.glide(0.1, 0, -180);
          for (let i = 0; i < 4; i++) {
            this.effects.ghost += 25;
            yield;
          }
          this.deleteThisClone();
        }
      }
    }
  }

  *whenIReceiveChoice1() {
    this.stage.vars.choiceChosen = 0;
    this.stage.vars.currentChoice = "chooseItem";
    this.costume = "costume3";
    this.createClone();
    this.costume = "costume4";
    this.createClone();
  }

  *startAsClone3() {
    if (this.costumeNumber == 3) {
      this.direction = 90;
      this.visible = true;
      this.effects.ghost = 0;
      this.goto(-96, 0);
      while (true) {
        if (this.stage.vars.choiceChosen == 1) {
          this.deleteThisClone();
        }
        if (this.touching("mouse")) {
          this.effects.brightness = 10;
          if (this.mouse.down) {
            this.stage.vars.choiceChosen = 1;
            this.broadcast("Shovel");
          }
        } else {
          this.effects.brightness = 0;
        }
        yield;
      }
    }
  }

  *startAsClone4() {
    if (this.costumeNumber == 4) {
      this.direction = 90;
      this.visible = true;
      this.effects.ghost = 0;
      this.goto(96, 0);
      while (true) {
        if (this.stage.vars.choiceChosen == 1) {
          this.deleteThisClone();
        }
        if (this.touching("mouse")) {
          this.effects.brightness = 10;
          if (this.mouse.down) {
            this.stage.vars.choiceChosen = 1;
            this.broadcast("Drill");
          }
        } else {
          this.effects.brightness = 0;
        }
        yield;
      }
    }
  }

  *whenIReceiveShovelchoice() {
    this.stage.vars.currentChoice = "shovel2";
    this.stage.vars.choiceChosen = 0;
    this.costume = "arrow";
    this.stage.vars.arrowid = 1;
    this.createClone();
    yield* this.wait(0.1);
    this.stage.vars.arrowid = 2;
    this.createClone();
  }

  *startAsClone5() {
    if (this.costume.name == "arrow") {
      if (this.stage.vars.arrowid == 1) {
        this.visible = true;
        /* TODO: Implement looks_gotofrontback */ null;
        this.effects.ghost = 0;
        this.direction = -90;
        this.goto(-91, -120);
        while (true) {
          if (this.stage.vars.choiceChosen == 1) {
            this.deleteThisClone();
          }
          if (this.touching("mouse")) {
            this.effects.brightness = 20;
            if (this.mouse.down) {
              this.stage.vars.choiceChosen = 1;
              this.broadcast("sHOVEL DOWN");
            }
          } else {
            this.effects.brightness = 0;
          }
          yield;
        }
      } else {
        this.visible = true;
        /* TODO: Implement looks_gotofrontback */ null;
        this.effects.ghost = 0;
        this.direction = 0;
        this.goto(-147, -34);
        while (true) {
          if (this.stage.vars.choiceChosen == 1) {
            this.deleteThisClone();
          }
          if (this.touching("mouse")) {
            this.effects.brightness = 20;
            if (this.mouse.down) {
              this.stage.vars.choiceChosen = 1;
              this.broadcast("Shovel Left");
            }
          } else {
            this.effects.brightness = 0;
          }
          yield;
        }
      }
    }
  }

  *whenIReceiveMenu() {
    yield* this.createStartMenu();
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenGreenFlagClicked2() {}
}
