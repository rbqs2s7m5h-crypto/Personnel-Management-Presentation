
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DonutChart, TrendChart, RadarChart } from './Charts';

// --- VISUAL COMPONENTS ---

// SLIDE 1: Title
const TitleVisual = () => (
    <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">
        <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="none">
            <motion.path 
                d="M-100,300 Q400,0 900,300" 
                stroke="url(#grad1)" 
                strokeWidth="2" 
                fill="none"
                animate={{ d: ["M-100,300 Q400,100 900,300", "M-100,300 Q400,500 900,300", "M-100,300 Q400,100 900,300"] }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.path 
                d="M-100,400 Q400,600 900,400" 
                stroke="url(#grad2)" 
                strokeWidth="2" 
                fill="none"
                animate={{ d: ["M-100,400 Q400,200 900,400", "M-100,400 Q400,800 900,400", "M-100,400 Q400,200 900,400"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity={0} />
                    <stop offset="50%" stopColor="#60A5FA" stopOpacity={1} />
                    <stop offset="100%" stopColor="#60A5FA" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#A78BFA" stopOpacity={0} />
                    <stop offset="50%" stopColor="#A78BFA" stopOpacity={1} />
                    <stop offset="100%" stopColor="#A78BFA" stopOpacity={0} />
                </linearGradient>
            </defs>
        </svg>
    </div>
);

// SLIDE 2: Trap (Donut Chart)
const TrapVisual = () => (
    <div className="w-full h-full flex items-center justify-center relative p-4">
        <DonutChart 
            data={[
                { label: 'Collectivist', value: 70, color: '#A855F7' },
                { label: 'Individualist', value: 30, color: '#60A5FA' }
            ]} 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/30 to-blue-100/30 rounded-full blur-3xl -z-10 transform scale-75"></div>
    </div>
);

// SLIDE 3: CQ
const CQVisual = () => (
    <div className="w-full h-full flex items-center justify-center relative">
        <motion.div 
            className="w-64 h-64 lg:w-96 lg:h-96 rounded-full bg-blue-50/30 border border-blue-200 relative overflow-hidden backdrop-blur-sm shadow-inner"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
            <svg className="absolute inset-0 w-full h-full opacity-20 text-blue-400" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="49" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M50 1 V99" stroke="currentColor" strokeWidth="0.5"/>
                <path d="M1 50 H99" stroke="currentColor" strokeWidth="0.5"/>
                <ellipse cx="50" cy="50" rx="20" ry="49" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
                <ellipse cx="50" cy="50" rx="20" ry="49" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(-45 50 50)" />
            </svg>
            <motion.div 
                className="absolute top-[35%] right-[25%] w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.8)] z-10"
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
            />
        </motion.div>
        
        {/* Orbiting Words */}
        <motion.div className="absolute inset-0" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
             {['Perception', 'Adaptation', 'Flexibility'].map((word, i) => (
                <div key={word} className="absolute top-1/2 left-1/2 w-0 h-0 flex items-center justify-center" style={{ transform: `rotate(${i * 120}deg) translate(160px)` }}>
                    <motion.div initial={{ rotate: -(i * 120) }} animate={{ rotate: -(i * 120) - 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}>
                        <div className="text-[10px] lg:text-sm font-bold uppercase tracking-widest text-blue-600 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-blue-100 whitespace-nowrap">
                            {word}
                        </div>
                    </motion.div>
                </div>
            ))}
        </motion.div>

        <div className="absolute font-black text-5xl lg:text-7xl text-gray-800 z-10 bg-white/40 backdrop-blur-md rounded-full w-32 h-32 lg:w-48 lg:h-48 flex items-center justify-center shadow-lg border border-white/50">
            CQ
        </div>
    </div>
);

// SLIDE 4: Autonomy
const AutonomyVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative p-8">
        <div className="text-center mb-8">
            <span className="bg-gray-100 text-gray-500 font-bold uppercase tracking-widest text-xs lg:text-sm px-3 py-1 rounded-full border border-gray-200">
                Autonomy Spectrum
            </span>
        </div>
        
        <div className="w-full max-w-xl flex justify-between items-end mb-6 px-2">
            {/* Left Group: Map (Lit when slider is left/start/end) */}
            <motion.div 
                className="flex flex-col items-center gap-2"
                animate={{ opacity: [1, 0.4, 1], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                 <motion.div 
                    className="text-6xl lg:text-8xl relative"
                    animate={{ filter: ["grayscale(0%)", "grayscale(100%)", "grayscale(0%)"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 >
                    🗺️
                 </motion.div>
                 <div className="text-center">
                     <motion.div 
                        className="text-xs lg:text-base font-bold text-gray-700"
                        animate={{ color: ["#1F2937", "#9CA3AF", "#1F2937"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     >
                         Needs Map
                     </motion.div>
                     <div className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-wide">Collectivist</div>
                 </div>
            </motion.div>

            {/* Right Group: Rocket (Lit when slider is right/middle) */}
            <motion.div 
                className="flex flex-col items-center gap-2"
                animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.1, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                 <motion.div 
                    className="text-6xl lg:text-8xl relative"
                    animate={{ filter: ["grayscale(100%)", "grayscale(0%)", "grayscale(100%)"] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                 >
                    🚀
                 </motion.div>
                 <div className="text-center">
                     <motion.div 
                        className="text-xs lg:text-base font-bold text-gray-700"
                        animate={{ color: ["#9CA3AF", "#1F2937", "#9CA3AF"] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                     >
                         Needs Space
                     </motion.div>
                     <div className="text-[10px] lg:text-xs text-gray-400 uppercase tracking-wide">Individualist</div>
                 </div>
            </motion.div>
        </div>

        <div className="relative w-full max-w-xl h-16 lg:h-20">
            <div className="absolute top-1/2 left-0 right-0 h-3 lg:h-4 bg-gray-100 rounded-full -translate-y-1/2 overflow-hidden shadow-inner border border-gray-200">
                 <div className="absolute inset-0 bg-gradient-to-r from-blue-200/50 to-purple-200/50"></div>
            </div>
            <motion.div 
                className="absolute top-1/2 -translate-y-1/2 w-10 h-10 lg:w-16 lg:h-16 bg-white rounded-full shadow-lg border border-gray-100 z-10 flex items-center justify-center text-lg lg:text-2xl"
                animate={{ left: ["10%", "90%", "10%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
                ↔️
            </motion.div>
        </div>
    </div>
);

// SLIDE 5: McDonald's
const McDonaldsVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
        <div className="w-full flex justify-center h-8 mb-8 relative">
             <motion.div className="absolute text-red-500 font-bold uppercase tracking-widest text-sm lg:text-base bg-red-50 px-4 py-1 rounded-full border border-red-100" animate={{ opacity: [1, 1, 0, 0], y: [0, 0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, times: [0, 0.45, 0.5, 1] }}>The Problem: Isolation</motion.div>
             <motion.div className="absolute text-green-600 font-bold uppercase tracking-widest text-sm lg:text-base bg-green-50 px-4 py-1 rounded-full border border-green-100" animate={{ opacity: [0, 0, 1, 1, 0], y: [20, 20, 0, 0, 20] }} transition={{ duration: 8, repeat: Infinity, times: [0, 0.5, 0.55, 0.95, 1] }}>The Solution: Collective Harmony</motion.div>
        </div>

        <div className="relative w-72 h-96 lg:w-96 lg:h-[500px] flex items-center justify-center">
            {/* STATE 1: Problem */}
            <motion.div 
                className="absolute inset-0 bg-white rounded-2xl shadow-xl border-2 border-red-100 flex flex-col items-center justify-center z-10"
                animate={{ scale: [1, 1, 1, 0.9, 0.5, 0], opacity: [1, 1, 1, 0, 0, 0] }}
                transition={{ duration: 8, repeat: Infinity, times: [0, 0.25, 0.45, 0.5, 0.55, 1] }}
            >
                <div className="absolute top-4 right-4 text-2xl lg:text-4xl">🥇</div>
                <div className="w-24 h-24 lg:w-32 lg:h-32 bg-gray-100 rounded-full mb-6 flex items-center justify-center text-5xl lg:text-7xl">👤</div>
                <div className="font-bold text-gray-800 text-lg lg:text-2xl">Employee of the Month</div>
                <div className="text-xs lg:text-sm text-red-400 mt-2 font-medium bg-red-50 px-3 py-1 rounded-full">"Singled Out"</div>
            </motion.div>

            {/* STATE 2: Solution */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-2xl border-2 border-green-200 flex flex-col items-center justify-center z-20 overflow-hidden"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 0, 1.05, 1, 1, 0], opacity: [0, 0, 1, 1, 1, 0] }}
                transition={{ duration: 8, repeat: Infinity, times: [0, 0.5, 0.6, 0.7, 0.95, 1] }}
            >
                <div className="flex items-center justify-center mb-6 relative">
                    <div className="text-4xl lg:text-6xl">🏆</div>
                </div>
                <div className="font-black text-green-800 text-2xl lg:text-3xl tracking-tight">TEAM WIN</div>
            </motion.div>
        </div>
    </div>
);

// SLIDE 6: Everfresh
const EverfreshVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-gray-50 to-emerald-50/30 rounded-2xl overflow-hidden border border-emerald-100/50 p-6">
        <div className="relative w-full h-full max-w-lg aspect-[4/3] flex items-center justify-center">
             <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible">
                <defs>
                    <filter id="glow-emerald">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                    <marker id="arrowhead-red" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#EF4444" />
                    </marker>
                    <marker id="arrowhead-green" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                        <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                    </marker>
                </defs>

                {/* LEADER */}
                <circle cx="200" cy="50" r="24" fill="white" stroke="#334155" strokeWidth="2" className="shadow-sm" />
                <text x="200" y="56" textAnchor="middle" fontSize="20">👔</text>

                {/* TEAM */}
                {[100, 200, 300].map((x, i) => (
                    <g key={i}>
                        <circle cx={x} cy="250" r="16" fill="white" stroke="#64748B" strokeWidth="2" />
                        <text x={x} y="255" textAnchor="middle" fontSize="14">👤</text>
                    </g>
                ))}

                {/* --- PHASE 1: DIRECT (RISKY) --- */}
                <motion.g
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0, 0, 1] }}
                    transition={{ duration: 8, times: [0, 0.4, 0.45, 0.95, 1], repeat: Infinity }}
                >
                     {/* Paths hitting barrier */}
                     {[100, 200, 300].map((x, i) => (
                        <motion.path
                            key={`fail-${i}`}
                            d={`M ${x} 230 L ${200 + (i-1)*10} 90`} // Hit the barrier directly
                            stroke="#EF4444"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: [0, 1, 1] }}
                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                        />
                     ))}
                     {/* The Barrier */}
                     <motion.path
                        d="M 160 85 L 240 85"
                        stroke="#EF4444"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                     />
                     
                     {/* Blocked Status Box */}
                     <motion.rect
                        x="130" y="270" width="140" height="28" rx="6"
                        fill="#FEF2F2" stroke="#EF4444" strokeWidth="2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                     />
                     
                     <motion.text
                         x="200" y="289" textAnchor="middle" fill="#EF4444" fontSize="12" fontWeight="bold" letterSpacing="1"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         transition={{ delay: 0.8 }}
                     >
                         BLOCKED
                     </motion.text>
                </motion.g>


                {/* --- PHASE 2: INDIRECT (SAFE) --- */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 8, times: [0, 0.45, 0.5, 0.9, 1], repeat: Infinity }}
                >
                     {/* The "Safe Box" */}
                     <motion.rect
                        x="150" y="140" width="100" height="40" rx="8"
                        fill="#ECFDF5" stroke="#10B981" strokeWidth="2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.4 }}
                     />
                     <text x="200" y="165" textAnchor="middle" fill="#059669" fontSize="11" fontWeight="bold" letterSpacing="0.5">FEEDBACK</text>

                     {/* Paths into box */}
                     {[100, 200, 300].map((x, i) => (
                        <motion.path
                            key={`safe-${i}`}
                            d={`M ${x} 230 Q ${x} 180 ${180 + i*20} 180`} // Curves into bottom of box area
                            fill="none"
                            stroke="#10B981"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        />
                     ))}

                     {/* Path from box to leader */}
                     <motion.path
                        d="M 200 140 L 200 80"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        markerEnd="url(#arrowhead-green)"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ delay: 1.5, duration: 0.6 }}
                     />
                     
                     <motion.text
                         x="260" y="110" fill="#059669" fontSize="12" fontWeight="bold"
                         initial={{ opacity: 0, x: 250 }}
                         animate={{ opacity: 1, x: 260 }}
                         transition={{ delay: 1.8 }}
                     >
                         APPROVED
                     </motion.text>
                </motion.g>
             </svg>
        </div>
    </div>
);

// SLIDE 7: Safety
const SafetyVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-2">
             
             {/* LEFT: DEBATE (Clashing Energy) */}
             <div className="relative bg-gradient-to-br from-orange-50/50 via-white to-white flex flex-col items-center justify-center border-r border-slate-100 p-4 overflow-hidden">
                 {/* Background Pattern */}
                 <div className="absolute inset-0 opacity-[0.03]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                                <line x1="0" y1="0" x2="0" y2="10" style={{stroke:'black', strokeWidth:1}} />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
                    </svg>
                 </div>

                 <div className="relative w-full max-w-[12rem] aspect-square flex items-center justify-center mb-6">
                     {/* Left Object */}
                     <motion.div 
                        className="absolute w-8 h-8 lg:w-12 lg:h-12 border-2 border-orange-500 rounded-sm bg-orange-100"
                        style={{ left: '20%' }}
                        animate={{ x: [0, 30, 0], rotate: [0, 15, 0] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "circIn", times: [0, 0.5, 1] }}
                     />
                     {/* Right Object */}
                     <motion.div 
                        className="absolute w-8 h-8 lg:w-12 lg:h-12 bg-orange-500 rounded-full mix-blend-multiply"
                        style={{ right: '20%' }}
                        animate={{ x: [0, -30, 0], scale: [1, 0.8, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "circIn", times: [0, 0.5, 1] }}
                     />
                     {/* Impact Spark */}
                     <motion.div
                        className="absolute w-10 h-10 lg:w-14 lg:h-14"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity, times: [0.45, 0.5, 0.6] }}
                     >
                         <svg viewBox="0 0 100 100" className="w-full h-full text-yellow-500 fill-current drop-shadow-md">
                             <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
                         </svg>
                     </motion.div>
                 </div>

                 <div className="text-center relative z-10">
                     <div className="font-bold text-slate-800 text-lg lg:text-2xl mb-1">Debate</div>
                     <div className="text-[10px] lg:text-xs text-orange-600 font-bold uppercase tracking-widest opacity-80">"Friction creates light"</div>
                 </div>
             </div>

             {/* RIGHT: HARMONY (Flowing Energy) */}
             <div className="relative bg-gradient-to-bl from-blue-50/50 via-white to-white flex flex-col items-center justify-center p-4 overflow-hidden">
                 
                 <div className="relative w-full max-w-[12rem] aspect-square flex items-center justify-center mb-6">
                     {/* Flowing Ring 1 */}
                     <motion.div 
                        className="absolute inset-4 border border-blue-100 rounded-full"
                        animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     />
                     
                     {/* Orbiting Elements */}
                     <motion.div 
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                     >
                         <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.6)]"></div>
                         <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.6)]"></div>
                     </motion.div>

                     {/* Counter Orbit */}
                     <motion.div 
                        className="absolute inset-8 border border-blue-200/50 rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                     >
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-indigo-300 rounded-full"></div>
                     </motion.div>
                 </div>

                 <div className="text-center relative z-10">
                     <div className="font-bold text-slate-800 text-lg lg:text-2xl mb-1">Harmony</div>
                     <div className="text-[10px] lg:text-xs text-blue-600 font-bold uppercase tracking-widest opacity-80">"Preserve the Face"</div>
                 </div>
             </div>
        </div>
        
        {/* Central Badge */}
        <div className="absolute bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest z-20">
            vs
        </div>
    </div>
);

// SLIDE 8: Norms
const NormsVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-8">
        {['Speed', 'Thoroughness', 'Feedback'].map((item, i) => (
            <motion.div 
                key={item}
                className="w-64 lg:w-96 bg-white p-3 lg:p-6 rounded shadow-sm border border-gray-100 flex items-center gap-3 lg:gap-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.8, duration: 0.5 }}
            >
                <div className="w-5 h-5 lg:w-8 lg:h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs lg:text-base font-bold">✓</div>
                <span className="text-sm lg:text-xl font-medium text-gray-700">{item} Protocol</span>
            </motion.div>
        ))}
    </div>
);

// SLIDE 9: Speaking Up
const SpeakingUpVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-indigo-50 to-white rounded-2xl overflow-hidden border border-indigo-100 p-8 shadow-sm">
        
        <div className="relative w-full h-full flex items-center justify-center">
             <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible max-w-lg">
                <defs>
                     <marker id="arrow-bounce" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                        <path d="M0,0 L6,3 L0,6 L0,0" fill="#94A3B8" />
                     </marker>
                </defs>

                {/* SCENARIO 1: "Any Questions?" -> Closed Loop */}
                <motion.g
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0, 0, 1] }}
                    transition={{ duration: 8, times: [0, 0.45, 0.5, 0.95, 1], repeat: Infinity }}
                >
                    {/* The Complete Object (Circle) */}
                    <circle cx="200" cy="120" r="50" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
                    
                    {/* "Questions" bouncing off */}
                    <motion.path
                        d="M 120 120 L 150 120"
                        stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow-bounce)"
                        initial={{ pathLength: 0, x: -20, opacity: 0 }}
                        animate={{ pathLength: 1, x: 0, opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                     <motion.path
                        d="M 280 120 L 250 120"
                        stroke="#94A3B8" strokeWidth="2" markerEnd="url(#arrow-bounce)"
                        initial={{ pathLength: 0, x: 20, opacity: 0 }}
                        animate={{ pathLength: 1, x: 0, opacity: [0, 1, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                    />
                    
                    <text x="200" y="200" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#64748B">"Any Questions?"</text>
                    <text x="200" y="220" textAnchor="middle" fontSize="12" fill="#94A3B8">Completeness = Silence</text>
                </motion.g>

                {/* SCENARIO 2: "What's Missing?" -> Invitation */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 8, times: [0, 0.45, 0.5, 0.95, 1], repeat: Infinity }}
                >
                    {/* The Incomplete Object (Pacman-ish) */}
                    {/* A circle missing a 60 degree wedge on the right */}
                    <path 
                        d="M 200 120 L 243 95 A 50 50 0 1 1 243 145 Z" 
                        fill="#EEF2FF" 
                        stroke="#6366F1" 
                        strokeWidth="3"
                    />

                    {/* The Missing Wedge flying in */}
                    <motion.path
                        d="M 200 120 L 243 95 A 50 50 0 0 0 243 145 Z"
                        fill="#818CF8"
                        stroke="none"
                        initial={{ x: 40, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                    />
                    
                    {/* Label pointing to gap */}
                    <motion.text 
                        x="270" y="125" fill="#4F46E5" fontSize="10" fontWeight="bold"
                        initial={{ opacity: 0, x: 280 }}
                        animate={{ opacity: 1, x: 270 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        GAP IDENTIFIED
                    </motion.text>

                    <text x="200" y="200" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#4F46E5">"What's Missing?"</text>
                    <text x="200" y="220" textAnchor="middle" fontSize="12" fill="#818CF8">Gap = Contribution</text>
                </motion.g>

             </svg>
        </div>
    </div>
);

// SLIDE 10: Diversity
const DiversityVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-8 shadow-sm">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
        </div>

        <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
            
            {/* CENTRAL SHARED OBJECTIVE (Only visible in Phase 2) */}
            <motion.div
                className="absolute w-40 h-40 rounded-full bg-blue-100/50 flex items-center justify-center z-0 blur-xl"
                animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.5, 0.5, 1.2, 1.2, 0.5] }}
                transition={{ duration: 10, times: [0, 0.5, 0.6, 0.9, 1], repeat: Infinity }}
            />
            <motion.div 
                className="absolute z-10 text-xs font-bold uppercase tracking-widest text-blue-600 bg-white/90 px-4 py-2 rounded-full shadow-sm border border-blue-100 backdrop-blur-sm"
                animate={{ opacity: [0, 0, 1, 1, 0], y: [20, 20, 0, 0, 20], scale: [0.8, 0.8, 1, 1, 0.8] }}
                transition={{ duration: 10, times: [0, 0.55, 0.6, 0.9, 1], repeat: Infinity }}
            >
                Shared Purpose
            </motion.div>

            {/* PEOPLE NODES */}
            {[0, 120, 240].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                // Positions: Center is (0,0)
                // We move them out along the angle.
                const dx = Math.cos(rad);
                const dy = Math.sin(rad);
                
                return (
                    <motion.div
                        key={i}
                        className="absolute w-20 h-20 rounded-full flex items-center justify-center shadow-lg border-4 border-white z-20"
                        style={{ 
                            backgroundColor: i === 0 ? '#FECACA' : i === 1 ? '#BFDBFE' : '#BBF7D0', // Red, Blue, Green pastel
                            color: i === 0 ? '#EF4444' : i === 1 ? '#3B82F6' : '#22C55E',
                        }}
                        animate={{
                            x: [dx * 40, dx * 140, dx * 140, dx * 50, dx * 40], // Start close, go far, stay, come close/overlap
                            y: [dy * 40, dy * 140, dy * 140, dy * 50, dy * 40],
                        }}
                        transition={{ duration: 10, times: [0, 0.2, 0.5, 0.8, 1], repeat: Infinity, ease: "easeInOut" }}
                    >
                        <span className="text-3xl filter drop-shadow-sm">
                             {i === 0 ? '🧠' : i === 1 ? '🎨' : '⚙️'}
                        </span>
                        
                        {/* Label depicting "The difference" */}
                        <motion.div
                            className="absolute -bottom-8 text-[10px] font-bold uppercase tracking-wide bg-white/90 px-2 py-1 rounded shadow-sm whitespace-nowrap text-slate-500 border border-slate-100"
                            animate={{ opacity: [0, 1, 1, 0, 0], y: [0, 5, 5, 0, 0] }} // Visible only during "Distance" phase
                            transition={{ duration: 10, times: [0, 0.2, 0.4, 0.5, 1], repeat: Infinity }}
                        >
                            {i === 0 ? 'Analytical' : i === 1 ? 'Creative' : 'Process'}
                        </motion.div>
                    </motion.div>
                );
            })}

            {/* BARRIERS (Phase 1) */}
            {[60, 180, 300].map((angle, i) => {
                 const rad = (angle * Math.PI) / 180;
                 const dx = Math.cos(rad) * 90;
                 const dy = Math.sin(rad) * 90;
                 
                 return (
                     <motion.div
                        key={`barrier-${i}`}
                        className="absolute w-1 h-32 bg-gradient-to-b from-transparent via-red-400/50 to-transparent blur-[1px]"
                        style={{ left: '50%', top: '50%', marginLeft: '-0.5px', marginTop: '-64px' }}
                        animate={{
                            x: [dx * 0.2, dx * 1.1, dx * 1.1, dx * 0.2, dx * 0.2],
                            y: [dy * 0.2, dy * 1.1, dy * 1.1, dy * 0.2, dy * 0.2],
                            rotate: angle + 90,
                            scaleY: [0, 1, 1, 0, 0],
                            opacity: [0, 1, 1, 0, 0]
                        }}
                        transition={{ duration: 10, times: [0, 0.2, 0.45, 0.55, 1], repeat: Infinity }}
                     >
                        {/* Anxiety Icon */}
                        <motion.div 
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl"
                            style={{ transform: `rotate(${-angle - 90}deg)` }} // Counter rotate icon
                            animate={{ scale: [0, 1.2, 1.2, 0, 0], opacity: 1 }}
                            transition={{ duration: 10, times: [0, 0.25, 0.45, 0.55, 1], repeat: Infinity }}
                        >
                            ⚡
                        </motion.div>
                     </motion.div>
                 )
            })}
            
            {/* CONNECTING RING (Phase 2) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
                 <motion.circle
                    cx="50%" cy="50%" r="70" fill="none" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6"
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: [0, 0, 0.4, 0.4, 0], scale: [1.5, 1.5, 1, 1, 1.5], rotate: 360 }}
                    transition={{ duration: 10, times: [0, 0.5, 0.7, 0.9, 1], repeat: Infinity }}
                 />
            </svg>
        </div>

        {/* Phase Label Indicator */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-16">
            <motion.div 
                className="flex flex-col items-center gap-1"
                animate={{ opacity: [0.3, 1, 1, 0.3, 0.3], scale: [0.9, 1, 1, 0.9, 0.9] }}
                transition={{ duration: 10, times: [0, 0.15, 0.4, 0.55, 1], repeat: Infinity }}
            >
                <div className="text-2xl mb-1">😰</div>
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest border-b-2 border-red-200 pb-0.5">Differences</div>
                <div className="text-[10px] font-medium text-red-400 mt-0.5">Creates Distance</div>
            </motion.div>

            <motion.div 
                className="flex flex-col items-center gap-1"
                animate={{ opacity: [0.3, 0.3, 0.3, 1, 0.3], scale: [0.9, 0.9, 0.9, 1, 0.9] }}
                transition={{ duration: 10, times: [0, 0.5, 0.6, 0.9, 1], repeat: Infinity }}
            >
                <div className="text-2xl mb-1">🤝</div>
                <div className="text-xs font-bold text-blue-600 uppercase tracking-widest border-b-2 border-blue-200 pb-0.5">Objective</div>
                <div className="text-[10px] font-medium text-blue-400 mt-0.5">Creates Unity</div>
            </motion.div>
        </div>
    </div>
);

// SLIDE 11: Perspective
const PerspectiveVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-slate-900 rounded-2xl overflow-hidden p-8 border border-slate-700">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        
        <svg viewBox="0 0 400 300" className="w-full h-full max-w-lg overflow-visible">
            <defs>
                <filter id="glow-blue">
                     <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                     <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                </filter>
            </defs>

            {/* The Wall/Screen for Square Projection (Left) */}
            <motion.rect 
                x="20" y="100" width="10" height="100" fill="#3B82F6" opacity="0.2" rx="2"
                animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity }}
            />
            {/* The Projected Square */}
            <motion.rect 
                x="22" y="110" width="6" height="80" fill="#60A5FA" 
                filter="url(#glow-blue)"
                animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 8, repeat: Infinity }}
            />

            {/* The Wall/Screen for Circle Projection (Bottom) */}
            <motion.rect 
                x="150" y="270" width="100" height="10" fill="#F59E0B" opacity="0.2" rx="2"
                animate={{ opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />
             {/* The Projected Circle (Ellipse to account for angle) */}
             <motion.ellipse 
                cx="200" cy="275" rx="40" ry="4" fill="#FBBF24"
                filter="url(#glow-blue)" 
                animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 8, repeat: Infinity }}
            />

            {/* The Central Cylinder */}
            <motion.g 
                transform="translate(200, 150)"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <motion.g
                     animate={{ rotateX: [0, 90, 0, -90, 0] }}
                     transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Top Cap */}
                    <ellipse cx="0" cy="-40" rx="40" ry="15" fill="none" stroke="white" strokeWidth="2" />
                    {/* Bottom Cap */}
                    <ellipse cx="0" cy="40" rx="40" ry="15" fill="none" stroke="white" strokeWidth="2" />
                    {/* Sides */}
                    <line x1="-40" y1="-40" x2="-40" y2="40" stroke="white" strokeWidth="2" />
                    <line x1="40" y1="-40" x2="40" y2="40" stroke="white" strokeWidth="2" />
                    
                    {/* Inner shading hint */}
                    <path d="M-40,-40 A40,15 0 0,0 40,-40 L40,40 A40,15 0 0,0 -40,40 Z" fill="white" opacity="0.1" />
                </motion.g>
            </motion.g>

            {/* Projection Lines (Dashed) */}
            {/* To Left (Square) */}
            <motion.path 
                d="M 160 110 L 30 110 M 160 190 L 30 190" 
                stroke="#3B82F6" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"
                animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity }}
            />
            {/* To Bottom (Circle) */}
             <motion.path 
                d="M 160 190 L 160 270 M 240 190 L 240 270" 
                stroke="#F59E0B" strokeWidth="1" strokeDasharray="4 4" opacity="0.5"
                animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />

            {/* Labels */}
            <text x="50" y="80" fill="#60A5FA" fontSize="12" fontWeight="bold">YOUR VIEW (Rect)</text>
            <text x="280" y="260" fill="#FBBF24" fontSize="12" fontWeight="bold">THEIR VIEW (Circle)</text>
            <text x="250" y="140" fill="white" fontSize="14" fontWeight="bold">REALITY (Cylinder)</text>

        </svg>
    </div>
);

