import React, { useState, useEffect, useCallback } from 'react';
import { GameState, Direction, LevelConfig, AIDifficulty } from './types';
import { parseLevel, movePlayer } from './utils/gameLogic';
import { LEVEL_SETS, INITIAL_LEVEL } from './constants';
import GameCell from './components/GameCell';
import Controls from './components/Controls';
import Instructions from './components/Instructions';
import { Trophy } from 'lucide-react';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [history, setHistory] = useState<GameState[]>([]);
  const [levelConfig, setLevelConfig] = useState<LevelConfig>(INITIAL_LEVEL);
  const [showDocs, setShowDocs] = useState(false);

  // Initialize Game
  useEffect(() => {
    startLevel(levelConfig);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelConfig]);

  const startLevel = (config: LevelConfig) => {
    const initialState = parseLevel(config.map);
    setGameState(initialState);
    setHistory([]);
  };

  // Movement Logic
  const handleMove = useCallback((direction: Direction) => {
    if (!gameState || gameState.isWon) return;

    const nextState = movePlayer(gameState, direction);
    if (nextState) {
      setHistory(prev => [...prev, gameState]);
      setGameState(nextState);
    }
  }, [gameState]);

  // Keyboard Listeners
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          handleMove(Direction.Up);
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          handleMove(Direction.Down);
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          handleMove(Direction.Left);
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          handleMove(Direction.Right);
          break;
        case 'z':
          if (e.ctrlKey || e.metaKey) handleUndo();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleMove]);

  const handleUndo = () => {
    if (history.length === 0) return;
    const previousState = history[history.length - 1];
    setGameState(previousState);
    setHistory(prev => prev.slice(0, -1));
  };

  const handleReset = () => {
    startLevel(levelConfig);
  };

  const handleChangeDifficulty = (difficulty: AIDifficulty) => {
    const levels = LEVEL_SETS[difficulty];
    // Pick a random level from the set
    const randomLevel = levels[Math.floor(Math.random() * levels.length)];
    setLevelConfig(randomLevel);
  };

  if (!gameState) return <div className="min-h-screen flex items-center justify-center text-slate-400 font-medium">Loading...</div>;

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 md:p-12 gap-10 md:gap-16">
      
      <Instructions isOpen={showDocs} onClose={() => setShowDocs(false)} />

      {/* Left Panel: Game Board */}
      <div className="flex flex-col items-center z-10">
        <div className="mb-8 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-2">
                Sokoban
            </h1>
            <p className="text-slate-400 font-medium">The warehouse puzzle.</p>
        </div>

        <div className="relative p-3 bg-slate-900 rounded-2xl border border-slate-800 shadow-2xl">
           {/* Grid Rendering - Added gap-1 for tile effect */}
           <div 
             className="grid gap-1 bg-slate-900 rounded-xl overflow-hidden"
             style={{ 
               gridTemplateColumns: `repeat(${gameState.grid[0].length}, min-content)` 
             }}
           >
             {gameState.grid.map((row, y) => (
               row.map((cellType, x) => (
                 <GameCell key={`${x}-${y}`} type={cellType} />
               ))
             ))}
           </div>

           {/* Victory Overlay */}
           {gameState.isWon && (
             <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm flex flex-col items-center justify-center rounded-2xl animate-in fade-in zoom-in duration-300 z-20">
                <div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                  <Trophy size={40} className="text-yellow-400 drop-shadow-lg" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">Solved!</h2>
                <p className="text-slate-400 mb-6">Completed in <span className="text-indigo-400 font-bold">{gameState.moves}</span> moves</p>
                <div className="flex flex-col gap-3 w-48">
                  <button 
                    onClick={() => handleChangeDifficulty(AIDifficulty.Medium)}
                    className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-900/30"
                  >
                    Next Level
                  </button>
                  <button 
                    onClick={handleReset}
                    className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl border border-slate-700 transition"
                  >
                    Replay
                  </button>
                </div>
             </div>
           )}
        </div>
      </div>

      {/* Right Panel: Controls */}
      <div className="flex flex-col items-center md:items-start space-y-4">
        <Controls 
          onUndo={handleUndo}
          onReset={handleReset}
          onChangeDifficulty={handleChangeDifficulty}
          onMove={handleMove}
          onToggleDocs={() => setShowDocs(true)}
          moves={gameState.moves}
          levelName={levelConfig.description || "Unknown Level"}
        />
        
        <div className="text-xs text-slate-500 font-medium max-w-xs text-center md:text-left mt-4 opacity-50">
            <p>Made with React & Tailwind</p>
        </div>
      </div>
    </div>
  );
};

export default App;