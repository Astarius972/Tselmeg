"use client";

import { useEffect, useRef } from "react";
import { gsap, getLenis } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { gallery } from "@/data/content";

export default function Lightbox({ index, onChange, onClose }) {
  const { t } = useLang();
  const root = useRef(null);
  const open = index !== null;

  useEffect(() => {
    if (!open) return;
    getLenis()?.stop();
    gsap.fromTo(root.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % gallery.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      getLenis()?.start();
    };
  }, [open, index, onChange, onClose]);

  useEffect(() => {
    if (!open) return;
    gsap.fromTo(".lightbox-img", { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
  }, [open, index]);

  if (!open) return null;
  const img = gallery[index];

  return (
    <div className="lightbox" ref={root} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="lightbox-img" src={img.src} alt={t(img.title)} />
        <figcaption>
          <p>
            <span>
              {String(index + 1).padStart(2, "0")} / {gallery.length}
            </span>
          </p>
          <h3>{t(img.title)}</h3>
        </figcaption>
      </figure>
      <button className="lb-btn lb-prev" onClick={(e) => { e.stopPropagation(); onChange((index - 1 + gallery.length) % gallery.length); }} aria-label="Previous">←</button>
      <button className="lb-btn lb-next" onClick={(e) => { e.stopPropagation(); onChange((index + 1) % gallery.length); }} aria-label="Next">→</button>
      <button className="lb-btn lb-close" onClick={onClose} aria-label="Close">✕</button>
    </div>
  );
}
