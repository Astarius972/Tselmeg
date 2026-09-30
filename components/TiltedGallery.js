"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { gallery, ui } from "@/data/content";

// Every photo tilts, blurs and darkens while entering the screen,
// then settles flat and sharp. Click to open it big.
export default function TiltedGallery({ onOpen }) {
  const { t } = useLang();
  const root = useRef(null);

  useGSAP(
    () => {
      gsap.utils.toArray(".tilt-card").forEach((card, i) => {
        gsap.fromTo(
          card,
          {
            rotateX: 35,
            rotateZ: i % 2 ? 4 : -4,
            y: 120,
            filter: "blur(8px) brightness(0.4)",
          },
          {
            rotateX: 0,
            rotateZ: 0,
            y: 0,
            filter: "blur(0px) brightness(1)",
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "top 45%", scrub: true },
          }
        );
      });

      gsap.from(".gallery-head > *", {
        y: 60,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".gallery-head", start: "top 85%" },
      });
    },
    { scope: root }
  );

  return (
    <section className="gallery section" ref={root}>
      <div className="gallery-head">
        <p className="eyebrow">{t(ui.galleryEyebrow)}</p>
        <h2 className="section-title">
          {t(ui.galleryTitle)[0]} <em>{t(ui.galleryTitle)[1]}</em>
        </h2>
      </div>

      <div className="tilt-grid">
        {gallery.map((img, i) => (
          <button className="tilt-card" key={img.src} onClick={() => onOpen(i)} data-cursor={t(ui.view)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.thumb} alt={t(img.title)} loading="lazy" />
            <span className="tilt-meta">
              <b>{String(i + 1).padStart(2, "0")}</b> {t(img.title)}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
