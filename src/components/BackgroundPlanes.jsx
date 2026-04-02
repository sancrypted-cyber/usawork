import React from 'react';

const Plane = ({ path, color, delay }) => {
  const maskId = `mask-${delay}`;
  
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="none">
      <defs>
        {/* Mask to reveal the trail as the plane moves */}
        <mask id={maskId}>
          <path
            d={path}
            fill="none"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="2000"
            strokeDashoffset="2000"
            style={{
              animation: `draw-trail 8s linear infinite ${delay}s`
            }}
          />
        </mask>
      </defs>

      {/* Dashed Trail */}
      <path
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="8 12"
        mask={`url(#${maskId})`}
        className="opacity-40"
      />
      
      {/* Telegram Paper Plane Icon */}
      <g>
        <path
          d="M1.71.4l14.9 5.8c1 .4 1 1.8 0 2.2l-14.9 5.8c-.8.3-1.6-.4-1.3-1.2l1.6-4.6c.1-.2.3-.4.6-.4l9.1-1.3c.2 0 .2-.4 0-.4l-9.1-1.3c-.3 0-.5-.2-.6-.4l-1.6-4.6c-.3-.8.5-1.5 1.3-1.2z"
          fill={color}
          className="opacity-100 drop-shadow-lg"
          style={{ transform: "scale(2)" }}
        >
          <animateMotion
            path={path}
            begin={`${delay}s`}
            dur="8s"
            repeatCount="indefinite"
            rotate="auto"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0;0.05;0.95;1"
            begin={`${delay}s`}
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </svg>
  );
};

const BackgroundPlanes = () => {
  // Define 4 wavy paths crossing the screen (0-1000 unit coordinates)
  const paths = [
    { d: "M -50 150 C 200 450, 500 50, 1050 350", color: "#0088cc", delay: 0 },
    { d: "M -50 850 C 250 550, 600 950, 1050 650", color: "#ef4444", delay: 2 },
    { d: "M 1050 150 C 800 550, 500 50, -50 350", color: "#22c55e", delay: 4 },
    { d: "M 1050 850 C 700 450, 400 950, -50 650", color: "#a855f7", delay: 6 }
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-transparent">
      {paths.map((p, i) => (
        <Plane key={i} path={p.d} color={p.color} delay={p.delay} />
      ))}
    </div>
  );
};

export default BackgroundPlanes;
