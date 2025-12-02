import { LevelConfig, AIDifficulty } from './types';

// Curated levels for each difficulty
export const LEVEL_SETS: Record<AIDifficulty, LevelConfig[]> = {
  [AIDifficulty.Easy]: [
    {
      description: "First Steps",
      map: [
        "#####",
        "#@$.#",
        "#####"
      ]
    },
    {
      description: "Simple Push",
      map: [
        "  #####",
        "###   #",
        "#.@$  #",
        "###  .#",
        "  #####"
      ]
    },
    {
      description: "The Corridor",
      map: [
        "#####",
        "#@  #",
        "# $$#",
        "##  #",
        "# ..#",
        "#####"
      ]
    }
  ],
  [AIDifficulty.Medium]: [
    {
      description: "Classic 1",
      map: [
        "  ##### ",
        "###   # ",
        "#.@$  # ",
        "### $.# ",
        "#.##$ # ",
        "# # . ##",
        "#$ *$$.#",
        "#   .  #",
        "########"
      ]
    },
    {
      description: "Boxy",
      map: [
        "  ####  ",
        "  #  #  ",
        "  #$ #  ",
        "###  ###",
        "# .  . #",
        "#  $@  #",
        "#  $$  #",
        "########"
      ]
    },
    {
      description: "The T",
      map: [
        "#######",
        "#  .  #",
        "#  $  #",
        "# .@. #",
        "#  $  #",
        "#  .  #",
        "#######"
      ]
    }
  ],
  [AIDifficulty.Hard]: [
     {
        description: "Microban Style",
        map: [
            "####  ",
            "# .#  ",
            "#  ###",
            "#*@  #",
            "#  $ #",
            "#  ###",
            "####  "
        ]
     },
     {
        description: "Four Corners",
        map: [
            "#######",
            "#     #",
            "# .$. #",
            "# $@$ #",
            "# .$. #",
            "#     #",
            "#######"
        ]
     },
     {
        description: "Warehouse",
        map: [
            "  ####   ",
            "###  ####",
            "#     $ #",
            "# #  #$ #",
            "# . .#@ #",
            "#########"
        ]
    }
  ]
};

// Initial Load
export const INITIAL_LEVEL = LEVEL_SETS[AIDifficulty.Easy][0];