// SLIDE 12: Shared Goals
const SharedGoalsVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-b from-amber-50/50 to-slate-50 border border-slate-100 rounded-2xl overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, black 1px, transparent 0)', backgroundSize: '24px 24px' }}>
        </div>

        <svg viewBox="0 0 400 300" className="w-full h-full overflow-visible max-w-lg relative z-10">
            
            {/* Phase 1: The Barrier */}
            <motion.path 
                d="M 200 180 L 200 280"
                stroke="#CBD5E1"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ opacity: 1 }}
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={{ duration: 12, times: [0, 0.3, 0.35, 0.95, 1], repeat: Infinity }}
            />

            {/* The Goal (Appears later) */}
            <motion.g
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: [0, 0, 1, 1, 0], y: [-20, -20, 0, 0, -20], scale: [0.8, 0.8, 1, 1, 0.8] }}
                transition={{ duration: 12, times: [0, 0.3, 0.35, 0.9, 1], repeat: Infinity }}
            >
                {/* Shining rays */}
                <motion.circle cx="200" cy="80" r="30" fill="url(#goalGradient)" opacity="0.2" 
                    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}
                />
                <path transform="translate(200, 80) scale(1.5)" d="M0,-10 L3,-3 L10,0 L3,3 L0,10 L-3,3 L-10,0 L-3,-3 Z" fill="#F59E0B" />
                <text x="200" y="130" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D97706" letterSpacing="1">SHARED GOAL</text>
            </motion.g>

            <defs>
                <radialGradient id="goalGradient">
                    <stop offset="0%" stopColor="#FBBF24" />
                    <stop offset="100%" stopColor="transparent" />
                </radialGradient>
            </defs>

            {/* TEAM A (Blue) */}
            <motion.g
                animate={{
                    x: [0, 20, 0, 80, 0], // Nudge, then move to center
                    y: [0, 0, 0, -140, 0] // Stay bottom, then move up
                }}
                transition={{ duration: 12, times: [0, 0.15, 0.3, 0.6, 1], repeat: Infinity, ease: "easeInOut" }}
            >
                {/* A cluster of dots representing the team */}
                <g transform="translate(100, 240)">
                     <circle r="8" fill="#3B82F6" />
                     <circle cx="-12" cy="10" r="6" fill="#60A5FA" />
                     <circle cx="12" cy="10" r="6" fill="#93C5FD" />
                </g>
            </motion.g>

            {/* TEAM B (Red) */}
            <motion.g
                animate={{
                    x: [0, -20, 0, -80, 0],
                    y: [0, 0, 0, -140, 0]
                }}
                transition={{ duration: 12, times: [0, 0.15, 0.3, 0.6, 1], repeat: Infinity, ease: "easeInOut" }}
            >
                <g transform="translate(300, 240)">
                     <circle r="8" fill="#EF4444" />
                     <circle cx="-12" cy="10" r="6" fill="#F87171" />
                     <circle cx="12" cy="10" r="6" fill="#FCA5A5" />
                </g>
            </motion.g>

            {/* Merged Orbit (Visualizes the Unity Phase) */}
            {/* When they reach the top, we simulate them rotating around the goal */}
            {/* We can use opacity to swap the separate groups for a merged group for cleaner animation logic, or just move them carefully. */}
            {/* Let's try to just move them close. To make them 'mix', we can animate the sub-circles within the groups if we want, but simple proximity communicates the idea well enough. */}
            
            {/* Text Annotations */}
            <motion.text 
                x="100" y="280" textAnchor="middle" fontSize="12" fill="#64748B" fontWeight="medium"
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={{ duration: 12, times: [0, 0.3, 0.4, 0.9, 1], repeat: Infinity }}
            >
                "Us"
            </motion.text>
             <motion.text 
                x="300" y="280" textAnchor="middle" fontSize="12" fill="#64748B" fontWeight="medium"
                animate={{ opacity: [1, 1, 0, 0, 1] }}
                transition={{ duration: 12, times: [0, 0.3, 0.4, 0.9, 1], repeat: Infinity }}
            >
                "Them"
            </motion.text>
        </svg>
    </div>
);

