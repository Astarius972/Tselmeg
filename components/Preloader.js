"use client";

import { useRef } from "react";
import { gsap, useGSAP, getLenis } from "@/lib/gsap";

const NAME = "TSELMEG";

export default function Preloader({ onReveal }) {
  const container = useRef(null);

  useGSAP(
    () => {
      document.body.classList.add("loading");
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      window.scrollTo(0, 0);

      // Same timeline as the reference site
      const tl = gsap.timeline({ defaults: { ease: "power1.inOut" } });
      tl.to(".name-text span", { y: 0, stagger: 0.05, duration: 0.2 })
        .to(".preloader-item", { delay: 1, y: "100%", duration: 0.5, stagger: 0.1 })
        .to(".name-text span", { autoAlpha: 0 }, "<0.5")
        .to(
          container.current,
          {
            autoAlpha: 0,
            onComplete: () => {
              document.body.classList.remove("loading");
              getLenis()?.start();
            },
          },
          "<1"
        )
        .call(() => onReveal?.(), null, "<");
    },
    { scope: container }
  );

  return (
    <div className="preloader" ref={container}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="preloader-item" key={i} />
      ))}
      <p className="name-text">
        {NAME.split("").map((letter, i) => (
          <span key={i}>{letter}</span>
        ))}
      </p>
    </div>
  );
}
