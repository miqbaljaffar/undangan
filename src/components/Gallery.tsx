import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Image, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { galleryItems } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<'all' | 'romantic' | 'ceremony' | 'prewedding'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  useEffect(() => {
    // Scroll entrance animation
    if (containerRef.current) {
      gsap.fromTo('.gallery-animate-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-animate-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const openLightbox = (id: number) => {
    // Find index of the clicked item inside filtered items list so carousel navigation works perfectly
    const index = filteredItems.findIndex(item => item.id === id);
    if (index !== -1) {
      setLightboxIndex(index);
      // Disable background document scroll when lightbox is active
      document.body.style.overflow = 'hidden';
    }
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevSlide = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-luxury-black py-24 px-6 md:px-12 overflow-hidden border-b border-luxury-gold/10"
      id="gallery-section"
    >
      {/* Background Soft Glow */}
      <div className="absolute bottom-10 right-10 w-75 h-75 bg-luxury-gold/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-luxury-gold text-xs font-sans tracking-widest uppercase mb-2">
          <Image className="w-3.5 h-3.5" />
          <span>Galeri Romantis</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow gallery-animate-header">
          Glimpse of Love
        </h2>
        
        <div className="w-16 h-px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto gallery-animate-header" />
        
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8 z-10 gallery-animate-header">
          {(['all', 'romantic', 'ceremony', 'prewedding'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full border text-xs font-sans uppercase tracking-[0.15em] transition-all duration-300 pointer-events-auto cursor-pointer ${
                filter === cat 
                  ? 'bg-luxury-gold text-luxury-black border-transparent font-semibold shadow-gold-glow' 
                  : 'glass-card text-luxury-cream/70 hover:border-luxury-gold/30 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat === 'all' ? 'All' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Columns Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item.id)}
              className="break-inside-avoid relative overflow-hidden rounded-2xl glass-card shadow-gold-glow p-1.5 cursor-pointer group hover:border-luxury-gold/40 transition-all duration-500"
            >
              <div className="relative h-auto w-full overflow-hidden rounded">
                <img
                  src={item.url}
                  alt={item.caption}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                />

                {/* Ambient Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-luxury-black via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="text-[10px] font-sans text-luxury-gold uppercase tracking-widest font-semibold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-serif text-base text-luxury-ivory font-light tracking-wide transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                    {item.caption}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Modal Lightbox Slider */}
      {lightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-luxury-black/98 backdrop-blur-lg select-none"
          onClick={closeLightbox}
        >
          {/* Top Info Bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-luxury-cream text-xs font-sans">
            <div>
              <span className="text-luxury-gold uppercase tracking-widest font-semibold mr-2">
                {filteredItems[lightboxIndex].category}
              </span>
              <span className="opacity-60">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
            </div>
            
            <button 
              onClick={closeLightbox}
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Nav buttons and Image viewport */}
          <div className="relative w-full max-w-4xl max-h-[75vh] px-4 flex items-center justify-between gap-4" onClick={(e) => e.stopPropagation()}>
            
            <button
              onClick={prevSlide}
              className="absolute left-6 md:-left-8 z-10 w-11 h-11 rounded-full bg-luxury-black/80 border border-luxury-gold/20 flex items-center justify-center hover:border-luxury-gold text-luxury-gold cursor-pointer transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="w-full h-full flex items-center justify-center relative rounded overflow-hidden shadow-gold-glow">
              <img
                src={filteredItems[lightboxIndex].url}
                alt={filteredItems[lightboxIndex].caption}
                referrerPolicy="no-referrer"
                className="max-h-[75vh] max-w-full object-contain rounded"
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-6 md:-right-8 z-10 w-11 h-11 rounded-full bg-luxury-black/80 border border-luxury-gold/20 flex items-center justify-center hover:border-luxury-gold text-luxury-gold cursor-pointer transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption text */}
          <div className="absolute bottom-10 text-center max-w-md px-6 my-2" onClick={(e) => e.stopPropagation()}>
            <p className="font-serif text-lg md:text-xl text-luxury-ivory font-light italic leading-relaxed text-glow">
              "{filteredItems[lightboxIndex].caption}"
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
