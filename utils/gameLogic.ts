import { TileType, Direction, Position, GameState } from '../types';

export const parseLevel = (levelMap: string[]): GameState => {
  const grid: string[][] = [];
  let playerPos: Position = { x: 0, y: 0 };

  // Normalize width to avoid jagged arrays
  const maxWidth = Math.max(...levelMap.map(row => row.length));

  levelMap.forEach((rowStr, y) => {
    const row = rowStr.padEnd(maxWidth, ' ').split('');
    const parsedRow: string[] = [];
    row.forEach((char, x) => {
      if (char === TileType.Player || char === TileType.PlayerOnTarget) {
        playerPos = { x, y };
      }
      parsedRow.push(char);
    });
    grid.push(parsedRow);
  });

  return {
    grid,
    playerPos,
    moves: 0,
    level: 1,
    isWon: false,
  };
};

export const checkWin = (grid: string[][]): boolean => {
  for (const row of grid) {
    for (const cell of row) {
      // If there is a Box ($) not on a target, game is not won.
      // A Box on Target is represented by '*'
      if (cell === TileType.Box) {
        return false;
      }
    }
  }
  return true;
};

export const movePlayer = (currentState: GameState, direction: Direction): GameState | null => {
  if (currentState.isWon) return null;

  const { grid, playerPos, moves } = currentState;
  const dx = direction === Direction.Left ? -1 : direction === Direction.Right ? 1 : 0;
  const dy = direction === Direction.Up ? -1 : direction === Direction.Down ? 1 : 0;

  const newX = playerPos.x + dx;
  const newY = playerPos.y + dy;

  // Boundary check
  if (newY < 0 || newY >= grid.length || newX < 0 || newX >= grid[0].length) return null;

  const targetCell = grid[newY][newX];
  const nextX = newX + dx;
  const nextY = newY + dy;

  // Create a deep copy of the grid to modify
  const newGrid = grid.map(row => [...row]);

  // Logic to determine what happens on the target cell
  let canMove = false;

  if (targetCell === TileType.Wall) {
    return null; // Blocked
  }

  // Moving into empty space or target
  if (targetCell === TileType.Floor || targetCell === TileType.Target) {
    canMove = true;
  }
  // Pushing a box
  else if (targetCell === TileType.Box || targetCell === TileType.BoxOnTarget) {
    // Check space behind box
    if (nextY < 0 || nextY >= grid.length || nextX < 0 || nextX >= grid[0].length) return null;
    
    const beyondBox = grid[nextY][nextX];
    
    if (beyondBox === TileType.Floor || beyondBox === TileType.Target) {
      canMove = true;
      
      // Move Box
      // Remove box from current position (newY, newX)
      const isBoxOnTarget = targetCell === TileType.BoxOnTarget;
      // If it was on target, it leaves a target behind. If it was floor, it leaves floor.
      // HOWEVER, the player is moving INTO this cell, handled below.
      
      // Place box in new position (nextY, nextX)
      if (beyondBox === TileType.Target) {
        newGrid[nextY][nextX] = TileType.BoxOnTarget;
      } else {
        newGrid[nextY][nextX] = TileType.Box;
      }
    } else {
      return null; // Box blocked by wall or another box
    }
  }

  if (canMove) {
    // 1. Remove player from old position
    const currentCell = newGrid[playerPos.y][playerPos.x];
    if (currentCell === TileType.PlayerOnTarget) {
      newGrid[playerPos.y][playerPos.x] = TileType.Target;
    } else {
      newGrid[playerPos.y][playerPos.x] = TileType.Floor;
    }

    // 2. Place player in new position
    // We need to know if the new position was originally a Target or BoxOnTarget
    // We can infer this from the original `targetCell` value.
    const isTargetCell = targetCell === TileType.Target || targetCell === TileType.BoxOnTarget || targetCell === TileType.PlayerOnTarget; // PlayerOnTarget unlikely unless bug
    
    if (isTargetCell) {
       newGrid[newY][newX] = TileType.PlayerOnTarget;
    } else {
       newGrid[newY][newX] = TileType.Player;
    }

    const won = checkWin(newGrid);

    return {
      ...currentState,
      grid: newGrid,
      playerPos: { x: newX, y: newY },
      moves: moves + 1,
      isWon: won
    };
  }

  return null;
};
