import { useEffect, useState } from 'react';

interface LeafParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export default function FloatingFlowers() {
  const [particles, setParticles] = useState<LeafParticle[]>([]);

  useEffect(() => {
    // Generate gentle petals
    const list: LeafParticle[] = [...Array(10)].map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage x-axis placement
      delay: Math.random() * 10,  // delay start offset
      duration: Math.random() * 12 + 15, // fall down duration
      size: Math.random() * 8 + 6,       // petal dimensions
      rotation: Math.random() * 360      // starting angle
    }));

    setParticles(list);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-30">
      {particles.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute text-luxury-gold/60 animate-fall select-none"
          style={{
            left: `${leaf.left}%`,
            top: `-20px`,
            animationDelay: `${leaf.delay}s`,
            animationDuration: `${leaf.duration}s`,
            fontSize: `${leaf.size}px`,
            transform: `rotate(${leaf.rotation}deg)`,
          }}
        >
          {/* SVG representation of an elegant minimalistic falling flower petal or leaf */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-full h-full text-luxury-gold"
          >
            <path d="M12 2C8.5 6.5 6 10.5 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-2.5-7.5-6-12zm0 16c-2.2 0-4-1.8-4-4 0-2.4 1.7-5.5 4-8.8 2.3 3.3 4 6.4 4 8.8 0 2.2-1.8 4-4 4z" />
          </svg>
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-fall {
          animation: fall linear infinite;
        }
      `}</style>
    </div>
  );
}
