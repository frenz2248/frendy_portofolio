"use client";

import { useEffect, useRef, useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);
  return matches;
}

export default function MusicPlayer({
  isEnabled,
  onEnable,
}: {
  isEnabled: boolean;
  onEnable: () => void;
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const fadeInterval = useRef<NodeJS.Timeout | null>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const musicPlayerRef = useRef<HTMLDivElement | null>(null);
  const hideSliderTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isSliderVisible, setIsSliderVisible] = useState(false);
  const [isFirstMobileClick, setIsFirstMobileClick] = useState(true);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const startSliderTimer = () => {
    if (hideSliderTimeout.current) clearTimeout(hideSliderTimeout.current);
    hideSliderTimeout.current = setTimeout(() => {
      setIsSliderVisible(false);
    }, 4000);
  };

  const fadeVolume = (to: number, duration = 250) => {
    if (!audioRef.current) return;
    if (fadeInterval.current) clearInterval(fadeInterval.current);
    const audio = audioRef.current;
    const from = audio.volume;
    const step = (to - from) / (duration / 50);
    if (from === to) return;
    fadeInterval.current = setInterval(() => {
      if (!audioRef.current) return;
      let newVol = audioRef.current.volume + step;
      if ((step > 0 && newVol >= to) || (step < 0 && newVol <= to)) {
        audioRef.current.volume = to;
        clearInterval(fadeInterval.current!);
      } else {
        audioRef.current.volume = Math.min(Math.max(newVol, 0), 1);
      }
    }, 50);
  };

  const enableMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    onEnable();
    setIsMuted(false);

    audio.volume = 0;
    audio.muted = false;
    audio.currentTime = 0;

    audio.play().then(() => {
      fadeVolume(volume, 1500); 
    });
  };

  // toggle mute (ikon volume)
  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    if (newMutedState) {
      fadeVolume(0, 200);
      setTimeout(() => {
        if (audioRef.current) audioRef.current.muted = true;
      }, 200);
    } else {
      audio.muted = false;
      audio.play().then(() => fadeVolume(volume, 200));
    }
  };

  // klik ikon di mobile → munculkan slider
  const handleMusicIconClick = () => {
    if (!isDesktop && isFirstMobileClick) {
      setIsSliderVisible(true);
      setIsFirstMobileClick(false);
      startSliderTimer();
      return;
    }
    toggleMute();
    if (!isDesktop) {
      const newSliderState = !isSliderVisible;
      setIsSliderVisible(newSliderState);
      if (newSliderState) {
        startSliderTimer();
      }
    }
  };

  // ganti volume pakai slider
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const newVolume = parseFloat(e.target.value);
    audioRef.current.volume = newVolume;
    setVolume(newVolume);
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
      audioRef.current.muted = false;
    } else if (newVolume === 0 && !isMuted) {
      setIsMuted(true);
    }
    if (!isDesktop) startSliderTimer();
  };

  // efek fade volume ketika scroll
  useEffect(() => {
    if (!isEnabled) return;
    const handleScroll = () => {
      if (!audioRef.current || isMuted) return;
      fadeVolume(0.1, 200);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        if (audioRef.current && !isMuted) {
          fadeVolume(volume, 200);
        }
      }, 700);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isEnabled, isMuted, volume]);

  // tutup slider jika klik di luar
  useEffect(() => {
    if (isDesktop || !isSliderVisible) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        musicPlayerRef.current &&
        !musicPlayerRef.current.contains(event.target as Node)
      ) {
        setIsSliderVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSliderVisible, isDesktop]);

  return (
    <>
      {/* Overlay Intro */}
      <AnimatePresence>
        {!isEnabled && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 [z-100] flex flex-col items-center justify-center 
                     px-6 text-center"
            style={{
              backgroundColor: "rgba(3, 25, 48, 0.85)",
              backdropFilter: "blur(8px)",
            }}
          >
            {/* Teks Welcome */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
                type: "spring",
                stiffness: 120,
              }}
              className="mb-8 max-w-2xl"
            >
              <p
                className="text-xl sm:text-2xl md:text-3xl 
                         font-medium leading-relaxed tracking-wide text-gray-200 drop-shadow-sm"
              >
                “Exploring the harmony between technology and imagination — this
                is my portfolio.”
              </p>
            </motion.div>

            <motion.button
              onClick={enableMusic}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="px-8 py-3 text-base sm:text-lg font-semibold rounded-full
                       bg-white/10 border border-white/20 text-white shadow-lg
                       hover:bg-white/20
                       transition-all duration-300 transform hover:scale-105"
              style={{ backdropFilter: "blur(10px)" }}
            >
              Enter Portfolio
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Player Control */}
      {isEnabled && (
        <div ref={musicPlayerRef} className="fixed bottom-6 right-6 z-50">
          <div className="flex items-center gap-3 p-2 rounded-full shadow-lg backdrop-blur-md bg-white/10 border border-white/20">
            <button
              onClick={handleMusicIconClick}
              aria-label="Toggle music"
              className="text-white hover:text-sky-300 transition-colors duration-200"
            >
              {isMuted ? <FaVolumeMute size={22} /> : <FaVolumeUp size={22} />}
            </button>
            <AnimatePresence>
              {(isDesktop || isSliderVisible) && (
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "6rem", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="w-24 h-1.5 cursor-pointer accent-sky-400"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* audio */}
      <audio
        ref={audioRef}
        src="/music/FASSounds - Lofi Study.mp3"
        loop
        preload="auto"
        muted
      />
    </>
  );
}
