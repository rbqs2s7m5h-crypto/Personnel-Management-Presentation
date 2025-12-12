
import React from 'react';
import { motion } from 'framer-motion';

// --- Donut Chart (Slide 2) ---
interface DonutChartProps {
  data: { label: string; value: number; color: string }[];
}

export const DonutChart: React.FC<DonutChartProps> = ({ data }) => {
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  let accumulatedOffset = 0;

  return (
    <div className="relative w-96 h-96 flex items-center justify-center">
      <svg width="100%" height="100%" viewBox="0 0 200 200" className="rotate-[-90deg]">
        {data.map((item, index) => {
          const strokeDashoffset = circumference - (item.value / 100) * circumference;
          const rotation = (accumulatedOffset / 100) * 360;
          accumulatedOffset += item.value;

          return (
            <g key={index}>
              <motion.circle
                cx="100"
                cy="100"
                r={radius}
                fill="transparent"
                stroke={item.color}
                strokeWidth="20"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 1.5, delay: 0.5 + index * 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "center", rotate: rotation }}
              />
            </g>
          );
        })}
      </svg>
      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="text-4xl font-black text-gray-800"
        >
            70%
        </motion.div>
        <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 2.2 }}
             className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1"
        >
            Collectivist
        </motion.div>
      </div>
      
      {/* Legend Labels - Floating outside */}
      {data.map((item, i) => (
         <motion.div
            key={i}
            className={`absolute ${i === 0 ? '-right-12 top-10' : '-left-12 bottom-10'} bg-white/80 backdrop-blur px-3 py-1.5 rounded-lg shadow-sm border border-white/50`}
            initial={{ opacity: 0, x: i === 0 ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.5 }}
         >
             <div className="flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                 <div className="text-xs font-bold text-gray-700">{item.label}</div>
                 <div className="text-xs font-medium text-gray-500">{item.value}%</div>
             </div>
         </motion.div>
      ))}
    </div>
  );
};

// --- Trend Line Chart (Slide 10) ---
export const TrendChart: React.FC = () => {
  // SVG coordinates 300x200
  // Line 1 (Anxiety): Goes up linearly
  const line1Data = "M 20,180 C 100,160 150,100 280,20";
  // Line 2 (Sharing): Goes down exponentially
  const line2Data = "M 20,40 C 100,60 150,150 280,180";

  return (
    <div className="relative w-full max-w-md h-64 bg-white/40 backdrop-blur-sm rounded-xl border border-white/50 p-6 shadow-sm">
      <div className="absolute top-4 left-6 text-xs font-bold text-gray-500 uppercase tracking-widest">Focus on Differences</div>
      
      <svg width="100%" height="100%" viewBox="0 0 300 200" className="overflow-visible">
        {/* Axes */}
        <line x1="20" y1="20" x2="20" y2="180" stroke="#CBD5E1" strokeWidth="2" />
        <line x1="20" y1="180" x2="280" y2="180" stroke="#CBD5E1" strokeWidth="2" />
        
        {/* Anxiety Line (Red) */}
        <motion.path
          d={line1Data}
          fill="none"
          stroke="#EF4444"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
        />
        
        {/* Sharing Line (Blue) */}
        <motion.path
          d={line2Data}
          fill="none"
          stroke="#3B82F6"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
        />

        {/* Labels */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5 }}>
            <text x="290" y="25" fill="#EF4444" fontSize="12" fontWeight="bold">Anxiety</text>
            <text x="290" y="185" fill="#3B82F6" fontSize="12" fontWeight="bold">Sharing</text>
        </motion.g>
      </svg>
      
      <div className="absolute bottom-2 right-6 text-xs font-medium text-gray-400">Time / Emphasis →</div>
    </div>
  );
};

// --- Radar Chart (Slide 16) ---
interface RadarChartProps {
    colors?: {
        usStroke: string;
        usFill: string;
        jpStroke: string;
        jpFill: string;
        hybridStroke: string;
        hybridFill: string;
        grid: string;
        axis: string;
        label: string;
    }
}

