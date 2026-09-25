"use client";

import React from "react";
import { motion } from "framer-motion";

import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn,
    FaSnapchatGhost,
} from "react-icons/fa";

import { ArrowUpRight } from "lucide-react";

const socials = [
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://www.instagram.com/solvesticcare",
    },
    {
        name: "Facebook",
        icon: FaFacebookF,
        href: "https://www.facebook.com/profile.php?id=61592286175717",
    },
    {
        name: "Youtube",
        icon: FaYoutube,
        href: "https://www.youtube.com/@solvesticcare",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/solvesticwellness",
    },
    {
        name: "Snapchat",
        icon: FaSnapchatGhost,
        href: "https://www.snapchat.com/@solvestic?invite_id=wPyqYtMJ&locale=en_IN&share_id=vhFXjlEnSjiS9F3SA50_8A&sid=93c33448c3a448c48b7c407e576d86ad",
    },
];

export default function SocialCTA() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#F7F2FC]
                px-6
                py-8
                md:py-12
            "
        >

            {/* ============================================ */}
            {/* BACKGROUND BLURS */}
            {/* ============================================ */}

            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.08, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#D8B8F5]/35
                    blur-3xl
                "
            />

            <motion.div
                animate={{
                    x: [0, -25, 0],
                    y: [0, 25, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#E8D7F8]/70
                    blur-3xl
                "
            />

            {/* ============================================ */}
            {/* CONTENT */}
            {/* ============================================ */}

            <div className="relative z-10 mx-auto max-w-6xl text-center">

                {/* SMALL LABEL */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    className="
                        mb-6
                        flex
                        items-center
                        justify-center
                        gap-3
                    "
                >
                    <span className="h-px w-10 bg-[#7D45C2]" />

                    <span
                        className="
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-[#7D45C2]
                        "
                    >
                        Stay Connected
                    </span>

                    <span className="h-px w-10 bg-[#7D45C2]" />
                </motion.div>

                {/* ============================================ */}
                {/* HEADING */}
                {/* ============================================ */}

                <motion.h2
                    initial={{
                        opacity: 0,
                        y: 60,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.3,
                    }}
                    transition={{
                        duration: 1,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mx-auto
                        max-w-5xl
                        font-heading
                        text-[clamp(3.2rem,8vw,5rem)]
                        uppercase
                        leading-[0.82]
                        tracking-[-0.04em]
                        text-[#2D1557]
                    "
                >
                    Your Skin.
                    <br />

                    <span className="text-[#7D45C2]">
                        Your Story.
                    </span>
                </motion.h2>

                {/* ============================================ */}
                {/* DESCRIPTION */}
                {/* ============================================ */}

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.2,
                    }}
                    className="
                        mx-auto
                        mt-7
                        max-w-xl
                        text-sm
                        leading-7
                        text-[#563477]/70
                        md:text-base
                    "
                >
                    Be the first to discover thoughtful skincare,
                    beautiful rituals and everything coming next
                    from Solvestic.
                </motion.p>

                {/* ============================================ */}
                {/* CTA BUTTON */}
                {/* ============================================ */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.96,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-9 flex justify-center"
                >
                    <motion.a
                        href="#form"
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.97,
                        }}
                        className="
                            group
                            inline-flex
                            items-center
                            gap-4
                            rounded-full
                            bg-[#7D45C2]
                            px-8
                            py-4
                            text-base
                            font-semibold
                            text-white
                            shadow-[0_15px_40px_rgba(125,69,194,0.25)]
                            transition-colors
                            duration-300
                            hover:bg-[#703CAF]
                            md:px-8
                            md:py-4
                        "
                    >
                        Discover Solvestic

                        <ArrowUpRight
                            size={20}
                            className="
                                    transition-transform
                                    duration-300
                                    group-hover:translate-x-0.5
                                    group-hover:-translate-y-0.5
                                "
                        />
                    </motion.a>
                </motion.div>

                {/* ============================================ */}
                {/* SOCIALS */}
                {/* ============================================ */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.7,
                        delay: 0.55,
                    }}
                    className="mt-14"
                >

                    <p
                        className="
                            mb-5
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-[#563477]/50
                        "
                    >
                        Follow our journey
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">

                        {socials.map((social, index) => {
                            const Icon = social.icon;

                            return (
                                <motion.a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{
                                        opacity: 0,
                                        y: 15,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.6 + index * 0.08,
                                    }}
                                    whileHover={{
                                        y: -5,
                                    }}
                                    className="
                                        group
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-full
                                        border
                                        border-[#7D45C2]/15
                                        bg-white/60
                                        text-[#7D45C2]
                                        shadow-[0_8px_25px_rgba(60,20,100,0.05)]
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        hover:border-[#7D45C2]
                                        hover:bg-[#7D45C2]
                                        hover:text-white
                                        hover:shadow-[0_12px_30px_rgba(125,69,194,0.2)]
                                    "
                                    aria-label={social.name}
                                >
                                    <Icon
                                        size={18}
                                        className="
                                            transition-transform
                                            duration-300
                                            group-hover:scale-110
                                        "
                                    />
                                </motion.a>
                            );
                        })}

                    </div>
                </motion.div>

            </div>
        </section>
    );
}