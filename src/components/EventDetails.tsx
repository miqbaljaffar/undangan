import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, MapPin, Navigation, CalendarDays, ExternalLink, ShieldCheck } from 'lucide-react';
import { weddingEvents } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function EventDetails() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0); // Index of event selection

  useEffect(() => {
    // Scroll reveal title and sections
    if (containerRef.current) {
      gsap.fromTo('.event-animate-header',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.event-animate-header',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Slide-up bento card reveal
    if (cardsRef.current) {
      gsap.fromTo('.event-bento-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const handleSaveToCalendar = () => {
    // Generate valid Google Calendar event addition URL for July 17, 2026
    const title = encodeURIComponent("Perayaan Ulang Tahun Fahira Ainun Nissa");
    const dates = "20260717T120000Z/20260717T140000Z"; // UTC Date
    const details = encodeURIComponent("Kehadiran Anda adalah kehormatan bagi kami. Mari bersama merayakan hari kelahiran belahan jiwa saya, Fahira Ainun Nissa.");
    const location = encodeURIComponent("The Peak Resort Dining, Lembang, Bandung");
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-luxury-black py-24 px-6 md:px-12 overflow-hidden border-b border-luxury-gold/10"
      id="event-details-section"
    >
      {/* Background Soft Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-87.5 h-87.5 bg-luxury-gold/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Header and navigation tabs */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-20 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-luxury-gold text-xs font-sans tracking-widest uppercase mb-2">
          <CalendarDays className="w-3.5 h-3.5" />
          <span>Agenda Perayaan</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow event-animate-header">
          Detail Perayaan
        </h2>
        
        <div className="w-16 h-px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto event-animate-header" />
        
        <p className="text-xs md:text-sm text-luxury-cream/70 font-sans max-w-md mx-auto leading-relaxed event-animate-header">
          Kehadiran dan doa restu yang tulus dari keluarga serta sahabat dekat akan menyertai momen indah pertambahan usia Fahira.
        </p>
      </div>

      {/* Main Events Cards Layout */}
      <div 
        ref={cardsRef}
        className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
      >
        {weddingEvents.map((event, index) => {
          return (
            <div 
              key={index}
              onClick={() => setActiveTab(index)}
              className={`event-bento-card p-6 md:p-8 rounded-2xl glass-card cursor-pointer transition-luxury shadow-gold-glow flex flex-col justify-between relative group ${
                activeTab === index 
                  ? 'ring-2 ring-luxury-gold border-luxury-gold/50 bg-white/8' 
                  : 'border-white/10 hover:border-luxury-gold/30 hover:bg-white/8'
              }`}
            >
              {/* Event Badge Icon overlay */}
              <div className="absolute top-6 right-6 w-9 h-9 rounded-full border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-110 transition-transform duration-300">
                {index === 0 ? <ShieldCheck className="w-4 h-4" /> : <Calendar className="w-4 h-4" />}
              </div>

              <div>
                {/* Accent Tag */}
                <span className="font-sans text-[10px] md:text-xs text-luxury-gold font-semibold uppercase tracking-[0.2em]">
                  {index === 0 ? "Dinner Romantis" : "Pesta Ulang Ulang Tahun"}
                </span>

                <h3 className="font-serif text-2xl md:text-3xl text-luxury-ivory font-light mt-2 mb-6 tracking-wide text-glow">
                  {event.title}
                </h3>

                {/* Info parameters */}
                <div className="space-y-4 font-sans text-xs md:text-sm text-luxury-cream/90">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span className="tracking-wide">{event.date}</span>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <span className="tracking-wide">{event.time}</span>
                  </div>

                  <div className="flex items-start gap-3 border-t border-luxury-gold/10 pt-4 mt-2">
                    <MapPin className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                    <div className="space-y-1">
                      <p className="font-serif text-luxury-ivory text-sm md:text-base font-medium">{event.venue}</p>
                      <p className="text-xs text-luxury-cream/60 leading-relaxed font-sans mt-1">{event.address}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom actionable row */}
              <div className="mt-8 pt-4 border-t border-luxury-gold/15 flex flex-wrap items-center justify-between gap-4">
                <a 
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[10px] md:text-xs font-sans text-luxury-gold hover:text-luxury-gold-light tracking-widest uppercase transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Petunjuk Arah</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                {index === 0 && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSaveToCalendar();
                    }}
                    className="px-4 py-2 bg-luxury-gold/10 hover:bg-luxury-gold text-luxury-gold hover:text-luxury-black border border-luxury-gold/20 hover:border-transparent rounded font-sans text-[10px] uppercase tracking-widest font-semibold transition-all duration-300"
                    id="btn-save-calendar"
                  >
                    Save To Calendar
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Embedded Dynamic Interactive Map View */}
      <div className="relative z-10 w-full max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden glass-card shadow-gold-glow p-2">
        <div className="w-full h-80 md:h-100 rounded-xl overflow-hidden relative">
          <iframe
            title="Google Maps Location"
            src={weddingEvents[activeTab].mapsEmbedUrl}
            width="100%"
            height="100%"
            className="border-0 grayscale invert-90 contrast-105 opacity-85 hover:opacity-100 transition-opacity duration-500"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="p-4 flex flex-col md:flex-row items-center justify-between gap-4 bg-luxury-black/70 rounded-b font-sans text-xs">
          <div>
            <span className="text-luxury-gold font-semibold uppercase tracking-wider block mb-1">Lokasi Aktif:</span>
            <span className="text-luxury-cream/80">{weddingEvents[activeTab].venue}</span>
          </div>
          <a
            href={weddingEvents[activeTab].mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black rounded font-semibold uppercase tracking-widest text-[10px] transition-all duration-300 hover:scale-[1.02] flex items-center gap-1.5"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Buka Google Maps</span>
          </a>
        </div>
      </div>
    </section>
  );
}
