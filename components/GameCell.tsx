import React from 'react';
import { TileType } from '../types';
import { Package, Ghost, Flag } from 'lucide-react';

interface GameCellProps {
  type: string;
}

const GameCell: React.FC<GameCellProps> = ({ type }) => {
  // Common size and transition classes
  // Removed borders, using rounded shapes and background colors instead
  const baseClasses = "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center transition-all duration-300 rounded-md sm:rounded-lg";

  switch (type) {
    case TileType.Wall:
      return (
        <div className={`${baseClasses} bg-slate-700 shadow-sm`}>
           {/* Subtle highlight to give a bit of 3D feel */}
           <div className="w-1/2 h-1/2 bg-slate-600/30 rounded-full blur-[1px]"></div>
        </div>
      );
    case TileType.Floor:
      return <div className={`${baseClasses} bg-slate-800/50`}></div>;
    case TileType.Target:
      return (
        <div className={`${baseClasses} bg-slate-800/50`}>
          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-rose-500/50 rounded-full shadow-[0_0_8px_rgba(244,63,94,0.6)] animate-pulse"></div>
        </div>
      );
    case TileType.Box:
      return (
        <div className={`${baseClasses} bg-gradient-to-br from-amber-400 to-orange-600 shadow-lg scale-90 sm:scale-95`}>
          <Package className="w-1/2 h-1/2 text-white/90" strokeWidth={2.5} />
        </div>
      );
    case TileType.BoxOnTarget:
      return (
        <div className={`${baseClasses} bg-gradient-to-br from-emerald-400 to-teal-600 shadow-[0_0_15px_rgba(52,211,153,0.4)] scale-90 sm:scale-95`}>
           <Flag className="w-1/2 h-1/2 text-white/90" strokeWidth={2.5} />
        </div>
      );
    case TileType.Player:
      return (
        <div className={`${baseClasses} relative z-10`}>
          <div className="absolute inset-1 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center">
             <Ghost className="w-3/5 h-3/5 text-white" />
          </div>
        </div>
      );
    case TileType.PlayerOnTarget:
      return (
        <div className={`${baseClasses} relative z-10`}>
          {/* Show target underneath roughly */}
          <div className="absolute inset-0 flex items-center justify-center opacity-30">
             <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
          </div>
          <div className="absolute inset-1 bg-indigo-500 rounded-full shadow-lg flex items-center justify-center ring-2 ring-rose-400/50">
             <Ghost className="w-3/5 h-3/5 text-white" />
          </div>
        </div>
      );
    default:
      return <div className={baseClasses}></div>;
  }
};

export default GameCell;