export const RadarChart: React.FC<RadarChartProps> = ({ colors }) => {
    // 3 Axes: Speed (Top), Consensus (Right), Efficiency (Left)
    // Center 150, 150. Radius 100.
    // Angles: -90 (Top), 30 (Right), 150 (Left)
    
    const center = { x: 150, y: 150 };
    const radius = 100;
    
    const theme = {
        usStroke: colors?.usStroke || "#EF4444",
        usFill: colors?.usFill || "rgba(239, 68, 68, 0.2)",
        jpStroke: colors?.jpStroke || "#3B82F6",
        jpFill: colors?.jpFill || "rgba(59, 130, 246, 0.2)",
        hybridStroke: colors?.hybridStroke || "#A855F7",
        hybridFill: colors?.hybridFill || "rgba(168, 85, 247, 0.3)",
        grid: colors?.grid || "#F1F5F9",
        axis: colors?.axis || "#CBD5E1",
        label: colors?.label || "#64748B"
    };
    
    // Helper to get coordinates
    const getPoint = (value: number, angleDeg: number) => {
        const angleRad = (angleDeg * Math.PI) / 180;
        return {
            x: center.x + radius * (value / 100) * Math.cos(angleRad),
            y: center.y + radius * (value / 100) * Math.sin(angleRad),
        };
    };

    // Axes Points
    const pTop = getPoint(100, -90);
    const pRight = getPoint(100, 30);
    const pLeft = getPoint(100, 150);

    // Data Series
    // US: Speed 90, Consensus 20, Efficiency 60
    const usPoints = [
        getPoint(90, -90),
        getPoint(20, 30),
        getPoint(60, 150)
    ];
    
    // Japan: Speed 30, Consensus 90, Efficiency 60
    const jpPoints = [
        getPoint(30, -90),
        getPoint(90, 30),
        getPoint(60, 150)
    ];
    
    // Hybrid: Speed 85, Consensus 85, Efficiency 95
    const hybridPoints = [
        getPoint(85, -90),
        getPoint(85, 30),
        getPoint(95, 150)
    ];

    const pointsToString = (pts: {x: number, y: number}[]) => pts.map(p => `${p.x},${p.y}`).join(" ");

    return (
        <div className="relative w-full h-full flex items-center justify-center p-2">
            <svg width="100%" height="100%" viewBox="-50 0 400 300" className="overflow-visible" style={{ maxWidth: '500px' }}>
                {/* Background Grid */}
                <circle cx={center.x} cy={center.y} r={radius} fill={theme.grid} stroke="none" />
                <circle cx={center.x} cy={center.y} r={radius * 0.66} fill="transparent" stroke={theme.axis} opacity={0.5} />
                <circle cx={center.x} cy={center.y} r={radius * 0.33} fill="transparent" stroke={theme.axis} opacity={0.5} />
                
                {/* Axis Lines */}
                <line x1={center.x} y1={center.y} x2={pTop.x} y2={pTop.y} stroke={theme.axis} />
                <line x1={center.x} y1={center.y} x2={pRight.x} y2={pRight.y} stroke={theme.axis} />
                <line x1={center.x} y1={center.y} x2={pLeft.x} y2={pLeft.y} stroke={theme.axis} />
                
                {/* Labels */}
                <text x={pTop.x} y={pTop.y - 10} textAnchor="middle" fontSize="10" fontWeight="bold" fill={theme.label}>SPEED</text>
                <text x={pRight.x + 10} y={pRight.y + 5} textAnchor="start" fontSize="10" fontWeight="bold" fill={theme.label}>CONSENSUS</text>
                <text x={pLeft.x - 10} y={pLeft.y + 5} textAnchor="end" fontSize="10" fontWeight="bold" fill={theme.label}>ALIGNMENT</text>

                {/* US Shape */}
                <motion.polygon
                    points={pointsToString(usPoints)}
                    fill={theme.usFill}
                    stroke={theme.usStroke}
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />

                {/* Japan Shape */}
                <motion.polygon
                    points={pointsToString(jpPoints)}
                    fill={theme.jpFill}
                    stroke={theme.jpStroke}
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                />

                {/* Hybrid Shape */}
                <motion.polygon
                    points={pointsToString(hybridPoints)}
                    fill={theme.hybridFill}
                    stroke={theme.hybridStroke}
                    strokeWidth="3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                />
            </svg>
            
            {/* Legend - Updated to dynamic colors */}
            <div className="absolute bottom-2 flex gap-4 text-[10px] font-bold uppercase tracking-wider bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-white/60 shadow-sm">
                <motion.div className="flex items-center gap-1" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.5}}>
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.usStroke}}></div> USA
                </motion.div>
                <motion.div className="flex items-center gap-1" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 1.5}}>
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.jpStroke}}></div> JP
                </motion.div>
                <motion.div className="flex items-center gap-1" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 3}}>
                    <div className="w-2 h-2 rounded-full" style={{backgroundColor: theme.hybridStroke}}></div> Hybrid
                </motion.div>
            </div>
        </div>
    );
};
