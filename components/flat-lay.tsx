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
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/camera-UVqyCwrUQ2SJTkNQZRXpWsuPK5lOCa.png"
        alt="Vintage Leica camera"
        size="lg"
        className="top-2 left-8 lg:left-12"
        style={{ transform: 'rotate(-8deg)', zIndex: 10 }}
      />

      {/* Headphones - top right anchor */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/headphones-55d85wYJMlnFOeLkZYVrUP9JTVbG3d.png"
        alt="Black headphones"
        size="lg"
        className="top-0 right-12 lg:right-16"
        style={{ transform: 'rotate(5deg)', zIndex: 8 }}
      />

      {/* Vinyl Record - center-left anchor */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cd-mRldbshT4UJu7wBkAJcbvb32zgXE89.png"
        alt="Vinyl record"
        size="xl"
        className="top-20 left-0 lg:left-4"
        style={{ transform: 'rotate(12deg)', zIndex: 6 }}
      />

      {/* Brain - right side anchor */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brain-AD67C1b2TOD7DWnO0LiQrLCQhzPtEt.png"
        alt="Tech brain illustration"
        size="lg"
        className="top-24 right-4 lg:right-8"
        style={{ transform: 'rotate(-5deg)', zIndex: 9 }}
      />

      {/* NIDHI - Central focal sticker (between cards and brain) */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nidhi-ltrRvxPfdXT0WiFtOxJaNQZ7kdQ7RD.png"
        alt="Nidhi"
        size="xl"
        className="top-32 right-36 lg:top-30 lg:right-41"
        style={{ transform: 'rotate(5deg) scale(1.7)', zIndex: 20 }}
      />

      {/* Medium stickers - supporting elements */}

      {/* Butterfly - top center */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/butterfly-dDm6W4OQMFnku4FTK31GUdwH05uEQh.png"
        alt="Vintage butterfly"
        size="md"
        className="top-8 left-28 lg:left-36"
        style={{ transform: 'rotate(-15deg)', zIndex: 12 }}
      />

      {/* Electric Guitar - bottom right */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/electric%20guitar-dLEhkeuPSB0jaQJsPbwYOwLPGs5fHl.png"
        alt="Electric guitar"
        size="lg"
        className="bottom-8 right-0 lg:right-4"
        style={{ transform: 'rotate(25deg)', zIndex: 7 }}
      />

      {/* Bharatanatyam Dancer - bottom left */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dance-euCx3kv8xQiC50aFKkUcftXx2NL8Pk.png"
        alt="Classical dancer"
        size="lg"
        className="bottom-4 left-16 lg:left-24"
        style={{ transform: 'rotate(3deg)', zIndex: 11 }}
      />

      {/* Playing Cards - center */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cards-8OX4rnBI6QiLSw4WanYQBqTdbNvv0Q.png"
        alt="Playing cards"
        size="md"
        className="top-44 left-32 lg:left-40"
        style={{ transform: 'rotate(-10deg)', zIndex: 5 }}
      />

      {/* Small stickers - accent details */}

      {/* Pink Flower - near camera */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/flower-x7LVG2biwhTMHefKnss95pHX627TyB.png"
        alt="Pink flower"
        size="sm"
        className="top-16 left-24 lg:left-32"
        style={{ transform: 'rotate(20deg)', zIndex: 14 }}
      />

      {/* Converse Badge - near headphones */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/converse-4R0zRMLckRWS0pQkbTSn3DmMdUVjWU.png"
        alt="Converse All Star badge"
        size="sm"
        className="top-20 right-8 lg:right-12"
        style={{ transform: 'rotate(-12deg)', zIndex: 13 }}
      />

      {/* 8-Balls - bottom center */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/8ball-uzoNSY2ulTo67rD9v15gUHuCtfV82y.png"
        alt="8-balls"
        size="md"
        className="bottom-16 left-4 lg:left-8"
        style={{ transform: 'rotate(8deg)', zIndex: 4 }}
      />

      {/* Hair with Flowers - right side */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hair%20flowers-VVIsiTv2SyNzw2tDFD6bE7zg3fJnjE.png"
        alt="Hair with flowers"
        size="md"
        className="bottom-0 right-20 lg:right-10"
        style={{ transform: 'rotate(-6deg)', zIndex: 3 }}
      />

      {/* NEW STICKERS - filling in gaps */}

      {/* Paint Palette - lower right area, near guitar */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/paint-ik6qcQcce0r7NyMXRBGgOfNU8ok6tZ.png"
        alt="Artist paint palette"
        size="md"
        className="bottom-0 right-24 lg:right-32"
        style={{ transform: 'rotate(-15deg)', zIndex: 2 }}
      />

      {/* Fingerprint Heart - small accent near hair flowers */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/heart-PBoNKIsyQ8ObhAcOfi3yJqsy9oHl0D.png"
        alt="Fingerprint heart"
        size="sm"
        className="bottom-36 right-8 lg:right-10"
        style={{ transform: 'rotate(15deg)', zIndex: 15 }}
      />

      {/* Chrome Star - small sparkle accent near brain */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/star-6YZBrDI1eDhlejCUE5YCUaNxC3rzjL.png"
        alt="Chrome star"
        size="sm"
        className="top-50 right-0 lg:right-105"
        style={{ transform: 'rotate(15deg)', zIndex: 16 }}
      />

      {/* Hopes & Dreams - bottom center-right, fills gap */}
      <Sticker
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hopesdreams-2NqqFP2WsCXijcaEj6JpmfTNGfNF38.png"
        alt="Hopes and Dreams text"
        size="lg"
        className="bottom-20 right-46 lg:right-18"
        style={{ transform: 'rotate(-10deg)', zIndex: 5 }}
      />
    </div>
  );
}
