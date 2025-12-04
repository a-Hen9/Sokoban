import { LevelConfig, AIDifficulty } from './types';

// Curated levels for each difficulty
export const LEVEL_SETS: Record<AIDifficulty, LevelConfig[]> = {
  [AIDifficulty.Easy]: [
    {
      description: "1-1",
      map: [
        "######",
        "#@$ .#",
        "######"
      ]
    },
    {
      description: "1-2",
      map: [
        "  #####",
        "###   #",
        "#.@$  #",
        "###   #",
        "  #####"
      ]
    },
    {
      description: "1-3",
      map: [
        "#####",
        "#@  #",
        "# $$#",
        "##  #",
        "# ..#",
        "#####"
      ]
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
  ]
};

// Initial Load
export const INITIAL_LEVEL = LEVEL_SETS[AIDifficulty.Easy][0];
