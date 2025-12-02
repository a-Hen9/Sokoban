import React from 'react';
import { Undo2, RefreshCw, Gamepad2, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { AIDifficulty, Direction } from '../types';

interface ControlsProps {
  onUndo: () => void;
  onReset: () => void;
  onChangeDifficulty: (diff: AIDifficulty) => void;
  onMove: (dir: Direction) => void;
  onToggleDocs: () => void;
  moves: number;
  levelName: string;
}

const Controls: React.FC<ControlsProps> = ({ 
  onUndo, onReset, onChangeDifficulty, onMove, onToggleDocs, moves, levelName 
}) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-md">
      
      {/* Header Info Card */}
      <div className="flex justify-between items-center bg-slate-800/80 backdrop-blur-sm p-5 rounded-2xl border border-slate-700/50 shadow-xl">
        <div className="flex flex-col">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Current Level</span>
           <span className="text-white font-semibold text-lg tracking-tight">{levelName}</span>
        </div>
        <div className="flex flex-col items-end">
           <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-1">Moves Taken</span>
           <span className="text-2xl text-indigo-400 font-bold font-mono">{moves.toString().padStart(3, '0')}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-4">
        <button 
          onClick={onUndo} 
          className="group flex flex-col items-center justify-center py-4 bg-slate-800/50 hover:bg-slate-700 rounded-xl border border-slate-700/50 hover:border-indigo-500/30 transition-all active:scale-95"
        >
          <Undo2 size={22} className="mb-2 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span className="text-xs font-semibold text-slate-300">Undo</span>
        </button>
        <button 
          onClick={onReset} 
          className="group flex flex-col items-center justify-center py-4 bg-slate-800/50 hover:bg-slate-700 rounded-xl border border-slate-700/50 hover:border-amber-500/30 transition-all active:scale-95"
        >
          <RefreshCw size={22} className="mb-2 text-amber-400 group-hover:rotate-180 transition-transform duration-500" />
          <span className="text-xs font-semibold text-slate-300">Reset</span>
        </button>
         <button 
          onClick={onToggleDocs} 
          className="group flex flex-col items-center justify-center py-4 bg-slate-800/50 hover:bg-slate-700 rounded-xl border border-slate-700/50 hover:border-slate-500/30 transition-all active:scale-95"
        >
          <Info size={22} className="mb-2 text-slate-400 group-hover:text-white transition-colors" />
          <span className="text-xs font-semibold text-slate-300">Rules</span>
        </button>
      </div>

      {/* Difficulty Selector */}
      <div className="bg-slate-800/40 p-5 rounded-2xl border border-slate-700/50">
        <div className="flex items-center gap-2 mb-4 text-slate-300">
          <Gamepad2 size={18} />
          <span className="text-sm font-bold uppercase tracking-wider">Select Difficulty</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {Object.values(AIDifficulty).map((diff) => {
             let colorClass = "hover:bg-slate-700 hover:text-white border-slate-700";
             if (diff === AIDifficulty.Easy) colorClass = "hover:bg-emerald-500/20 hover:text-emerald-300 hover:border-emerald-500/50";
             if (diff === AIDifficulty.Medium) colorClass = "hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-500/50";
             if (diff === AIDifficulty.Hard) colorClass = "hover:bg-rose-500/20 hover:text-rose-300 hover:border-rose-500/50";

             return (
              <button
                key={diff}
                onClick={() => onChangeDifficulty(diff)}
                className={`py-2.5 px-2 text-xs font-semibold text-slate-400 bg-slate-900/50 rounded-lg border border-transparent transition-all active:scale-95 ${colorClass}`}
              >
                {diff}
              </button>
             )
          })}
        </div>
      </div>

      {/* Mobile Controls */}
      <div className="flex flex-col items-center justify-center gap-2 mt-2 md:hidden">
        <button onClick={() => onMove(Direction.Up)} className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-2xl active:bg-slate-700 shadow-lg border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all text-slate-200">
          <ChevronUp size={28} />
        </button>
        <div className="flex gap-4">
          <button onClick={() => onMove(Direction.Left)} className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-2xl active:bg-slate-700 shadow-lg border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all text-slate-200">
            <ChevronLeft size={28} />
          </button>
          <button onClick={() => onMove(Direction.Down)} className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-2xl active:bg-slate-700 shadow-lg border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all text-slate-200">
            <ChevronDown size={28} />
          </button>
          <button onClick={() => onMove(Direction.Right)} className="w-14 h-14 flex items-center justify-center bg-slate-800 rounded-2xl active:bg-slate-700 shadow-lg border-b-4 border-slate-900 active:border-b-0 active:translate-y-1 transition-all text-slate-200">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default Controls;