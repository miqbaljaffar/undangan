import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Calendar } from 'lucide-react';
import { loveStoryEvents } from '../data';

gsap.registerPlugin(ScrollTrigger);

export default function LoveStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal main header elements of this section
    if (titleContainerRef.current) {
      gsap.fromTo(titleContainerRef.current.childNodes,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleContainerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }

    // Scroll reveal for individual timeline stories
    const storyElements = document.querySelectorAll('.timeline-row');
    storyElements.forEach((row, index) => {
      const leftCol = row.querySelector('.col-left');
      const rightCol = row.querySelector('.col-right');
      const centerDot = row.querySelector('.col-dot');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: row,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });

      tl.fromTo(centerDot, 
        { scale: 0, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' }
      );

      if (leftCol) {
        tl.fromTo(leftCol, 
          { x: -50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        );
      }

      if (rightCol) {
        tl.fromTo(rightCol, 
          { x: 50, opacity: 0 }, 
          { x: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
          '-=0.4'
        );
      }
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-luxury-black/95 py-24 px-6 md:px-12 flex flex-col items-center justify-start overflow-hidden border-b border-luxury-gold/10"
      id="love-story-section"
    >
      {/* Background radial soft light */}
      <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-luxury-gold/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[250px] h-[250px] bg-luxury-gold/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Title Header */}
      <div 
        ref={titleContainerRef}
        className="text-center max-w-xl mx-auto space-y-4 mb-20 relative z-10"
      >
        <div className="inline-flex items-center justify-center p-2 rounded-full glass-card mb-2">
          <Sparkles className="w-4 h-4 text-luxury-gold" />
        </div>
        <p className="font-sans text-xs text-luxury-gold uppercase tracking-[0.3em] font-medium">
          Kisah Indah Kami
        </p>
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow">
          Our Love Story
        </h2>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto" />
        <p className="text-xs md:text-sm text-luxury-cream/70 font-sans max-w-sm mx-auto leading-relaxed">
          Bagaimana takdir merajut jemari kami, menempuh perjalanan penuh kasih menuju gerbang pernikahan.
        </p>
      </div>

      {/* Main Timeline Column */}
      <div className="relative w-full max-w-4xl mx-auto z-10">
        
        {/* Central Vertical Connector Line */}
        <div className="absolute left-[21px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[1px] bg-dashed border-l border-luxury-gold/25 pointer-events-none" />

        {/* Story Nodes */}
        <div className="space-y-16 md:space-y-24">
          {loveStoryEvents.map((story, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className="timeline-row grid grid-cols-1 md:grid-cols-11 items-center gap-6 relative"
              >
                
                {/* 1. Left Column (Shown on left side on desktop) */}
                <div className={`col-left order-2 md:order-1 md:col-span-5 ${isEven ? 'md:text-right' : 'md:text-left md:col-start-7'}`}>
                  
                  {/* Card wrapper */}
                  <div className="p-6 rounded-2xl glass-card shadow-gold-glow hover:border-luxury-gold/30 transition-all duration-300 relative group">
                    
                    {/* Pulsating Year Badge */}
                    <div className={`flex items-center gap-2 mb-3 text-luxury-gold font-serif text-lg md:text-xl font-medium ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <Calendar className="w-4 h-4 text-luxury-gold/80" />
                      <span>{story.year}</span>
                    </div>

                    <h4 className="font-serif text-xl text-luxury-ivory font-light mb-3 tracking-wide group-hover:text-luxury-gold-light transition-colors">
                      {story.title}
                    </h4>

                    <p className="font-sans text-xs text-luxury-cream/80 leading-relaxed text-justify md:text-inherit">
                      {story.description}
                    </p>
                  </div>

                </div>

                {/* 2. Middle Visual Ring Dot Indicator */}
                <div className="col-dot absolute left-[12px] md:left-1/2 md:-translate-x-1/2 flex items-center justify-center z-15">
                  <div className="w-5 h-5 rounded-full bg-luxury-black border border-luxury-gold flex items-center justify-center p-1.5 shadow-gold-glow">
                    {/* Inner gold flashing nucleus */}
                    <div className="w-full h-full rounded-full bg-luxury-gold animate-pulse" />
                  </div>
                </div>

                {/* 3. Right Column (Showing premium Photo) */}
                <div className={`col-right order-3 md:col-span-5 flex justify-center ${isEven ? 'md:order-3 md:col-start-7' : 'md:order-1 md:text-right'}`}>
                  
                  <div className="relative w-full max-w-sm h-48 md:h-56 overflow-hidden rounded-lg shadow-gold-glow border border-luxury-gold/15 p-1 bg-luxury-dark/50 transition-all duration-500 hover:border-luxury-gold/50 group">
                    <div className="w-full h-full overflow-hidden rounded">
                      <img 
                        src={story.image} 
                        alt={story.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-108 filter brightness-95"
                      />
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
