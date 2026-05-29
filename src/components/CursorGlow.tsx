import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
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

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
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
      <div className="w-1.5 h-1.5 rounded-full bg-luxury-gold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(197,160,89,0.8)]" />
    </div>
  );
}
