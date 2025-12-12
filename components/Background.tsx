import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-gray-50">
      {/* Mesh Gradient Base */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-purple-50/20 to-white"></div>
      
      {/* Floating Shapes */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl float-slow" />
      <div className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl float-medium" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-orange-100/40 rounded-full mix-blend-multiply filter blur-3xl float-fast" />

      {/* Grid Overlay for technical feel */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      
      {/* Atmospheric Particles */}
      <div className="absolute inset-0 opacity-20">
         <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
         <div className="absolute top-[80%] right-[20%] w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
         <div className="absolute top-[40%] left-[60%] w-1 h-1 bg-gray-900 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
    </div>
  );
};

export default Background;
