import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, Users, CheckCircle, Send, HeartHandshake } from 'lucide-react';
import { RSVP } from '../types';
import useLocalStorageState from '../hooks/useLocalStorageState';

gsap.registerPlugin(ScrollTrigger);

const initialWishes: RSVP[] = [
  {
    id: "1",
    name: "Raisa & Aditya",
    guests: 2,
    status: "hadir",
    wish: "Barakallah fii umrik Fahira! Semoga panjang umur, sehat selalu, dan dilancarkan segala impiannya bersama Iqbal. Pesta makan malam romantisnya terdengar seru sekali!",
    createdAt: new Date(Date.now() - 4 * 3600 * 1000).toISOString() // 4 hours ago
  },
  {
    id: "2",
    name: "Bima Seno Hadi",
    guests: 0,
    status: "tidak_hadir",
    wish: "Selamat ulang tahun Fahira! Doa terbaik dari Lembang. Mohon maaf belum bisa hadir langsung ke Orchid Forest karena tugas kedinasan. Semoga dilancarkan!",
    createdAt: new Date(Date.now() - 10 * 3600 * 1000).toISOString() // 10 hours ago
  },
  {
    id: "3",
    name: "Sarah Amalia",
    guests: 1,
    status: "hadir",
    wish: "Happy Birthday my girl Fahira! Wish you all the best, makin cantik dan sukses terus. Can't wait to see you at Orchid Forest birthday party! See you!",
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString() // 1 day ago
  }
];