// SLIDE 13: Transparency
const TransparencyVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl overflow-hidden border border-gray-200">
         {/* Labels for the phases */}
         <div className="absolute top-8 w-full flex justify-center z-10">
            <div className="relative h-8 w-full text-center">
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-red-500 font-bold uppercase tracking-widest text-xs lg:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 1, 0, 0] }}
                    transition={{ duration: 12, times: [0, 0.1, 0.45, 0.5, 1], repeat: Infinity }}
                >
                    Words: "I made a mistake"
                </motion.div>
                <motion.div 
                    className="absolute inset-0 flex items-center justify-center text-emerald-600 font-bold uppercase tracking-widest text-xs lg:text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                    transition={{ duration: 12, times: [0, 0.5, 0.55, 0.95, 1], repeat: Infinity }}
                >
                    Action: Repairing the Fault
                </motion.div>
            </div>
         </div>

         <svg viewBox="0 0 300 400" className="w-full h-full max-w-sm overflow-visible">
            <defs>
                <linearGradient id="pillarGradient" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="#94A3B8" />
                    <stop offset="50%" stopColor="#CBD5E1" />
                    <stop offset="100%" stopColor="#94A3B8" />
                </linearGradient>
                <filter id="glow-gold">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>

            {/* BASE (Always static) */}
            <rect x="110" y="220" width="80" height="100" fill="url(#pillarGradient)" rx="2" />
            
            {/* TOP PILLAR SEGMENT */}
            <motion.rect 
                x="110" y="60" width="80" height="120" fill="url(#pillarGradient)" rx="2"
                animate={{ 
                    y: [60, 50, 60, 60, 50, 60], // Moves up to create gap
                    rotate: [0, -2, 2, 0, 0, 0] // Wobbles in phase 1, steady in phase 2
                }}
                transition={{ 
                    duration: 12, 
                    times: [0, 0.1, 0.3, 0.5, 0.6, 1], // Gap opens at 0.1, wobbles til 0.5. Opens at 0.6, steady.
                    repeat: Infinity 
                }}
            />

            {/* GAP AREA INDICATOR (Dark background for gap) */}
            <motion.rect
                x="115" y="180" width="70" height="40" fill="#334155" opacity="0.3" rx="4"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 12, repeat: Infinity, times: [0, 0.1, 0.9, 1] }}
            />

            {/* PHASE 1: WORDS (Bubbles/Text) */}
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 1, 0] }}
                transition={{ duration: 12, times: [0, 0.15, 0.45, 0.5], repeat: Infinity }}
            >
                {/* Speech bubbles emitting from gap */}
                <motion.path 
                    d="M 150 200 Q 180 180 170 160" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="4 4"
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.path 
                    d="M 150 200 Q 120 180 130 160" stroke="#EF4444" strokeWidth="2" fill="none" strokeDasharray="4 4"
                    animate={{ pathLength: [0, 1], opacity: [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                
                {/* Instability Indicator */}
                <text x="210" y="190" fill="#EF4444" fontSize="10" fontStyle="italic" opacity="0.8">Instability</text>
            </motion.g>

            {/* PHASE 2: ACTION (Solid Block) */}
            <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: 12, times: [0, 0.55, 0.6, 0.95, 1], repeat: Infinity }}
            >
                 {/* The Golden Block */}
                 <motion.rect
                    x="110" y="180" width="80" height="40" fill="#F59E0B" rx="1"
                    animate={{ scaleX: [0, 0, 1, 1, 0] }}
                    transition={{ duration: 12, times: [0, 0.6, 0.65, 0.95, 1], repeat: Infinity }}
                    style={{ originX: 0.5 }}
                    filter="url(#glow-gold)"
                 />
                 
                 {/* Strength Indicator */}
                 <text x="210" y="205" fill="#059669" fontSize="10" fontWeight="bold" opacity="0.8">STRENGTH</text>
                 
                 {/* Binding effect */}
                 <motion.rect 
                    x="105" y="175" width="90" height="50" stroke="#F59E0B" strokeWidth="2" fill="none" rx="4"
                    initial={{ opacity: 0, scale: 1.2 }}
                    animate={{ opacity: [0, 1, 0], scale: 1 }}
                    transition={{ delay: 0.6, duration: 1, repeat: Infinity, repeatDelay: 2 }}
                 />
            </motion.g>

         </svg>
    </div>
);

