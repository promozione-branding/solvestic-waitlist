"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const concerns = [
    {
        id: 1,
        title: "Sun Tan",
        description:
            "Prolonged sun exposure can leave skin looking darker, dull and uneven. Tan buildup affects your natural radiance, making the complexion appear tired, patchy and less radiant.",
        image: "/skin/2.png",
    },
    {
        id: 2,
        title: "Melasma",
        description:
            "Melasma causes stubborn, uneven dark patches, often appearing on the cheeks and other facial areas. It can make your complexion look visibly uneven and reduce your skin’s natural glow.",
        image: "/skin/1.png",
    },
    {
        id: 3,
        title: "Post Acne Marks",
        description:
            "Acne may fade, but the marks can stay behind. Dark spots and uneven texture left after breakouts can make skin look dull, uneven and less smooth.",
        image: "/skin/3.png",
    },
    {
        id: 4,
        title: "Uneven Skin Tone",
        description:
            "Uneven skin tone creates visible differences in complexion across the face. Dark patches, redness and pigmentation can make skin appear dull, inconsistent and less naturally radiant.",
        image: "/skin/4.png",
    },
];

export default function SkinConcerns() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const activeConcern = concerns[activeIndex];

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(0);
        setHoveredIndex(null);
    };

    return (
        <section
            className="
                relative
                h-[90vh]
                min-h-[500px]
                w-full
                overflow-hidden
                bg-[#F7F2FC]
            "
            onMouseLeave={handleMouseLeave}
        >

            {/* ========================================= */}
            {/* BACKGROUND IMAGE */}
            {/* ========================================= */}

            <AnimatePresence mode="sync">
                <motion.div
                    key={activeConcern.image}
                    initial={{
                        opacity: 0,
                        scale: 1.04,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        opacity: {
                            duration: 0.55,
                            ease: "easeInOut",
                        },
                        scale: {
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }}
                    className="absolute inset-0"
                >
                    <img
                        src={activeConcern.image}
                        alt={activeConcern.title}
                        className="
                            h-full
                            w-full
                            object-cover
                        "
                    />
                </motion.div>
            </AnimatePresence>

            {/* ========================================= */}
            {/* SOFT DARK OVERLAY */}
            {/* ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-black/15
                "
            />

            {/* ========================================= */}
            {/* PURPLE GRADIENT */}
            {/* ========================================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/45
                    via-transparent
                    to-black/10
                "
            />

            {/* ========================================= */}
            {/* CARDS */}
            {/* ========================================= */}

            <div className="relative z-10 flex h-full w-full">

                {concerns.map((concern, index) => {
                    const isHovered = hoveredIndex === index;

                    return (
                        <motion.div
                            key={concern.id}
                            onMouseEnter={() => handleMouseEnter(index)}
                            className="
                                relative
                                h-full
                                flex-1
                                cursor-pointer
                                overflow-hidden
                                border-r
                                border-white/20
                                last:border-r-0
                            "
                            animate={{
                                flexGrow: isHovered ? 1.12 : 1,
                            }}
                            transition={{
                                duration: 0.55,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >

                            {/* ========================================= */}
                            {/* HOVER PURPLE PANEL */}
                            {/* ========================================= */}

                            <motion.div
                                initial={false}
                                animate={{
                                    opacity: isHovered ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                }}
                                className="
                                    absolute
                                    inset-0
                                    bg-[#7D45C2]/65
                                    backdrop-blur-[2px]
                                "
                            />

                            {/* ========================================= */}
                            {/* CARD CONTENT */}
                            {/* ========================================= */}

                            <div
                                className="
                                    relative
                                    flex
                                    h-full
                                    flex-col
                                    justify-between
                                    p-6
                                    md:p-8
                                    lg:p-10
                                "
                            >

                                {/* NUMBER */}
                                <motion.div
                                    animate={{
                                        color: isHovered
                                            ? "#FFFFFF"
                                            : "#FFFFFF",
                                        y: isHovered ? 0 : 0,
                                    }}
                                    className="
                                        font-heading
                                        text-4xl
                                        font-medium
                                        leading-none
                                        md:text-5xl
                                    "
                                >
                                    {String(concern.id).padStart(2, "0")}
                                </motion.div>

                                {/* ========================================= */}
                                {/* BOTTOM */}
                                {/* ========================================= */}

                                <div className="pb-2">

                                    {/* TITLE */}
                                    <motion.h3
                                        animate={{
                                            y: isHovered ? -5 : 0,
                                        }}
                                        transition={{
                                            duration: 0.4,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                        className="
                                            max-w-[280px]
                                            font-heading
                                            text-xl
                                            font-medium
                                            uppercase
                                            leading-tight
                                            text-white
                                            md:text-2xl
                                            lg:text-[28px]
                                        "
                                    >
                                        {concern.title}
                                    </motion.h3>

                                    {/* ================================= */}
                                    {/* DESCRIPTION ONLY ON HOVER */}
                                    {/* ================================= */}

                                    <AnimatePresence initial={false}>
                                        {isHovered && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                    y: 20,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                    y: 0,
                                                }}
                                                exit={{
                                                    opacity: 0,
                                                    height: 0,
                                                    y: 10,
                                                }}
                                                transition={{
                                                    duration: 0.45,
                                                    ease: [0.22, 1, 0.36, 1],
                                                }}
                                                className="overflow-hidden"
                                            >
                                                <p
                                                    className="
                                                        mt-5
                                                        max-w-[340px]
                                                        text-sm
                                                        font-medium
                                                        leading-7
                                                        text-white/90
                                                        md:text-base
                                                    "
                                                >
                                                    {concern.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* ================================= */}
                                    {/* ARROW */}
                                    {/* ================================= */}

                                    <motion.div
                                        animate={{
                                            x: isHovered ? 5 : 0,
                                            y: isHovered ? -3 : 0,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                        }}
                                        className="
                                            mt-6
                                            flex
                                            h-10
                                            w-10
                                            items-center
                                            justify-start
                                            text-white
                                        "
                                    >
                                        <ArrowUpRight
                                            size={27}
                                            strokeWidth={1.5}
                                        />
                                    </motion.div>

                                </div>
                            </div>

                        </motion.div>
                    );
                })}

            </div>

            {/* ========================================= */}
            {/* SOFT PURPLE GLOW */}
            {/* ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-32
                    left-1/2
                    z-20
                    h-[300px]
                    w-[500px]
                    -translate-x-1/2
                    rounded-full
                    bg-[#D8B8F5]/20
                    blur-3xl
                "
            />

        </section>
    );
}