import { useEffect, useState } from 'react';

interface RomanceParticle {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
  type: 'petal' | 'heart';
  color: string;
}

export default function FloatingFlowers() {
  const [particles, setParticles] = useState<RomanceParticle[]>([]);

  useEffect(() => {
    const colors = [
      '#db5a7c', // rose gold pink
      '#a22946', // ruby red
      '#7f1d1d', // deep dark crimson
      '#f59eb5', // light blush pink
      '#f43f5e', // passionate rose
    ];

    // Generate gentle petals and hearts
    const list: RomanceParticle[] = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage x-axis placement
      delay: Math.random() * 12,  // delay start offset
      duration: Math.random() * 15 + 15, // fall down duration
      size: Math.random() * 12 + 8,       // dimensions
      rotation: Math.random() * 360,      // starting angle
      type: i % 2 === 0 ? 'petal' : 'heart',
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(list);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10 opacity-45">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-fall select-none"
          style={{
            left: `${particle.left}%`,
            top: `-30px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            fontSize: `${particle.size}px`,
            color: particle.color,
            transform: `rotate(${particle.rotation}deg)`,
          }}
        >
          {particle.type === 'heart' ? (
            <span style={{ textShadow: `0 0 5px ${particle.color}7f` }}>♥</span>
          ) : (
            /* SVG representing a curved rose petal */
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-full h-full"
              style={{ color: particle.color }}
            >
              <path d="M12 2C8.5 6.5 6 10.5 6 14c0 3.3 2.7 6 6 6s6-2.7 6-6c0-3.5-2.5-7.5-6-12zm0 16c-2.2 0-4-1.8-4-4 0-2.4 1.7-5.5 4-8.8 2.3 3.3 4 6.4 4 8.8 0 2.2-1.8 4-4 4z" />
            </svg>
          )}
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(115vh) rotate(360deg) translateX(40px);
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