// SLIDE 14: Clarity
const ClarityVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl overflow-hidden border border-blue-100/50 shadow-inner">
        
        {/* Background Ambience */}
        <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </div>

        <div className="flex flex-row items-center justify-center gap-12 w-full max-w-3xl relative z-10 px-8">
            
            {/* 1. BLUNT (Misconception) */}
            <div className="flex flex-col items-center gap-3 opacity-60">
                <div className="w-32 h-32 border border-slate-200 bg-white/50 rounded-xl flex items-center justify-center relative shadow-sm">
                    {/* Wall */}
                    <div className="h-16 w-1 bg-slate-300 absolute right-8 rounded-full"></div>
                    {/* Arrow hitting wall */}
                    <motion.div 
                        className="h-1 bg-red-400 absolute left-4 origin-left rounded-full"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 45, opacity: 1 }} // 45px reaches the wall approx
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 0.5, ease: "circIn" }}
                    />
                    <motion.div 
                        className="absolute right-6 w-6 h-6 border-2 border-red-400 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 1.4, repeat: Infinity, repeatDelay: 1.5 }}
                    />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Blunt Impact</div>
            </div>

            {/* Divider */}
            <div className="h-24 w-px bg-slate-200"></div>

            {/* 2. DIGNIFIED (Reality/Goal) */}
            <div className="flex flex-col items-center gap-3">
                <div className="w-48 h-48 lg:w-64 lg:h-64 relative flex items-center justify-center">
                    
                    {/* The "Core" (Truth/Message) */}
                    <motion.div 
                        className="w-3 h-3 lg:w-4 lg:h-4 bg-blue-600 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.8)] z-20 relative"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                         {/* Glow effect */}
                         <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-20"></div>
                    </motion.div>

                    {/* Context Layers - Protecting the core */}
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            className="absolute border border-blue-200/60 rounded-full"
                            style={{ 
                                width: `${40 + i * 25}%`, 
                                height: `${40 + i * 25}%` 
                            }}
                            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                            transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
                        >
                            {/* Little context particles on rings */}
                            <div className="w-1.5 h-1.5 bg-blue-300 rounded-full absolute -top-0.5 left-1/2"></div>
                        </motion.div>
                    ))}

                    {/* The Path - Winding through */}
                    <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100">
                         {/* Path definition: Starts left, curves up, curves down, lands center */}
                         <motion.path 
                             d="M 0,50 C 25,10 75,90 50,50" 
                             fill="none" 
                             stroke="url(#gradientPath)" 
                             strokeWidth="1.5" 
                             strokeLinecap="round"
                             initial={{ pathLength: 0, opacity: 0.5 }}
                             animate={{ pathLength: 1, opacity: 1 }}
                             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                         />
                         <defs>
                            <linearGradient id="gradientPath" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#93C5FD" stopOpacity="0" />
                                <stop offset="100%" stopColor="#2563EB" stopOpacity="1" />
                            </linearGradient>
                         </defs>

                         {/* The "Message" Packet traveling the path */}
                         <motion.circle r="3" fill="#3B82F6">
                            <animateMotion 
                                dur="2.5s" 
                                repeatCount="indefinite"
                                calcMode="spline"
                                keyTimes="0;1"
                                keySplines="0.42 0 0.58 1"
                                path="M 0,50 C 25,10 75,90 50,50"
                            />
                         </motion.circle>
                    </svg>

                </div>
                <div className="flex flex-col items-center">
                    <div className="text-sm lg:text-base font-bold text-blue-700">Dignified Delivery</div>
                    <div className="text-[10px] text-blue-400 font-medium uppercase tracking-widest mt-0.5">Navigating Context</div>
                </div>
            </div>

        </div>
    </div>
);

