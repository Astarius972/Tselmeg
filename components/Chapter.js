"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { ui } from "@/data/content";

// A pinned "chapter" scene. The colored cover leaves in one of three ways,
// revealing `children` underneath:
//   curtain → cover lifts up with a curved edge
//   portal  → a circle opens in the middle and you fly through the title
//   split   → a thin line draws, then the cover splits top / bottom
export default function Chapter({ id, number, title, variant = "curtain", color = "#ff7ab8", ink = "#0a0a0a", children }) {
  const { t } = useLang();
  const root = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top top", end: "+=140%", scrub: 1, pin: true },
      });

      if (variant === "curtain") {
        tl.to(".chapter-label", { yPercent: -60, opacity: 0, duration: 0.5 })
          .to(".chapter-cover", { yPercent: -100, borderBottomLeftRadius: "50% 30%", borderBottomRightRadius: "50% 30%", duration: 1 }, 0.1)
          .fromTo(".chapter-beneath", { scale: 0.85, opacity: 0.2 }, { scale: 1, opacity: 1, duration: 1 }, 0.1);
      }

      if (variant === "portal") {
        tl.to(".chapter-label", { scale: 4, opacity: 0, duration: 0.9, ease: "power2.in" })
          .fromTo(".chapter-beneath", { clipPath: "circle(0% at 50% 50%)" }, { clipPath: "circle(75% at 50% 50%)", duration: 1 }, 0.15)
          .fromTo(".chapter-beneath-inner", { scale: 1.4 }, { scale: 1, duration: 1 }, 0.15);
      }

      if (variant === "split") {
        tl.fromTo(".chapter-seam", { scaleX: 0 }, { scaleX: 1, duration: 0.3 })
          .to(".chapter-label", { opacity: 0, letterSpacing: "0.3em", duration: 0.3 }, 0.2)
          .to(".chapter-half.top", { yPercent: -100, duration: 0.8 }, 0.35)
          .to(".chapter-half.bottom", { yPercent: 100, duration: 0.8 }, 0.35)
          .to(".chapter-seam", { opacity: 0, duration: 0.2 }, 0.35)
          .fromTo(".chapter-beneath", { scale: 0.9, filter: "blur(8px)" }, { scale: 1, filter: "blur(0px)", duration: 0.8 }, 0.35);
      }
    },
    { scope: root }
  );

  const label = (
    <div className="chapter-label" style={{ color: ink }}>
      <span className="chapter-num">
        {t(ui.chapter)} {number}
      </span>
      <span className="chapter-title">
        {t(title).map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </span>
    </div>
  );

  return (
    <section className={`chapter chapter-${variant}`} id={id} ref={root}>
      <div className="chapter-beneath">
        <div className="chapter-beneath-inner">{children}</div>
      </div>

      {variant === "split" ? (
        <>
          <div className="chapter-half top" style={{ background: color }} />
          <div className="chapter-half bottom" style={{ background: color }} />
          <div className="chapter-seam" style={{ background: ink }} />
          {label}
        </>
      ) : (
        <div className="chapter-cover" style={{ background: color }}>
          {label}
        </div>
      )}
    </section>
  );
}
