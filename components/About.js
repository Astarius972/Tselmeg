"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { about } from "@/data/content";

// Shown under the "Who I Am" curtain
export function AboutIntro() {
  const { t } = useLang();
  return (
    <div className="about-intro">
      <p className="eyebrow">{t(about.introEyebrow)}</p>
      <h2 className="about-greeting">{t(about.greeting)}</h2>
    </div>
  );
}

// Quote lights up word by word as you scroll (giats "about me")
export default function About() {
  const { lang, t } = useLang();
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.from(".about [data-reveal]", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".about [data-reveal]", start: "top 88%" },
      });
    },
    { scope: root }
  );

  // Rebuilt when the language changes (the words are different)
  useGSAP(
    () => {
      gsap.fromTo(
        ".quote-word",
        { opacity: 0.12 },
        {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: ".about-quote", start: "top 80%", end: "bottom 45%", scrub: true },
        }
      );
    },
    { scope: root, dependencies: [lang], revertOnUpdate: true }
  );

  const words = t(about.quote).split(" ");

  return (
    <section className="about section" ref={root}>
      <p className="eyebrow" data-reveal>
        {t(about.eyebrow)}
      </p>
      <blockquote className="about-quote">
        “
        {words.map((w, i) => (
          <span className="quote-word" key={`${lang}-${i}`}>
            {w}
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
        ”
      </blockquote>
    </section>
  );
}
