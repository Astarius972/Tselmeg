"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsap";

// Pink ring that trails the normal cursor. Grows over links; shows a word over [data-cursor="..."]
export default function Cursor() {
  const ring = useRef(null);
  const [label, setLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const rx = gsap.quickTo(ring.current, "x", { duration: 0.5, ease: "power3" });
    const ry = gsap.quickTo(ring.current, "y", { duration: 0.5, ease: "power3" });

    const move = (e) => {
      document.body.classList.add("cursor-on");
      rx(e.clientX);
      ry(e.clientY);
    };
    const over = (e) => {
      const target = e.target.closest("[data-cursor], a, button");
      const text = target?.dataset?.cursor || "";
      setLabel(text);
      gsap.to(ring.current, {
        scale: text ? 2.6 : target ? 1.6 : 1,
        backgroundColor: text ? "rgba(255,122,184,0.9)" : "rgba(255,122,184,0)",
        duration: 0.35,
      });
    };

    window.addEventListener("pointermove", move);
    document.addEventListener("pointerover", over);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div className="cursor-ring" ref={ring}>
      <span>{label}</span>
    </div>
  );
}
