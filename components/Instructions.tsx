import React from 'react';
import { X, Package, Ghost, Flag } from 'lucide-react';

interface InstructionsProps {
  isOpen: boolean;
  onClose: () => void;
}

const Instructions: React.FC<InstructionsProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        <div className="sticky top-0 right-0 z-10 flex justify-end p-4 bg-gradient-to-b from-slate-900 via-slate-900 to-transparent">
             <button 
                onClick={onClose}
                className="p-2 bg-slate-800 rounded-full hover:bg-slate-700 text-slate-400 hover:text-white transition"
            >
                <X size={20} />
            </button>
        </div>
        
        <div className="px-8 pb-8 space-y-8 -mt-8">
          <header>
            <h1 className="text-3xl font-bold text-white mb-2">How to Play</h1>
            <p className="text-slate-400">Master the puzzle mechanics.</p>
          </header>

          <section>
            <div className="flex gap-4 mb-4">
                 <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"><Ghost className="text-white w-6 h-6"/></div>
                     <span className="text-xs text-slate-400">You</span>
                 </div>
                  <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg"><Package className="text-white w-6 h-6"/></div>
                     <span className="text-xs text-slate-400">Box</span>
                 </div>
                 <div className="flex flex-col items-center gap-2">
                     <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700"><div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div></div>
                     <span className="text-xs text-slate-400">Target</span>
                 </div>
            </div>
            <p className="text-slate-300 leading-relaxed text-sm">
              You are the ghost. Push the orange boxes onto the red targets. When a box is on a target, it will turn green.
            </p>
          </section>

          <section className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/50">
            <h3 className="text-sm font-bold text-white mb-3 uppercase tracking-wide">Key Rules</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex gap-3">
                 <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500"></div>
                 <span>You can only <strong>push</strong> boxes, never pull them.</span>
              </li>
              <li className="flex gap-3">
                 <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500"></div>
                 <span>Push only <strong>one box</strong> at a time.</span>
              </li>
               <li className="flex gap-3">
                 <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 mt-1.5 rounded-full bg-indigo-500"></div>
                 <span>Avoid pushing boxes into corners.</span>
              </li>
            </ul>
          </section>
          
          <button 
            onClick={onClose}
            className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-900/20"
          >
            Start Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;