// SLIDE 15: Saving Face
const SavingFaceVisual = () => (
    <div className="w-full h-full flex items-center justify-center">
        <svg width="100%" height="100%" viewBox="0 0 300 200" style={{maxHeight: '400px'}}>
            <path d="M50,150 L150,50 L250,150" fill="none" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="4 4" />
            <motion.circle 
                cx="0" cy="0" r="6" fill="#60A5FA"
                animate={{ cx: [50, 150, 250], cy: [150, 50, 150] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            <circle cx="50" cy="150" r="15" fill="#F3F4F6" />
            <circle cx="250" cy="150" r="15" fill="#F3F4F6" />
            <circle cx="150" cy="50" r="20" fill="#DBEAFE" stroke="#3B82F6" strokeWidth="2" />
        </svg>
    </div>
);

// SLIDE 16: Toyota Case
const ToyotaVisual = () => (
    <div className="w-full h-full flex flex-col items-center justify-center relative gap-6">
        <motion.div className="absolute top-4 right-4 w-24 h-auto opacity-100" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1}}>
             <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 206.3 207" xmlSpace="preserve">
                  <path fill="#EB0A1E" d="M137.5,58.3c-9.6-3.1-21.5-4.9-34.4-4.9s-24.8,1.8-34.4,4.9c-25.5,8.2-43,25.2-43,44.8s34.6,50,77.3,50,77.3-22.4,77.3-50c.2-19.6-17.3-36.6-42.8-44.8M103.1,131.7c-6.4,0-11.6-12.5-11.9-28.3,3.8.3,7.8.5,11.9.5s8-.2,11.9-.5c-.3,15.7-5.5,28.3-11.9,28.3M92,91c1.7-11.1,6-18.9,11.1-18.9s9.3,7.8,11.1,18.9c-3.5.3-7.3.5-11.1.5s-7.5,0-11.1-.5M121,90.2c-2.6-17.4-9.6-29.8-17.9-29.8s-15.3,12.4-17.9,29.8c-15.7-2.5-26.7-8-26.7-14.5s19.9-15.9,44.5-15.9,44.5,7.1,44.5,15.9c.2,6.5-10.8,12.1-26.5,14.5M37.1,101.3c0-8.5,3.3-16.4,8.9-23.2,0,.5,0,1,0,1.4,0,10.7,16,19.7,38.3,23v2.4c0,19.8,5.5,36.6,13.1,42.4-33.8-2-60.2-21.8-60.2-46M109,147.3c7.6-5.8,13.1-22.6,13.1-42.4v-2.4c22.3-3.3,38.3-12.4,38.3-23s0-1-.1-1.4c5.7,6.8,8.9,14.8,8.9,23.2,0,24.2-26.5,44-60.2,46"/>
             </svg>
        </motion.div>
        <RadarChart colors={{ usStroke: '#60A5FA', usFill: 'rgba(96, 165, 250, 0.2)', jpStroke: '#EB0A1E', jpFill: 'rgba(235, 10, 30, 0.3)', hybridStroke: '#E879F9', hybridFill: 'rgba(232, 121, 249, 0.2)', grid: 'rgba(255, 255, 255, 0.2)', axis: 'rgba(255, 255, 255, 0.3)', label: '#FFFFFF' }} />
    </div>
);

