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