"use client";

import { useState } from "react";
import Image from "next/image";

interface StickerProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  size: "sm" | "md" | "lg" | "xl";
}

function Sticker({ src, alt, className = "", style = {}, size }: StickerProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-12 h-12 lg:w-14 lg:h-14",
    md: "w-16 h-16 lg:w-20 lg:h-20",
    lg: "w-20 h-20 lg:w-28 lg:h-28",
    xl: "w-28 h-28 lg:w-36 lg:h-36",
  };

  return (
    <div
      className={`absolute cursor-pointer transition-all duration-300 ease-out ${sizeClasses[size]} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        ...style,
        transform: `${style.transform || ''} ${isHovered ? 'translateY(-4px) scale(1.05)' : ''}`.trim(),
        filter: isHovered ? 'drop-shadow(0 8px 16px rgba(0,0,0,0.4))' : 'drop-shadow(0 3px 6px rgba(0,0,0,0.25))',
        zIndex: isHovered ? 50 : (style.zIndex as number) || 1,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100px, 150px"
      />
    </div>
  );
}

export function FlatLay() {
  return (
    <div className="relative w-full h-full min-h-[300px] lg:min-h-[380px]">
      {/* Anchor stickers - larger, more prominent */}

      {/* Leica Camera - top left anchor */}
      <Sticker
        src="/camera.png"
        alt="Vintage Leica camera"
        size="lg"
        className="top-2 left-8 lg:left-12"
        style={{ transform: 'rotate(-8deg)', zIndex: 10 }}
      />

      {/* Headphones - top right anchor */}
      <Sticker
        src="headphones.png"
        alt="Black headphones"
        size="lg"
        className="top-0 right-12 lg:right-16"
        style={{ transform: 'rotate(5deg)', zIndex: 8 }}
      />

      {/* Vinyl Record - center-left anchor */}
      <Sticker
        src="cd.png"
        alt="Vinyl record"
        size="xl"
        className="top-20 left-0 lg:left-4"
        style={{ transform: 'rotate(12deg)', zIndex: 6 }}
      />

      {/* Brain - right side anchor */}
      <Sticker
        src="brain.png"
        alt="Tech brain illustration"
        size="lg"
        className="top-24 right-4 lg:right-8"
        style={{ transform: 'rotate(-5deg)', zIndex: 9 }}
      />

      {/* NIDHI - Central focal sticker (between cards and brain) */}
      <Sticker
        src="nidhi.png"
        alt="Nidhi"
        size="xl"
        className="top-32 right-36 lg:top-30 lg:right-41"
        style={{ transform: 'rotate(5deg) scale(1.7)', zIndex: 20 }}
      />

      {/* Medium stickers - supporting elements */}

      {/* Butterfly - top center */}
      <Sticker
        src="butterfly.png"
        alt="Vintage butterfly"
        size="md"
        className="top-8 left-28 lg:left-36"
        style={{ transform: 'rotate(-15deg)', zIndex: 12 }}
      />

      {/* Electric Guitar - bottom right */}
      <Sticker
        src="electric-guitar.png"
        alt="Electric guitar"
        size="lg"
        className="bottom-10 right-0 lg:right-4"
        style={{ transform: 'rotate(25deg)', zIndex: 7 }}
      />

      {/* Bharatanatyam Dancer - bottom left */}
      <Sticker
        src="dance.png"
        alt="Classical dancer"
        size="lg"
        className="bottom-4 left-16 lg:left-24"
        style={{ transform: 'rotate(3deg)', zIndex: 11 }}
      />

      {/* Playing Cards - center */}
      <Sticker
        src="cards.png"
        alt="Playing cards"
        size="md"
        className="top-44 left-32 lg:left-40"
        style={{ transform: 'rotate(-10deg)', zIndex: 5 }}
      />

      {/* Small stickers - accent details */}

      {/* Pink Flower - near camera */}
      <Sticker
        src="flower.png"
        alt="Pink flower"
        size="sm"
        className="top-16 left-24 lg:left-32"
        style={{ transform: 'rotate(20deg)', zIndex: 14 }}
      />

      {/* Converse Badge - near headphones */}
      <Sticker
        src="converse.png"
        alt="Converse All Star badge"
        size="sm"
        className="top-20 right-8 lg:right-12"
        style={{ transform: 'rotate(-12deg)', zIndex: 13 }}
      />

      {/* 8-Balls - bottom center */}
      <Sticker
        src="8ball.png"
        alt="8-balls"
        size="md"
        className="bottom-16 left-4 lg:left-8"
        style={{ transform: 'rotate(8deg)', zIndex: 4 }}
      />

      {/* Skates - right side */}
      <Sticker
        src="skates1.png"
        alt="Skates"
        size="md"
        className="bottom-0 right-24 lg:right-4"
        style={{ transform: 'rotate(-22deg)', zIndex: 3 }}
      />

      {/* NEW STICKERS - filling in gaps */}

      {/* Paint Palette - lower right area, near guitar */}
      <Sticker
        src="paint.png"
        alt="Artist paint palette"
        size="md"
        className="bottom-0 right-20 lg:right-29"
        style={{ transform: 'rotate(-16deg)', zIndex: 2 }}
      />

      {/* Fingerprint Heart - small accent near hair flowers */}
      <Sticker
        src="heart.png"
        alt="Fingerprint heart"
        size="sm"
        className="bottom-36 right-8 lg:right-10"
        style={{ transform: 'rotate(15deg)', zIndex: 15 }}
      />

      {/* Chrome Star - small sparkle accent near brain */}
      <Sticker
        src="star.png"
        alt="Chrome star"
        size="sm"
        className="top-50 right-0 lg:right-105"
        style={{ transform: 'rotate(15deg)', zIndex: 16 }}
      />

      {/* Hopes & Dreams - bottom center-right, fills gap */}
      <Sticker
        src="hopesdreams.png"
        alt="Hopes and Dreams text"
        size="lg"
        className="bottom-20 right-46 lg:right-18"
        style={{ transform: 'rotate(-10deg)', zIndex: 5 }}
      />
    </div>
  );
}
