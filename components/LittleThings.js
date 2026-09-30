"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { littleThings, knowSoon, ui } from "@/data/content";

// Pinned section: scrolling down moves the cards sideways
export default function LittleThings() {
  const { t } = useLang();
  const root = useRef(null);

  useGSAP(
    () => {
      const track = root.current.querySelector(".things-track");
      const distance = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: () => "+=" + distance(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: root }
  );

  return (
    <section className="things" ref={root}>
      <div className="things-track">
        <div className="things-intro">
          <p className="eyebrow">{t(ui.thingsEyebrow)}</p>
          <h2 className="section-title">
            {t(ui.thingsTitle)[0]}
            <br />
            <em>{t(ui.thingsTitle)[1]}</em>
          </h2>
        </div>
        {littleThings.map((thing, i) => (
          <article className="thing-card" key={i} style={{ "--r": `${i % 2 ? 3 : -3}deg` }}>
            <span className="thing-num">0{i + 1}</span>
            <span className="thing-label">{t(thing.label)}</span>
            {thing.value ? (
              <strong className="thing-value">{t(thing.value)}</strong>
            ) : (
              <>
                <strong className="thing-value thing-error glitch" data-text="ERROR">
                  ERROR
                </strong>
                <span className="thing-soon">{t(knowSoon)}</span>
              </>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
