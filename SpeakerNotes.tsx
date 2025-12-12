
import React, { useState } from 'react';

interface SpeakerNotesProps {
  notes: string;
  isDark?: boolean;
}

const SpeakerNotes: React.FC<SpeakerNotesProps> = ({ notes, isDark = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-0 right-0 left-0 z-50 flex flex-col items-center pointer-events-none">
      <div className={`
        pointer-events-auto backdrop-blur-md border-t 
        shadow-lg transition-all duration-300 ease-in-out
        w-full max-w-3xl rounded-t-xl overflow-hidden
        ${isOpen ? 'h-48' : 'h-10'}
        ${isDark 
            ? 'bg-neutral-900/95 border-neutral-700' 
            : 'bg-white/90 border-gray-200'
        }
      `}>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full h-10 flex items-center justify-center transition-colors cursor-pointer text-xs font-bold tracking-widest uppercase
            ${isDark 
                ? 'bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200' 
                : 'bg-gray-50 hover:bg-gray-100 text-gray-600 hover:text-gray-900'
            }
          `}
        >
          {isOpen ? 'Hide Speaker Notes' : 'Show Speaker Notes'}
        </button>
        <div 
          id="speaker-notes-content"
          className={`
            p-6 overflow-y-auto h-full leading-relaxed font-medium
            ${isDark ? 'text-gray-300' : 'text-gray-600'}
        `}>
          {notes}
        </div>
      </div>
    </div>
  );
};

export default SpeakerNotes;
