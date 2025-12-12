
import React from 'react';
import { SlideData, SlideType } from '../types';
import { SlideVisual } from './Visuals';
import { motion } from 'framer-motion';

interface SlideProps {
  data: SlideData;
  isActive: boolean;
}

const getBrandTheme = (id: string) => {
    switch(id) {
        case '16': // Toyota
            return {
                bg: 'bg-stone-900', // Fallback
                backgroundImage: 'https://tmna.aemassets.toyota.com/is/image/toyota/toyota/vehicles/2026/corollacross/mlp/stacked-accordion/CCH_MY26_0017_V001_desktop.png?fmt=jpg&fit=crop&qlt=90&wid=3840&hei=2880',
                text: 'text-white',
                subtext: 'text-stone-200',
                accent: 'bg-[#EB0A1E]',
                // Brownish box style inspired by Corolla Cross site (rugged/earthy)
                cardBg: 'bg-[#3E3832]/95 backdrop-blur-md border-t-4 border-[#EB0A1E] shadow-2xl', 
                cardText: 'text-stone-100',
                titleColor: 'text-white',
                sectionTitle: 'text-white',
                bulletTitle: 'text-white', // Clean white for titles on dark brown
                gradient: 'from-[#EB0A1E] to-[#3E3832]'
            };
        case '17': // Netflix
            return {
                bg: 'bg-black',
                text: 'text-white',
                subtext: 'text-gray-400',
                accent: 'bg-[#E50914]', // Netflix Red
                cardBg: 'bg-neutral-900/80 border-neutral-800 shadow-lg backdrop-blur-sm',
                cardText: 'text-gray-300',
                titleColor: 'text-[#E50914]',
                sectionTitle: 'text-[#E50914]',
                bulletTitle: 'text-[#E50914]',
                gradient: 'from-[#E50914] to-black'
            };
        case '18': // Airbnb
            return {
                bg: 'bg-[#FFF5F7]', // Very light pink
                text: 'text-gray-900',
                subtext: 'text-gray-600',
                accent: 'bg-[#FF5A5F]', // Airbnb Rausch
                cardBg: 'bg-white border-pink-100 shadow-md',
                cardText: 'text-gray-800',
                titleColor: 'text-[#FF5A5F]',
                sectionTitle: 'text-[#FF5A5F]',
                bulletTitle: 'text-[#FF5A5F]',
                gradient: 'from-[#FF5A5F] to-orange-400'
            };
        default:
            return null;
    }
}

