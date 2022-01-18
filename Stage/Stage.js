/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 390.66489455665965,
        y: 263.4099104954956
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.svg", {
        x: 390.66487500000005,
        y: 263.40990999999997
      }),
      new Costume("backdrop11", "./Stage/costumes/backdrop11.svg", {
        x: 390.664875,
        y: 263.40990999999997
      }),
      new Costume("backdrop12", "./Stage/costumes/backdrop12.svg", {
        x: 390.66486499999996,
        y: 263.40990999999997
      }),
      new Costume("backdrop13", "./Stage/costumes/backdrop13.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop14", "./Stage/costumes/backdrop14.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop15", "./Stage/costumes/backdrop15.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop16", "./Stage/costumes/backdrop16.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop17", "./Stage/costumes/backdrop17.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop18", "./Stage/costumes/backdrop18.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop19", "./Stage/costumes/backdrop19.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop20", "./Stage/costumes/backdrop20.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop21", "./Stage/costumes/backdrop21.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop22", "./Stage/costumes/backdrop22.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop23", "./Stage/costumes/backdrop23.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop24", "./Stage/costumes/backdrop24.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop26", "./Stage/costumes/backdrop26.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop27", "./Stage/costumes/backdrop27.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop28", "./Stage/costumes/backdrop28.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop29", "./Stage/costumes/backdrop29.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop30", "./Stage/costumes/backdrop30.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop31", "./Stage/costumes/backdrop31.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop32", "./Stage/costumes/backdrop32.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop33", "./Stage/costumes/backdrop33.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop34", "./Stage/costumes/backdrop34.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop35", "./Stage/costumes/backdrop35.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop36", "./Stage/costumes/backdrop36.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop37", "./Stage/costumes/backdrop37.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop38", "./Stage/costumes/backdrop38.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop39", "./Stage/costumes/backdrop39.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop40", "./Stage/costumes/backdrop40.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop41", "./Stage/costumes/backdrop41.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("shovel choice", "./Stage/costumes/shovel choice.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop43", "./Stage/costumes/backdrop43.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop44", "./Stage/costumes/backdrop44.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop45", "./Stage/costumes/backdrop45.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop46", "./Stage/costumes/backdrop46.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop47", "./Stage/costumes/backdrop47.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop48", "./Stage/costumes/backdrop48.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop49", "./Stage/costumes/backdrop49.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop50", "./Stage/costumes/backdrop50.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop51", "./Stage/costumes/backdrop51.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop52", "./Stage/costumes/backdrop52.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop53", "./Stage/costumes/backdrop53.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop54", "./Stage/costumes/backdrop54.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop55", "./Stage/costumes/backdrop55.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop56", "./Stage/costumes/backdrop56.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop57", "./Stage/costumes/backdrop57.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("backdrop58", "./Stage/costumes/backdrop58.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill", "./Stage/costumes/Drill.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill2", "./Stage/costumes/Drill2.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill3", "./Stage/costumes/Drill3.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill4", "./Stage/costumes/Drill4.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill5", "./Stage/costumes/Drill5.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill6", "./Stage/costumes/Drill6.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill7", "./Stage/costumes/Drill7.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill8", "./Stage/costumes/Drill8.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill9", "./Stage/costumes/Drill9.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill10", "./Stage/costumes/Drill10.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill11", "./Stage/costumes/Drill11.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill12", "./Stage/costumes/Drill12.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill13", "./Stage/costumes/Drill13.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill14", "./Stage/costumes/Drill14.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill15", "./Stage/costumes/Drill15.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill16", "./Stage/costumes/Drill16.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill17", "./Stage/costumes/Drill17.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill18", "./Stage/costumes/Drill18.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill19", "./Stage/costumes/Drill19.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill20", "./Stage/costumes/Drill20.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill21", "./Stage/costumes/Drill21.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill22", "./Stage/costumes/Drill22.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("Drill23", "./Stage/costumes/Drill23.svg", {
        x: 390.664855,
        y: 263.40990999999997
      }),
      new Costume("ShovelLeft", "./Stage/costumes/ShovelLeft.svg", {
        x: 358.09760079435875,
        y: 220.8758875075075
      }),
      new Costume("ShovelLeft2", "./Stage/costumes/ShovelLeft2.svg", {
        x: 358.09760079435875,
        y: 220.87588750750754
      }),
      new Costume("ShovelLeft3", "./Stage/costumes/ShovelLeft3.svg", {
        x: 358.09760079435875,
        y: 220.87588750750757
      }),
      new Costume("ShovelLeft4", "./Stage/costumes/ShovelLeft4.svg", {
        x: 358.09760079435875,
        y: 220.8758875075076
      }),
      new Costume("ShovelLeft5", "./Stage/costumes/ShovelLeft5.svg", {
        x: 358.09760079435875,
        y: 220.5592875075076
      }),
      new Costume("ShovelLeft6", "./Stage/costumes/ShovelLeft6.svg", {
        x: 358.09760079435875,
        y: 220.5592875075076
      }),
      new Costume("ShovelLeft7", "./Stage/costumes/ShovelLeft7.svg", {
        x: 358.09760079435875,
        y: 220.55928750750758
      }),
      new Costume("ShovelLeft8", "./Stage/costumes/ShovelLeft8.svg", {
        x: 358.09760079435875,
        y: 220.55928750750755
      }),
      new Costume("ShovelLeft9", "./Stage/costumes/ShovelLeft9.svg", {
        x: 358.09760079435875,
        y: 220.55928750750752
      }),
      new Costume("ShovelLeft10", "./Stage/costumes/ShovelLeft10.svg", {
        x: 358.09760079435875,
        y: 220.5592875075075
      }),
      new Costume("ShovelLeft11", "./Stage/costumes/ShovelLeft11.svg", {
        x: 358.09760079435875,
        y: 220.55928750750746
      }),
      new Costume("ShovelLeft12", "./Stage/costumes/ShovelLeft12.svg", {
        x: 358.09760079435875,
        y: 220.55928750750743
      }),
      new Costume("ShovelLeft13", "./Stage/costumes/ShovelLeft13.svg", {
        x: 358.09760079435875,
        y: 220.5592875075074
      }),
      new Costume("ShovelLeft14", "./Stage/costumes/ShovelLeft14.svg", {
        x: 358.09760079435875,
        y: 220.5592875075074
      }),
      new Costume("backdrop25", "./Stage/costumes/backdrop25.svg", {
        x: 307.306305,
        y: 206.705685
      }),
      new Costume("backdrop42", "./Stage/costumes/backdrop42.svg", {
        x: 307.306305,
        y: 206.70568500000002
      }),
      new Costume("backdrop59", "./Stage/costumes/backdrop59.svg", {
        x: 307.306305,
        y: 206.70568500000002
      }),
      new Costume("backdrop60", "./Stage/costumes/backdrop60.svg", {
        x: 307.306305,
        y: 206.70567500000004
      }),
      new Costume("backdrop61", "./Stage/costumes/backdrop61.svg", {
        x: 307.306305,
        y: 206.70566500000004
      }),
      new Costume("backdrop62", "./Stage/costumes/backdrop62.svg", {
        x: 307.306305,
        y: 206.70565500000006
      }),
      new Costume("backdrop63", "./Stage/costumes/backdrop63.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop64", "./Stage/costumes/backdrop64.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop65", "./Stage/costumes/backdrop65.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop66", "./Stage/costumes/backdrop66.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop67", "./Stage/costumes/backdrop67.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop68", "./Stage/costumes/backdrop68.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop69", "./Stage/costumes/backdrop69.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop70", "./Stage/costumes/backdrop70.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop71", "./Stage/costumes/backdrop71.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop72", "./Stage/costumes/backdrop72.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop73", "./Stage/costumes/backdrop73.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop74", "./Stage/costumes/backdrop74.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop75", "./Stage/costumes/backdrop75.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop76", "./Stage/costumes/backdrop76.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop77", "./Stage/costumes/backdrop77.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop78", "./Stage/costumes/backdrop78.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop79", "./Stage/costumes/backdrop79.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop80", "./Stage/costumes/backdrop80.svg", {
        x: 307.306305,
        y: 206.70564500000006
      }),
      new Costume("backdrop81", "./Stage/costumes/backdrop81.svg", {
        x: 307.306305,
        y: 206.70562500000003
      }),
      new Costume("backdrop82", "./Stage/costumes/backdrop82.svg", {
        x: 263.76275499999997,
        y: 206.705625
      }),
      new Costume("backdrop83", "./Stage/costumes/backdrop83.svg", {
        x: 470.5,
        y: 206.705615
      }),
      new Costume("backdrop84", "./Stage/costumes/backdrop84.svg", {
        x: 281.499965,
        y: 206.705605
      }),
      new Costume("backdrop85", "./Stage/costumes/backdrop85.svg", {
        x: 281.499965,
        y: 206.705595
      }),
      new Costume("backdrop86", "./Stage/costumes/backdrop86.svg", {
        x: 281.499965,
        y: 206.70559500000002
      }),
      new Costume("backdrop87", "./Stage/costumes/backdrop87.svg", {
        x: 281.499965,
        y: 206.70555500000006
      }),
      new Costume("backdrop88", "./Stage/costumes/backdrop88.svg", {
        x: 281.499965,
        y: 206.70555500000006
      }),
      new Costume("backdrop91", "./Stage/costumes/backdrop91.svg", {
        x: 281.499965,
        y: 206.70555500000003
      }),
      new Costume("backdrop89", "./Stage/costumes/backdrop89.svg", {
        x: 281.499965,
        y: 206.70554500000006
      }),
      new Costume("backdrop92", "./Stage/costumes/backdrop92.svg", {
        x: 281.499965,
        y: 206.7055450000001
      }),
      new Costume("backdrop93", "./Stage/costumes/backdrop93.svg", {
        x: 281.499965,
        y: 206.70554500000011
      }),
      new Costume("backdrop94", "./Stage/costumes/backdrop94.svg", {
        x: 281.499965,
        y: 206.70554500000017
      }),
      new Costume("backdrop90", "./Stage/costumes/backdrop90.svg", {
        x: 281.499965,
        y: 206.70556500000004
      }),
      new Costume("backdrop95", "./Stage/costumes/backdrop95.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop96", "./Stage/costumes/backdrop96.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop97", "./Stage/costumes/backdrop97.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop98", "./Stage/costumes/backdrop98.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop99", "./Stage/costumes/backdrop99.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop100", "./Stage/costumes/backdrop100.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop101", "./Stage/costumes/backdrop101.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop102", "./Stage/costumes/backdrop102.svg", {
        x: 285.54651,
        y: 195.33026
      }),
      new Costume("backdrop103", "./Stage/costumes/backdrop103.svg", {
        x: 281.499965,
        y: 206.705555
      }),
      new Costume("backdrop104", "./Stage/costumes/backdrop104.svg", {
        x: 281.499965,
        y: 206.70554500000003
      }),
      new Costume("backdrop105", "./Stage/costumes/backdrop105.svg", {
        x: 281.499965,
        y: 206.70553500000003
      }),
      new Costume("backdrop106", "./Stage/costumes/backdrop106.svg", {
        x: 281.499965,
        y: 206.70552500000002
      }),
      new Costume("backdrop107", "./Stage/costumes/backdrop107.svg", {
        x: 281.499965,
        y: 206.70551500000005
      }),
      new Costume("backdrop108", "./Stage/costumes/backdrop108.svg", {
        x: 281.499965,
        y: 206.70551500000008
      }),
      new Costume("backdrop109", "./Stage/costumes/backdrop109.svg", {
        x: 281.499965,
        y: 206.705515
      }),
      new Costume("backdrop110", "./Stage/costumes/backdrop110.svg", {
        x: 281.499965,
        y: 206.70550500000002
      }),
      new Costume("backdrop111", "./Stage/costumes/backdrop111.svg", {
        x: 281.499965,
        y: 206.705505
      }),
      new Costume("backdrop112", "./Stage/costumes/backdrop112.svg", {
        x: 281.499965,
        y: 206.705495
      }),
      new Costume("backdrop114", "./Stage/costumes/backdrop114.svg", {
        x: 281.499965,
        y: 206.705485
      }),
      new Costume("backdrop113", "./Stage/costumes/backdrop113.svg", {
        x: 281.499965,
        y: 206.705485
      }),
      new Costume("backdrop115", "./Stage/costumes/backdrop115.svg", {
        x: 281.499965,
        y: 206.70545500000003
      }),
      new Costume("backdrop116", "./Stage/costumes/backdrop116.svg", {
        x: 281.499965,
        y: 206.70545500000003
      }),
      new Costume("backdrop117", "./Stage/costumes/backdrop117.svg", {
        x: 281.499965,
        y: 206.70544500000003
      }),
      new Costume("backdrop118", "./Stage/costumes/backdrop118.svg", {
        x: 281.499965,
        y: 206.705415
      }),
      new Costume("backdrop119", "./Stage/costumes/backdrop119.svg", {
        x: 281.499965,
        y: 206.70540499999998
      }),
      new Costume("backdrop120", "./Stage/costumes/backdrop120.svg", {
        x: 281.499965,
        y: 206.70539499999998
      }),
      new Costume("backdrop121", "./Stage/costumes/backdrop121.svg", {
        x: 281.499965,
        y: 206.705395
      }),
      new Costume("backdrop122", "./Stage/costumes/backdrop122.svg", {
        x: 281.499965,
        y: 206.70538500000004
      }),
      new Costume("backdrop123", "./Stage/costumes/backdrop123.svg", {
        x: 281.499965,
        y: 206.70537500000003
      }),
      new Costume("backdrop124", "./Stage/costumes/backdrop124.svg", {
        x: 281.499965,
        y: 206.70536500000006
      }),
      new Costume("backdrop125", "./Stage/costumes/backdrop125.svg", {
        x: 281.499965,
        y: 206.70536500000009
      }),
      new Costume("backdrop126", "./Stage/costumes/backdrop126.svg", {
        x: 281.499965,
        y: 206.7053650000001
      }),
      new Costume("backdrop127", "./Stage/costumes/backdrop127.svg", {
        x: 281.499965,
        y: 206.70536500000017
      }),
      new Costume("backdrop128", "./Stage/costumes/backdrop128.svg", {
        x: 281.499965,
        y: 206.7053650000002
      }),
      new Costume("backdrop129", "./Stage/costumes/backdrop129.svg", {
        x: 281.499965,
        y: 206.70536500000023
      }),
      new Costume("backdrop130", "./Stage/costumes/backdrop130.svg", {
        x: 281.499965,
        y: 206.70536500000028
      }),
      new Costume("backdrop131", "./Stage/costumes/backdrop131.svg", {
        x: 281.499965,
        y: 206.705355
      }),
      new Costume("backdrop132", "./Stage/costumes/backdrop132.svg", {
        x: 281.499965,
        y: 206.70533500000005
      }),
      new Costume("backdrop133", "./Stage/costumes/backdrop133.svg", {
        x: 281.499965,
        y: 206.70534500000002
      }),
      new Costume("backdrop134", "./Stage/costumes/backdrop134.svg", {
        x: 281.499965,
        y: 206.70533500000005
      }),
      new Costume("backdrop135", "./Stage/costumes/backdrop135.svg", {
        x: 281.499965,
        y: 206.70532500000004
      }),
      new Costume("backdrop136", "./Stage/costumes/backdrop136.svg", {
        x: 281.499965,
        y: 206.70532500000004
      }),
      new Costume("backdrop137", "./Stage/costumes/backdrop137.svg", {
        x: 281.499965,
        y: 206.70532500000004
      }),
      new Costume("backdrop138", "./Stage/costumes/backdrop138.svg", {
        x: 281.499965,
        y: 206.70532500000004
      }),
      new Costume("backdrop139", "./Stage/costumes/backdrop139.svg", {
        x: 281.499965,
        y: 206.705325
      }),
      new Costume("backdrop140", "./Stage/costumes/backdrop140.svg", {
        x: 281.499965,
        y: 206.705315
      }),
      new Costume("backdrop141", "./Stage/costumes/backdrop141.svg", {
        x: 281.499965,
        y: 206.705305
      }),
      new Costume("backdrop142", "./Stage/costumes/backdrop142.svg", {
        x: 281.499965,
        y: 206.70529500000004
      }),
      new Costume("backdrop143", "./Stage/costumes/backdrop143.svg", {
        x: 281.499965,
        y: 206.70528500000003
      }),
      new Costume("backdrop144", "./Stage/costumes/backdrop144.svg", {
        x: 281.499965,
        y: 206.70527500000006
      }),
      new Costume("backdrop145", "./Stage/costumes/backdrop145.svg", {
        x: 281.499965,
        y: 206.70527500000009
      }),
      new Costume("backdrop146", "./Stage/costumes/backdrop146.svg", {
        x: 281.499965,
        y: 206.7052750000001
      }),
      new Costume("backdrop147", "./Stage/costumes/backdrop147.svg", {
        x: 270.5,
        y: 202
      }),
      new Costume("backdrop148", "./Stage/costumes/backdrop148.svg", {
        x: 270.5,
        y: 202
      }),
      new Costume("backdrop149", "./Stage/costumes/backdrop149.svg", {
        x: 270.5,
        y: 202
      }),
      new Costume("backdrop150", "./Stage/costumes/backdrop150.svg", {
        x: 270.5,
        y: 202
      }),
      new Costume("backdrop152", "./Stage/costumes/backdrop152.svg", {
        x: 274.5,
        y: 183.99999999999994
      }),
      new Costume(
        "IMG_20211213_120731",
        "./Stage/costumes/IMG_20211213_120731.svg",
        { x: 86, y: 135 }
      ),
      new Costume("IMG_20211213_2", "./Stage/costumes/IMG_20211213_2.svg", {
        x: 0,
        y: 0
      }),
      new Costume("background2", "./Stage/costumes/background2.svg", {
        x: 278.5165165165165,
        y: 186.38658365810085
      }),
      new Costume("background", "./Stage/costumes/background.svg", {
        x: 267.5165165165165,
        y: 179.4984984984985
      }),
      new Costume("backdrop153", "./Stage/costumes/backdrop153.svg", {
        x: 373.5795422334684,
        y: 246.87298262023825
      }),
      new Costume("backdrop154", "./Stage/costumes/backdrop154.svg", {
        x: 373.57954207049977,
        y: 246.87298749188272
      }),
      new Costume("backdrop155", "./Stage/costumes/backdrop155.svg", {
        x: 373.57954174456256,
        y: 246.8729872351717
      }),
      new Costume("backdrop156", "./Stage/costumes/backdrop156.svg", {
        x: 373.57954158159396,
        y: 246.8729821068162
      }),
      new Costume("backdrop157", "./Stage/costumes/backdrop157.svg", {
        x: 373.57954141862535,
        y: 246.8729869784607
      }),
      new Costume("backdrop158", "./Stage/costumes/backdrop158.svg", {
        x: 373.57954141862535,
        y: 246.8729869784607
      }),
      new Costume("backdrop159", "./Stage/costumes/backdrop159.svg", {
        x: 373.57954125565675,
        y: 246.8729818501052
      }),
      new Costume("backdrop160", "./Stage/costumes/backdrop160.svg", {
        x: 373.57954125565675,
        y: 246.8729818501052
      }),
      new Costume("backdrop161", "./Stage/costumes/backdrop161.svg", {
        x: 373.57954125565675,
        y: 246.8729818501052
      }),
      new Costume("backdrop162", "./Stage/costumes/backdrop162.svg", {
        x: 373.57954125565675,
        y: 246.8729818501052
      }),
      new Costume("backdrop163", "./Stage/costumes/backdrop163.svg", {
        x: 373.57954125565675,
        y: 246.8729818501052
      }),
      new Costume("backdrop164", "./Stage/costumes/backdrop164.svg", {
        x: 373.57954125565675,
        y: 246.8729818501052
      }),
      new Costume("backdrop165", "./Stage/costumes/backdrop165.svg", {
        x: 373.57954092971954,
        y: 246.87298159339417
      }),
      new Costume("backdrop166", "./Stage/costumes/backdrop166.svg", {
        x: 373.57954076675094,
        y: 246.87298646503865
      }),
      new Costume("backdrop167", "./Stage/costumes/backdrop167.svg", {
        x: 373.57954076675094,
        y: 246.87298646503865
      }),
      new Costume("backdrop168", "./Stage/costumes/backdrop168.svg", {
        x: 373.57954076675094,
        y: 246.87298646503865
      }),
      new Costume("backdrop169", "./Stage/costumes/backdrop169.svg", {
        x: 373.57954092971954,
        y: 246.87298159339417
      }),
      new Costume("backdrop170", "./Stage/costumes/backdrop170.svg", {
        x: 373.57954076675094,
        y: 246.87298646503865
      }),
      new Costume("backdrop171", "./Stage/costumes/backdrop171.svg", {
        x: 373.57954076675094,
        y: 246.87298646503865
      }),
      new Costume("backdrop172", "./Stage/costumes/backdrop172.svg", {
        x: 373.57954060378233,
        y: 246.87298133668315
      }),
      new Costume("backdrop173", "./Stage/costumes/backdrop173.svg", {
        x: 373.57954044081373,
        y: 246.87298620832763
      }),
      new Costume(
        "warning black screen",
        "./Stage/costumes/warning black screen.svg",
        { x: 297.5, y: 213.99999999999994 }
      ),
      new Costume("backdrop151", "./Stage/costumes/backdrop151.svg", {
        x: 281.0420021621622,
        y: 311.9149229968839
      }),
      new Costume("backdrop174", "./Stage/costumes/backdrop174.svg", {
        x: 281.0420021621622,
        y: 311.9149229968839
      }),
      new Costume("backdrop175", "./Stage/costumes/backdrop175.svg", {
        x: 281.0420021621622,
        y: 311.9149279968839
      }),
      new Costume("backdrop176", "./Stage/costumes/backdrop176.svg", {
        x: 281.04200000000003,
        y: 311.914925
      }),
      new Costume("backdrop177", "./Stage/costumes/backdrop177.svg", {
        x: 281.04200000000003,
        y: 311.91492999999997
      }),
      new Costume("backdrop178", "./Stage/costumes/backdrop178.svg", {
        x: 281.04200000000003,
        y: 311.914925
      }),
      new Costume("backdrop179", "./Stage/costumes/backdrop179.svg", {
        x: 281.04200000000003,
        y: 311.91492999999997
      }),
      new Costume("backdrop180", "./Stage/costumes/backdrop180.svg", {
        x: 281.04200000000003,
        y: 311.914925
      }),
      new Costume("backdrop181", "./Stage/costumes/backdrop181.svg", {
        x: 281.04200000000003,
        y: 311.91492999999997
      }),
      new Costume("backdrop182", "./Stage/costumes/backdrop182.svg", {
        x: 281.04200000000003,
        y: 311.914925
      }),
      new Costume("backdrop183", "./Stage/costumes/backdrop183.svg", {
        x: 281.04200000000003,
        y: 311.914925
      }),
      new Costume("backdrop184", "./Stage/costumes/backdrop184.svg", {
        x: 281.04200000000003,
        y: 311.91492999999997
      }),
      new Costume("backdrop185", "./Stage/costumes/backdrop185.svg", {
        x: 277.375325,
        y: 311.914935
      }),
      new Costume("backdrop186", "./Stage/costumes/backdrop186.svg", {
        x: 277.375325,
        y: 311.91493
      }),
      new Costume("backdrop187", "./Stage/costumes/backdrop187.svg", {
        x: 277.375325,
        y: 311.914935
      }),
      new Costume("backdrop188", "./Stage/costumes/backdrop188.svg", {
        x: 277.375325,
        y: 311.91493
      }),
      new Costume("backdrop189", "./Stage/costumes/backdrop189.svg", {
        x: 277.375325,
        y: 311.914935
      }),
      new Costume("backdrop190", "./Stage/costumes/backdrop190.svg", {
        x: 277.375325,
        y: 311.91493
      }),
      new Costume("backdrop191", "./Stage/costumes/backdrop191.svg", {
        x: 318.5,
        y: 246.62882750834837
      }),
      new Costume("backdrop192", "./Stage/costumes/backdrop192.svg", {
        x: 318.5,
        y: 234.99999750834837
      }),
      new Costume("backdrop193", "./Stage/costumes/backdrop193.svg", {
        x: 318.5,
        y: 234.99999750834837
      }),
      new Costume("backdrop194", "./Stage/costumes/backdrop194.svg", {
        x: 318.5,
        y: 234.99999750834837
      }),
      new Costume("backdrop195", "./Stage/costumes/backdrop195.svg", {
        x: 318.5,
        y: 234.99999750834837
      }),
      new Costume("backdrop196", "./Stage/costumes/backdrop196.svg", {
        x: 318.5,
        y: 234.99999750834837
      }),
      new Costume("backdrop197", "./Stage/costumes/backdrop197.svg", {
        x: 318.5,
        y: 234.99999750834837
      }),
      new Costume("backdrop198", "./Stage/costumes/backdrop198.svg", {
        x: 318.5,
        y: 235.49999750834837
      }),
      new Costume("backdrop199", "./Stage/costumes/backdrop199.svg", {
        x: 318.5,
        y: 235.49999750834837
      }),
      new Costume("backdrop200", "./Stage/costumes/backdrop200.svg", {
        x: 318.5,
        y: 235.49999750834837
      }),
      new Costume("backdrop201", "./Stage/costumes/backdrop201.svg", {
        x: 318.5,
        y: 235.49999750834837
      }),
      new Costume("backdrop202", "./Stage/costumes/backdrop202.svg", {
        x: 318.5,
        y: 235.74999750834837
      }),
      new Costume("backdrop203", "./Stage/costumes/backdrop203.svg", {
        x: 318.5,
        y: 235.75
      }),
      new Costume("backdrop204", "./Stage/costumes/backdrop204.svg", {
        x: 318.5,
        y: 235.75
      }),
      new Costume("backdrop205", "./Stage/costumes/backdrop205.svg", {
        x: 318.5,
        y: 235.75
      }),
      new Costume("backdrop206", "./Stage/costumes/backdrop206.svg", {
        x: 318.8333333333333,
        y: 235.75
      }),
      new Costume("backdrop207", "./Stage/costumes/backdrop207.svg", {
        x: 318.8333333333333,
        y: 235.75
      }),
      new Costume("backdrop208", "./Stage/costumes/backdrop208.svg", {
        x: 530.0863651141228,
        y: 235.75
      }),
      new Costume("backdrop209", "./Stage/costumes/backdrop209.svg", {
        x: 530.0863650557312,
        y: 235.75
      }),
      new Costume("backdrop210", "./Stage/costumes/backdrop210.svg", {
        x: 556,
        y: 234.24849849849855
      }),
      new Costume("backdrop211", "./Stage/costumes/backdrop211.svg", {
        x: 481,
        y: 234.24849849849855
      }),
      new Costume("backdrop212", "./Stage/costumes/backdrop212.svg", {
        x: 410,
        y: 234.24849849849855
      }),
      new Costume("backdrop213", "./Stage/costumes/backdrop213.svg", {
        x: 337,
        y: 234.24849849849855
      }),
      new Costume("backdrop214", "./Stage/costumes/backdrop214.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop215", "./Stage/costumes/backdrop215.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop216", "./Stage/costumes/backdrop216.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop217", "./Stage/costumes/backdrop217.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop218", "./Stage/costumes/backdrop218.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop219", "./Stage/costumes/backdrop219.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop220", "./Stage/costumes/backdrop220.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop221", "./Stage/costumes/backdrop221.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop222", "./Stage/costumes/backdrop222.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop223", "./Stage/costumes/backdrop223.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop224", "./Stage/costumes/backdrop224.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop225", "./Stage/costumes/backdrop225.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop226", "./Stage/costumes/backdrop226.svg", {
        x: 282.98647,
        y: 234.24849849849855
      }),
      new Costume("backdrop227", "./Stage/costumes/backdrop227.svg", {
        x: 282.98647,
        y: 234.24849849849855
      })
    ];

    this.sounds = [
      new Sound("Prison-Blues", "./Stage/sounds/Prison-Blues.wav"),
      new Sound("Locked-Up", "./Stage/sounds/Locked-Up.mp3"),
      new Sound(
        "samsung-notification-sound-bass-boosted",
        "./Stage/sounds/samsung-notification-sound-bass-boosted.wav"
      ),
      new Sound("Alien Creak1", "./Stage/sounds/Alien Creak1.wav"),
      new Sound("Clang", "./Stage/sounds/Clang.wav"),
      new Sound("Alien Creak2", "./Stage/sounds/Alien Creak2.wav"),
      new Sound("Hey", "./Stage/sounds/Hey.wav"),
      new Sound("Bossa Nova", "./Stage/sounds/Bossa Nova.wav"),
      new Sound("recording1", "./Stage/sounds/recording1.wav"),
      new Sound("recording2", "./Stage/sounds/recording2.wav"),
      new Sound("recording3", "./Stage/sounds/recording3.wav"),
      new Sound(
        "Blizzard Sound Effect2",
        "./Stage/sounds/Blizzard Sound Effect2.wav"
      ),
      new Sound("Fail4", "./Stage/sounds/Fail4.wav"),
      new Sound("recording4", "./Stage/sounds/recording4.wav"),
      new Sound(
        "Coin Sound Effects (1)2",
        "./Stage/sounds/Coin Sound Effects (1)2.wav"
      ),
      new Sound(
        "Blizzard Sound Effect3",
        "./Stage/sounds/Blizzard Sound Effect3.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Start" }, this.whenIReceiveStart),
      new Trigger(Trigger.BROADCAST, { name: "buzzz" }, this.whenIReceiveBuzzz),
      new Trigger(Trigger.BROADCAST, { name: "music" }, this.whenIReceiveMusic),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shovel" },
        this.whenIReceiveShovel
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "sHOVEL DOWN" },
        this.whenIReceiveShovelDown
      ),
      new Trigger(Trigger.BROADCAST, { name: "dizzy" }, this.whenIReceiveDizzy),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked5),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked6),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked7),
      new Trigger(Trigger.BROADCAST, { name: "Drill" }, this.whenIReceiveDrill),
      new Trigger(
        Trigger.BROADCAST,
        { name: "drilling" },
        this.whenIReceiveDrilling
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked8),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Shovel Left" },
        this.whenIReceiveShovelLeft
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "begin hide choice" },
        this.whenIReceiveBeginHideChoice
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "animation" },
        this.whenIReceiveAnimation
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "jail out animation" },
        this.whenIReceiveJailOutAnimation
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "jail out animation" },
        this.whenIReceiveJailOutAnimation2
      ),
      new Trigger(Trigger.BROADCAST, { name: "wind" }, this.whenIReceiveWind)
    ];

    this.vars.playing = 1;
    this.vars.stapbuzz = 1;
    this.vars.currentChoice = "shovel2";
    this.vars.choiceChosen = 1;
    this.vars.fail = 0;
    this.vars.OfFails = 0;
    this.vars.differentMusic = 1;
    this.vars.arrowid = 2;
    this.vars.hidechoice = "ventHide";
    this.vars.characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 abcdefghijklmnopqrstuvwxyz.,:?!@#/+()-_='";
    this.vars.sayx = -148;
    this.vars.sayy = 7;
    this.vars.string = "Who cares! Let's get on before it leaves!";
    this.vars.stapwind = 1;
    this.vars.data = [];
  }

  *whenGreenFlagClicked() {
    this.costume = "backdrop1";
    if (this.vars.OfFails == 0 || this.vars.OfFails == 2) {
      this.costume = "warning black screen";
      yield* this.broadcastAndWait("warning message");
      this.costume = "backdrop1";
      this.broadcast("Menu");
      yield* this.broadcastAndWait("black fade");
      this.costume = "backdrop1";
    }
    this.vars.stapbuzz = 0;
    this.audioEffects.volume = 100;
    while (true) {
      if (this.vars.playing == 0) {
        yield* this.playSoundUntilDone("Prison-Blues");
      } else {
        return;
      }
      yield;
    }
  }

  *whenIReceiveStart() {
    for (let i = 0; i < 10; i++) {
      this.audioEffects.volume += -10;
      yield;
    }
    this.stopAllSounds();
    this.audioEffects.volume = 100;
    this.broadcast("music");
    yield* this.wait(1);
    this.broadcast("buzzz");
    yield* this.playSoundUntilDone("samsung-notification-sound-bass-boosted");
    this.vars.stapbuzz = 1;
    for (let i = 0; i < 14; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.05);
      yield;
    }
    yield* this.wait(0.5);
    for (let i = 0; i < 5; i++) {
      this.costumeNumber += 1;
      yield* this.wait(0.05);
      yield;
    }
    this.audioEffects.volume = 20;
    this.broadcast("Choice1");
  }

  *whenIReceiveBuzzz() {
    while (!(this.vars.stapbuzz == 1)) {
      this.costume = "backdrop2";
      yield;
    }
    this.costume = "backdrop3";
  }

  *whenIReceiveMusic() {
    yield* this.wait(0.01);
    while (true) {
      if (this.vars.differentMusic == 0) {
        if (this.vars.fail == 0) {
          yield* this.playSoundUntilDone("Locked-Up");
        } else {
          null;
        }
      }
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    this.vars.currentChoice = 0;
  }

  *animateUntilFrameWithADelayOfSeconds(frame, time) {
    while (!(this.costumeNumber == frame)) {
      this.costumeNumber += 1;
      yield* this.wait(time);
      if (this.keyPressed("space") || this.keyPressed("" + "enter" + 0)) {
        this.costume = frame;
      }
      yield;
    }
  }

  *whenIReceiveShovel() {
    this.audioEffects.volume = 100;
    yield* this.animateUntilFrameWithADelayOfSeconds(42, 0.05);
    yield* this.wait(0.5);
    this.broadcast("ShovelChoice");
  }

  *whenIReceiveShovelDown() {
    yield* this.animateUntilFrameWithADelayOfSeconds(56, 0.05);
    this.audioEffects.volume = 99;
    this.broadcast("dizzy");
    yield* this.playSoundUntilDone("Clang");
    this.audioEffects.volume = 100;
  }

  *whenIReceiveDizzy() {
    while (!(this.audioEffects.volume == 100)) {
      this.costume = "backdrop57";
      yield* this.wait(0.05);
      this.costume = "backdrop58";
      yield;
    }
    if (this.vars.OfFails == 0) {
      this.vars.OfFails = 1;
    } else {
      if (this.vars.OfFails == 1) {
        this.vars.OfFails = 2;
      }
    }
    this.vars.fail = "shoveldown";
    this.broadcast("fail");
  }

  *whenGreenFlagClicked3() {
    yield* this.wait(0.1);
    this.vars.fail = 0;
  }

  *whenGreenFlagClicked4() {
    if (this.vars.OfFails == 1) {
      if (this.vars.fail == "shoveldown") {
        this.vars.choiceChosen = 0;
        this.vars.playing = 1;
        this.costume = "shovel choice";
        this.broadcast("music");
        this.broadcast("ShovelChoice");
      } else {
        if (this.vars.fail == "drill") {
          this.vars.choiceChosen = 0;
          this.vars.playing = 1;
          this.costume = "backdrop22";
          this.broadcast("music");
          this.broadcast("Choice1");
        } else {
          if (this.vars.fail == "fallFromJael") {
            this.vars.choiceChosen = 0;
            this.vars.playing = 1;
            this.costume = "backdrop87";
            this.vars.differentMusic = 1;
            yield* this.startSound("Bossa Nova");
            this.vars.hidechoice = 0;
            this.broadcast("begin hide choice");
          } else {
            null;
          }
        }
      }
    } else {
      this.vars.playing = 0;
    }
  }

  *whenGreenFlagClicked5() {
    this.vars.differentMusic = 0;
  }

  *whenGreenFlagClicked6() {
    if (this.vars.OfFails == 2) {
      this.vars.OfFails = 0;
    }
  }

  *whenGreenFlagClicked7() {}

  *whenIReceiveDrill() {
    this.costume = "Drill";
    yield* this.animateUntilFrameWithADelayOfSeconds(75, 0.1);
    yield* this.startSound("Clang");
    yield* this.animateUntilFrameWithADelayOfSeconds(78, 0.1);
    yield* this.wait(1);
    this.broadcast("drilling");
    for (let i = 0; i < 2; i++) {
      yield* this.playSoundUntilDone("Clang");
      yield;
    }
    this.costume = "Drill23";
    yield* this.playSoundUntilDone("Hey");
    if (this.vars.OfFails == 0) {
      this.vars.OfFails = 1;
    } else {
      if (this.vars.OfFails == 1) {
        this.vars.OfFails = 2;
      }
    }
    this.vars.fail = "drill";
    this.broadcast("fail");
  }

  *whenIReceiveDrilling() {
    for (let i = 0; i < 5; i++) {
      this.costume = "next backdrop";
      yield* this.wait(0.1);
      this.costume = "previous backdrop";
      yield* this.wait(0.1);
      yield;
    }
  }

  *whenGreenFlagClicked8() {
    if (/* no username */ "" == "ArianThe3rd" || /* no username */ "" == 0) {
      null;
    }
  }

  *whenIReceiveShovelLeft() {
    this.costume = "ShovelLeft";
    yield* this.wait(0.5);
    yield* this.animateUntilFrameWithADelayOfSeconds(85, 0.05);
    yield* this.startSound("Clang");
    yield* this.animateUntilFrameWithADelayOfSeconds(93, 0.01);
    yield* this.wait(0.8);
    yield* this.animateUntilFrameWithADelayOfSeconds(116, 0.05);
    yield* this.startSound("Clang");
    yield* this.wait(1);
    this.vars.differentMusic = 1;
    this.stopAllSounds();
    yield* this.startSound("Bossa Nova");
    yield* this.animateUntilFrameWithADelayOfSeconds(118, 0.1);
    yield* this.wait(0.8);
    yield* this.animateUntilFrameWithADelayOfSeconds(119, 0.3);
    for (let i = 0; i < 3; i++) {
      this.costume = "backdrop82";
      yield* this.wait(0.2);
      this.costume = "backdrop83";
      yield* this.wait(0.2);
      yield;
    }
    this.costume = "backdrop84";
    yield* this.wait(0.1);
    this.costumeNumber += 1;
    this.restartTimer();
    this.stopAllSounds();
    yield* this.startSound("recording1");
    yield* this.startSound("Bossa Nova");
    while (
      !(
        this.timer > 6.83 ||
        this.keyPressed("space") || this.keyPressed("" + "enter" + 0)
      )
    ) {
      yield;
    }
    this.costumeNumber += 1;
    this.stopAllSounds();
    this.restartTimer();
    yield* this.startSound("recording2");
    yield* this.startSound("Bossa Nova");
    while (
      !(
        this.timer > 7 ||
        this.keyPressed("space") || this.keyPressed("" + "enter" + 0)
      )
    ) {
      yield;
    }
    this.vars.hidechoice = 0;
    this.broadcast("begin hide choice");
  }

  *whenIReceiveBeginHideChoice() {
    this.broadcast("hide choice");
    while (!!(this.vars.hidechoice == 0)) {
      this.costume = "backdrop87";
      yield* this.wait(0.5);
      this.costumeNumber += 1;
      yield* this.wait(0.5);
      yield;
    }
    if (this.vars.hidechoice == "emergencyExit") {
      this.stopAllSounds();
      this.costume = "backdrop91";
      yield* this.animateUntilFrameWithADelayOfSeconds(131, 0.1);
      yield* this.startSound("recording3");
      yield* this.wait(2);
      this.costumeNumber += 1;
      yield* this.wait(2);
      yield* this.startSound("Blizzard Sound Effect2");
      this.costume = "backdrop95";
      yield* this.animateUntilFrameWithADelayOfSeconds(140, 0.5);
      this.stopAllSounds();
      if (this.vars.OfFails == 0) {
        this.vars.OfFails = 1;
      } else {
        if (this.vars.OfFails == 1) {
          this.vars.OfFails = 2;
        }
      }
      this.vars.fail = "fallFromJael";
      this.broadcast("fail");
    } else {
      this.costume = "backdrop103";
      yield* this.wait(0.2);
      yield* this.animateUntilFrameWithADelayOfSeconds(146, 0.05);
      for (let i = 0; i < 7; i++) {
        yield* this.startSound("recording4");
        this.costume = "backdrop109";
        yield* this.wait(0.1);
        this.costume = "backdrop110";
        yield* this.wait(0.1);
        yield;
      }
      this.costume = "backdrop111";
      yield* this.animateUntilFrameWithADelayOfSeconds(169, 0.05);
      yield* this.startSound("Fail4");
      yield* this.animateUntilFrameWithADelayOfSeconds(184, 0.05);
      yield* this.wait(2);
      this.stopAllSounds();
      this.costumeNumber += 1;
      yield* this.wait(1);
      this.costumeNumber += 1;
      this.vars.sayx = 92;
      this.vars.sayy = 38;
      this.vars.string = "Dude! What was that for-";
      yield* this.broadcastAndWait("begin say script");
      this.costumeNumber += 1;
      this.vars.sayx = -40;
      this.vars.sayy = 29;
      this.vars.string = "Shhh! You wanna escape don't you?";
      yield* this.broadcastAndWait("begin say script");
      this.costume = "previous backdrop";
      this.vars.sayx = 92;
      this.vars.sayy = 38;
      this.vars.string = "Wait, how did you know?";
      yield* this.broadcastAndWait("begin say script");
      this.costume = "backdrop150";
      this.vars.sayx = -40;
      this.vars.sayy = 29;
      this.vars.string = "Why else would you be rapidly pulling on a vent?";
      yield* this.broadcastAndWait("begin say script");
      this.costume = "backdrop148";
      this.vars.sayx = 92;
      this.vars.sayy = 38;
      this.vars.string = "Oh yeah...";
      yield* this.broadcastAndWait("begin say script");
      this.costume = "backdrop150";
      this.vars.sayx = -40;
      this.vars.sayy = 29;
      this.vars.string = "So, do you want to escape or not?";
      yield* this.broadcastAndWait("begin say script");
      this.costume = "backdrop148";
      this.vars.sayx = 92;
      this.vars.sayy = 38;
      this.vars.string = "Yeah.";
      yield* this.broadcastAndWait("begin say script");
      yield* this.wait(1);
      this.costume = "background2";
      yield* this.wait(1);
      yield* this.playSoundUntilDone("Coin Sound Effects (1)2");
      yield* this.wait(1);
      this.costume = "background";
      this.broadcast("pacman");
    }
  }

  *whenIReceiveAnimation() {
    yield* this.animateUntilFrameWithADelayOfSeconds(213, 0.1);
    this.vars.sayx = -95;
    this.vars.sayy = -19;
    this.vars.string = "Hey I forgot to ask, what is your name?";
    yield* this.broadcastAndWait("begin say script");
    this.costume = "previous backdrop";
    this.vars.sayx = 196;
    this.vars.sayy = -169;
    this.vars.string = "Arvin.";
    yield* this.broadcastAndWait("begin say script");
    this.costumeNumber += 1;
    this.vars.sayx = -95;
    this.vars.sayy = -19;
    this.vars.string = "That's a pretty nice name. Mine's 5had0wL1n3.";
    yield* this.broadcastAndWait("begin say script");
    this.costumeNumber += 1;
    this.vars.sayx = -95;
    this.vars.sayy = -19;
    this.vars.string = "Anyways we're here.";
    yield* this.broadcastAndWait("begin say script");
    this.broadcast("jail out animation");
  }

  *whenIReceiveJailOutAnimation() {}

  *whenIReceiveJailOutAnimation2() {
    this.vars.stapwind = 0;
    this.broadcast("wind");
    this.costume = "backdrop151";
    yield* this.wait(1);
    for (let i = 0; i < 5; i++) {
      this.costume = "backdrop175";
      yield* this.wait(0.1);
      this.costume = "backdrop174";
      yield* this.wait(0.1);
      yield;
    }
    this.costume = "backdrop175";
    yield* this.wait(1);
    yield* this.animateUntilFrameWithADelayOfSeconds(227, 0);
    yield* this.wait(1);
    this.costumeNumber += 1;
    this.vars.sayx = 120;
    this.vars.sayy = -19;
    this.vars.string = "WHAT THE- HOW ARE WE SUPPOSED TO GET OUT?!";
    yield* this.broadcastAndWait("begin say script");
    this.costumeNumber += 1;
    this.vars.sayx = 95;
    this.vars.sayy = -19;
    this.vars.string = "I could probably grapple hook onto that electric wire.";
    yield* this.broadcastAndWait("begin say script");
    this.costumeNumber += 1;
    this.vars.sayx = 120;
    this.vars.sayy = -19;
    this.vars.string = "YOU HAVE A GRAPPLE HOOK?!";
    yield* this.broadcastAndWait("begin say script");
    yield* this.animateUntilFrameWithADelayOfSeconds(233, 0.1);
    yield* this.wait(2);
    yield* this.broadcastAndWait("zipline");
    this.costumeNumber += 1;
    yield* this.animateUntilFrameWithADelayOfSeconds(244, 0.1);
    yield* this.wait(1);
    this.costumeNumber += 1;
    this.vars.sayx = -62;
    this.vars.sayy = 21;
    this.vars.string = "You good?";
    yield* this.broadcastAndWait("begin say script");
    yield* this.animateUntilFrameWithADelayOfSeconds(250, 0.05);
    yield* this.wait(2);
    this.costume = "backdrop208";
    yield* this.wait(0.5);
    this.costumeNumber += 1;
    this.vars.sayx = -148;
    this.vars.sayy = 7;
    this.vars.string =
      "There's a truck png coming our way. Let's hitchhike it to probably get somewhere.";
    yield* this.broadcastAndWait("begin say script");
    yield* this.wait(1);
    this.costumeNumber += 1;
    yield* this.wait(0.2);
    yield* this.animateUntilFrameWithADelayOfSeconds(258, 0.05);
    this.costumeNumber += 1;
    this.vars.sayx = 150;
    this.vars.sayy = 7;
    this.vars.string = "Wait... why did it stop for us?";
    yield* this.broadcastAndWait("begin say script");
    this.costumeNumber += 1;
    this.vars.sayx = -148;
    this.vars.sayy = 7;
    this.vars.string = "Who cares! Let's get on before it leaves!";
    yield* this.broadcastAndWait("begin say script");
    this.costumeNumber += 1;
    yield* this.animateUntilFrameWithADelayOfSeconds(270, 0.1);
    yield* this.wait(1);
    this.broadcast("YOU DID IT");
  }

  *whenIReceiveWind() {
    while (!(this.vars.stapwind == 1)) {
      yield* this.playSoundUntilDone("Blizzard Sound Effect3");
      yield;
    }
  }
}
