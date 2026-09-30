"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { profile, ui } from "@/data/content";

export default function Footer() {
  const { t } = useLang();
  const root = useRef(null);
  const magnet = useRef(null);

  useGSAP(
    () => {
      gsap.from(".footer-cta-line span", {
        yPercent: 110,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: ".footer-cta", start: "top 80%" },
      });
      gsap.from(".footer-word span", {
        yPercent: 100,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: { trigger: ".footer-word", start: "top bottom", end: "bottom bottom", scrub: 1 },
      });
    },
    { scope: root }
  );

  // Button gently pulled toward the mouse
  const pull = (e) => {
    const r = magnet.current.getBoundingClientRect();
    gsap.to(magnet.current, {
      x: (e.clientX - r.left - r.width / 2) * 0.35,
      y: (e.clientY - r.top - r.height / 2) * 0.35,
      duration: 0.5,
      ease: "power3.out",
    });
  };
  const release = () => gsap.to(magnet.current, { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1, 0.4)" });

  return (
    <footer className="footer" id="contact" ref={root}>
      <div className="footer-cta">
        <h2 className="footer-cta-line">
          <span>{t(ui.footerTitle)[0]}</span>
        </h2>
        <h2 className="footer-cta-line accent">
          <span>{t(ui.footerTitle)[1]}</span>
        </h2>
        <a
          className="magnet"
          href={profile.socials[0].href}
          target="_blank"
          rel="noreferrer"
          ref={magnet}
          onPointerMove={pull}
          onPointerLeave={release}
        >
          {t(ui.sayHi)}
        </a>
      </div>

      <div className="footer-grid">
        {profile.socials.map((s) => (
          <div key={s.href}>
            <p className="eyebrow">{t(s.label)}</p>
            <a href={s.href} target="_blank" rel="noreferrer" className="footer-link">
              {s.handle}
            </a>
          </div>
        ))}
        <div>
          <p className="eyebrow">{t(profile.birthday.label)}</p>
          <p className="footer-link">{t(profile.birthday.value)}</p>
        </div>
      </div>

      <div className="footer-word" aria-hidden>
        {profile.name.toUpperCase().split("").map((c, i) => (
          <span key={i}>{c}</span>
        ))}
      </div>
      <p className="footer-copy">© {new Date().getFullYear()} · {profile.name}</p>
    </footer>
  );
}
