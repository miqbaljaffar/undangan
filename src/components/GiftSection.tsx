import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift, Copy, Check, Info } from 'lucide-react';
import { digitalGifts } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function GiftSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    // Scroll entrance animations
    if (containerRef.current) {
      gsap.fromTo('.gift-animate-element',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gift-animate-element',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const handleCopy = (accountNum: string, index: number) => {
    navigator.clipboard.writeText(accountNum)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
      })
      .catch((e) => console.error("Clipboard copy failed", e));
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-luxury-black py-24 px-6 md:px-12 overflow-hidden border-b border-luxury-gold/10"
      id="gift-section"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-luxury-gold text-xs font-sans tracking-widest uppercase mb-2">
          <Gift className="w-3.5 h-3.5" />
          <span>Kirim Tanda Kasih</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow gift-animate-element">
          Wedding Gift
        </h2>
        
        <div className="w-16 h-px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto gift-animate-element" />
        
        <p className="text-xs md:text-sm text-luxury-cream/70 font-sans max-w-md mx-auto leading-relaxed gift-animate-element">
          Doa restu Anda adalah karunia paling berarti bagi kami. Namun jika Anda ingin mengirimkan tanda kasih digital, kami menyediakan gerbang amplop digital berikut.
        </p>
      </div>

      {/* Cards container grid */}
      <div className="relative z-10 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        {digitalGifts.map((gift, index) => {
          return (
            <div 
              key={index}
              className="gift-animate-element p-6 md:p-8 rounded-2xl glass-card shadow-gold-glow relative overflow-hidden group hover:border-luxury-gold/40 transition-luxury flex flex-col justify-between h-58"
            >
              {/* Card texture/grid line decors */}
              <div className="absolute inset-0 bg-linear-to-tr from-luxury-black/40 via-transparent to-luxury-gold/5 pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors" />

              <div className="flex items-start justify-between">
                {/* Bank badge title */}
                <div className="space-y-1">
                  <span className="text-[10px] font-sans text-luxury-gold uppercase tracking-[0.2em] font-bold block">
                    Digital Envelope
                  </span>
                  <p className="font-serif text-lg text-luxury-ivory font-semibold tracking-wide">
                    {gift.bankName}
                  </p>
                </div>
                
                {/* Embedded Metallic Icon badge */}
                <div className="w-10 h-10 rounded-lg bg-luxury-black border border-luxury-gold/15 flex items-center justify-center text-luxury-gold">
                  <span className="font-serif text-xs font-semibold">GOLD</span>
                </div>
              </div>

              {/* Number and account holder */}
              <div className="mt-4">
                <span className="font-mono text-lg md:text-xl text-luxury-gold-light tracking-widest font-medium block select-all">
                  {gift.accountNumber.replace(/(\d{4})/g, '$1 ')}
                </span>
                <span className="font-serif text-sm text-luxury-cream/75 block uppercase tracking-wide mt-1.5">
                  a.n. {gift.accountHolder}
                </span>
              </div>

              {/* Action row copy button */}
              <div className="mt-6 flex items-center justify-between gap-4 relative z-10 pt-4 border-t border-luxury-gold/10">
                <div className="flex items-center gap-1.5 text-[10px] font-sans text-luxury-cream/50">
                  <Info className="w-3.5 h-3.5 text-luxury-gold/40" />
                  <span>Tekan untuk salin nomor rekening</span>
                </div>

                <button
                  onClick={() => handleCopy(gift.accountNumber, index)}
                  className={`px-4 py-2 rounded text-[10px] font-sans uppercase tracking-[0.15em] font-bold cursor-pointer flex items-center gap-1.5 transition-all duration-300 ${
                    copiedIndex === index 
                      ? 'bg-emerald-500 text-white shadow-none scale-[0.98]' 
                      : 'bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black shadow-gold-glow hover:scale-[1.02]'
                  }`}
                  id={`btn-copy-gift-${index}`}
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Berhasil Disalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin Rekening</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
