import { useEffect, useState, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';
import useBodyScrollLock from '../hooks/useBodyScrollLock';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useBodyScrollLock(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    const timeout = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          scale: 1.05,
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => {
            setLoading(false);
          }
        });
      }
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-luxury-black text-luxury-ivory"
      style={{ pointerEvents: 'auto' }}
    >
      {/* Absolute core aesthetic decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-luxury-gold/5 rounded-full blur-[80px]" />

      <div className="text-center space-y-6 relative z-10">
        {/* Monogram circle */}
        <div className="w-16 h-16 rounded-full border border-luxury-gold/25 flex items-center justify-center bg-luxury-black/80 mx-auto relative shadow-gold-glow animate-[pulse_2s_infinite]">
          <Sparkles className="w-5 h-5 text-luxury-gold animate-[spin_10s_linear_infinite]" />
        </div>

        <div className="space-y-1">
          <p className="font-sans text-[10px] text-luxury-gold uppercase tracking-[0.35em] font-medium pl-[0.35em]">
            Digital Invitation
          </p>
          <h2 className="font-serif text-xl text-luxury-ivory font-light tracking-widest uppercase">
            Iqbal & Fahira
          </h2>
        </div>

        {/* Custom Progress bar */}
        <div className="w-36 h-[1.5px] bg-luxury-gold/10 mx-auto relative rounded-full overflow-hidden">
          <div 
            className="h-full bg-luxury-gold transition-all duration-75 ease-out" 
            style={{ width: `${progress}%` }}
          />
        </div>

        <p className="font-sans text-[10px] text-luxury-cream/40 tracking-[0.2em] uppercase pl-[0.2em]">
          Membuka Lembaran Cinta... {progress}%
        </p>
      </div>
    </div>
  );
}
