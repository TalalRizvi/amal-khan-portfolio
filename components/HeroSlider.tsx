"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const heroImages = [
  {
    src: "/images/home/hero-1-material-samples.jpg",
    alt: "A spread of textile material samples — embroidery hoops, oyster shells, and mixed-media swatches",
  },
  {
    src: "/images/home/hero-2-collage-artwork.jpg",
    alt: "Densely layered illustrated collage combining classical, Art Nouveau, and surrealist imagery",
  },
  {
    src: "/images/home/hero-3-journal-text.jpg",
    alt: "Handwritten cursive text in pink ink on an iridescent pearlescent surface",
  },
  {
    src: "/images/home/hero-4-smocked-weave.jpg",
    alt: "Detail of hand-woven, smocked textile with maroon and blue-grey striped bands",
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % heroImages.length);
  }, []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  }, []);

  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index, next]);

  return (
    <div className="mx-3 md:mx-4 mt-3 md:mt-4">
      <div className="relative aspect-[4/3] overflow-hidden max-w-4xl mx-auto">
        {heroImages.map((img, i) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={i === 0}
              quality={90}
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0" />
          </div>
        ))}

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 flex items-center justify-center rounded-full bg-black/40 hover:bg-black/65 backdrop-blur-sm text-white transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="absolute bottom-6 md:bottom-8 right-6 md:right-10 flex gap-2">
          {heroImages.map((img, i) => (
            <button
              key={img.src}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