const Slide: React.FC<SlideProps> = ({ data, isActive }) => {
  // Common animation variants for "Antigravity" exit/entry
  const slideVariants = {
    initial: { 
        opacity: 0, 
        y: 20, 
        scale: 0.98,
        filter: 'blur(8px)' 
    },
    animate: { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        filter: 'blur(0px)' 
    },
    exit: { 
        opacity: 0, 
        y: -20, 
        scale: 0.98,
        filter: 'blur(8px)' 
    }
  };

  const slideTransition = {
    duration: 0.6,
    ease: [0.22, 1, 0.36, 1] // Cubic bezier for smooth, cinematic feel
  };

  if (!isActive) return null;

  const brandTheme = getBrandTheme(data.id);

  // Title Slide Layout
  if (data.type === SlideType.TITLE) {
    const isEndSlide = data.id === '19';
    const isFirstSlide = data.id === '1';
    const isSectionIntro = data.id === 'case-intro';
    const useGradient = isEndSlide || isFirstSlide || isSectionIntro;
    
    return (
      <motion.div 
        className="absolute inset-0 w-full h-full flex items-center justify-center z-10"
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={slideTransition}
      >
        <div className="absolute inset-0 z-0">
             <SlideVisual slideId={data.id} />
        </div>
        
        <div className="relative z-20 w-full h-full max-w-screen-2xl mx-auto px-8 flex flex-col items-center justify-center text-center">
             <div className={useGradient ? '' : 'mix-blend-multiply'}>
                 {isFirstSlide && (
                     <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="mb-6 text-sm md:text-base font-bold text-blue-600 tracking-[0.2em] uppercase"
                     >
                        Personnel Management
                     </motion.div>
                 )}

                 <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1.2, ease: "easeOut" }}
                 >
                    <h1 className={`
                        text-6xl md:text-8xl font-black mb-6 tracking-tight leading-tight
                        ${useGradient ? (isSectionIntro ? 'text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-rose-500 to-red-800 pb-2' : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-500 to-yellow-500 pb-2') : 'text-gray-900'}
                    `}>
                        {data.title}
                    </h1>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    transition={{ delay: 0.6, duration: 1 }}
                >
                    <h2 className="text-2xl md:text-3xl text-gray-600 font-light tracking-widest uppercase">
                        {data.subtitle}
                    </h2>
                    {/* Decorative Line (Only if not end slide or strictly needed) */}
                    {!isEndSlide && (
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: 100 }} 
                            transition={{ delay: 1, duration: 1 }}
                            className="mt-8 mx-auto h-1 bg-gray-900" 
                        />
                    )}
                </motion.div>
                
                {/* Special Case Intro Companies List */}
                {isSectionIntro && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="mt-12 flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center text-gray-800"
                    >
                        {['Toyota', 'Netflix', 'Airbnb'].map((name, i) => (
                             <div key={i} className="flex flex-col items-center">
                                 <span className="text-xl md:text-2xl font-bold tracking-tight">{name}</span>
                             </div>
                        ))}
                    </motion.div>
                )}

                {/* Infographic Blocks for Title if any (Normal) */}
                {!isSectionIntro && data.bullets && data.bullets.length > 0 && (
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                         {data.bullets.map((b, i) => {
                             const parts = b.split(':');
                             const title = parts[0];
                             const text = parts[1] || '';
                             return (
                                 <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.5 + (i * 0.1) }}
                                    className="bg-white/60 backdrop-blur-md p-4 rounded-lg border border-white/40 shadow-sm text-left"
                                 >
                                     <div className="font-bold text-blue-600 text-xs uppercase tracking-wider mb-1">{title}</div>
                                     <div className="text-gray-700 text-sm leading-tight">{text}</div>
                                 </motion.div>
                             )
                         })}
                    </div>
                )}
            </div>

            {/* Group Members for First Slide - Moved to Bottom */}
            {isFirstSlide && (
                 <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-0 right-0 z-20 text-sm text-gray-500 font-medium px-4"
                 >
                    <div className="uppercase tracking-widest text-xs mb-3 opacity-60">Presented By</div>
                    <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-600">
                        <span>Afonso Carvalho</span>
                        <span className="text-gray-300">•</span>
                        <span>Beatriz Fraga</span>
                        <span className="text-gray-300">•</span>
                        <span>Catharina Solt</span>
                        <span className="text-gray-300">•</span>
                        <span>Eva Sourd</span>
                        <span className="text-gray-300">•</span>
                        <span>Hugo Blanquet</span>
                    </div>
                 </motion.div>
             )}
        </div>
      </motion.div>
    );
  }

  // Standard / Case Study Content Layout
  return (
    <motion.div 
        className="absolute inset-0 w-full h-full"
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={slideTransition}
    >
      
      {/* Brand Specific Full Screen Background Override */}
      {brandTheme && (
        <div className={`absolute inset-0 -z-10 ${brandTheme.bg} overflow-hidden`}>
          {/* Specific Image Background for Toyota */}
          {brandTheme.backgroundImage && (
              <>
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
                    style={{ backgroundImage: `url(${brandTheme.backgroundImage})` }}
                ></div>
                {/* Dark Overlay for readability */}
                <div className="absolute inset-0 bg-stone-900/60 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-black/40"></div>
              </>
          )}

          {/* Custom Netflix Curtain Effect */}
          {data.id === '17' && (
             <>
                 {/* Top Center Glow (The "Curtain Light") - Persistent Breathing */}
                 <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: [0.3, 0.5, 0.3] }} 
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[120vw] h-[100vh] pointer-events-none"
                    style={{ 
                        background: 'radial-gradient(circle, rgba(170,16,21,0.9) 0%, rgba(0,0,0,0) 70%)',
                        filter: 'blur(100px)'
                    }}
                 />
                 
                 {/* Subtle Vertical Striations/Folds - Gentle swaying ambiance */}
                 <div className="absolute inset-0 flex justify-between opacity-30 pointer-events-none mix-blend-overlay">
                     {[...Array(15)].map((_, i) => (
                         <motion.div 
                             key={i} 
                             animate={{ opacity: [0.1, 0.3, 0.1], scaleY: [1, 1.05, 1] }}
                             transition={{ 
                                 duration: 6 + Math.random() * 4, 
                                 repeat: Infinity, 
                                 delay: Math.random() * 5,
                                 ease: "easeInOut" 
                             }}
                             className="w-16 h-full bg-gradient-to-b from-transparent via-[#b81d24] to-transparent blur-2xl" 
                         />
                     ))}
                 </div>

                 {/* Bottom Shadow to ground content */}
                 <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black via-black/90 to-transparent"></div>
                 
                 {/* Subtle Animated Particles for depth */}
                 <div className="absolute inset-0 overflow-hidden">
                     {[...Array(5)].map((_, i) => (
                         <motion.div
                            key={i}
                            className="absolute bg-[#E50914] rounded-full blur-3xl opacity-10"
                            style={{
                                width: Math.random() * 300 + 50,
                                height: Math.random() * 300 + 50,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -50, 0],
                                scale: [1, 1.1, 1],
                                opacity: [0.05, 0.12, 0.05]
                            }}
                            transition={{
                                duration: 15 + Math.random() * 10,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                         />
                     ))}
                 </div>
             </>
          )}
        </div>
      )}

      {/* Content Wrapper - Applies constraints and padding here instead of main container */}
      <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-6 md:px-12 pt-20 pb-24 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full h-full items-center">
            
            {/* Left Column: Text Content */}
            <div className="flex flex-col justify-center h-full">
                <div className="mb-8">
                    {data.sectionTitle && (
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                            className={`uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-2 ${brandTheme ? brandTheme.sectionTitle : 'text-blue-600'}`}
                        >
                            <span className={`w-8 h-[2px] ${brandTheme ? brandTheme.accent : 'bg-blue-600'}`}></span>
                            {data.sectionTitle}
                        </motion.div>
                    )}
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                        className={`text-4xl md:text-5xl font-bold leading-tight mb-4 ${brandTheme ? brandTheme.text : 'text-gray-900'}`}
                    >
                        {data.title}
                    </motion.h1>

                    {data.subtitle && (
                        <motion.h3 
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}
                            className={`text-xl md:text-2xl font-light ${brandTheme ? brandTheme.subtext : 'text-gray-500'}`}
                        >
                            {data.subtitle}
                        </motion.h3>
                    )}
                </div>

                {/* Infographic Cards Container */}
                {data.bullets && data.bullets.length > 0 && (
                    <div className="flex flex-col gap-4">
                    {data.bullets.map((bullet, idx) => {
                        // Primitive Markdown-like parsing for bold text before colon
                        const parts = bullet.split(':');
                        const hasTitle = parts.length > 1;
                        const title = hasTitle ? parts[0] : '';
                        const content = hasTitle ? parts.slice(1).join(':') : bullet;

                        return (
                            <motion.div 
                                key={idx} 
                                initial={{ opacity: 0, x: -20, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{ delay: 0.4 + (idx * 0.15), duration: 0.6, ease: "easeOut" }}
                                className={`p-5 rounded-xl relative overflow-hidden ${brandTheme ? brandTheme.cardBg : 'bg-white/60 backdrop-blur-md border border-white/50 shadow-md'}`}
                            >
                                {/* Decorative left accent - Conditional style if theme doesn't handle it with border */}
                                {!brandTheme?.cardBg.includes('border-t-4') && (
                                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${brandTheme ? `bg-gradient-to-b ${brandTheme.gradient}` : 'bg-gradient-to-b from-blue-400 to-purple-400'}`}></div>
                                )}
                                
                                <div className="flex flex-col gap-1">
                                    {hasTitle && (
                                        <span className={`text-sm font-bold uppercase tracking-wide ${brandTheme ? brandTheme.bulletTitle : 'text-blue-700'}`}>
                                            {title}
                                        </span>
                                    )}
                                    <span className={`leading-relaxed ${hasTitle ? 'text-lg font-medium' : 'text-xl font-light'} ${brandTheme ? brandTheme.cardText : 'text-gray-700'}`}>
                                        {content}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                    </div>
                )}
            </div>

            {/* Right Column: Visual Module */}
            <div className="h-full w-full flex items-center justify-center p-4">
                <motion.div 
                    className="w-full h-full max-h-[800px] relative"
                    initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Remove default white glass background for branded slides to let the brand background shine, or style it differently */}
                    {!brandTheme && (
                        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-[2rem] -z-10 transform rotate-2 scale-105 opacity-50 border border-white/30"></div>
                    )}
                    
                    <SlideVisual slideId={data.id} />
                </motion.div>
            </div>

        </div>
      </div>
    </motion.div>
  );
};

export default Slide;
