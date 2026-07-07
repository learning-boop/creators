"use client";

import Image from "next/image";
import Link from "next/link";

function DiagonalLines() {
  const lines = [
    { top: "28%", rotate: "-22deg", color: "#CC0000",  opacity: 0.20 },
    { top: "36%", rotate: "-15deg", color: "#00AEEF",  opacity: 0.35 },
    { top: "45%", rotate: "-20deg", color: "#003B8E",  opacity: 0.28 },
    { top: "54%", rotate: "-12deg", color: "#E10072",  opacity: 0.28 },
    { top: "63%", rotate: "-18deg", color: "#00AEEF",  opacity: 0.18 },
    { top: "72%", rotate: "-25deg", color: "#CC0000",  opacity: 0.15 },
  ];

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {lines.map((l, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            width: "220%",
            height: "1px",
            background: l.color,
            opacity: l.opacity,
            top: l.top,
            left: "-60%",
            transform: `rotate(${l.rotate})`,
            transformOrigin: "center",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden">

      {/* Diagonal lines */}
      <DiagonalLines />

      {/* Center image */}
      <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
        <Image
          src="/images/hero_img.png"
          alt="Creators Touch Global"
          width={520}
          height={520}
          className="w-[260px] sm:w-[360px] md:w-[440px] lg:w-[520px] h-auto object-contain"
          priority
        />
      </div>

      {/* Main content layer */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">

        {/* Headline — top left */}
        <div className="px-5 md:px-5 pt-2 md:pt-5">
          <h1
            className="font-bold leading-[1.0] text-white text-[42px] sm:text-[48px] md:text-[50px] lg:text-[70px]"
            style={{ fontFamily: "var(--font-primary)" }}
          >
            Designed to
            <br />
            <span
              style={{
                background: "linear-gradient(to right, #00AEEF 0%, #E10072 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              create
            </span>{" "}
            impact.
          </h1>
        </div>

        {/* Green horizontal line + START A PROJECT */}
        <div className="flex items-center mt-8 md:mt-10">
          <Link
            href="/contact"
            className="flex items-center gap-3 pl-8 md:pl-14 pr-5 text-[#17C717] text-[11px] tracking-[0.18em] font-mono whitespace-nowrap hover:opacity-70 transition-opacity"
          >
            START A PROJECT <span className="text-base">→</span>
          </Link>
        </div>

        {/* Spacer pushes bottom to bottom */}
        <div className="flex-1" />

        {/* Bottom row */}
        <div className="flex items-end justify-between px-8 md:px-14 pb-8 md:pb-10 gap-4">

          {/* Bottom left — scroll arrow */}
          <button className="w-9 h-9 rounded-full border border-[#25272B] flex items-center justify-center text-[#F2F2F2] text-sm hover:border-[#F2F2F2] transition-colors shrink-0">
            ↓
          </button>

          {/* Bottom right — badge + description */}
          <div className="hidden md:flex flex-col items-end gap-3 shrink-0">
            <div className="border border-[#25272B] flex items-stretch">
              {/* Left: globe + est */}
              <div className="flex flex-col items-center justify-center gap-1 px-4 py-3 border-r border-[#25272B]">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#17C717" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <ellipse cx="12" cy="12" rx="4" ry="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                </svg>
                <span
                  className="text-[#6F6F6F] text-[8px] tracking-[0.15em]"
                  style={{ fontFamily: "var(--font-tertiary)" }}
                >
                  EST. 2009
                </span>
              </div>
              {/* Right: years text */}
              <div className="px-4 py-3 flex items-center max-w-[140px]">
                <p
                  className="text-[#F2F2F2] text-[11px] font-bold leading-snug tracking-wide"
                  style={{ fontFamily: "var(--font-secondary)" }}
                >
                  18+ YEARS SHAPING DIGITAL DIRECTION.
                </p>
              </div>
            </div>

            {/* Description below badge */}
            <p
              className="text-[#A7A7A7] text-[12px] leading-relaxed max-w-[230px] text-right"
              style={{ fontFamily: "var(--font-secondary)" }}
            >
              Websites, AI products, brands, and systems built for clarity, scale and impact.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
