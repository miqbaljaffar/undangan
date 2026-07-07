import { useEffect, useState } from 'react';

interface HeartParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [hearts, setHearts] = useState<HeartParticle[]>([]);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Quick device detection
    const checkDevice = () => {
      const isMobileDevice = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    let particleId = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      // Spawn heart trailing particles on move
      if (Math.random() < 0.25) {
        const sizes = [10, 14, 18, 22];
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        const colors = ['#db5a7c', '#f59eb5', '#a22946', '#ffd1dc'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        const newParticle: HeartParticle = {
          id: particleId++,
          x,
          y,
          size: randomSize,
          color: randomColor
        };

        setHearts(prev => [...prev.slice(-15), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  // Periodically clean up old hearts
  useEffect(() => {
    if (hearts.length === 0) return;
    const timeout = setTimeout(() => {
      setHearts(prev => prev.slice(1));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [hearts]);

  if (isMobile) return null;

  return (
    <>
      {/* 1. Desktop custom cursor trailing gold glow */}
      <div
        className="fixed pointer-events-none z-50 transition-all duration-300 ease-out hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Outer soft champagne gold glow */}
        <div className="w-16 h-16 rounded-full bg-luxury-gold/8 blur-md" />
        {/* Inner precise pinpoint micro indicator */}
        <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(219,90,124,0.8)]" />
      </div>

      {/* 2. Beautiful floating trailing heart particles */}
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className="fixed pointer-events-none z-45 text-glow select-none animate-[floatUpFade_1s_ease-out_forwards]"
          style={{
            left: `${heart.x}px`,
            top: `${heart.y}px`,
            fontSize: `${heart.size}px`,
            color: heart.color,
            transform: 'translate(-50%, -50%)',
          }}
        >
          ♥
        </span>
      ))}

      <style>{`
        @keyframes floatUpFade {
          0% {
            transform: translate(-50%, -50%) scale(1) translateY(0);
            opacity: 0.9;
          }
          100% {
            transform: translate(-50%, -50%) scale(0.5) translateY(-50px) rotate(15deg);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
}
