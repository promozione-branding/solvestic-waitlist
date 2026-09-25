"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const ANNOUNCEMENTS = [
    "FREE AIRPODS",
    "SULPHATE & PARABEN FREE",
    "CRUELTY-FREE",
    "FDA-APPROVED",
];

function Marquee({ items, renderItem, className = "", repeat = 4 }) {
    const loop = Array.from({ length: repeat }, () => items).flat();

    return (
        <div className={`w-full overflow-hidden whitespace-nowrap ${className}`}>
            <div className="sv-marquee flex w-max">
                {loop.map((item, i) => (
                    <React.Fragment key={i}>
                        {renderItem(item)}
                        <span
                            aria-hidden="true"
                            className="mx-[24px] text-[#B6B8DB] sm:mx-[48px]"
                        >
                            ✦
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default function Navbar() {
    return (
        <motion.header
            initial={{
                opacity: 0,
                y: -30,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed left-0 top-0 z-50 w-full bg-white"
        >
            <style>{`
       

       

        .sv-page .sv-serif,
        .sv-page .sv-display,
        .sv-page .sv-h2,
        .sv-page .sv-equation-line,
        .sv-page .sv-newsletter-title,
        .sv-page .sv-footer-logo,
        .sv-page .sv-footer-tagline,
        

        .sv-page *,
        .sv-page *::before,
        .sv-page *::after {
          box-sizing: border-box;
        }

        .sv-page img {
          display: block;
          max-width: 100%;
        }

        .sv-marquee {
          animation: svMarquee 30s linear infinite;
        }

        .sv-marquee--fast .sv-marquee {
          animation-duration: 22s;
        }

        .sv-marquee--slow .sv-marquee {
          animation-duration: 30s;
        }

        .sv-marquee-track:hover .sv-marquee {
          animation-play-state: paused;
        }

        .sv-fade {
          animation: svFadeUp .9s cubic-bezier(.2,.7,.2,1) both;
        }

        .sv-d1 { animation-delay: .12s; }
        .sv-d2 { animation-delay: .26s; }
        .sv-d3 { animation-delay: .4s; }

        .sv-float {
          animation: svFloat 6s ease-in-out infinite;
        }

        .sv-float-slow {
          animation: svFloat 9s ease-in-out infinite;
        }

        .sv-spin {
          animation: svSpin 22s linear infinite;
        }

        .sv-twinkle {
          animation: svTwinkle 3.2s ease-in-out infinite;
        }

        .sv-pulse {
          animation: svPulse 2.6s ease-out infinite;
        }

        .sv-zoom {
          animation: svZoom 12s ease-in-out infinite;
        }

        .sv-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 30%;
          height: 100%;
          background: rgba(255,255,255,.28);
          transform: translateX(-120%) skewX(-20deg);
          animation: svShine 3.4s ease-in-out infinite;
        }

        @keyframes svFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: none; }
        }

        @keyframes svFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }

        @keyframes svSpin {
          to { transform: rotate(360deg); }
        }

        @keyframes svMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes svTwinkle {
          0%, 100% { opacity: .25; transform: scale(.7); }
          50% { opacity: 1; transform: scale(1.15); }
        }

        @keyframes svPulse {
          0% { box-shadow: 0 0 0 0 rgba(182,184,219,.7); }
          70% { box-shadow: 0 0 0 16px rgba(182,184,219,0); }
          100% { box-shadow: 0 0 0 0 rgba(182,184,219,0); }
        }

        @keyframes svShine {
          from { transform: translateX(-120%) skewX(-20deg); }
          to { transform: translateX(320%) skewX(-20deg); }
        }

        @keyframes svZoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-page *,
          .sv-page *::before,
          .sv-page *::after {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
            <div className="flex h-10 items-center overflow-hidden bg-[#7d45c2] text-[11px] uppercase tracking-[.08em] text-[#EEEFF8] sm:text-[13px]">
                <Marquee
                    items={ANNOUNCEMENTS}
                    renderItem={(t) => <span>{t}</span>}
                    className="sv-marquee-track sv-marquee--slow"
                />
            </div>
            <nav className="
        flex
        h-20
        items-center
        justify-center
        border
        border-black/10
        bg-white/80
        px-2
        shadow-sm
        backdrop-blur-xl
        md:px-6
      ">

                {/* LEFT */}
                {/* <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="hidden items-center gap-2 sm:flex md:gap-3"
                >
                    <Link
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#7D45C2]
              text-[#7D45C2]
              transition-all
              duration-300
              hover:bg-[#7D45C2]
              hover:text-white
            "
                    >
                        <FaInstagram
                            size={17}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </Link>

                    <Link
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="
              group
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              border
              border-[#7D45C2]
              text-[#7D45C2]
              transition-all
              duration-300
              hover:bg-[#7D45C2]
              hover:text-white
            "
                    >
                        <FaLinkedinIn
                            size={17}
                            className="transition-transform duration-300 group-hover:scale-110"
                        />
                    </Link>
                </motion.div> */}

                {/* CENTER LOGO */}
                <motion.div
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <Link href="/">
                        <div className="
              relative
              flex
              h-20
              w-40
              items-center
              justify-center
              md:h-20
              md:w-48
            ">
                            <Image
                                src="/solvestic_logo_write_animation_white_background.gif"
                                alt="Solvestic"
                                fill
                                priority
                                unoptimized
                                className="object-cover"
                            />
                        </div>
                    </Link>
                </motion.div>

                {/* RIGHT */}
                {/* <motion.div
                    initial={{
                        opacity: 0,
                        x: 20,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        delay: 0.6,
                        duration: 0.6,
                    }}
                >
                    <Link
                        href="#waitlist"
                        className="
              group
              flex
              items-center
              gap-2
              rounded-full
              bg-[#7D45C2]
              px-5
              py-3
              text-sm
              font-medium
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-[#703caf]
              md:px-6
            "
                    >
                        <span>Join Waitlist</span>

                        <ArrowUpRight
                            size={16}
                            strokeWidth={1.8}
                            className="
                transition-transform
                duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
                        />
                    </Link>
                </motion.div> */}

            </nav>
        </motion.header>
    );
}