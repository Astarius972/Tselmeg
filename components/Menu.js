"use client";

import { useRef, useState } from "react";
import { gsap, useGSAP, getLenis } from "@/lib/gsap";
import { useLang } from "@/lib/i18n";
import { profile, ui } from "@/data/content";

const LINKS = [
  { key: "home", href: "#top" },
  { key: "about", href: "#about" },
  { key: "gallery", href: "#gallery" },
  { key: "hobbies", href: "#hobbies" },
  // "Say hi" opens her public Instagram
  { key: "contact", href: profile.socials[0].href, external: true },
];

// giats-style fullscreen menu that opens as a growing circle
export default function Menu() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const overlay = useRef(null);
  const tl = useRef(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .fromTo(
          overlay.current,
          { clipPath: "circle(0% at calc(100% - 64px) 44px)" },
          { clipPath: "circle(150% at calc(100% - 64px) 44px)", duration: 0.9, ease: "power3.inOut" }
        )
        .fromTo(
          ".menu-link span",
          { yPercent: 110 },
          { yPercent: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" },
          "-=0.35"
        )
        .fromTo(".menu-foot", { opacity: 0 }, { opacity: 1, duration: 0.4 }, "-=0.3");
    },
    { scope: overlay }
  );

  const setMenu = (next) => {
    setOpen(next);
    document.body.classList.toggle("menu-open", next);
    if (next) {
      getLenis()?.stop();
      tl.current.timeScale(1).play();
    } else {
      getLenis()?.start();
      tl.current.timeScale(1.6).reverse();
    }
  };

  const go = (e, href) => {
    e.preventDefault();
    const wasOpen = open;
    if (wasOpen) setMenu(false);
    setTimeout(() => getLenis()?.scrollTo(href === "#top" ? 0 : href, { duration: 1.6 }), wasOpen ? 450 : 0);
  };

  return (
    <>
      <header className="topbar">
        <a href="#top" className="logo" onClick={(e) => go(e, "#top")}>
          {profile.name.toUpperCase()}
        </a>
        <div className="topbar-right">
          <div className="lang-switch" role="group" aria-label="Language">
            {["mn", "en"].map((l) => (
              <button
                key={l}
                className={lang === l ? "is-active" : ""}
                aria-pressed={lang === l}
                onClick={() => setLang(l)}
              >
                {l === "mn" ? "MN" : "ENG"}
              </button>
            ))}
          </div>
          <button className={`menu-btn ${open ? "is-open" : ""}`} onClick={() => setMenu(!open)} aria-label={t(ui.menu)}>
            <span className="menu-btn-text">{open ? t(ui.close) : t(ui.menu)}</span>
            <span className="menu-btn-lines">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      <nav className="menu-overlay" ref={overlay} aria-hidden={!open}>
        <ul>
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                className="menu-link"
                href={l.href}
                {...(l.external
                  ? { target: "_blank", rel: "noreferrer", onClick: () => setMenu(false) }
                  : { onClick: (e) => go(e, l.href) })}
              >
                <span>
                  <em>0{i + 1}</em>
                  {t(ui.nav[l.key])}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="menu-foot">
          {profile.socials.map((s) => (
            <a key={s.href} href={s.href} target="_blank" rel="noreferrer">
              {s.handle}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
