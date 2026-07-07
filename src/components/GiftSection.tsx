import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gift, Coffee, Heart, Compass, Sparkles, Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface LoveCoupon {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  icon: 'coffee' | 'dinner' | 'trip' | 'flowers';
  emoji: string;
}

const loveCoupons: LoveCoupon[] = [
  {
    id: 1,
    title: "Kencan Kopi Hangat",
    subTitle: "Cozy Coffee Date",
    description: "Kupon kencan obrolan sore berdua tanpa ponsel. Hanya kopi hangat, sepotong kue, dan waktu berkualitas penuh tawa bersamamu.",
    icon: 'coffee',
    emoji: "☕"
  },
  {
    id: 2,
    title: "Candlelight Dinner",
    subTitle: "Romantic Dinner Date",
    description: "Makan malam temaram dengan alunan musik lembut, hidangan kesukaanmu, dan dekorasi meja bertabur mawar merah.",
    icon: 'dinner',
    emoji: "🕯️"
  },
  {
    id: 3,
    title: "Weekend Getaway",
    subTitle: "Intimate Nature Trip",
    description: "Pelarian singkat di akhir pekan ke tempat sejuk di Orchid Forest Lembang untuk menyegarkan pikiran dan melepas lelah bersama.",
    icon: 'trip',
    emoji: "🌲"
  },
  {
    id: 4,
    title: "Surprise Bouquet",
    subTitle: "Special Red Roses",
    description: "Sebuket bunga mawar merah segar pilihan terbaik yang akan diantarkan langsung ke depan pintumu sebagai ungkapan sayang.",
    icon: 'flowers',
    emoji: "💐"
  }
];

export default function GiftSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedCoupon, setSelectedCoupon] = useState<LoveCoupon | null>(null);

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

  const handleClaim = (coupon: LoveCoupon) => {
    setSelectedCoupon(coupon);
  };

  const closePopup = () => {
    setSelectedCoupon(null);
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
          <span>Kado Kejutan Virtual</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow gift-animate-element">
          Virtual Love Coupons
        </h2>
        
        <div className="w-16 h-px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto gift-animate-element" />
        
        <p className="text-xs md:text-sm text-luxury-cream/70 font-sans max-w-md mx-auto leading-relaxed gift-animate-element">
          Sebagai hadiah kado kejutan ulang tahunmu, aku mempersembahkan buku kupon virtual ini. Pilih kupon cinta yang ingin kamu klaim untuk kencan nyata kita!
        </p>
      </div>

      {/* Coupons grid */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center">
        {loveCoupons.map((coupon) => {
          return (
            <div 
              key={coupon.id}
              className="gift-animate-element p-6 md:p-8 rounded-2xl glass-card shadow-gold-glow relative overflow-hidden group hover:border-luxury-gold/40 transition-luxury flex flex-col justify-between"
            >
              {/* Card texture decors */}
              <div className="absolute inset-0 bg-linear-to-tr from-luxury-black/40 via-transparent to-luxury-gold/5 pointer-events-none" />
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-luxury-gold/5 rounded-full blur-xl group-hover:bg-luxury-gold/10 transition-colors" />

              <div>
                <div className="flex items-start justify-between">
                  {/* Bank badge title */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-sans text-luxury-gold uppercase tracking-[0.2em] font-bold block">
                      Love Coupon No. 0{coupon.id}
                    </span>
                    <p className="font-serif text-lg md:text-xl text-luxury-ivory font-semibold tracking-wide">
                      {coupon.title}
                    </p>
                  </div>
                  
                  {/* Embedded Icon */}
                  <div className="w-12 h-12 rounded-full bg-luxury-black border border-luxury-gold/20 flex items-center justify-center text-luxury-gold text-xl shadow-gold-glow">
                    {coupon.icon === 'coffee' && <Coffee className="w-5 h-5" />}
                    {coupon.icon === 'dinner' && <Heart className="w-5 h-5 fill-current" />}
                    {coupon.icon === 'trip' && <Compass className="w-5 h-5" />}
                    {coupon.icon === 'flowers' && <Sparkles className="w-5 h-5" />}
                  </div>
                </div>

                <div className="mt-4">
                  <span className="font-serif text-xs md:text-sm text-luxury-gold-light italic block">
                    — {coupon.subTitle}
                  </span>
                  <p className="font-sans text-xs text-luxury-cream/80 leading-relaxed mt-2.5">
                    {coupon.description}
                  </p>
                </div>
              </div>

              {/* Action row button */}
              <div className="mt-8 flex items-center justify-between gap-4 relative z-10 pt-4 border-t border-luxury-gold/10">
                <div className="flex items-center gap-1.5 text-[22px] font-sans">
                  <span>{coupon.emoji}</span>
                </div>

                <button
                  onClick={() => handleClaim(coupon)}
                  className="px-5 py-2.5 rounded bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black text-[10px] font-sans uppercase tracking-[0.15em] font-bold cursor-pointer shadow-gold-glow hover:scale-[1.03] transition-all duration-300"
                  id={`btn-claim-coupon-${coupon.id}`}
                >
                  Klaim Kupon
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Claim Success Popup Modal */}
      {selectedCoupon && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-luxury-black/90 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]"
          onClick={closePopup}
        >
          <div 
            className="w-full max-w-md p-6 md:p-8 rounded-2xl glass-card border border-luxury-gold/40 shadow-gold-glow relative bg-luxury-dark text-center space-y-6 animate-[zoomIn_0.4s_cubic-bezier(0.175,0.885,0.32,1.275)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button 
              onClick={closePopup}
              className="absolute top-4 right-4 text-luxury-cream/60 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Checkmark circle */}
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-sans text-luxury-gold uppercase tracking-[0.2em] font-bold block">
                Kado Terpilih!
              </span>
              <h3 className="font-serif text-2xl text-luxury-ivory font-light tracking-wide text-glow">
                {selectedCoupon.title}
              </h3>
              <p className="text-xs text-luxury-cream/60 font-sans italic">
                "{selectedCoupon.subTitle}"
              </p>
            </div>

            <div className="w-16 h-px bg-luxury-gold/20 mx-auto" />

            <p className="font-sans text-xs md:text-sm text-luxury-cream/90 leading-relaxed max-w-sm mx-auto">
              Kupon berhasil diclaim secara virtual! ♥ Screenshot bagian ini terus kirim ke chat Iqbal buat dapetin kado kamu yaa.
            </p>

            <button
              onClick={closePopup}
              className="w-full py-3 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black uppercase tracking-widest text-xs font-semibold rounded cursor-pointer transition-all duration-300 hover:scale-[1.01]"
            >
              Tutup & Chat Iqbal
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