// SLIDE 17: Netflix Case
const NetflixVisual = () => {
  const radius = 120;
  const center = { x: 200, y: 200 };
  const nodes = [0, 1, 2, 3, 4].map((i) => {
    const angle = (i * 72 - 90) * (Math.PI / 180);
    return {
      x: center.x + radius * Math.cos(angle),
      y: center.y + radius * Math.sin(angle),
    };
  });

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative">
      {/* Netflix Logo / Branding element */}
      <div className="absolute top-0 right-0 p-6 opacity-80">
          <svg width="30" height="50" viewBox="0 0 30 50" fill="none">
               <path d="M0 0H9.5L19.5 50H29.5V0H19.5V50L0 0Z" fill="#E50914"/>
               <path d="M0 0H9.5L19.5 50H10V0H0Z" fill="black" fillOpacity="0.2"/>
          </svg>
      </div>

      <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
        <svg viewBox="0 0 400 400" className="w-full h-full overflow-visible">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. INFORMAL ALIGNMENT (The "Roots") */}
          {/* Connecting neighbors to simulate side-conversations */}
          {nodes.map((node, i) => {
            const nextNode = nodes[(i + 1) % nodes.length];
            return (
              <g key={`link-${i}`}>
                 {/* Path to next neighbor */}
                <motion.path
                  d={`M ${node.x} ${node.y} Q ${center.x * 1.0} ${center.y * 1.0} ${nextNode.x} ${nextNode.y}`} 
                  fill="none"
                  stroke="#E50914"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 2, delay: i * 0.3 }} // Sequential connections
                />
                 {/* Particle moving along the path */}
                 <motion.circle r="2" fill="#E50914">
                    <animateMotion 
                        dur="3s" 
                        repeatCount="indefinite"
                        path={`M ${node.x} ${node.y} Q ${center.x * 1.0} ${center.y * 1.0} ${nextNode.x} ${nextNode.y}`}
                    />
                 </motion.circle>
              </g>
            );
          })}

          {/* 2. FORMAL DECISION (Connection to Center) */}
          {nodes.map((node, i) => (
            <motion.line
              key={`center-${i}`}
              x1={node.x}
              y1={node.y}
              x2={center.x}
              y2={center.y}
              stroke="#E50914"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 3 }} // Happens AFTER the informal links
              style={{ filter: "url(#glow)" }}
            />
          ))}

          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.g 
                key={`node-${i}`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
            >
                <circle cx={node.x} cy={node.y} r="12" fill="#000" stroke="#E50914" strokeWidth="2" />
                <text x={node.x} y={node.y} dy="4" textAnchor="middle" fill="#E50914" fontSize="10" fontWeight="bold">{i + 1}</text>
            </motion.g>
          ))}

          {/* Central Hub */}
          <motion.g
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ delay: 4, duration: 0.8 }}
          >
            <circle cx={center.x} cy={center.y} r="25" fill="#E50914" filter="url(#glow)" />
            <text x={center.x} y={center.y} dy="5" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">DECIDE</text>
          </motion.g>
        </svg>

        {/* Labels / Annotations */}
        <motion.div 
            className="absolute bottom-4 left-0 right-0 text-center z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 5 }}
        >
             <div className="text-white text-lg font-medium tracking-widest uppercase">Nemawashi</div>
             <div className="text-gray-500 text-xs uppercase tracking-wide">Laying the groundwork</div>
        </motion.div>
      </div>
    </div>
  );
};

