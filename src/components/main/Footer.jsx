"use client";

import React from "react";
import {
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

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
        href: "https://www.snapchat.com/@solvestic",
    },
];

export default function Footer() {
    const { scrollYProgress } = useScroll();

    /*
     * Logo starts zoomed out.
     * When the footer enters the viewport,
     * it smoothly scales up.
     */
    const logoScale = useTransform(
        scrollYProgress,
        [0.72, 0.82, 0.92],
        [0.72, 0.92, 1.08]
    );

    const logoY = useTransform(
        scrollYProgress,
        [0.72, 0.92],
        [60, 0]
    );

    const logoOpacity = useTransform(
        scrollYProgress,
        [0.68, 0.78],
        [0.45, 1]
    );

    return (
        <footer className="relative overflow-hidden bg-white">

            {/* ================================================= */}
            {/* LOGO ZOOM SECTION */}
            {/* ================================================= */}

            <section className="relative flex h-[30vh] min-h-[400px] items-center justify-center overflow-hidden">

                {/* SOFT BACKGROUND GLOW */}
                {/* <div
                    className="
                        pointer-events-none
                        absolute
                        left-1/2
                        top-1/2
                        h-[70vw]
                        w-[70vw]
                        max-h-[900px]
                        max-w-[900px]
                        -translate-x-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-white
                        blur-3xl
                    "
                /> */}

                {/* LOGO */}
                <motion.div
                    style={{
                        scale: logoScale,
                        y: logoY,
                        // opacity: logoOpacity,
                    }}
                    className="
                        relative
                        z-10
                        flex
                        w-[90%]
                        max-w-[1500px]
                        items-center
                        justify-center
                        bg-white
                        px-8
                        md:px-14
                        lg:px-20
                    "
                >
                    <img
                        src="/newlogo1.png"
                        alt="Solvestic"
                        className="
                            h-auto
                            w-full
                            object-contain
                        "
                    />
                </motion.div>

            </section>

            {/* ================================================= */}
            {/* FOOTER CONTENT */}
            {/* ================================================= */}

            <section
                className="
                    border-t
                    border-black/20
                    bg-[#b773c5] text-white
                "
            >

                <div className="mx-auto max-w-[1600px]">

                    <div
                        className="
                            grid
                            grid-cols-1
                            lg:grid-cols-[1.6fr_0.8fr_0.8fr_1fr]
                        "
                    >

                        {/* ===================================== */}
                        {/* NEWSLETTER */}
                        {/* ===================================== */}

                        <div
                            className="
                                border-b
                                border-black/20
                                p-8
                                md:p-10
                                lg:border-b-0
                                lg:border-r
                                lg:p-12
                                xl:p-14
                            "
                        >

                            <p
                                className="
                                    max-w-lg
                                    text-lg
                                    leading-8
                                    text-white
                                    md:text-xl
                                "
                            >
                                Join us on the road to an effortless glow.
                            </p>

                            <p
                                className="
                                    mt-5
                                    max-w-xl
                                    text-sm
                                    leading-7
                                    text-white
                                    md:text-base
                                "
                            >
                                Glaze your inbox with skincare tips,
                                thoughtful rituals and exclusive content
                                from Solvestic.
                            </p>

                            {/* EMAIL FORM */}
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="
                                    mt-7
                                    flex
                                    max-w-[560px]
                                    overflow-hidden
                                    rounded-2xl
                                    bg-white
                                "
                            >

                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="
                                        min-w-0
                                        flex-1
                                        bg-transparent
                                        px-5
                                        py-4
                                        text-sm
                                        text-white
                                        outline-none
                                        placeholder:text-[#563477]/50
                                        md:text-base
                                    "
                                />

                                <button
                                    type="submit"
                                    className="
                                        border-l
                                        border-[#2D1557]/15
                                        px-5
                                        text-sm
                                        font-semibold
                                        uppercase
                                        tracking-wide
                                        text-[#2D1557]
                                        transition-colors
                                        duration-300
                                        hover:bg-[#7D45C2]
                                        hover:text-white
                                        md:px-7
                                    "
                                >
                                    Subscribe
                                </button>

                            </form>

                            <p
                                className="
                                    mt-4
                                    text-xs
                                    leading-5
                                    text-white
                                "
                            >
                                By signing up, you agree to our Privacy
                                Policy.
                            </p>

                        </div>

                        {/* ===================================== */}
                        {/* NAVIGATE */}
                        {/* ===================================== */}

                        <div
                            className="
                                border-b
                                border-black/20
                                p-8
                                md:p-10
                                lg:border-b-0
                                lg:border-r
                                lg:p-12
                            "
                        >

                            <h3
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-white
                                "
                            >
                                Navigate
                            </h3>

                            <nav className="mt-7 flex flex-col gap-5">

                                {[
                                    "Home",
                                    "Our Story",
                                    "Skin Concerns",
                                    "Products",
                                    "Contact",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href="#"
                                        className="
                                            group
                                            flex
                                            items-center
                                            gap-2
                                            text-base
                                            text-[#2D1557]/80
                                            transition-colors
                                            duration-300
                                            hover:text-white
                                        "
                                    >
                                        {item}

                                        <ArrowUpRight
                                            size={16}
                                            className="
                                                opacity-0
                                                transition-all mt-2
                                                duration-300
                                                group-hover:translate-x-1
                                                group-hover:-translate-y-1
                                                group-hover:opacity-100
                                            "
                                        />
                                    </a>
                                ))}

                            </nav>

                        </div>

                        {/* ===================================== */}
                        {/* SOCIAL */}
                        {/* ===================================== */}

                        <div
                            className="
                                border-b
                                border-black/20
                                p-8
                                md:p-10
                                lg:border-b-0
                                lg:border-r
                                lg:p-12
                            "
                        >

                            <h3
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-white
                                "
                            >
                                Social
                            </h3>

                            <div className="mt-7 flex flex-col gap-5">

                                {socials.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="
                                                group
                                                flex
                                                items-center
                                                gap-3
                                                text-base
                                                text-[#2D1557]/80
                                                transition-colors
                                                duration-300
                                                hover:text-white
                                            "
                                        >

                                            <Icon
                                                size={17}
                                                className="
                                                    transition-transform
                                                    duration-300
                                                    group-hover:scale-110
                                                "
                                            />

                                            <span>
                                                {social.name}
                                            </span>

                                        </a>
                                    );
                                })}

                            </div>

                        </div>

                        {/* ===================================== */}
                        {/* OFFICIAL / SUPPORT */}
                        {/* ===================================== */}

                        <div
                            className="
                                p-8
                                md:p-10
                                lg:p-12
                            "
                        >

                            <h3
                                className="
                                    text-sm
                                    font-bold
                                    uppercase
                                    tracking-[0.15em]
                                    text-white
                                "
                            >
                                Official
                            </h3>

                            <nav className="mt-7 flex flex-col gap-5">

                                <a
                                    href="#"
                                    className="
                                        text-base
                                        text-[#2D1557]/80
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    Privacy
                                </a>

                                <a
                                    href="#"
                                    className="
                                        text-base
                                        text-[#2D1557]/80
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    Terms
                                </a>

                                <a
                                    href="#"
                                    className="
                                        text-base
                                        text-[#2D1557]/80
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    Accessibility
                                </a>

                                <a
                                    href="#"
                                    className="
                                        text-base
                                        text-[#2D1557]/80
                                        transition-colors
                                        hover:text-white
                                    "
                                >
                                    FAQ
                                </a>

                            </nav>
                        </div>

                    </div>

                </div>

            </section>

            {/* ================================================= */}
            {/* BOTTOM BAR */}
            {/* ================================================= */}

            <div className="border-t border-black/20 bg-[#b773c5]">

                <div
                    className="
                        mx-auto
                        flex
                        max-w-[1600px]
                        flex-col
                        justify-between
                        gap-3
                        px-8
                        py-5
                        text-xs
                        text-[#2D1557]/60
                        md:flex-row
                        md:px-12
                    "
                >

                    <p>
                        © {new Date().getFullYear()} Solvestic. All rights reserved.
                    </p>

                    <p>
                        Thoughtfully made for your skin.
                    </p>

                </div>

            </div>

        </footer>
    );
}