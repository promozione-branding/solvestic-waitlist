"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function Founding100Section() {
    return (
        <section className="relative overflow-hidden bg-[#b773c5] py-10 sm:py-12">
            <div className="mxuto mx-w-6xl px-4 sm:px-10">
                <div className="absolute -top-4 right-0 z-40">
                    <img src="/brush.png" alt="paint" className="h-35" />
                </div>

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-[#EAE2F5]
                        bg-white
                        px-5
                        py-8
                        shadow-[0_15px_50px_rgba(118,80,184,0.08)]
                        sm:px-8
                        sm:py-9
                        lg:px-10
                    "
                >

                    {/* Soft lavender background glow */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-20
                            top-1/2
                            h-[220px]
                            w-[220px]
                            -translate-y-1/2
                            rounded-full
                            bg-[#EEE6FF]
                            blur-[70px]
                        "
                    />

                    {/* Subtle 100 */}
                    <div
                        className="
                            pointer-events-none
                            absolute
                            -right-2
                            top-1/2
                            -translate-y-1/2
                            select-none
                            text-[190px]
                            font-black
                            leading-none
                            tracking-[-0.08em]
                            text-[#7650B8]/[0.09]
                            sm:text-[230px]
                        "
                    >
                        100
                    </div>


                    <div
                        className="
                            relative
                            z-10
                            flex
                            flex-col
                            gap-6
                            lg:flex-row
                            lg:items-center
                            lg:justify-between
                        "
                    >

                        {/* Content */}
                        <div className="max-w-2xl">

                            {/* Label */}
                            <div
                                className="
                                    mb-3
                                    inline-flex
                                    items-center
                                    gap-1.5
                                    rounded-full
                                    bg-[#F3EEFF]
                                    px-3
                                    py-1.5
                                    text-[9px]
                                    font-bold
                                    uppercase
                                    tracking-[0.18em]
                                    text-[#7650B8]
                                "
                            >
                                <Sparkles size={11} />
                                Founding 100
                            </div>


                            {/* Heading */}
                            <h2
                                className="
                                    text-2xl
                                    font-black
                                    leading-tight
                                    tracking-tight
                                    text-[#211B29]
                                    sm:text-3xl
                                    lg:text-4xl
                                "
                            >
                                WANT TO BE HERE{" "}
                                <span className="text-[#7650B8]">
                                    FROM DAY ONE?
                                </span>
                            </h2>


                            {/* Description */}
                            <p
                                className="
                                    mt-3
                                    max-w-xl
                                    text-xs
                                    leading-5
                                    text-[#766D82]
                                    sm:text-sm
                                    sm:leading-6
                                "
                            >
                                We’re bringing together the{" "}
                                <span className="font-semibold text-[#332B3D]">
                                    Founding 100
                                </span>{" "}
                                — the first 100 people to join the Solvestic
                                journey. Get recognised on our website, get
                                early access to what’s coming next, and be part of the community shaping Solvestic from the start.
                            </p>

                        </div>


                        {/* CTA */}
                        <div className="relative shrink-0 lg:pr-2">

                            <a href="#form"
                                type="button"
                                className="
                                    group
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-[#7650B8]
                                    px-5
                                    py-3
                                    text-[10px]
                                    font-black
                                    tracking-[0.12em]
                                    text-white
                                    shadow-[0_8px_20px_rgba(118,80,184,0.20)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-0.5
                                    hover:bg-[#6844A8]
                                    hover:shadow-[0_12px_25px_rgba(118,80,184,0.25)]
                                "
                            >
                                Join the Waitlist

                                <span
                                    className="
                                        flex
                                        h-6
                                        w-6
                                        items-center
                                        justify-center
                                        rounded-full
                                        bg-white/15
                                        transition-transform
                                        duration-300
                                        group-hover:rotate-45
                                    "
                                >
                                    <ArrowUpRight size={12} />
                                </span>
                            </a>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}