// SLIDE 18: Airbnb Visual
const AirbnbVisual = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center relative bg-white rounded-xl overflow-hidden shadow-sm border border-pink-100 p-8">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-[#FF5A5F]/5"></div>
            
            <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
                
                {/* STATE 1: Belong Anywhere */}
                <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    animate={{ opacity: [1, 1, 0, 0, 1], scale: [1, 1, 0.9, 0.9, 1] }}
                    transition={{ duration: 10, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1] }}
                >
                    <div className="w-40 h-40 bg-white rounded-full shadow-xl border-4 border-gray-100 flex items-center justify-center text-6xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gray-50 opacity-50"></div>
                        <span className="relative z-10">🌍</span>
                        {/* Connecting lines or map effect */}
                        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                             <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="1" fill="none" strokeDasharray="4 2"/>
                             <path d="M50 10 L50 90 M10 50 L90 50" stroke="black" strokeWidth="1" />
                        </svg>
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 tracking-tight mb-2">Belong Anywhere</h2>
                        <div className="flex items-center justify-center gap-2">
                             <span className="h-px w-8 bg-gray-400"></span>
                             <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">Global Nomadism</p>
                             <span className="h-px w-8 bg-gray-400"></span>
                        </div>
                    </div>
                </motion.div>

                {/* STATE 2: Aibiying */}
                <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.9, 0.9, 1, 1, 0.9] }}
                    transition={{ duration: 10, repeat: Infinity, times: [0, 0.4, 0.5, 0.9, 1] }}
                >
                    <div className="w-40 h-40 bg-[#FF5A5F] rounded-full shadow-xl shadow-pink-200 border-4 border-white flex items-center justify-center text-6xl text-white relative">
                        <span className="relative z-10">🏠</span>
                         <motion.div 
                            className="absolute -top-2 -right-2 text-3xl"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                         >
                            ❤️
                         </motion.div>
                    </div>
                    <div className="mt-8 text-center">
                        <h2 className="text-5xl lg:text-6xl font-bold text-[#FF5A5F] tracking-tight mb-2">爱彼迎</h2>
                        <p className="text-2xl font-serif italic text-gray-700">"Welcome with Love"</p>
                        <div className="mt-2 text-sm font-bold text-gray-400 uppercase tracking-widest">Stability & Warmth</div>
                    </div>
                </motion.div>
            </div>
            
            {/* Airbnb Bélo Logo - Watermark style */}
            <div className="absolute top-6 right-6 w-12 h-12 lg:w-20 lg:h-20 opacity-80">
                 <svg viewBox="0 0 256 276" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                    <path d="M238,223 C236,237 226,250 213,255 C206,258 199,259 192,258 C185,257 178,255 171,251 C161,245 151,237 140,224 C158,202 169,181 173,163 C175,155 175,147 174,140 C173,133 171,127 167,121 C158,109 144,101 128,101 C112,101 98,109 89,121 C85,127 83,133 82,140 C81,147 81,155 83,163 C87,181 98,202 116,225 C105,237 95,246 85,251 C78,255 71,258 64,258 C57,259 49,258 43,256 C30,250 20,238 18,223 C17,217 18,210 20,202 C21,199 23,196 24,193 C26,189 28,184 30,179 L31,179 C50,138 70,96 91,55 L92,53 C94,49 97,45 99,41 C101,36 103,32 106,28 C112,22 120,18 129,18 C137,18 145,22 151,28 C154,32 156,36 158,41 C161,45 163,49 165,53 L166,55 C187,96 207,138 226,179 L226,179 C228,184 230,189 233,193 C234,196 235,199 236,202 C238,209 239,216 238,223 Z M128,210 C113,191 103,174 100,159 C99,153 98,147 99,142 C100,138 102,134 104,130 C109,123 118,118 128,118 C138,118 147,123 152,130 C154,134 156,138 157,142 C158,147 157,153 156,159 C153,173 143,191 128,210 Z" fill="#FF5A5F" />
                 </svg>
            </div>
        </div>
    );
};

