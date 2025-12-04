export enum TileType {
  Wall = '#',
  Floor = ' ',
  Target = '.',
  Box = '$',
  BoxOnTarget = '*',
  Player = '@',
  PlayerOnTarget = '+',
}

export enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

export interface Position {
  x: number;
  y: number;
}

export interface GameState {
  grid: string[][];
  playerPos: Position;
  moves: number;
  level: number;
  isWon: boolean;
}

export interface LevelConfig {
  map: string[];
  description?: string;
}

export enum AIDifficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}
