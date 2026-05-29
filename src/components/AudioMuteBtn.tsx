import { Music, Music4 } from 'lucide-react';
import useAudioPlayer from '../hooks/useAudioPlayer';

interface AudioMuteBtnProps {
  isOpened: boolean;
}

export default function AudioMuteBtn({ isOpened }: AudioMuteBtnProps) {
  const { isPlaying, toggle } = useAudioPlayer(
    'https://assets.mixkit.co/music/preview/mixkit-love-and-tenderness-11516.mp3',
    isOpened
  );

  const togglePlayback = () => toggle();

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={togglePlayback}
        className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-115 ${
          isPlaying 
            ? 'bg-luxury-gold text-luxury-black ring-4 ring-luxury-gold/20 shadow-gold-glow' 
            : 'glass-card text-luxury-gold hover:text-white'
        }`}
        title={isPlaying ? "Mute Music" : "Play Music"}
        id="btn-music-toggle"
      >
        <div className={`relative flex items-center justify-center ${isPlaying ? 'animate-[spin_12s_linear_infinite]' : ''}`}>
          {isPlaying ? (
            <Music className="w-5 h-5" />
          ) : (
            <Music4 className="w-5 h-5 opacity-70" />
          )}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-luxury-black rounded-full animate-bounce" />
          )}
        </div>
      </button>
    </div>
  );
}
