"use client";

import { useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { hobbies, knowSoon } from "@/data/content";

// giats "selected projects" list: big rows, a photo floats after the mouse
export default function Hobbies() {
  const { t } = useLang();
  const root = useRef(null);
  const preview = useRef(null);
  const mover = useRef(null);
  // Where the mouse is + which image is showing (null = hidden)
  const pointer = useRef({ x: 0, y: 0, mouse: false });
  const current = useRef(null);

  useGSAP(
    () => {
      mover.current = {
        x: gsap.quickTo(preview.current, "x", { duration: 0.6, ease: "power3" }),
        y: gsap.quickTo(preview.current, "y", { duration: 0.6, ease: "power3" }),
      };

      gsap.utils.toArray(".hobby-row").forEach((row) => {
        gsap.from(row, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: row, start: "top 90%" },
        });
      });
    },
    { scope: root }
  );

  const show = (src) => {
    if (current.current === src) return;
    const wasHidden = current.current === null;
    current.current = src;
    preview.current.querySelector("img").src = src;
    if (wasHidden) {
      // appear right at the mouse, not sliding in from the last spot
      gsap.set(preview.current, { x: pointer.current.x, y: pointer.current.y });
    }
    gsap.to(preview.current, { scale: 1, opacity: 1, duration: 0.4, ease: "power3.out", overwrite: "auto" });
  };

  const hide = () => {
    if (current.current === null) return;
    current.current = null;
    gsap.to(preview.current, { scale: 0.6, opacity: 0, duration: 0.25, overwrite: "auto" });
  };

  // Show the image for whatever row is under the mouse right now (or hide it)
  const sync = () => {
    const { x, y, mouse } = pointer.current;
    if (!mouse) return hide();
    const row = document.elementFromPoint(x, y)?.closest(".hobby-row");
    const image = row && root.current.contains(row) ? row.dataset.image : null;
    if (image) show(image);
    else hide();
  };

  // Track the mouse on the whole page, and re-check on every scroll
  // (scrolling with the wheel doesn't move the mouse or fire hover events)
  useEffect(() => {
    const onMove = (e) => {
      if (e.pointerType !== "mouse") return;
      pointer.current = { x: e.clientX, y: e.clientY, mouse: true };
      mover.current?.x(e.clientX);
      mover.current?.y(e.clientY);
      sync();
    };
    const onScroll = () => sync();
    const onLeaveWindow = () => {
      pointer.current.mouse = false;
      hide();
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeaveWindow);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeaveWindow);
    };
  }, []);

  return (
    <section className="hobbies section" id="hobbies" ref={root}>
      <ul className="hobby-list">
        {hobbies.map((h, i) =>
          h.error ? (
            <li className="hobby-row hobby-error" key={i}>
              <span className="hobby-num">0{i + 1}</span>
              <span className="hobby-name glitch" data-text={t(h.name)}>
                {t(h.name)}
              </span>
              <span className="hobby-note">{t(knowSoon)}</span>
            </li>
          ) : (
            <li className="hobby-row" key={i} data-image={h.image}>
              <span className="hobby-num">0{i + 1}</span>
              <span className="hobby-name">{t(h.name)}</span>
              <span className="hobby-note">{t(h.note)}</span>
              {/* thumbnail for phones (no hover there) */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hobby-thumb" src={h.image} alt="" />
            </li>
          )
        )}
      </ul>

      <div className="hobby-preview" ref={preview} aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={hobbies[0].image} alt="" />
      </div>
    </section>
  );
}
