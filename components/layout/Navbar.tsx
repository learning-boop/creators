"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar — always above overlay */}
      <nav className="w-full fixed top-0 left-0 right-0 z-50">
        <div className="px-4 sm:px-6 flex items-center justify-between h-14 sm:h-16">

          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Creators Touch Global"
              width={180}
              height={48}
              className="object-contain h-8 w-auto sm:h-10"
              priority
            />
          </Link>

          {/* Right side buttons */}
          <div className="flex items-center gap-2 sm:gap-3 relative z-50">
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-medium px-4 py-1 sm:px-5 sm:py-1 rounded-full bg-[#E10072] text-white hover:opacity-90 transition-opacity"
            >
              Let&apos;s Talk
            </Link>

            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-2 px-1 py-2 sm:px-5 sm:py-1 rounded-full border border-[#25272B] hover:border-[#F2F2F2] transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${menuOpen ? "text-black" : "text-[#F2F2F2]"}`}>
                Menu
              </span>
              <span className="flex flex-col justify-center gap-1">
                <span className={`block w-4 h-px transition-colors duration-300 ${menuOpen ? "bg-black" : "bg-[#F2F2F2]"}`} />
                <span className={`block w-4 h-px transition-colors duration-300 ${menuOpen ? "bg-black" : "bg-[#F2F2F2]"}`} />
                <span className={`block w-4 h-px transition-colors duration-300 ${menuOpen ? "bg-black" : "bg-[#F2F2F2]"}`} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-14 sm:h-16" />

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Side panel */}
      <div
        style={{
          clipPath: menuOpen ? "circle(170% at 100% 0%)" : "circle(0% at 100% 0%)",
          transition: "clip-path 0.65s cubic-bezier(0.4, 0, 0.6, 1)",
          pointerEvents: menuOpen ? "all" : "none",
        }}
        className="fixed top-0 right-0 h-full w-[80vw] sm:w-96 z-40 bg-white flex flex-col justify-between px-10 pt-[72px] pb-8 overflow-y-auto"
      >
        {/* Nav links */}
        <div className="flex flex-col group/nav">
          {[
            { label: "Work", href: "/work" },
            { label: "Services", href: "/services" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="nav-link group/item flex items-center justify-between opacity-100 group-hover/nav:opacity-25 group-hover/nav:[filter:blur(1.5px)] hover:!opacity-100 hover:![filter:blur(0)] transition-all duration-300"
              style={{ fontFamily: "var(--font-primary)" }}
            >
              <span className="text-[32px] sm:text-[30px] font-semibold text-[#1a1a1a] leading-[1.15]">
                {link.label}
              </span>
              <span className="opacity-0 -translate-x-3 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#1a1a1a] text-xl pr-1">
                →
              </span>
            </Link>
          ))}
        </div>

        {/* Bottom info */}
        <div className="flex flex-col gap-5">

          {/* Business Enquiry */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-[#A7A7A7] uppercase mb-2">
              Business Enquiry
            </p>
            <p className="text-sm text-[#1a1a1a] flex gap-4">
              <span className="text-[#A7A7A7] w-4">E.</span>
              <a href="mailto:hello@creatorstouchglobal.com" className="hover:opacity-50 transition-opacity">
                hello@creatorstouchglobal.com
              </a>
            </p>
            <p className="text-sm text-[#1a1a1a] flex gap-4 mt-1">
              <span className="text-[#A7A7A7] w-4">P.</span>
              <a href="tel:+918367333367" className="hover:opacity-50 transition-opacity">
                +91 83673 33367
              </a>
            </p>
          </div>

          {/* Social */}
          <div>
            <p className="text-[10px] font-semibold tracking-[0.15em] text-[#A7A7A7] uppercase mb-2">
              Social
            </p>
            <div className="grid grid-cols-2 gap-y-1">
              {["LinkedIn", "Facebook", "Dribbble", "Instagram"].map((s) => (
                <span key={s} className="text-sm text-[#1a1a1a] hover:opacity-40 transition-opacity cursor-pointer" style={{ fontFamily: "var(--font-secondary)" }}>
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Story button */}
          <button className="self-start flex items-center gap-2 border border-[#1a1a1a] rounded-full px-5 py-2.5 text-[11px] tracking-wide font-semibold text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white transition-colors">
            <span>✦</span>
            <span>THE CREATORS TOUCH STORY</span>
          </button>

        </div>
      </div>
    </>
  );
}
