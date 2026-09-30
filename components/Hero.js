"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { profile, heroLines, heroText, ui } from "@/data/content";

export default function Hero({ revealed }) {
  const { t } = useLang();
  const container = useRef(null);

  // Drift away as you scroll past
  useGSAP(
    () => {
      gsap.to(".hero-inner", {
        yPercent: 25,
        opacity: 0.2,
        scale: 0.94,
        ease: "none",
        scrollTrigger: { trigger: container.current, start: "top top", end: "bottom top", scrub: true },
      });
    },
    { scope: container }
  );

  // Entrance, right after the TSELMEG intro
  useGSAP(
    () => {
      if (!revealed) return;
      gsap
        .timeline()
        .to(".hero-line > span", { y: 0, duration: 1.1, stagger: 0.12, ease: "power4.out" })
        .to(".hero-fade", { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }, "-=0.7")
        .fromTo(".hero-photo", { clipPath: "inset(100% 0 0 0)" }, { clipPath: "inset(0% 0 0 0)", duration: 1.2, ease: "power4.inOut" }, 0.2);
    },
    { scope: container, dependencies: [revealed] }
  );

  // Photo follows the mouse a little
  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    gsap.to(".hero-photo", { x: x * 30, y: y * 30, rotate: x * 6, duration: 1, ease: "power3.out" });
  };

  return (
    <section className="hero" id="top" ref={container} onPointerMove={onMove}>
      <div className="hero-inner">
        <p className="hero-kicker hero-fade">
          <span className="dot" /> {t(ui.callMe)} {t(profile.nickname)} {t(ui.callMeAfter)}
        </p>

        <h1 className="hero-title">
          {t(heroLines).map((line, i) => (
            <span className={`hero-line ${i === 1 ? "accent" : ""}`} key={i}>
              <span>{line}</span>
            </span>
          ))}
        </h1>

        <p className="hero-text hero-fade">{t(heroText)}</p>

        <div className="hero-photo" data-cursor={t(ui.hi)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={profile.photo} alt={profile.name} />
        </div>
      </div>

      <div className="marquee hero-fade" aria-hidden>
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <div className="marquee-group" key={k}>
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i}>
                  {t(ui.scrollDown)} <b>✦</b>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
