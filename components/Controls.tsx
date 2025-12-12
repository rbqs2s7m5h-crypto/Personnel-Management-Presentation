import React from 'react';

interface ControlsProps {
  onNext: () => void;
  onPrev: () => void;
  current: number;
  total: number;
}

const Controls: React.FC<ControlsProps> = ({ onNext, onPrev, current, total }) => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-4">
      <div className="text-sm font-medium text-gray-400 tabular-nums">
        {current + 1} <span className="mx-1 opacity-50">/</span> {total}
      </div>
      <div className="flex bg-white/50 backdrop-blur-sm rounded-full p-1 border border-gray-200 shadow-sm">
        <button 
          onClick={onPrev}
          disabled={current === 0}
          className="p-3 rounded-full hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
          aria-label="Previous Slide"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={onNext}
          disabled={current === total - 1}
          className="p-3 rounded-full hover:bg-white disabled:opacity-30 disabled:cursor-not-allowed transition-all text-gray-700"
          aria-label="Next Slide"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Controls;
