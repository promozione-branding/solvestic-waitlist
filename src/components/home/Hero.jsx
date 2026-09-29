"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const TARGET_DATE = new Date("2026-10-20T07:42:36");

function useCountdown(targetDate) {
    const calculateTime = () => {
        const difference = targetDate.getTime() - Date.now();

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    };

    const [time, setTime] = useState(calculateTime);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(calculateTime());
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return time;
}

const pad = (value) => String(value).padStart(2, "0");

function TimerItem({ value, label }) {
    return (
        <div className="flex min-w-0 flex-1 flex-col items-center">
            <motion.div
                key={value}
                initial={{ opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="
                    tabular-nums
                    text-[clamp(1.7rem,8vw,3.2rem)]
                    font-semibold
                    leading-none
                    tracking-[-0.05em]
                    text-white
                    sm:text-[clamp(2rem,4vw,3.2rem)]
                "
            >
                {value}
            </motion.div>

            <span
                className="
                    mt-2
                    text-[7px]
                    font-semibold
                    tracking-[0.18em]
                    text-white/70
                    sm:text-[10px]
                    sm:tracking-[0.25em]
                    md:text-xs
                "
            >
                {label}
            </span>
        </div>
    );
}

export default function Hero() {
    const { days, hours, minutes, seconds } = useCountdown(TARGET_DATE);

    return (
   <section className="relative mt-[120px] h-[calc(80vh-120px)] w-full overflow-hidden md:h-[calc(100vh-120px)]">
            <Swiper
                modules={[Autoplay, EffectFade, Navigation]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                navigation={{
                    prevEl: ".hero-prev",
                    nextEl: ".hero-next",
                }}
                speed={1200}
                className="h-full w-full"
            >
                {/* =====================================================
                    SLIDE 1 — VIDEO + TIMER + CTA (ALL CENTERED)
                ===================================================== */}

<SwiperSlide className="!h-full">
    {({ isActive }) => (
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">                            {/* BACKGROUND VIDEO */}
                            <video
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="auto"
                                className="absolute inset-0 h-full w-full object-cover"
                            >
                                <source
                                    src="/solvestic_water_realistic_1920x1080_download (1).mp4"
                                    type="video/mp4"
                                />
                            </video>

                            {/* DARK OVERLAY */}
                            <div className="absolute inset-0 bg-black/40" />

                            {/* CONTENT — centered column */}
                           <div
    className="
        relative
        z-10
        flex
        w-full
        flex-col
        items-center
        justify-center
        px-4
        text-center
        sm:px-6
        md:px-10
    "
>
                                {/* HEADING */}
                                <h1
                                    className="
                                        font-heading
                                        uppercase
                                        text-white
                                        font-semibold
                                        tracking-[-0.045em]
                                        leading-[0.95]
                                        text-[clamp(2.7rem,12vw,3.8rem)]
                                        sm:text-[clamp(3.5rem,9vw,5rem)]
                                        md:text-[clamp(3.8rem,8.5vw,6rem)]
                                    "
                                >
                                    {/* FIRST LINE */}
                                    <span className="block overflow-hidden">
                                        {isActive &&
                                            "For the skin"
                                                .split("")
                                                .map((letter, index) => (
                                                    <motion.span
                                                        key={`first-${index}`}
                                                        initial={{ opacity: 0, y: "110%" }}
                                                        animate={{ opacity: 1, y: "0%" }}
                                                        transition={{
                                                            duration: 0.45,
                                                            delay: 0.15 + index * 0.035,
                                                            ease: [0.22, 1, 0.36, 1],
                                                        }}
                                                        className="inline-block"
                                                    >
                                                        {letter === " " ? "\u00A0" : letter}
                                                    </motion.span>
                                                ))}
                                    </span>

                                    {/* SECOND LINE */}
                                    <span className="block mt-2 overflow-hidden">
                                        {isActive &&
                                            "SMART GENERATION"
                                                .split("")
                                                .map((letter, index) => (
                                                    <motion.span
                                                        key={`second-${index}`}
                                                        initial={{ opacity: 0, y: "110%" }}
                                                        animate={{ opacity: 1, y: "0%" }}
                                                        transition={{
                                                            duration: 0.45,
                                                            delay: 0.9 + index * 0.045,
                                                            ease: [0.22, 1, 0.36, 1],
                                                        }}
                                                        className="inline-block"
                                                    >
                                                        {letter === " " ? "\u00A0" : letter}
                                                    </motion.span>
                                                ))}
                                    </span>
                                </h1>

                                {/* COUNTDOWN TIMER */}
                                <motion.div
                                    initial={{ opacity: 0, y: 30, scale: 0.96 }}
                                    animate={
                                        isActive
                                            ? { opacity: 1, y: 0, scale: 1 }
                                            : { opacity: 0, y: 30, scale: 0.96 }
                                    }
                                    transition={{
                                        delay: 2.1,
                                        duration: 0.8,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="
                                        mt-8
                                        w-full
                                        max-w-[560px]
                                        rounded-[20px]
                                        border
                                        border-white/30
                                        bg-white/10
                                        p-3
                                        shadow-[0_20px_60px_rgba(0,0,0,0.2)]
                                        backdrop-blur-md
                                        sm:mt-10
                                        sm:rounded-[24px]
                                        sm:p-5
                                        md:p-6
                                    "
                                >
                                    <div
                                        className="
                                            flex
                                            w-full
                                            items-center
                                            justify-center
                                            gap-1
                                            sm:gap-4
                                        "
                                    >
                                        <TimerItem value={pad(days)} label="DAYS" />
                                        <div className="h-8 w-px bg-white/25 sm:h-12" />
                                        <TimerItem value={pad(hours)} label="HOURS" />
                                        <div className="h-8 w-px bg-white/25 sm:h-12" />
                                        <TimerItem value={pad(minutes)} label="MINUTES" />
                                        <div className="h-8 w-px bg-white/25 sm:h-12" />
                                        <TimerItem value={pad(seconds)} label="SECONDS" />
                                    </div>
                                </motion.div>

                                {/* WAITLIST BUTTON */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={
                                        isActive
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 20 }
                                    }
                                    transition={{
                                        delay: 2.4,
                                        duration: 0.7,
                                    }}
                                    className="mt-6 sm:mt-7"
                                >
                                    <Link
                                        href="#waitlist"
                                        className="
                                            group
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            bg-[#7D45C2]
                                            px-6
                                            py-3.5
                                            text-sm
                                            font-semibold
                                            text-white
                                            shadow-lg
                                            shadow-[#7D45C2]/30
                                            transition-all
                                            duration-300
                                            hover:scale-105
                                            hover:bg-[#703CAF]
                                            sm:gap-3
                                            sm:px-7
                                            sm:py-4
                                        "
                                    >
                                        Join the Waitlist
                                        <ArrowUpRight
                                            size={17}
                                            className="
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                            "
                                        />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    )}
                </SwiperSlide>

                {/* =====================================================
                    NAVIGATION ARROWS
                ===================================================== */}

                {/* PREVIOUS */}
                <div
                    className="
                        absolute
                        inset-y-0
                        left-2
                        z-50
                        flex
                        items-center
                        sm:left-4
                        md:left-6
                    "
                >
                    <button
                        type="button"
                        aria-label="Previous slide"
                        className="
                            hero-prev
                            group
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            bg-black/20
                            text-white
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-white
                            hover:text-[#2D1557]
                            sm:h-10
                            sm:w-10
                            md:h-12
                            md:w-12
                        "
                    >
                        <ArrowLeft
                            size={19}
                            strokeWidth={1.8}
                            className="
                                transition-transform
                                duration-300
                                group-hover:-translate-x-1
                                sm:size-[22px]
                                md:size-[25px]
                            "
                        />
                    </button>
                </div>

                {/* NEXT */}
                <div
                    className="
                        absolute
                        inset-y-0
                        right-2
                        z-50
                        flex
                        items-center
                        sm:right-4
                        md:right-6
                    "
                >
                    <button
                        type="button"
                        aria-label="Next slide"
                        className="
                            hero-next
                            group
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/40
                            bg-black/20
                            text-white
                            backdrop-blur-md
                            transition-all
                            duration-300
                            hover:scale-110
                            hover:bg-white
                            hover:text-[#2D1557]
                            sm:h-10
                            sm:w-10
                            md:h-12
                            md:w-12
                        "
                    >
                        <ArrowRight
                            size={19}
                            strokeWidth={1.8}
                            className="
                                transition-transform
                                duration-300
                                group-hover:translate-x-1
                                sm:size-[22px]
                                md:size-[25px]
                            "
                        />
                    </button>
                </div>
            </Swiper>
        </section>
    );
}