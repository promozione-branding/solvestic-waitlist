"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

const TARGET_DATE = new Date("2026-10-20T07:42:36");

function useCountdown(targetDate) {
    const calculateTime = () => {
        const difference = targetDate.getTime() - Date.now();

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return {
            days: Math.floor(
                difference / (1000 * 60 * 60 * 24)
            ),

            hours: Math.floor(
                (difference / (1000 * 60 * 60)) % 24
            ),

            minutes: Math.floor(
                (difference / (1000 * 60)) % 60
            ),

            seconds: Math.floor(
                (difference / 1000) % 60
            ),
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
                initial={{
                    opacity: 0.5,
                    y: 5,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.25,
                }}
                className="
          tabular-nums
          text-[clamp(2rem,4vw,3.2rem)]
          font-semibold
          leading-none
          tracking-[-0.05em]
          text-[#2D1557]
        "
            >
                {value}
            </motion.div>

            <span
                className="
          mt-2
          text-[8px]
          font-semibold
          tracking-[0.25em]
          text-[#563477]
          sm:text-[10px]
          md:text-xs
        "
            >
                {label}
            </span>
        </div>
    );
}

export default function Hero() {
    const {
        days,
        hours,
        minutes,
        seconds,
    } = useCountdown(TARGET_DATE);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            <Swiper
                modules={[Autoplay, EffectFade]}
                effect="fade"
                fadeEffect={{
                    crossFade: true,
                }}
                autoplay={{
                    delay: 7000,
                    disableOnInteraction: false,
                }}
                speed={1200}
                loop
                className="h-full w-full"
            >

                {/* =====================================================
            SLIDE 1 — VIDEO
        ===================================================== */}

                <SwiperSlide>
                    <div className="relative flex h-screen w-full items-end overflow-hidden">

                        {/* BACKGROUND VIDEO */}
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
                        <div className="absolute inset-0 bg-black/20" />

                        {/* CONTENT */}
                        <div className="relative z-10 w-full px-6 md:px-10 lg:px-16 pb-10">

                            {/* LARGE EDITORIAL HEADING */}
                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 1,
                                    delay: 0.25,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
          font-heading
          uppercase
          text-white
          font-semibold
          tracking-[-0.045em]
          leading-[0.82]
          text-[clamp(3.8rem,8.5vw,6rem)]
        "
                            >
                                <span className="block">
                                    Where Beauty Knows No Boundary
                                </span>

                                <span className="block ml-[36vw]">
                                    Empower your beauty
                                </span>
                            </motion.h1>

                            {/* DESCRIPTION */}
                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.65,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
          -mt-10
          ml-1
          max-w-md
          text-sm
          leading-7
          text-white
          md:text-lg
        "
                            >
                                Empower your beauty with thoughtfully formulated
                                skincare designed around the unique needs of
                                Indian skin.
                            </motion.p>
                        </div>
                    </div>
                </SwiperSlide>

                {/* =====================================================
            SLIDE 2 — WAITLIST
        ===================================================== */}

                <SwiperSlide>
                    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#F7F2FC]">

                        {/* DECORATIVE BLUR - TOP RIGHT */}
                        <div
                            className="
                absolute
                -right-40
                -top-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#D8B8F5]
                opacity-40
                blur-3xl
            "
                        />

                        {/* DECORATIVE BLUR - BOTTOM LEFT */}
                        <div
                            className="
                absolute
                -bottom-40
                -left-40
                h-[500px]
                w-[500px]
                rounded-full
                bg-[#E8D7F8]
                opacity-60
                blur-3xl
            "
                        />

                        {/* CONTENT */}
                        <div
                            className="
                relative
                z-10
                mx-auto
                flex
                w-full
                max-w-7xl
                flex-col
                items-center
                justify-center
                px-6
                pt-16
                text-center
                md:px-10
                lg:px-16
            "
                        >

                            {/* HEADING */}
                            <motion.h2
                                initial={{
                                    opacity: 0,
                                    y: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                    max-w-6xl
                    font-heading
                    text-[clamp(3.5rem,8vw,7rem)]
                    font-semibold
                    uppercase
                    leading-[0.82]
                    tracking-[-0.03em]
                    text-[#2D1557]
                "
                            >
                                Your Beauty
                                <br />

                                <span className="text-[#7D45C2]">
                                    Has No
                                </span>

                                <br />

                                Limits.
                            </motion.h2>

                            {/* COUNTDOWN */}
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
                                transition={{
                                    delay: 0.7,
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                    mt-10
                    w-full
                    max-w-[680px]
                    rounded-[24px]
                    border
                    border-white/80
                    bg-white/40
                    p-5
                    shadow-[0_20px_60px_rgba(60,20,100,0.12)]
                    backdrop-blur-xl
                    sm:p-6
                    md:p-7
                "
                            >
                                <div
                                    className="
                        flex
                        items-center
                        justify-center
                        gap-2
                        sm:gap-4
                    "
                                >

                                    {/* DAYS */}
                                    <TimerItem
                                        value={pad(days)}
                                        label="DAYS"
                                    />

                                    <div
                                        className="
                            h-10
                            w-px
                            bg-[#7650A0]/25
                            sm:h-14
                        "
                                    />

                                    {/* HOURS */}
                                    <TimerItem
                                        value={pad(hours)}
                                        label="HOURS"
                                    />

                                    <div
                                        className="
                            h-10
                            w-px
                            bg-[#7650A0]/25
                            sm:h-14
                        "
                                    />

                                    {/* MINUTES */}
                                    <TimerItem
                                        value={pad(minutes)}
                                        label="MINUTES"
                                    />

                                    <div
                                        className="
                            h-10
                            w-px
                            bg-[#7650A0]/25
                            sm:h-14
                        "
                                    />

                                    {/* SECONDS */}
                                    <TimerItem
                                        value={pad(seconds)}
                                        label="SECONDS"
                                    />

                                </div>
                            </motion.div>

                            {/* WAITLIST BUTTON */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.9,
                                    duration: 0.7,
                                }}
                                className="
                    mt-7
                    flex
                    justify-center
                "
                            >
                                <Link
                                    href="#waitlist"
                                    className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        rounded-full
                        bg-[#7D45C2]
                        px-7
                        py-4
                        text-sm
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-[#7D45C2]/20
                        transition-all
                        duration-300
                        hover:scale-105
                        hover:bg-[#703CAF]
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
                </SwiperSlide>

            </Swiper>
        </section>
    );
}