// SLIDE 19: End Visual
const EndVisual = () => (
    <div className="w-full h-full relative">
        <motion.div 
            className="absolute top-[15%] left-[10%] lg:left-[15%] text-gray-400 font-light text-xl lg:text-3xl tracking-widest uppercase"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            Autonomy
        </motion.div>
        <motion.div 
            className="absolute top-[20%] right-[10%] lg:right-[15%] text-gray-400 font-light text-xl lg:text-3xl tracking-widest uppercase"
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            Safety
        </motion.div>
        <motion.div 
            className="absolute bottom-[20%] left-[10%] lg:left-[15%] text-gray-400 font-light text-xl lg:text-3xl tracking-widest uppercase"
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
            Diversity
        </motion.div>
        <motion.div 
            className="absolute bottom-[15%] right-[10%] lg:right-[15%] text-gray-400 font-light text-xl lg:text-3xl tracking-widest uppercase"
            animate={{ y: [15, -15, 15] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            Transparency
        </motion.div>
        
        {/* Central connecting graphic behind the title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
             <motion.div 
                className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full border border-gray-100/50"
                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
             />
             <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-purple-100/20 to-red-100/20 rounded-full filter blur-3xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             />
        </div>
    </div>
);

// SLIDE 15.5: Case Intro (High-end abstract intro)
const CaseIntroVisual = () => (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Simplified Ambient Background */}
        <motion.div 
            className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-red-100/20 rounded-full blur-3xl mix-blend-multiply"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
            className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-orange-50/30 rounded-full blur-3xl mix-blend-multiply"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
    </div>
);

export const SlideVisual: React.FC<{ slideId: string }> = ({ slideId }) => {
    switch(slideId) {
        case '1': return <TitleVisual />;
        case '2': return <TrapVisual />;
        case '3': return <CQVisual />;
        case '4': return <AutonomyVisual />;
        case '5': return <McDonaldsVisual />;
        case '6': return <EverfreshVisual />;
        case '7': return <SafetyVisual />;
        case '8': return <NormsVisual />;
        case '9': return <SpeakingUpVisual />;
        case '10': return <DiversityVisual />;
        case '11': return <PerspectiveVisual />;
        case '12': return <SharedGoalsVisual />;
        case '13': return <TransparencyVisual />;
        case '14': return <ClarityVisual />;
        case '15': return <SavingFaceVisual />;
        case 'case-intro': return <CaseIntroVisual />;
        case '16': return <ToyotaVisual />;
        case '17': return <NetflixVisual />;
        case '18': return <AirbnbVisual />;
        case '19': return <EndVisual />;
        default: return null;
    }
};
