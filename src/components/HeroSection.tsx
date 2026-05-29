import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Instagram, CalendarClock, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { coupleInfo, romanceQuote } from '../data';
import useCountdown from '../hooks/useCountdown';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const timeLeft = useCountdown(coupleInfo.weddingDate);
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect on main hero background photo using GSAP
    if (heroImageRef.current) {
      gsap.to(heroImageRef.current, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    // Scroll reveal quote using GSAP
    if (quoteRef.current) {
      gsap.fromTo(quoteRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen bg-luxury-black flex flex-col justify-start items-center overflow-hidden py-24 px-6 md:px-12 border-b border-luxury-gold/10"
      id="hero-section"
    >
      {/* Background Parallax Banner */}
      <div className="absolute inset-0 h-[115%] w-full overflow-hidden pointer-events-none opacity-20">
        <div 
          ref={heroImageRef}
          className="w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200')" 
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-luxury-black via-luxury-black/90 to-transparent" />
      </div>

      {/* Floating Monogram decoration in background */}
      <div className="absolute top-10 right-10 md:top-20 md:right-20 opacity-5 w-48 h-48 md:w-96 md:h-96 border border-luxury-gold rounded-full pointer-events-none flex items-center justify-center">
        <div className="w-5/6 h-5/6 border border-dashed border-luxury-gold/50 rounded-full animate-[spin_100s_linear_infinite]" />
      </div>

      {/* 1. Welcoming Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto space-y-4 mb-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xs md:text-sm text-luxury-gold uppercase tracking-[0.4em] font-medium"
        >
          Walimatul 'Urs
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow"
        >
          Pernikahan Agung
        </motion.h2>
        <div className="w-12 h-px bg-luxury-gold mx-auto my-4" />
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="font-serif italic text-sm md:text-base text-luxury-cream/80 max-w-lg mx-auto leading-relaxed"
        >
          Menaungi ikatan janji suci dwi rasa, meniti mahligai ridho-Nya di dunia dan keabadian.
        </motion.p>
      </div>

      {/* 2. Stunning Couple Presentation */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center my-10">
        
        {/* Groom Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center text-center space-y-6 group w-full"
        >
          {/* Photo Frame Container with glow */}
          <div className="relative w-full max-w-sm h-72 md:h-96 overflow-hidden rounded-lg shadow-gold-glow border border-luxury-gold/20 p-2 bg-luxury-dark/60 transition-luxury hover:border-luxury-gold">
            {/* Corner floral lines */}
            <div className="absolute top-4 left-4 border-t border-l border-luxury-gold/40 w-4 h-4 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
            <div className="absolute bottom-4 right-4 border-b border-r border-luxury-gold/40 w-4 h-4 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
            
            <div className="w-full h-full overflow-hidden rounded">
              <img 
                src={coupleInfo.groom.photo} 
                alt={coupleInfo.groom.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108 filter contrast-102 brightness-95"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl text-luxury-ivory font-light tracking-wide leading-none mt-2">
              {coupleInfo.groom.fullName}
            </h3>
            <p className="font-sans text-xs text-luxury-gold/70 uppercase tracking-widest">
              — Putra dari Keluarga
            </p>
            <div className="text-sm text-luxury-cream/80 leading-relaxed font-serif italic">
              <p>{coupleInfo.groom.fatherName}</p>
              <p>& {coupleInfo.groom.motherName}</p>
            </div>
            
            <a 
              href={coupleInfo.groom.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs font-sans text-luxury-gold hover:text-luxury-gold-light border border-luxury-gold/25 hover:border-luxury-gold/60 rounded-full px-4 py-1.5 transition-all duration-300 bg-luxury-black/30 backdrop-blur"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{coupleInfo.groom.nickName.toLowerCase()}</span>
            </a>
          </div>
        </motion.div>

        {/* Bride Profile Card */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="flex flex-col items-center text-center space-y-6 group"
        >
          {/* Photo Frame Container with glow */}
          <div className="relative w-full max-w-sm h-72 md:h-96 overflow-hidden rounded-lg shadow-gold-glow border border-luxury-gold/20 p-2 bg-luxury-dark/60 transition-luxury hover:border-luxury-gold">
            {/* Corner floral lines */}
            <div className="absolute top-4 left-4 border-t border-l border-luxury-gold/40 w-4 h-4 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
            <div className="absolute bottom-4 right-4 border-b border-r border-luxury-gold/40 w-4 h-4 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
            
            <div className="w-full h-full overflow-hidden rounded">
              <img 
                src={coupleInfo.bride.photo} 
                alt={coupleInfo.bride.fullName}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108 filter contrast-102 brightness-95"
              />
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="font-serif text-2xl md:text-3xl text-luxury-ivory font-light tracking-wide leading-none mt-2">
              {coupleInfo.bride.fullName}
            </h3>
            <p className="font-sans text-xs text-luxury-gold/70 uppercase tracking-widest">
              — Putri dari Keluarga
            </p>
            <div className="text-sm text-luxury-cream/80 leading-relaxed font-serif italic">
              <p>{coupleInfo.bride.fatherName}</p>
              <p>& {coupleInfo.bride.motherName}</p>
            </div>

            <a 
              href={coupleInfo.bride.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-xs font-sans text-luxury-gold hover:text-luxury-gold-light border border-luxury-gold/25 hover:border-luxury-gold/60 rounded-full px-4 py-1.5 transition-all duration-300 bg-luxury-black/30 backdrop-blur"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>@{coupleInfo.bride.nickName.toLowerCase()}</span>
            </a>
          </div>
        </motion.div>

      </div>

      {/* 3. Romantic Quote Section */}
      <div 
        ref={quoteRef}
        className="relative z-10 text-center max-w-2xl mx-auto my-16 px-6 py-8 glass-card rounded-2xl shadow-gold-glow"
      >
        <p className="font-serif text-sm md:text-base text-luxury-cream leading-relaxed italic">
          {romanceQuote.text}
        </p>
        <p className="font-sans text-xs text-luxury-gold uppercase tracking-[0.2em] font-semibold mt-4">
          — {romanceQuote.source}
        </p>
      </div>

      {/* 4. Elegant Dynamic Countdown Timer */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-3xl mx-auto text-center"
      >
        <div className="flex items-center justify-center gap-2 text-xs text-luxury-gold uppercase tracking-[0.25em] mb-6 font-medium">
          <CalendarClock className="w-4 h-4" />
          <span>Menghitung Hari Bahagia</span>
        </div>

        {/* Digit boxes in bento layout */}
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          
          {/* Days */}
          <div className="glass-card p-4 md:p-6 rounded-2xl shadow-gold-glow relative overflow-hidden group hover:border-luxury-gold/40 transition-all duration-300">
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-gold font-light tracking-tight block">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] md:text-xs text-luxury-cream/60 uppercase tracking-wider block mt-2">
              Hari
            </span>
          </div>

          {/* Hours */}
          <div className="glass-card p-4 md:p-6 rounded-2xl shadow-gold-glow relative overflow-hidden group hover:border-luxury-gold/40 transition-all duration-300">
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-gold font-light tracking-tight block">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] md:text-xs text-luxury-cream/60 uppercase tracking-wider block mt-2">
              Jam
            </span>
          </div>

          {/* Minutes */}
          <div className="glass-card p-4 md:p-6 rounded-2xl shadow-gold-glow relative overflow-hidden group hover:border-luxury-gold/40 transition-all duration-300">
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-gold font-light tracking-tight block">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] md:text-xs text-luxury-cream/60 uppercase tracking-wider block mt-2">
              Menit
            </span>
          </div>

          {/* Seconds */}
          <div className="glass-card p-4 md:p-6 rounded-2xl shadow-gold-glow relative overflow-hidden group hover:border-luxury-gold/40 transition-all duration-300">
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl text-luxury-gold font-light tracking-tight block">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-sans text-[10px] md:text-xs text-luxury-cream/60 uppercase tracking-wider block mt-2">
              Detik
            </span>
          </div>

        </div>
      </motion.div>

      {/* Floating Chevron Indicator to scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce cursor-pointer">
        <span className="text-[10px] font-sans tracking-[0.2em] text-luxury-cream uppercase pl-[0.2em]">Scroll</span>
        <ChevronDown className="w-4 h-4 text-luxury-gold" />
      </div>
    </section>
  );
}
