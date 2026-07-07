import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { coupleInfo } from '../data';
import useQueryParam from '../hooks/useQueryParam';
import { formatIndonesianDate } from '../lib/dates';

interface SplashCoverProps {
  onOpen: () => void;
  isOpened?: boolean;
}

export default function SplashCover({ onOpen }: SplashCoverProps) {
  const coverRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Initial entrance animations for the splash elements
    const tl = gsap.timeline();
    
    tl.fromTo(monogramRef.current, 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(titleRef.current?.childNodes || [], 
      { y: 30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(buttonRef.current, 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" },
      "-=0.5"
    );

    // Subtle floating animation for background decorations
    gsap.to('.splash-particle', {
      y: '-=100',
      opacity: 0,
      stagger: {
        amount: 3,
        repeat: -1
      },
      duration: 4,
      ease: 'power1.out'
    });
  }, []);

  const handleOpenClick = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      }
    });

    // Elegant cinematic fade out and slide-up transition
    tl.to(contentRef.current, {
      opacity: 0,
      y: -50,
      duration: 0.8,
      ease: 'power2.inOut'
    })
    .to(coverRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1.2,
      ease: 'power4.inOut'
    }, '-=0.4');
  };

  const formattedDate = formatIndonesianDate(coupleInfo.weddingDate);

  return (
    <div
      id="splash-cover"
      ref={coverRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black bg-luxury-radial overflow-hidden select-none"
      style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
    >
      {/* Background soft glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 md:w-125 md:h-125 bg-luxury-gold/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Sparkles Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="splash-particle absolute w-1.5 h-1.5 bg-luxury-gold-light rounded-full blur-[0.5px]"
            style={{
              top: `${Math.random() * 80 + 10}%`,
              left: `${Math.random() * 90 + 5}%`,
              animation: `pulse ${Math.random() * 3 + 2}s infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Frame Gold Border */}
      <div className="absolute inset-4 md:inset-8 border border-luxury-gold/20 rounded pointer-events-none transition-all duration-700">
        <div className="absolute top-3 left-3 border-t-2 border-l-2 border-luxury-gold w-6 h-6" />
        <div className="absolute top-3 right-3 border-t-2 border-r-2 border-luxury-gold w-6 h-6" />
        <div className="absolute bottom-3 left-3 border-b-2 border-l-2 border-luxury-gold w-6 h-6" />
        <div className="absolute bottom-3 right-3 border-b-2 border-r-2 border-luxury-gold w-6 h-6" />
      </div>

      {/* Main Content Card Container */}
      <div 
        ref={contentRef}
        className="relative z-10 px-4 py-10 text-center w-full max-w-[min(95vw,42rem)] mx-auto flex flex-col items-center justify-center"
      >
        {/* Monogram Circle Badge */}
        <div 
          ref={monogramRef}
          className="mb-8 w-20 h-20 md:w-24 md:h-24 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-black/60 shadow-gold-glow relative group"
        >
          <span className="font-serif text-2xl md:text-3xl text-luxury-gold uppercase tracking-[0.25em] pl-[0.25em]">
            F&I
          </span>
        </div>

        {/* Title Group */}
        <div ref={titleRef} className="space-y-4">
          <p className="font-sans text-xs text-luxury-gold-light uppercase tracking-[0.35em] font-medium">
            Birthday Surprise Card
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-luxury-ivory font-light py-2 tracking-wide leading-tight text-glow">
            Fahira Ainun Nissa
          </h1>

          <div className="w-16 h-1px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto my-6" />

          {/* Love Note cover card addressed to Fahira */}
          <div className="glass-card rounded-2xl p-6.5 my-6 shadow-gold-glow max-w-sm mx-auto">
            <p className="font-sans text-xs text-luxury-gold/80 uppercase tracking-widest mb-1">
              Untuk Kamu,
            </p>
            <p className="font-serif text-lg text-luxury-ivory font-semibold capitalize my-1">
              Fahira Ainun Nissa
            </p>
            <div className="w-24 h-px bg-luxury-gold/20 mx-auto my-2" />
            <p className="font-sans text-xs text-luxury-cream/80 leading-relaxed">
              Hi Fahira, aku bikin halaman web ini khusus buat ngerayain hari lahir kamu. Dibuka ya kejutannya!
            </p>
          </div>

          {/* Info Date & Location Badge */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-luxury-cream/80 tracking-wide font-sans mt-4">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-luxury-gold" />
              <span>{formattedDate}</span>
            </div>
            <div className="hidden sm:block text-luxury-gold/40">•</div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-luxury-gold" />
              <span>Lembang, Bandung</span>
            </div>
          </div>
        </div>

        {/* Toggle Button */}
        <button
          ref={buttonRef}
          onClick={handleOpenClick}
          className="mt-10 w-full sm:w-auto px-8 py-3.5 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black font-sans uppercase text-xs font-semibold tracking-[0.2em] rounded shadow-gold-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group inline-flex items-center justify-center gap-2.5 cursor-pointer relative overflow-hidden"
          id="btn-open-invitation"
        >
          <span className="absolute inset-0 w-1/2 h-full bg-white/20 -skew-x-12 translate-x-[-150%] group-hover:animate-[shimmer_1.5s_infinite]" />
          <Heart className="w-4 h-4 text-luxury-black fill-current transition-transform group-hover:scale-110" />
          <span>Buka Kejutannya ♥</span>
        </button>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-150%) skewX(-12deg); }
          50% { transform: translateX(100%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}
