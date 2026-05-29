import { Heart } from 'lucide-react';
import { coupleInfo } from '../data';

export default function Footer() {
  return (
    <footer 
      className="relative bg-luxury-black/95 py-16 px-6 md:px-12 text-center overflow-hidden border-t border-luxury-gold/15"
      id="footer-section"
    >
      {/* Background radial soft light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-87.5 h-87.5 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto space-y-6">
        
        {/* Monogram Monogram Icon representation */}
        <div className="w-14 h-14 rounded-full border border-luxury-gold/30 flex items-center justify-center bg-luxury-black mx-auto relative shadow-gold-glow">
          <div className="absolute inset-0.5 rounded-full border border-dashed border-luxury-gold/30 animate-[spin_80s_linear_infinite]" />
          <span className="font-serif text-sm text-luxury-gold uppercase tracking-wider pl-[0.1em]">
            {coupleInfo.groom.nickName[0]}&{coupleInfo.bride.nickName[0]}
          </span>
        </div>

        <p className="font-serif text-xs md:text-sm text-luxury-gold uppercase tracking-[0.3em] font-medium pt-2">
          Terima Kasih Banyak
        </p>

        <h2 className="font-serif text-3xl md:text-4xl text-luxury-ivory font-light tracking-wide text-glow">
          Raga & Citra
        </h2>

        <div className="w-24 h-px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto" />

        <p className="font-sans text-xs text-luxury-cream/65 leading-relaxed max-w-sm mx-auto">
          Merupakan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i sekalian berkenan hadir dan memberikan doa restu kepada kami kedua mempelai.
        </p>

        {/* Dynamic credit label avoiding logs or unneeded tech clutter */}
        <div className="pt-10 flex flex-col items-center gap-1 font-sans text-[10px] text-luxury-cream/40">
          <div className="flex items-center gap-1.5 uppercase tracking-[0.15em] mb-1">
            <span>Dibuat penuh dengan</span>
            <Heart className="w-3 h-3 text-luxury-gold animate-[pulse_1.5s_infinite]" />
            <span>untuk Momen Bahagia</span>
          </div>
          <p className="font-serif italic text-luxury-gold/50">Copyright © 2026 Raga & Citra - All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
