"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { zoomPhotos, ui } from "@/data/content";

// Seven photos that all zoom toward you as you scroll; the middle one
// ends up filling the whole screen.
// Positions/sizes live in globals.css (.zoom-box-0 … .zoom-box-6), per screen size
const LAYOUT = [{ scale: 4 }, { scale: 5 }, { scale: 6 }, { scale: 5 }, { scale: 6 }, { scale: 8 }, { scale: 9 }];

export default function ZoomGallery() {
  const { t } = useLang();
  const root = useRef(null);

  useGSAP(
    () => {
      const layers = gsap.utils.toArray(".zoom-layer");
      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom bottom", scrub: 1 },
      });
      layers.forEach((layer, i) => tl.to(layer, { scale: LAYOUT[i].scale }, 0));
      tl.fromTo(".zoom-caption", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.25 }, 0.75);
    },
    { scope: root }
  );

  return (
    <section className="zoom" ref={root}>
      <div className="zoom-sticky">
        {LAYOUT.map((_, i) => {
          const img = zoomPhotos[i];
          return (
            <div className="zoom-layer" key={i}>
              <div className={`zoom-box zoom-box-${i}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.src} alt={t(img.title)} />
              </div>
            </div>
          );
        })}
        <div className="zoom-caption">
          <span className="eyebrow">{t(ui.zoomEyebrow)}</span>
          <h3>{t(zoomPhotos[0].title)}</h3>
        </div>
      </div>
    </section>
  );
}
