import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Help from "./Help/Help.js";
import Choices from "./Choices/Choices.js";
import Testing from "./Testing/Testing.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import MouseTracker from "./MouseTracker/MouseTracker.js";
import Stuffforsaying from "./Stuffforsaying/Stuffforsaying.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Sprite3 from "./Sprite3/Sprite3.js";
import Sprite4 from "./Sprite4/Sprite4.js";
import Fails from "./Fails/Fails.js";
import Sprite5 from "./Sprite5/Sprite5.js";
import Warning from "./Warning/Warning.js";
import Black from "./Black/Black.js";
import Sprite7 from "./Sprite7/Sprite7.js";
import Wind from "./Wind/Wind.js";
import Sprite6 from "./Sprite6/Sprite6.js";

const stage = new Stage({ costumeNumber: 270 });

const sprites = {
  Help: new Help({
    x: -2,
    y: -137,
    direction: 90,
    costumeNumber: 1,
    size: 120,
    visible: false
  }),
  Choices: new Choices({
    x: -91,
    y: -120,
    direction: -90,
    costumeNumber: 5,
    size: 120,
    visible: false
  }),
  Testing: new Testing({
    x: -147,
    y: -34,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  MouseTracker: new MouseTracker({
    x: -145,
    y: 180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Stuffforsaying: new Stuffforsaying({
    x: -148,
    y: 7,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite2: new Sprite2({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite3: new Sprite3({
    x: -128,
    y: -95,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite4: new Sprite4({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Fails: new Fails({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Sprite5: new Sprite5({
    x: -140,
    y: -87,
    direction: 90,
    costumeNumber: 1,
    size: 40,
    visible: false
  }),
  Warning: new Warning({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: false
  }),
  Black: new Black({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite7: new Sprite7({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 15,
    size: 100,
    visible: false
  }),
  Wind: new Wind({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: false
  }),
  Sprite6: new Sprite6({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
