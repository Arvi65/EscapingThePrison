/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite5/costumes/costume1.svg", {
        x: 45.653279999999995,
        y: 46.51353499999999
      })
    ];

    this.sounds = [
      new Sound("pacman_beginning", "./Sprite5/sounds/pacman_beginning.wav"),
      new Sound(
        "Pac-Man Waka Waka Seamless Loop",
        "./Sprite5/sounds/Pac-Man Waka Waka Seamless Loop.wav"
      )
    ];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "animation" },
        this.whenIReceiveAnimation
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start pacman movement]" },
        this.whenIReceiveStartPacmanMovement
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "start pacman movement]" },
        this.whenIReceiveStartPacmanMovement2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "pacman" },
        this.whenIReceivePacman
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "reset pacman" },
        this.whenIReceiveResetPacman
      )
    ];
  }

  *whenIReceiveAnimation() {
    this.visible = false;
  }

  *whenIReceiveStartPacmanMovement() {
    this.goto(155, 118);
    while (true) {
      if (this.keyPressed("left arrow")) {
        this.direction = -90;
        this.x += -5;
      }
      if (this.keyPressed("right arrow")) {
        this.direction = 90;
        this.x += 5;
      }
      if (this.keyPressed("up arrow")) {
        this.y += 5;
      }
      if (this.keyPressed("down arrow")) {
        this.y += -5;
      }
      if (
        this.keyPressed("right arrow") &&
        this.touching(this.sprites["Sprite4"].andClones())
      ) {
        this.x += -10;
      }
      if (
        this.keyPressed("left arrow") &&
        this.touching(this.sprites["Sprite4"].andClones())
      ) {
        this.x += 10;
      }
      if (
        this.keyPressed("down arrow") &&
        this.touching(this.sprites["Sprite4"].andClones())
      ) {
        this.y += 10;
      }
      if (
        this.keyPressed("up arrow") &&
        this.touching(this.sprites["Sprite4"].andClones())
      ) {
        this.y += -10;
      }
      if (
        this.touching(this.sprites["Sprite4"].andClones()) &&
        this.direction == 90
      ) {
        this.x += 10;
      }
      if (
        this.touching(this.sprites["Sprite4"].andClones()) &&
        this.direction == -90
      ) {
        this.x += -10;
      }
      yield;
    }
  }

  *whenIReceiveStartPacmanMovement2() {
    while (!!(this.stage.costume.name == "background")) {
      yield* this.playSoundUntilDone("Pac-Man Waka Waka Seamless Loop");
      yield;
    }
  }

  *whenIReceivePacman() {
    yield* this.playSoundUntilDone("pacman_beginning");
    this.visible = true;
    this.broadcast("start pacman movement]");
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveResetPacman() {
    this.goto(155, 118);
  }
}
