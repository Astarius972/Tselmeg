"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { music, ui } from "@/data/content";

// Small play/pause button in the bottom-left corner.
// (Browsers don't allow music to start by itself, so the visitor presses play.)
export default function MusicPlayer() {
  const { t } = useLang();
  const audio = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = audio.current;
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);
    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  const toggle = () => {
    const a = audio.current;
    if (a.paused) {
      // gentle fade in
      a.volume = 0;
      a.play().catch(() => {});
      gsap.to(a, { volume: music.volume, duration: 1.5, ease: "power1.out", overwrite: true });
    } else {
      gsap.to(a, { volume: 0, duration: 0.5, overwrite: true, onComplete: () => a.pause() });
    }
  };

  return (
    <>
      <audio ref={audio} src={music.src} loop preload="none" />
      <button
        className={`music-btn ${playing ? "is-playing" : ""}`}
        onClick={toggle}
        aria-pressed={playing}
        aria-label={playing ? t(ui.musicPause) : t(ui.musicPlay)}
      >
        <span className="music-bars" aria-hidden>
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className="music-label">{playing ? t(ui.musicPause) : t(ui.musicPlay)}</span>
      </button>
    </>
  );
}
