import { Anton, Oswald, Roboto_Flex, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// Anton has no Mongolian (Cyrillic) letters, so those fall back to Oswald.
// (No auto fallback font for Anton, otherwise Cyrillic would land on Arial instead.)
const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  adjustFontFallback: false,
  fallback: [],
});
const oswald = Oswald({ weight: "700", subsets: ["cyrillic", "cyrillic-ext"], variable: "--font-oswald" });
const roboto = Roboto_Flex({ subsets: ["latin", "cyrillic", "cyrillic-ext"], variable: "--font-roboto" });
const serif = Cormorant_Garamond({
  weight: ["400", "500"],
  style: ["italic"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-serif",
});

export const metadata = {
  title: "Tselmeg",
  description: "Photos, hobbies and little things about Tselmeg",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${oswald.variable} ${roboto.variable} ${serif.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
