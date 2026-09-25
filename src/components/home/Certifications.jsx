"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const certifications = [
    {
        title: "ISO",
        subtitle: "CERTIFIED",
        description: "Quality Management",
        image: "/icons/8.png",
    },
    {
        title: "GMP",
        subtitle: "CERTIFIED",
        description: "Good Manufacturing",
        image: "/icons/9.png",
    },
    {
        title: "FDA",
        subtitle: "APPROVED",
        description: "Safety Standards",
        image: "/icons/10.png",
    },
    {
        title: "CRUELTY FREE",
        subtitle: "FREE",
        description: "Clean Formulation",
        image: "/icons/11.png",
    },
    {
        title: "SULPHATE & PARABEN FREE",
        subtitle: "FREE",
        description: "Clean Formulation",
        image: "/icons/12.png",
    },
    {
        title: "DERMATOLOGICALLY TESTED",
        subtitle: "FREE",
        description: "Clean Formulation",
        image: "/icons/13.png",
    },
];

export default function Certifications() {
    return (
        <section className="relative overflow-hidden bg-[#F7F2FC] pt-8 md:pt-12 pb-6">

            {/* ========================================= */}
            {/* DECORATIVE BLURS */}
            {/* ========================================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -right-40
                    -top-40
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-[#D8B8F5]/30
                    blur-3xl
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-40
                    -left-40
                    h-[450px]
                    w-[450px]
                    rounded-full
                    bg-[#E8D7F8]/50
                    blur-3xl
                "
            />

            {/* ========================================= */}
            {/* MAIN CONTAINER */}
            {/* ========================================= */}

            <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-10 lg:px-16">

                {/* ========================================= */}
                {/* HEADER */}
                {/* ========================================= */}

                <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row md:items-end">

                    <div className="max-w-3xl">

                        {/* SMALL LABEL */}
                        <motion.div
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
                                duration: 0.6,
                            }}
                            className="mb-5 flex items-center gap-3"
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
                                Our Standards
                            </span>
                        </motion.div>

                        {/* HEADING */}
                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 35,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.1,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                max-w-3xl
                                font-heading
                                text-[clamp(3rem,6vw,5rem)]
                                uppercase
                                leading-[0.85]
                                tracking-[-0.03em]
                                text-[#2D1557]
                            "
                        >
                            Certified
                            <br />
                            <span className="text-[#7D45C2]">
                                With Care.
                            </span>
                        </motion.h2>

                    </div>
                </div>

                {/* ========================================= */}
                {/* SWIPER */}
                {/* ========================================= */}

                <div className="relative">

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation={{
                            prevEl: ".cert-prev",
                            nextEl: ".cert-next",
                        }}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={18}
                        slidesPerView={1}
                        speed={1500}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },
                        }}
                        className="certification-swiper !overflow-visible"
                    >

                        {certifications.map((certificate, index) => (
                            <SwiperSlide key={certificate.title}>

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 30,
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
                                        delay: index * 0.08,
                                    }}
                                    className="
                                        group
                                        relative
                                        overflow-hidden
                                        rounded-[28px]
                                        border
                                        border-white
                                        bg-white/55
                                        p-7
                                        shadow-[0_20px_60px_rgba(60,20,100,0.06)]
                                        backdrop-blur-xl
                                        transition-all
                                        duration-500
                                        hover:-translate-y-2
                                        hover:shadow-[0_30px_80px_rgba(60,20,100,0.14)]
                                        h-full
                                        md:p-4
                                    "
                                >

                                    {/* CARD GLOW */}
                                    <div
                                        className="
                                            pointer-events-none
                                            absolute
                                            -right-24
                                            -top-24
                                            h-56
                                            w-56
                                            rounded-full
                                            bg-[#D8B8F5]/30
                                            blur-3xl
                                            transition-all
                                            duration-700
                                            group-hover:bg-[#D8B8F5]/60
                                        "
                                    />

                                    {/* ================================= */}
                                    {/* TOP */}
                                    {/* ================================= */}

                                    <div className="relative flex items-start justify-between">

                                        {/* INDEX */}
                                        <span
                                            className="
                                                text-xs
                                                font-semibold
                                                tracking-[0.2em]
                                                text-[#7D45C2]/50
                                            "
                                        >
                                            0{index + 1}
                                        </span>
                                    </div>

                                    {/* ================================= */}
                                    {/* ICON */}
                                    {/* ================================= */}

                                    <div className="relative mt-1 flex h-[120px] items-center justify-center">

                                        <motion.img
                                            src={certificate.image}
                                            alt={certificate.title}
                                            className="
                                                h-full
                                                w-full
                                                object-contain
                                                transition-transform
                                                duration-700
                                                ease-out
                                                group-hover:scale-110
                                            "
                                        />

                                    </div>

                                    {/* ================================= */}
                                    {/* DIVIDER */}
                                    {/* ================================= */}

                                    <div
                                        className="
                                            relative
                                            mt-2
                                            h-px
                                            w-full
                                            bg-[#7D45C2]/10
                                        "
                                    />

                                    {/* ================================= */}
                                    {/* TEXT */}
                                    {/* ================================= */}

                                    <div className="relative mt-4">

                                        <h3
                                            className="
                                                max-w-[300px]
                                                font-heading
                                                text-2xl
                                                uppercase
                                                leading-[0.95]
                                                tracking-tight
                                                text-[#2D1557]
                                                md:text-2xl
                                            "
                                        >
                                            {certificate.title}
                                        </h3>

                                        <p
                                            className="
                                                text-xs
                                                leading-6
                                                text-[#563477]/65
                                            "
                                        >
                                            {certificate.description}
                                        </p>

                                    </div>

                                </motion.div>

                            </SwiperSlide>
                        ))}

                    </Swiper>

                    {/* ========================================= */}
                    {/* NAVIGATION */}
                    {/* ========================================= */}

                    <div className="mt-5 flex items-center justify-between">

                        {/* PROGRESS TEXT */}
                        <div className="flex items-center gap-3">

                            <span
                                className="
                                    h-px
                                    w-10
                                    bg-[#7D45C2]
                                "
                            />

                            <span
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-[#7D45C2]
                                "
                            >
                                Quality First
                            </span>

                        </div>

                        {/* ARROWS */}
                        <div className="flex gap-3">

                            <button
                                type="button"
                                className="
                                    cert-prev
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    border
                                    border-[#7D45C2]/20
                                    bg-white/60
                                    text-[#7D45C2]
                                    transition-all
                                    duration-300
                                    hover:bg-[#7D45C2]
                                    hover:text-white
                                "
                                aria-label="Previous certification"
                            >
                                <ArrowLeft size={18} />
                            </button>

                            <button
                                type="button"
                                className="
                                    cert-next
                                    flex
                                    h-12
                                    w-12
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-[#7D45C2]
                                    text-white
                                    shadow-lg
                                    shadow-[#7D45C2]/20
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:bg-[#703CAF]
                                "
                                aria-label="Next certification"
                            >
                                <ArrowRight size={18} />
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}