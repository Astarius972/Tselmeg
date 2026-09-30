"use client";

import { useState } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import Menu from "@/components/Menu";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import About, { AboutIntro } from "@/components/About";
import ZoomGallery from "@/components/ZoomGallery";
import TiltedGallery from "@/components/TiltedGallery";
import Lightbox from "@/components/Lightbox";
import Hobbies from "@/components/Hobbies";
import LittleThings from "@/components/LittleThings";
import Footer from "@/components/Footer";
import ScrollBar from "@/components/ScrollBar";
import MusicPlayer from "@/components/MusicPlayer";
import { LanguageProvider, useLang } from "@/lib/i18n";
import { portalPhoto, ui } from "@/data/content";

export default function Home() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

function Site() {
  const { t } = useLang();
  const [revealed, setRevealed] = useState(false);
  const [photo, setPhoto] = useState(null);

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <Preloader onReveal={() => setRevealed(true)} />
      <Menu />

      <main>
        <Hero revealed={revealed} />

        <Chapter id="about" number="01" title={ui.chapters.about} variant="curtain" color="#ff7ab8">
          <AboutIntro />
        </Chapter>
        <About />

        <Chapter id="gallery" number="02" title={ui.chapters.gallery} variant="portal" color="#140f24" ink="#f5f5f5">
          <div className="portal-scene">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={portalPhoto.src} alt="" />
            <h2>
              {t(ui.portal)[0]}
              <br />
              <em>{t(ui.portal)[1]}</em>
            </h2>
          </div>
        </Chapter>
        <ZoomGallery />
        <TiltedGallery onOpen={setPhoto} />

        <Chapter id="hobbies-chapter" number="03" title={ui.chapters.hobbies} variant="split" color="#f3e9dc">
          <div className="split-scene">
            <p className="eyebrow">{t(ui.hobbiesEyebrow)}</p>
            <h2>
              {t(ui.hobbiesTitle)[0]}
              <br />
              <em>{t(ui.hobbiesTitle)[1]}</em>
            </h2>
          </div>
        </Chapter>
        <Hobbies />
        <LittleThings />

        <Footer />
      </main>

      <ScrollBar />
      <MusicPlayer />
      <Lightbox index={photo} onChange={setPhoto} onClose={() => setPhoto(null)} />
    </>
  );
}
