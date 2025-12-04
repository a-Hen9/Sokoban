import { LevelConfig, AIDifficulty } from './types';

// Curated levels for each difficulty
export const LEVEL_SETS: Record<AIDifficulty, LevelConfig[]> = {
  [AIDifficulty.Easy]: [
    {
<<<<<<< HEAD
      description: "1-1",
      map: [
        "######",
        "#@$ .#",
        "######"
      ]
    },
    {
      description: "1-2",
=======
      description: "First Steps",
      map: [
        "#####",
        "#@$.#",
        "#####"
      ]
    },
    {
      description: "Simple Push",
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
      map: [
        "  #####",
        "###   #",
        "#.@$  #",
<<<<<<< HEAD
        "###   #",
=======
        "###  .#",
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
        "  #####"
      ]
    },
    {
<<<<<<< HEAD
      description: "1-3",
=======
      description: "The Corridor",
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
      map: [
        "#####",
        "#@  #",
        "# $$#",
        "##  #",
        "# ..#",
        "#####"
      ]
<<<<<<< HEAD
    },
    {
      description: "1-4",
      map: [
        "#######",
        "#     #",
        "#  $  #",
        "# .@. #",
        "#  $  #",
        "#     #",
        "#######"
      ]
    }
  ],
  [AIDifficulty.Medium]: [

    {
      description: "2-1",
      map: [
        "  ####  ",
        "  #  #  ",
        "  #$ #  ",
        "###  ###",
        "# .  . #",
        "#  $@  #",
        "#      #",
        "########"
      ]
    },
    {
      description: "2-2",
      map: [
        "########",
        "#    . #",
        "#  ### #",
        "# $@   #",
        "#    $ #",
        "# .    #",
        "########"
      ]
    },
    {
      description: "2-3",
      map: [
        "########",
        "#.   .#",
        "# $ $ #",
        "#  @  #",
        "# $ $ #",
        "#.   .#",
        "########"
      ]
    },
    {
      description: "2-4",
      map: [
        "#######",
        "#.$  .#",
        "# $@$ #",
        "#.  $.#",
        "#######",
      ]
    },
  ],
  [AIDifficulty.Hard]: [
    {
      description: "3-1",
=======
    }
  ],
  [AIDifficulty.Medium]: [
    {
      description: "Classic 1",
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
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
<<<<<<< HEAD
      description: "3-2",
      map: [
        "  ####   ",
        "##   ####",
        "#     $ #",
        "# #  #$ #",
        "# . .#@ #",
        "#########"
      ]
    },
    {
      description: "3-3",
      map: [
        "##########",
        "#.   #   #",
        "# $  # . #",
        "#  $ @ $ #",
        "# .  # $ #",
        "#   #   .#",
        "##########"
      ]
    },
    {
      description: "3-4",
      map: [
        "#######",
        "###.$ ###",
        "#  @$  .#",
        "###.$ ###",
        "#######",
      ]
    },
    {
      description: "3-5",
      map: [
        "########",
        "#     .#",
        "# $ #  #",
        "### $ ##",
        "# .$@ #",
        "#  $  #",
        "# . . #",
        "#     #",
        "#######",
      ]
    },
=======
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
>>>>>>> 1765b452e88d2f83ddfe94a31bd20c98fccdfa74
  ]
};

// Initial Load
export const INITIAL_LEVEL = LEVEL_SETS[AIDifficulty.Easy][0];
