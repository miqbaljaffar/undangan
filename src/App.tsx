import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import SplashCover from './components/SplashCover';
import AudioMuteBtn from './components/AudioMuteBtn';
import CursorGlow from './components/CursorGlow';
import FloatingFlowers from './components/FloatingFlowers';
import HeroSection from './components/HeroSection';
import LoveStory from './components/LoveStory';
import EventDetails from './components/EventDetails';
import Gallery from './components/Gallery';
import RSVPForm from './components/RSVPForm';
import GiftSection from './components/GiftSection';
import Footer from './components/Footer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    // Scroll behavior initialization
    // Prevent scrolling initially so that visitors are forced to read opening card first
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpened]);

  const handleOpenInvitation = () => {
    setIsOpened(true);
  };

  return (
    <div className="relative min-h-screen bg-luxury-black text-luxury-cream overflow-hidden">
      {/* 1. Desktop custom cursor trailing gold glow */}
      <CursorGlow />

      {/* 2. Cinematic initial screen loading screen */}
      <LoadingScreen />

      {/* 4. Fullscreen card entrance envelope switcher */}
      <SplashCover onOpen={handleOpenInvitation} isOpened={isOpened} />

      {/* 5. Audio background music autoplay and switch toggle */}
      <AudioMuteBtn isOpened={isOpened} />

      {/* Main sections sequence, only visible/interactive when opened */}
      <div className={`transition-all duration-1000 ${isOpened ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none h-screen overflow-hidden'}`}>
        
        {/* Falling floral leaves particle element */}
        <div className="relative">
          <FloatingFlowers />
          
          <HeroSection />
        </div>

        <LoveStory />

        <EventDetails />

        <Gallery />

        <div className="relative">
          <FloatingFlowers />
          
          <RSVPForm />
        </div>

        <GiftSection />

        <Footer />
        
      </div>
    </div>
  );
}