export default function RSVPForm() {
  const [wishes, setWishes] = useLocalStorageState<RSVP[]>('wedding_rsvps', initialWishes);
  const [formData, setFormData] = useState({
    name: '',
    guests: '1',
    status: 'hadir',
    wish: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo('.rsvp-animate-element',
        { opacity: 0, y: 35 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.rsvp-animate-element',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.wish.trim()) return;

    setIsSubmitting(true);

    // Simulate real database write delay
    setTimeout(() => {
      const newRSVP: RSVP = {
        id: Date.now().toString(),
        name: formData.name.trim(),
        guests: formData.status === 'hadir' ? parseInt(formData.guests) : 0,
        status: formData.status as 'hadir' | 'tidak_hadir',
        wish: formData.wish.trim(),
        createdAt: new Date().toISOString()
      };

      const updatedWishes = [newRSVP, ...wishes];
      setWishes(updatedWishes);
      localStorage.setItem('wedding_rsvps', JSON.stringify(updatedWishes));

      // Reset Form fields
      setFormData({
        name: '',
        guests: '1',
        status: 'hadir',
        wish: ''
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Hide success state after 4 seconds
      setTimeout(() => setSubmitSuccess(false), 4000);
    }, 1200);
  };

  return (
    <section 
      ref={containerRef}
      className="relative bg-luxury-black/95 py-24 px-6 md:px-12 overflow-hidden border-b border-luxury-gold/10"
      id="rsvp-section"
    >
      {/* Background Soft Gold Rings */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-70 h-70 bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-4 mb-16 relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-luxury-gold/20 bg-luxury-dark/60 text-luxury-gold text-xs font-sans tracking-widest uppercase mb-2">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Wishing Board & RSVP</span>
        </div>
        
        <h2 className="font-serif text-3xl md:text-5xl text-luxury-ivory font-light tracking-wide text-glow rsvp-animate-element">
          Papan Harapan & RSVP
        </h2>
        
        <div className="w-16 h-px bg-linear-to-r from-transparent via-luxury-gold to-transparent mx-auto rsvp-animate-element" />
        
        <p className="text-xs md:text-sm text-luxury-cream/70 font-sans max-w-md mx-auto leading-relaxed rsvp-animate-element">
          Tinggalkan doa terhangat, ucapan manis, atau konfirmasi kehadiran Anda untuk merayakan hari ulang tahun Fahira bersama kami.
        </p>
      </div>

      {/* Container Flex / Grid Split */}
      <div className="relative z-10 w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Form Panel */}
        <div className="rsvp-animate-element lg:col-span-5 glass-card p-6 md:p-8 rounded-2xl shadow-gold-glow relative">
          
          <h3 className="font-serif text-xl md:text-2xl text-luxury-ivory font-light mb-6 tracking-wide pb-3 border-b border-luxury-gold/10">
            Tulis Doa & Konfirmasi
          </h3>

          {submitSuccess && (
            <div className="mb-6 p-4 rounded bg-luxury-gold/10 border border-luxury-gold/30 flex items-center gap-2.5 text-luxury-gold text-xs font-sans">
              <CheckCircle className="w-4 h-4 shrink-0" />
              <span>Terima kasih! Ucapan dan RSVP Anda telah berhasil dikirim.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 font-sans text-xs md:text-sm">
            
            {/* 1. Name Input */}
            <div className="space-y-1.5">
              <label htmlFor="name-input" className="block text-luxury-cream/80 text-[11px] font-semibold uppercase tracking-wider">
                Nama Lengkap
              </label>
              <input
                id="name-input"
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda..."
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-luxury-black/60 border border-luxury-gold/20 focus:border-luxury-gold rounded text-luxury-ivory placeholder-luxury-cream/30 focus:outline-none transition-colors"
              />
            </div>

            {/* 2. Status Select */}
            <div className="space-y-1.5">
              <label htmlFor="status-input" className="block text-luxury-cream/80 text-[11px] font-semibold uppercase tracking-wider">
                Konfirmasi Kehadiran
              </label>
              <select
                id="status-input"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-luxury-black/60 border border-luxury-gold/20 focus:border-luxury-gold rounded text-luxury-ivory focus:outline-none transition-colors"
              >
                <option value="hadir">Sangat Senang, Saya Akan Hadir Merayakan</option>
                <option value="tidak_hadir">Berhalangan, Kirim Doa dari Jauh</option>
              </select>
            </div>

            {/* 3. Companions Guests Select */}
            {formData.status === 'hadir' && (
              <div className="space-y-1.5 transition-all duration-300">
                <label htmlFor="guests-input" className="block text-luxury-cream/80 text-[11px] font-semibold uppercase tracking-wider">
                  Jumlah Tamu Kehadiran
                </label>
                <div className="relative">
                  <select
                    id="guests-input"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-luxury-black/60 border border-luxury-gold/20 focus:border-luxury-gold rounded text-luxury-ivory focus:outline-none transition-colors appearance-none"
                  >
                    {[1, 2, 3, 4, 5].map(n => (
                      <option key={n} value={n}>{n} Orang</option>
                    ))}
                  </select>
                  <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-gold/60 pointer-events-none" />
                </div>
              </div>
            )}

            {/* 4. Blessings wish message textarea */}
            <div className="space-y-1.5">
              <label htmlFor="wish-input" className="block text-luxury-cream/80 text-[11px] font-semibold uppercase tracking-wider">
                Ucapan Selamat Ulang Tahun & Doa
              </label>
              <textarea
                id="wish-input"
                name="wish"
                required
                rows={4}
                placeholder="Tuliskan ucapan selamat ulang tahun terindah serta doa tulusmu di sini..."
                value={formData.wish}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-luxury-black/60 border border-luxury-gold/20 focus:border-luxury-gold rounded text-luxury-ivory placeholder-luxury-cream/30 focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-2 py-3.5 bg-luxury-gold hover:bg-luxury-gold-light text-luxury-black uppercase tracking-widest text-xs font-semibold rounded cursor-pointer flex items-center justify-center gap-2.5 shadow-gold-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
              id="btn-submit-rsvp"
            >
              <Send className={`w-3.5 h-3.5 ${isSubmitting ? 'animate-pulse' : ''}`} />
              <span>{isSubmitting ? 'Mengirim Ucapan...' : 'Kirim Ucapan'}</span>
            </button>

          </form>
        </div>

        {/* Right Comments/Wishes Stream List */}
        <div className="rsvp-animate-element lg:col-span-7 glass-card p-6 md:p-8 rounded-2xl max-h-145 overflow-y-auto no-scrollbar shadow-gold-glow custom-scroll">
          
          <div className="flex items-center justify-between pb-4 border-b border-luxury-gold/10 mb-6 sticky top-0 bg-luxury-dark/95 backdrop-blur z-20 py-1">
            <h3 className="font-serif text-xl text-luxury-ivory font-light tracking-wide flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-luxury-gold" />
              <span>Harapan & Doa Hangat</span>
            </h3>
            <span className="font-sans text-[11px] text-luxury-gold font-semibold uppercase bg-luxury-gold/10 rounded-full px-3 py-1">
              {wishes.length} Ucapan
            </span>
          </div>

          {/* Cards Stream */}
          <div className="space-y-4">
            {wishes.length === 0 ? (
              <p className="font-sans text-xs text-luxury-cream/40 italic text-center py-8">Belum ada ucapan terkirim...</p>
            ) : (
              wishes.map((item) => {
                const dateRelative = new Date(item.createdAt).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                });

                return (
                  <div 
                    key={item.id} 
                    className="p-4 rounded-xl glass-card relative overflow-hidden flex flex-col gap-2 group hover:border-luxury-gold/25 transition-colors"
                  >
                    <div className="flex items-center justify-between gap-4 font-sans border-b border-luxury-gold/5 pb-2">
                      <div>
                        <span className="font-serif text-sm font-semibold text-luxury-ivory block capitalize leading-none mb-1">
                          {item.name}
                        </span>
                        <span className="text-[9px] text-luxury-cream/40">{dateRelative}</span>
                      </div>

                      {/* Presence badge */}
                      <span className={`text-[9px] uppercase tracking-widest px-2.5 py-0.5 rounded-full font-medium shrink-0 ${
                        item.status === 'hadir' 
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/15' 
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/15'
                      }`}>
                        {item.status === 'hadir' ? `Hadir (${item.guests})` : 'Tidak Hadir'}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-luxury-cream/80 leading-relaxed italic text-justify">
                      "{item.wish}"
                    </p>
                  </div>
                );
              })
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
