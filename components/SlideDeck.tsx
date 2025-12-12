
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { MAIN_SLIDES } from '../constants';
import { SlideData } from '../types';
import Slide from './Slide';
import Background from './Background';
import SpeakerNotes from './SpeakerNotes';
import Controls from './Controls';

// Updated Sections based on the new 19-slide flow
const SECTIONS = [
  { id: '1', label: 'Intro' },
  { id: '4', label: 'Autonomy' },
  { id: '7', label: 'Safety' },
  { id: '10', label: 'Diversity' },
  { id: '13', label: 'Transparency' },
  { id: 'case-intro', label: 'Cases' },
  { id: '19', label: 'End' },
];

const SlideDeck: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const currentDeck: SlideData[] = MAIN_SLIDES;

  // Navigation functions optimized to be stable (no dependencies on currentSlideIndex)
  const goToNext = useCallback(() => {
    setCurrentSlideIndex(prev => {
        if (prev < currentDeck.length - 1) return prev + 1;
        return prev;
    });
  }, [currentDeck.length]);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex(prev => {
        if (prev > 0) return prev - 1;
        return prev;
    });
  }, []);

  // --- SCROLLJACKING LOGIC ---
  const lastNavTime = useRef(0);
  const NAV_COOLDOWN = 1200; // ms - Cinematic delay

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
        // 1. Check if we are scrolling inside speaker notes
        if ((e.target as HTMLElement).closest('#speaker-notes-content')) return;

        const now = Date.now();
        // 2. Check cooldown to ensure deliberate actions
        if (now - lastNavTime.current < NAV_COOLDOWN) return;

        // 3. Check threshold to avoid accidental trackpad brushes
        if (Math.abs(e.deltaY) < 25) return;

        if (e.deltaY > 0) {
            // Scroll Down -> Next Slide
            setCurrentSlideIndex(prev => {
                if (prev < currentDeck.length - 1) {
                    lastNavTime.current = now;
                    return prev + 1;
                }
                return prev;
            });
        } else {
            // Scroll Up -> Prev Slide
            setCurrentSlideIndex(prev => {
                if (prev > 0) {
                    lastNavTime.current = now;
                    return prev - 1;
                }
                return prev;
            });
        }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentDeck.length]);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((e) => {
        console.error(`Error attempting to enable fullscreen: ${e.message}`);
      });
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const jumpToSection = (slideId: string) => {
    const index = MAIN_SLIDES.findIndex(s => s.id === slideId);
    if (index !== -1) {
      setCurrentSlideIndex(index);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      } else if (e.key === 'Escape') {
         if (document.fullscreenElement) {
             document.exitFullscreen();
             setIsFullscreen(false);
         }
      } else if (e.key === 'f') {
          toggleFullscreen();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Sync fullscreen state listener
  useEffect(() => {
      const handleFsChange = () => {
          setIsFullscreen(!!document.fullscreenElement);
      };
      document.addEventListener('fullscreenchange', handleFsChange);
      return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  const currentSlide = currentDeck[currentSlideIndex];

  // Calculate active section for Route Map
  const getCurrentSectionId = () => {
      // Reverse iterate SECTIONS to find the first one that has an index <= currentSlideIndex
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
          const sectionIndex = MAIN_SLIDES.findIndex(s => s.id === SECTIONS[i].id);
          if (currentSlideIndex >= sectionIndex) {
              return SECTIONS[i].id;
          }
      }
      return SECTIONS[0].id;
  };

  const activeSectionId = getCurrentSectionId();

  // Check if current slide is dark theme (Toyota '16' or Netflix '17')
  const isDarkSlide = ['16', '17'].includes(currentSlide.id);

  return (
    <div className="relative w-full h-screen overflow-hidden text-gray-800 bg-gray-50">
      <Background />
      
      {/* Top Navigation / Route Map */}
      <nav className="absolute top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
          <div className={`
             flex items-center gap-1 backdrop-blur-md px-2 py-1.5 rounded-full border shadow-sm pointer-events-auto transition-all duration-500
             ${isDarkSlide 
                ? 'bg-black/60 border-white/10 hover:bg-black/80' 
                : 'bg-white/30 border-white/40 hover:bg-white/50'
             }
          `}>
              {SECTIONS.map((section) => {
                  const isActive = section.id === activeSectionId;
                  return (
                      <button
                          key={section.id}
                          onClick={() => jumpToSection(section.id)}
                          className={`
                              px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300
                              ${isActive 
                                  ? (isDarkSlide ? 'bg-white/20 text-white shadow-sm scale-105' : 'bg-white shadow-sm text-blue-600 scale-105')
                                  : (isDarkSlide ? 'text-white/50 hover:text-white hover:bg-white/10' : 'text-gray-600 hover:text-gray-900 hover:bg-white/40')
                              }
                          `}
                      >
                          {section.label}
                      </button>
                  );
              })}
          </div>
      </nav>

      {/* Fullscreen Toggle */}
      <button 
        onClick={toggleFullscreen}
        className={`
            absolute top-6 right-6 z-50 w-10 h-10 rounded-full backdrop-blur-md border flex items-center justify-center transition-all shadow-sm group
            ${isDarkSlide 
                ? 'bg-black/40 border-white/10 text-white/70 hover:bg-black/60 hover:text-white' 
                : 'bg-white/30 border-white/40 text-gray-600 hover:bg-white hover:text-blue-600'
            }
        `}
        title="Toggle Fullscreen (f)"
      >
        {isFullscreen ? (
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2-2v3" />
             </svg>
        ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
        )}
      </button>

      {/* Slide Content Area */}
      {/* Removed padding (pt-12 pb-32) so slides can be full screen */}
      <main className="relative z-10 w-full h-full">
         {/* Key prevents React from reusing the component state when switching slides, forcing re-render of animations */}
        <AnimatePresence mode="wait">
          <Slide key={currentSlide.id} data={currentSlide} isActive={true} />
        </AnimatePresence>
      </main>

      {/* Persistent UI */}
      <Controls 
        onNext={goToNext} 
        onPrev={goToPrev} 
        current={currentSlideIndex} 
        total={currentDeck.length} 
      />
      
      <SpeakerNotes notes={currentSlide.speakerNotes} isDark={isDarkSlide} />
      
      {/* Global Progress Bar */}
      <div className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-500 z-50" 
           style={{ width: `${((currentSlideIndex + 1) / currentDeck.length) * 100}%` }} 
      />
    </div>
  );
};

export default SlideDeck;
