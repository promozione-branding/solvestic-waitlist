"use client"
import React, { useEffect, useId, useState } from "react";

// import heroImg from "./assets/hero.svg";
// import skinLayersImg from "./assets/skin-layers.svg";
// import textureImg from "./assets/texture.svg";
// import dayImg from "./assets/day.svg";
// import nightImg from "./assets/night.svg";

/*
  Solvestic — Our Philosophy
  Tailwind version of the supplied page.

  Requirements:
  - Tailwind CSS
  - No external OurPhilosophy.css file
  - Keep the supplied SVG/image assets in ./assets/
*/

const ANNOUNCEMENTS = [
  "FREE AIRPODS",
  "SULPHATE & PARABEN FREE",
  "CRUELTY-FREE",
  "FDA-APPROVED",
];

const NAV_LINKS = [
  { label: "Shop All", href: "#" },
  { label: "Skincare", href: "#" },
  { label: "Body Care", href: "#" },
  { label: "Bestsellers", href: "#" },
  { label: "Our Philosophy", href: "#", active: true },
];

const STATS = [
  { value: "[XX]%", label: "saw more hydrated skin after [X] weeks" },
  { value: "[XX]%", label: "noticed a smoother, more even texture" },
  { value: "[XX]%", label: "said their skin felt stronger and less sensitive" },
  { value: "[XX]%", label: "would recommend Solvestic to a friend" },
];

const PRINCIPLES = [
  {
    title: "Barrier first",
    text: "Ceramides, lipids and humectants that strengthen and protect the skin’s natural barrier.",
    icon: (
      <>
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
        <path d="M9 12h6" />
      </>
    ),
  },
  {
    title: "Proven actives",
    text: "Ingredients like vitamin C, niacinamide and peptides, used at levels backed by research.",
    icon: (
      <path d="M12 3c3 4 6 7 6 11a6 6 0 01-12 0c0-4 3-7 6-11z" />
    ),
  },
  {
    title: "Gentle by design",
    text: "pH-balanced, dermatologist tested and made without harsh irritants.",
    icon: <path d="M4 18l5-6 4 3 7-9" />,
  },
];

const BENEFITS = [
  ["Strengthens", "the barrier"],
  ["Locks in", "hydration"],
  ["Reveals", "natural glow"],
];

const ROUTINES = [
  {
    key: "day",
    theme: "light",
    img: "/day.svg",
    alt: "Solvestic day serum with sun",
    title: "Day",
    subtitle: "protect",
    tag: "AM routine",
    text: "Antioxidants and lightweight hydration shield skin from sun, pollution and daily wear.",
    ingredients: ["[Ingredient 1]", "[Ingredient 2]", "[Ingredient 3]", "[Ingredient 4]"],
    effects: ["+ Hydration", "+ Antioxidants", "− Dullness"],
  },
  {
    key: "night",
    theme: "dark",
    img: "/night.svg",
    alt: "Solvestic night cream with moon",
    title: "Night",
    subtitle: "repair",
    tag: "PM routine",
    text: "Richer, restorative actives work overnight to renew texture, rebuild the barrier and smooth fine lines.",
    ingredients: ["[Ingredient 1]", "[Ingredient 2]", "[Ingredient 3]", "[Ingredient 4]"],
    effects: ["+ Repair", "+ Collagen", "− Fine lines"],
  },
];

const EXPERTS = [
  {
    name: "[Expert name]",
    role: "[Credentials · Specialty]",
    bio: "[One-line bio: experience, affiliation]",
    photo: null,
  },
  {
    name: "[Expert name]",
    role: "[Credentials · Specialty]",
    bio: "[One-line bio: experience, affiliation]",
    photo: null,
  },
  {
    name: "[Expert name]",
    role: "[Credentials · Specialty]",
    bio: "[One-line bio: experience, affiliation]",
    photo: null,
  },
];

const FOOTER_COLUMNS = [
  { title: "About", links: ["Our Philosophy", "Our Story", "Journal", "Press"] },
  { title: "Support", links: ["FAQs", "Shipping", "Returns & refunds", "Contact us"] },
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

function Sparkle({ size, color, style, delay }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      className="sv-twinkle pointer-events-none absolute"
      style={{ animationDelay: delay, ...style }}
    >
      <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
    </svg>
  );
}

function SpinningBadge() {
  return (
    <div
      className="sv-spin absolute left-[-8px] top-[-18px] z-20 h-[96px] w-[96px] sm:left-[-20px] sm:h-[112px] sm:w-[112px] lg:left-[-34px] lg:h-[132px] lg:w-[132px]"
      aria-hidden="true"
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 132 132"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <path
            id="svCircle"
            d="M66 66 m-50 0 a50 50 0 1 1 100 0 a50 50 0 1 1 -100 0"
          />
        </defs>
        <circle cx="66" cy="66" r="64" fill="#26244F" />
        <text
         
          fontSize="11.5"
          letterSpacing="3.2"
          fill="#EEEFF8"
        >
          <textPath href="#svCircle">
            SOLVESTIC ✦ CLEAN SCIENCE ✦ REAL RESULTS ✦
          </textPath>
        </text>
        <circle cx="66" cy="66" r="14" fill="#B6B8DB" />
      </svg>
    </div>
  );
}

const Icon = ({ children, size = 22 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default function OurPhilosophy() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="sv-page min-h-screen overflow-x-hidden bg-white text-[#26244F]"
      style={{
        "--ink": "#26244F",
        "--ink-2": "#33305F",
        "--violet": "#4B4886",
        "--lavender": "#B6B8DB",
        "--lavender-2": "#8E91C4",
        "--lilac": "#EEEFF8",
        "--line": "#DCDDEF",
        "--muted": "#55537A",
        "--white": "#ffffff",
      }}
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

      {/* Announcement bar */}
      {/* <div className="flex h-10 items-center overflow-hidden bg-[#7d45c2] text-[11px] uppercase tracking-[.08em] text-[#EEEFF8] sm:text-[13px]">
        <Marquee
          items={ANNOUNCEMENTS}
          renderItem={(t) => <span>{t}</span>}
          className="sv-marquee-track sv-marquee--slow"
        />
      </div> */}

      {/* Header */}
      {/* <header className="relative flex h-[72px] items-center justify-between border-b border-[#DCDDEF] px-4 sm:h-[82px] sm:px-8 lg:h-[88px] lg:px-[80px]">
        <nav
          aria-label="Primary"
          className="hidden items-center gap-5 text-[13px] font-medium lg:flex xl:gap-8 xl:text-[15px]"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              aria-current={l.active ? "page" : undefined}
              className={`transition-colors hover:text-[#4B4886] ${
                l.active
                  ? "border-b-2 border-[#26244F] pb-1"
                  : ""
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#26244F] lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
            <span className="h-px w-full bg-current" />
          </span>
        </button>

        <a
          href="/"
          className="absolute left-1/2 -translate-x-1/2 font-serif text-[24px] font-medium tracking-[.16em] text-[#26244F] sm:text-[29px] lg:text-[34px]"
          style={{ fontFamily: '"Fraunces", Georgia, serif' }}
        >
          SOLVESTIC
        </a>

        <div className="flex items-center gap-0.5 sm:gap-2">
          <button
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#EEEFF8] sm:h-11 sm:w-11"
          >
            <Icon>
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" />
            </Icon>
          </button>

          <button
            aria-label="Account"
            className="hidden h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-[#EEEFF8] sm:flex"
          >
            <Icon>
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" />
            </Icon>
          </button>

          <button
            aria-label="Cart"
            className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#EEEFF8] sm:h-11 sm:w-11"
          >
            <Icon>
              <path d="M5 8h14l-1.2 12H6.2z" />
              <path d="M9 8V6a3 3 0 016 0v2" />
            </Icon>
          </button>
        </div>

        {mobileOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-[#DCDDEF] bg-white px-5 py-5 shadow-lg lg:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className={l.active ? "text-[#4B4886]" : ""}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header> */}

      <main>
        {/* Hero */}
        <section className="relative grid min-h-[600px] grid-cols-1 mt-20 items-center gap-10 overflow-hidden bg-[#F0EBF9] px-5 py-14 sm:px-10 lg:min-h-[620px] lg:grid-cols-2 lg:gap-16 lg:px-[80px] lg:py-[70px]">
          <div className="relative z-10 flex flex-col gap-6 lg:gap-7">
            <div className="sv-fade text-[10px] font-bold uppercase tracking-[.22em] text-[#4B4886] sm:text-[13px]">
              Our Philosophy
            </div>

            <h1 className="sv-fade sv-d1 max-w-[720px] text-[#ac4cd1]    font-light leading-[1.02] tracking-[-.02em] text-[44px] sm:text-[54px] lg:text-[clamp(44px,5.3vw,76px)]">
              Honest science. <em className="font-medium">Visible results.</em>
            </h1>

            <p className="sv-fade sv-d2 max-w-[520px] text-[15px] leading-[1.65] sm:text-[17px] lg:text-[19px] lg:leading-[1.6]">
              Every Solvestic formula starts with one question: what does your
              skin actually need? We pair proven actives with gentle,
              skin-friendly bases — and nothing you don’t need.
            </p>

            <div className="sv-fade sv-d3 mt-1 flex flex-wrap gap-3">
              <a
                href="#formula"
                className="sv-shine relative inline-flex items-center overflow-hidden rounded-full bg-[#2d1557] px-6 py-3.5 text-[13px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(38,36,79,.25)] sm:px-8 sm:py-[18px] sm:text-[15px]"
              >
                <span className="relative z-10">Explore the formula</span>
              </a>

              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#26244F] bg-transparent px-5 py-3 text-[13px] font-medium transition hover:-translate-y-0.5 sm:px-7 sm:py-4 sm:text-[15px]"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M7 4l13 8-13 8z" />
                </svg>
                Watch the film
              </a>
            </div>
          </div>

          <div className="sv-fade sv-d2 relative mx-auto w-full max-w-[700px] lg:mx-0">
            <div className="sv-float-slow">
              <div className="relative h-[420px] overflow-hidden rounded-[210px_210px_24px_24px] bg-[#2d1557] sm:h-[500px] lg:h-[540px]">
                <div className="sv-zoom absolute inset-0 flex h-full w-full items-center justify-center">

                     <svg
    xmlns="http://www.w3.org/2000/svg"
    width={415}
    height={415}
    viewBox="-49.78 0 298.69 298.69"

  >
    <g id="SVGRepo_iconCarrier">
      <defs>
        <style>{".b{fill:#fff}.c{fill:#211715}"}</style>
      </defs>
      <path
        d="M150.178 13.658c-12.124-9.248-23.57-11.783-35.1-11.61C96.8 2.323 81.878 8.86 71.639 20.1c-5.911 6.489-10.332 16.065-12.2 24.671A89.365 89.365 0 0 0 59 75.438s35.785 32.5 51.385 45.828c20.267 13.2 56.155 35.808 56.155 35.808 9.73-3.923 10.248-10.485 10.541-14.425a43.908 43.908 0 0 0-1.556-15.6c-1.762-6.953-4.933-21.041-3.151-45.593a118.268 118.268 0 0 0 1.383-15.526c.085-2.422.12-4.474.131-5.819.156-13.755-5.773-29.643-14.684-38.876Z"
        style={{
          fill: "#a98a75",
        }}
      />
      <path
        d="m154.02 78.722-8.665-2.338c-5.895-3.457-12.014-13.429-14.19-19.153a139.652 139.652 0 0 1-4.765-15.439c-8.665 8.635-21.167 14.9-34.408 18.023-3.558 0-12.15.353-16.334.388-4.091 2.853-8.169 5.58-12.111 8.038-.963.6-2.121 1.245-2.859 1.7l-1.771 1.085.034.4c.647 7.689.958 15.368 1.4 22.439q.05.786.112 1.567c.935 11.648 4.2 22.222 12.072 29.306 6.985 6.288 14.462 9.753 23.178 10.588.544 3.8-3.365 5.92-6.418 7-2.687 1.21-6.917 2.7-10.747 4.071a29.28 29.28 0 0 0 13.2 11.805c5.784 2.592 12.072 3.384 18.276 3.384a77.914 77.914 0 0 0 44.094-14.164l-2.738-1.861c-4.226-2.873-9.236-5.764-11.233-10.467a26.87 26.87 0 0 1-1.46-5.486l-1.472-7.689a68.65 68.65 0 0 0 8.319-9.409s2.365-3.3 3.388-5.2c0 0 .265-.491.558-1.028a14.927 14.927 0 0 0 7.39-1.347 20.305 20.305 0 0 0 8.09-8.66c2.065-3.71 3.21-10.059 1.7-13.866-.508-1.272-1.812-3.516-5.619-4.279a7.75 7.75 0 0 0-5.652.967Z"
        className="b"
      />
      <path
        d="M135.458 123.357c.649 3.385 1.122 6.87 2.049 10.193a16.536 16.536 0 0 0 4.475 7.5 45.661 45.661 0 0 0 6.693 5.09c2.894 1.928 5.759 3.9 8.635 5.854 2.134 1.451 4.137-2.013 2.018-3.454-2.72-1.85-5.43-3.718-8.167-5.543a45.407 45.407 0 0 1-6.084-4.519 12.931 12.931 0 0 1-3.825-6.417c-.829-3.2-1.314-6.521-1.937-9.771-.484-2.525-4.34-1.456-3.857 1.064ZM93.765 135.907c0 .166 0 .329-.015.494-.016.217.083-.219-.032.125-.048.146-.085.3-.131.445-.063.2.129-.2-.053.111-.077.132-.15.266-.229.4-.066.11-.239.341-.066.12a6.061 6.061 0 0 1-.645.686 8.324 8.324 0 0 1-.361.316c-.264.219.367-.238-.136.1-.273.184-.544.367-.828.534s-.576.323-.871.47c-.147.073-.3.141-.443.211-.056.026-.454.2-.144.07-3.077 1.305-6.244 2.481-9.506 3.652a2.051 2.051 0 0 0-1.4 2.46 2.017 2.017 0 0 0 2.46 1.4c2-.717 3.992-1.435 5.965-2.212.933-.367 1.844-.8 2.779-1.156-.25.1.042 0 .146-.041a27.874 27.874 0 0 0 1.803-.757c3-1.4 5.715-3.887 5.7-7.423-.008-2.573-4.008-2.578-4 0ZM157.786 22.645c7.025 7.349 11.258 17.33 13.157 27.221a68.137 68.137 0 0 1 .841 15.112 177.145 177.145 0 0 1-.433 8.306c-.213 2.745-.687 5.438-.981 8.168a137.625 137.625 0 0 0-.487 17.575c.1 4.49.384 8.978.916 13.438.4 3.359.921 6.7 1.61 10.017.671 3.228 1.612 6.4 2.2 9.644a40.071 40.071 0 0 1 .535 9.572 21.823 21.823 0 0 1-.6 4.681c-1.089 4.245-4.484 7.094-8.54 8.766a2.067 2.067 0 0 0-1.4 2.461 2.014 2.014 0 0 0 2.46 1.4c4.321-1.782 8.41-4.5 10.381-8.9 1.49-3.33 1.745-7.091 1.778-10.7.072-7.979-2.732-15.6-3.944-23.421a146.66 146.66 0 0 1-1.217-29.5c.288-5.963 1.284-11.848 1.574-17.82a89.549 89.549 0 0 0-.229-16.027c-1.563-11.907-6.416-24.057-14.8-32.823-1.782-1.864-4.608.967-2.828 2.828Z"
        className="c"
      />
      <path
        d="M179.722 296.69c-1.318-10.713-2.342-21.9-2.9-31.036 8.205-15.533 11.422-27.63 16.089-42.121 2.533-7.867 5.2-25.734 3.866-34.134a42 42 0 0 0-8.4-18.6c-7.432-9.125-16.545-14.976-33.468-23.946a78.027 78.027 0 0 1-44.892 14.722c-6.2 0-12.492-.792-18.276-3.384a29.261 29.261 0 0 1-12.156-10.176l-31.957-3.783c-10.6 4.907-15.665 9.794-22.137 22.817-5 10.041-7.628 21.494-10.01 32.4-2.722 12.419-5.186 26.09-4.643 38.837.4 9.383 4.268 19.455 12.635 23.731 7.7 3.932 17.8 2.264 24.5-3.248.08 1.433.134 2.364.134 2.364.168 2.9.718 11.826.622 16.122-.084 3.8-.492 10.92-1.1 19.368Z"
        style={{
          fill: "#f8b8b4",
        }}
      />
      <path
        d="m60.834 89.364-4.281 2.554C55.194 93 54.9 93.77 54.46 95.772a376.638 376.638 0 0 1-1.543 6.839 3.688 3.688 0 0 0-2.151.136 2.762 2.762 0 0 0-1.849 2.12 65.848 65.848 0 0 0-1.252 15.969c.315 8.654.921 13.339 2.043 22.894a39.408 39.408 0 0 1 .082 9.024c-.126 1.24-2.7 7.154-5.2 12.758l-.234.523a3091.131 3091.131 0 0 1 24.473 8.75c.044-.339.075-.564.075-.564a129.152 129.152 0 0 1 3.434-15.106A28.329 28.329 0 0 1 77.957 150a23.434 23.434 0 0 0 1.632-1.98c.18-.24.348-.492.5-.744a8.351 8.351 0 0 0 .744-1.7 51.36 51.36 0 0 0 1.572-7.752l2.335-49.268-21.667-.528Z"
        className="b"
      />
      <path
        d="M162.269 233.342c-2.225-11.464-4.248-22.97-6.269-34.471q-.738-4.2-1.456-8.4a2.017 2.017 0 0 0-2.461-1.4 2.047 2.047 0 0 0-1.4 2.46c1.987 11.721 4.1 23.422 6.264 35.112.479 2.589.96 5.178 1.462 7.763.49 2.525 4.346 1.456 3.857-1.063ZM89.786 113.8a16.277 16.277 0 0 0 7.614 1.9 15.978 15.978 0 0 0 3.925-.369 25.582 25.582 0 0 0 3.878-1.512 2.064 2.064 0 0 0 1.4-2.461 2.013 2.013 0 0 0-2.46-1.4 30.185 30.185 0 0 1-3.519 1.425 10.094 10.094 0 0 1-1.207.245c.22-.031.08-.01-.058 0-.582.047-1.161.08-1.746.072a19.002 19.002 0 0 1-1.685-.106c-.35-.036.252.041-.095-.009a16.568 16.568 0 0 1-1.328-.251 13.992 13.992 0 0 1-1.529-.444c-.042-.015-.508-.193-.289-.1.186.075-.149-.068-.182-.083a11.643 11.643 0 0 1-.7-.365c-2.237-1.282-4.254 2.173-2.019 3.454ZM107.576 85.919c-.556-2.523.4-8.141 5.1-8.24 6.157.543 5.924 7.412 3.586 10.458-1.912 2.495-6.994 3.18-8.686-2.218ZM70.91 84.065c-.5-2.528.405-8.167 4.711-8.287 5.637.517 5.392 7.407 3.238 10.474-1.759 2.51-6.422 3.22-7.949-2.187ZM90 91.043c-.835 1.265-1.661 2.553-2.374 3.892a6.208 6.208 0 0 0-.664 1.542 3.01 3.01 0 0 0 .678 2.734 4.568 4.568 0 0 0 1.8 1.215 5.983 5.983 0 0 0 1.458.288l-.532-.072c.083.012.164.025.246.041a2.14 2.14 0 0 0 1.541-.2 2 2 0 0 0-.477-3.655c-.3-.059-.606-.089-.908-.13l.531.072a3.215 3.215 0 0 1-.8-.2l.478.2a2.563 2.563 0 0 1-.239-.123q-.063-.036-.123-.078-.184-.127.2.154c-.041-.082-.194-.184-.259-.245l-.088-.1q.3.433.171.167l.2.478a.81.81 0 0 1-.041-.175l.071.531a1.53 1.53 0 0 1 0-.279l-.072.531a2.5 2.5 0 0 1 .137-.485l-.2.478a19.239 19.239 0 0 1 1.35-2.41c.444-.726.9-1.447 1.366-2.157a2.014 2.014 0 0 0-.717-2.736 2.047 2.047 0 0 0-2.733.722ZM133.66 127.483a66.255 66.255 0 0 0 10.883-10.492 57.717 57.717 0 0 0 6.1-8.68c1.237-2.259-2.216-4.28-3.454-2.019a52.071 52.071 0 0 1-5.478 7.871 61.975 61.975 0 0 1-10.073 9.866 2.068 2.068 0 0 0-.718 2.737 2.013 2.013 0 0 0 2.737.717ZM151.187 11.931A56.864 56.864 0 0 0 122.968.4a69.124 69.124 0 0 0-28.447 2.885 56.575 56.575 0 0 0-22.338 13.364c-7.04 6.934-11.778 16.15-14.217 25.677a73.528 73.528 0 0 0-2.029 15.885 90.79 90.79 0 0 0 1.13 17.759 2.017 2.017 0 0 0 2.461 1.4 2.047 2.047 0 0 0 1.4-2.461 81.977 81.977 0 0 1 .211-28.444c1.716-8.927 5.668-18.007 11.788-24.8C84.656 8.628 102.4 3.23 119.584 4.127c10.935.572 20.9 4.679 29.584 11.258a2.013 2.013 0 0 0 2.737-.717 2.05 2.05 0 0 0-.718-2.737Z"
        className="c"
      />
      <path
        d="M121.791 128.75a59.176 59.176 0 0 1-20.366 4.747 37.789 37.789 0 0 1-18.628-3.98A35.854 35.854 0 0 1 68.563 116.8c-3.38-5.554-5.056-12.037-5.81-18.45-1.049-8.923-1.052-17.977-1.8-26.932-.212-2.546-4.214-2.569-4 0 .7 8.424.815 16.9 1.625 25.312.682 7.083 2.222 14.183 5.617 20.5 6.614 12.295 20.487 19.8 34.213 20.266 8.442.286 16.658-1.744 24.444-4.885a2.063 2.063 0 0 0 1.4-2.46 2.013 2.013 0 0 0-2.46-1.4ZM156.392 80.816a6.236 6.236 0 0 1 7.792 1.219 7.39 7.39 0 0 1 .542.919c.016.032.136.3.037.069-.134-.311.1.273.116.339a10.368 10.368 0 0 1 .284 1.068 13.946 13.946 0 0 1 .042 4.49c-.749 5.682-4.222 11.653-9.429 14.322a8.946 8.946 0 0 1-1.448.528 14.278 14.278 0 0 1-2.163.46 8.536 8.536 0 0 1-4.989-.633c-2.279-1.191-4.3 2.26-2.019 3.454 3.41 1.782 7.724 1.566 11.265.237a19.13 19.13 0 0 0 8.8-7.568 24.291 24.291 0 0 0 3.953-10.535c.426-3.372.189-7.175-2.082-9.887-3.009-3.593-8.779-4.307-12.717-1.936-2.2 1.327-.194 4.787 2.019 3.454ZM124.547 42.629c1.669 6.832 3.678 13.917 7 20.156 3.038 5.714 7.143 11.92 12.8 15.326 2.211 1.33 4.225-2.127 2.019-3.454-5.15-3.1-8.805-8.993-11.526-14.191-3.062-5.847-4.875-12.519-6.434-18.9-.611-2.5-4.469-1.441-3.857 1.063Z"
        className="c"
      />
      <path
        d="M91.013 46.568a374.431 374.431 0 0 1-31.33 21.643c-2.2 1.327-.194 4.787 2.019 3.454a374.431 374.431 0 0 0 31.33-21.643 2.063 2.063 0 0 0 .718-2.737 2.015 2.015 0 0 0-2.737-.717ZM124.974 40.393c-9.1 8.992-21.176 14.553-33.508 17.493-2.5.6-1.443 4.455 1.064 3.857 12.984-3.095 25.7-9.062 35.273-18.522 1.833-1.812-.995-4.64-2.829-2.828ZM77.866 149.025a31.776 31.776 0 0 0 11.785 10.381 42.42 42.42 0 0 0 16.733 4.072 76.056 76.056 0 0 0 32.581-5.638 84.206 84.206 0 0 0 16.957-9.267c2.085-1.475.089-4.945-2.018-3.454a78.953 78.953 0 0 1-28.534 12.77c-10.111 2.231-21.565 2.84-31.387-.914a27.463 27.463 0 0 1-12.663-9.969c-1.458-2.1-4.926-.1-3.454 2.019ZM174.88 266.569c.643 10.065 1.615 20.111 2.842 30.121a2.063 2.063 0 0 0 2 2 2.012 2.012 0 0 0 2-2c-1.227-10.01-2.2-20.056-2.842-30.121-.163-2.556-4.164-2.575-4 0ZM46.115 261.133c.3 5.238.7 10.5.629 15.753-.091 6.582-.637 13.175-1.111 19.737-.185 2.569 3.816 2.557 4 0 .474-6.562 1.02-13.155 1.111-19.737.071-5.25-.325-10.515-.629-15.753-.149-2.559-4.15-2.576-4 0Z"
        className="c"
      />
      <path
        d="M80.481 137.284c-.453 2.821-.627 6.1-1.948 8.683a22.249 22.249 0 0 1-2.881 3.664 37.384 37.384 0 0 0-2.989 4.16 33.032 33.032 0 0 0-3.57 9.585c-.835 3.41-1.466 6.865-2.114 10.313-.474 2.516 3.381 3.594 3.857 1.063.636-3.38 1.254-6.767 2.065-10.111a29.661 29.661 0 0 1 3.665-9.544 31.657 31.657 0 0 1 2.7-3.564 17.128 17.128 0 0 0 2.955-4.04c1.29-2.871 1.626-6.069 2.12-9.146a2.062 2.062 0 0 0-1.4-2.46 2.015 2.015 0 0 0-2.46 1.4ZM46.32 166.521c1.542-3.469 3.108-6.936 4.491-10.473A20.585 20.585 0 0 0 52 147.766c-.094-3.878-.742-7.746-1.173-11.6-.352-3.144-.66-6.292-.867-9.449-.233-3.549-.417-7.114-.317-10.672.055-1.928.179-3.855.389-5.772a21.3 21.3 0 0 1 .855-5.031 1.277 1.277 0 0 1 2.055-.374c.992 1.229.974 3.384 1.145 4.867.469 4.068.927 8.147 1.48 12.2a17.233 17.233 0 0 0 1.849 5.908c.9 1.667 2.172 3.1 3.087 4.771a19.825 19.825 0 0 1 2.45 10.438c-.063 2.575 3.937 2.574 4 0a23.533 23.533 0 0 0-2.132-10.749c-1.521-3.303-4.221-5.927-5.062-9.527a58.35 58.35 0 0 1-.828-6.132c-.266-2.153-.54-4.305-.792-6.459-.4-3.426-.594-8.567-4.77-9.522a5.592 5.592 0 0 0-5.066 1.312c-1.349 1.307-1.557 3.307-1.839 5.07a70.448 70.448 0 0 0-.847 11.874 207.281 207.281 0 0 0 1.759 21.992 69.5 69.5 0 0 1 .631 7.273 16.183 16.183 0 0 1-.369 4.925 109.48 109.48 0 0 1-4.772 11.391 2.064 2.064 0 0 0 .718 2.737 2.015 2.015 0 0 0 2.736-.718Z"
        className="c"
      />
      <path
        d="M55.11 102.02c.46-1.979.884-3.966 1.329-5.948.085-.376.174-.752.287-1.121.045-.147.1-.29.149-.435a1.276 1.276 0 1 0-.078.18 1.658 1.658 0 0 0 .115-.231c.064-.121.137-.234.21-.349.174-.277-.006.049-.1.115a1.04 1.04 0 0 0 .139-.162 7.1 7.1 0 0 1 .8-.737 2.006 2.006 0 0 0 0-2.828 2.059 2.059 0 0 0-2.829 0 7.3 7.3 0 0 0-2.49 4.214c-.49 2.073-.914 4.163-1.4 6.238a2 2 0 0 0 3.857 1.064ZM46.623 142.505c-5.727 2.666-11.039 6.051-15.083 10.979-5.112 6.23-8.761 13.8-11.508 21.33-3.218 8.822-5.215 18.061-7.149 27.233a171.744 171.744 0 0 0-4.052 29.1c-.293 8.086.343 16.33 4.445 23.5A22.263 22.263 0 0 0 31.2 266.114a25.85 25.85 0 0 0 19.988-7.585 52.017 52.017 0 0 0 7.259-10.229 93.548 93.548 0 0 0 5.737-11.978c3.372-8.414 5.4-17.192 7.424-26 1.924-8.365 3.741-16.753 5.509-25.151q.674-3.2 1.343-6.409c.525-2.511-3.33-3.585-3.857-1.063-1.659 7.938-3.33 15.873-5.093 23.788-1.886 8.472-3.62 17.052-6.2 25.346A91.6 91.6 0 0 1 53.027 249.5c-1.953 3.019-4.076 6.092-6.986 8.27a22.59 22.59 0 0 1-9.168 4.017 18.491 18.491 0 0 1-17.834-5.83c-4.711-5.461-6.156-12.949-6.263-19.954a135.312 135.312 0 0 1 2.862-27.425c1.683-8.794 3.567-17.628 6.119-26.214a85.844 85.844 0 0 1 10.118-22.6A34.907 34.907 0 0 1 44.4 148.1a67.311 67.311 0 0 1 4.243-2.137 2.016 2.016 0 0 0 .717-2.736 2.046 2.046 0 0 0-2.736-.718Z"
        className="c"
      />
      <path
        d="M35.975 165.229C47.071 168.986 58.09 173 69.1 177c1.846.672 3.7 1.331 5.526 2.05a2.013 2.013 0 0 0 2.46-1.4 2.046 2.046 0 0 0-1.4-2.46c-10.388-4.088-21.015-7.647-31.544-11.354-2.365-.832-4.729-1.666-7.1-2.47-2.443-.827-3.492 3.035-1.063 3.857ZM141.422 289.7c6.647.147 13.586.084 19.593-3.14 6.381-3.424 11.526-9.151 15.068-15.389a163.071 163.071 0 0 0 10.037-21.061c2.48-6.332 4.541-12.812 6.582-19.3a134.262 134.262 0 0 0 4.516-16.947 110.677 110.677 0 0 0 1.918-18.7c.059-12.58-6.265-23.89-15.416-32.2-9.278-8.421-20.779-14.188-31.794-19.951l-2.121-1.11c-2.279-1.192-4.3 2.259-2.019 3.454 10.147 5.309 20.732 10.46 29.755 17.6 8.833 6.989 16.558 16.973 17.471 28.428a77.487 77.487 0 0 1-.929 16.881 96.491 96.491 0 0 1-3.465 15.872c-4.128 12.911-8.061 25.808-14.2 37.947-3.338 6.6-6.855 12.952-12.628 17.742a24.107 24.107 0 0 1-7.978 4.612 32.111 32.111 0 0 1-8.812 1.277c-1.858.052-3.716.028-5.574-.013-2.575-.057-2.575 3.943 0 4Z"
        className="c"
      />
      <path
        d="M105.166 190.861c.863 16.765 1.906 33.573 4.405 50.187a146.08 146.08 0 0 0 4.485 21.017c1.726 5.646 3.942 11.03 7.767 15.586 5.149 6.132 12.473 11.4 20.667 11.988 2.568.184 2.557-3.816 0-4-6.687-.48-12.657-5.019-16.989-9.839-3.644-4.056-5.724-8.886-7.352-14.038-4.418-13.987-5.934-28.914-7.183-43.465-.785-9.132-1.329-18.283-1.8-27.436-.131-2.561-4.132-2.577-4 0Z"
        className="c"
      />
      <path
        d="M110.319 141.656a31.588 31.588 0 0 1 1.423-5.482 92.974 92.974 0 0 1 5.721-10.748c2.232-4.268 5.58-14.116 7.232-19.953a8.414 8.414 0 0 1 3.236-4.448 3.742 3.742 0 0 1 4.769.6 4.224 4.224 0 0 1 .779.994l.644-1.972 1.327-4.05a5.091 5.091 0 0 1 5.339-3.377 5.355 5.355 0 0 1 3.307 1.633l.275-.467s1.126-1.909 1.569-2.646c1.032-1.716 2.86-2.12 5.029-1.3a4.576 4.576 0 0 1 2.885 4.121c.163 1.593-.365 5.476-1.05 9.409h1.16a4.238 4.238 0 0 1 2.894.89c1.049.747 1.38 3.128 1.165 4.428a219.668 219.668 0 0 1-7.092 26.971c-2.915 6.612-5.394 11.914-8.174 18.543a17.313 17.313 0 0 0-1.434 4.58 17.439 17.439 0 0 0 .383 5.035c.328 1.88 3.77 15.736 4.275 18.177l.448 2.165c-9.225 1.36-20.88 3.115-29.947 4.559l-.1-2.324c-.191-4.351-.372-17.562-1.143-21.672-.693-3.69-2.794-7.054-4.12-10.559a21.3 21.3 0 0 1-1.157-11.134c.098-.563.219-1.244.357-1.973Z"
        className="b"
      />
      <path
        d="M107.7 192.79c14.323-2.5 28.73-4.559 43.115-6.662a2.013 2.013 0 0 0 1.4-2.46 2.052 2.052 0 0 0-2.461-1.4c-14.385 2.1-28.791 4.164-43.114 6.662a2.015 2.015 0 0 0-1.4 2.46 2.045 2.045 0 0 0 2.46 1.4ZM119.19 126.435c3.259-6.31 5.358-13.358 7.354-20.15.395-1.343 1.524-3.616 3.112-3.865 1.9-.3 2.508 1.945 2.352 3.349a65.021 65.021 0 0 1-2.351 9.621c-1.006 3.694-2.035 7.4-3.29 11.014-.845 2.438 3.018 3.485 3.857 1.064 1.255-3.619 2.285-7.321 3.29-11.015.531-1.949 1.046-3.9 1.528-5.867a22.577 22.577 0 0 0 1-5.687 6.513 6.513 0 0 0-3.6-5.855 5.823 5.823 0 0 0-6.649 1.142 11.584 11.584 0 0 0-3.318 5.764c-.588 2.008-1.221 4-1.882 5.988a86.689 86.689 0 0 1-4.858 12.479c-1.18 2.283 2.271 4.309 3.454 2.018Z"
        className="c"
      />
      <path
        d="M115.736 124.417c-2.508 4.315-5.434 8.726-6.674 13.614-1.229 4.841-1.9 9.761-.68 14.679 1.177 4.76 4.285 8.857 5.025 13.739.049.319-.037-.3.008.051a48.49 48.49 0 0 1 .155 1.474c.073.811.131 1.623.183 2.435.12 1.886.2 3.775.274 5.663.138 3.642.2 7.287.354 10.927.11 2.565 4.111 2.578 4 0-.28-6.535-.206-13.11-.869-19.624a22.593 22.593 0 0 0-1.023-5.088c-.815-2.381-2-4.611-2.985-6.919a21.346 21.346 0 0 1-1.812-7.443 32.34 32.34 0 0 1 3.145-13.714c1.328-2.659 2.86-5.207 4.353-7.776 1.3-2.23-2.16-4.246-3.454-2.018ZM149.076 135.543c-1.86 4.21-3.771 8.4-5.622 12.613a322.82 322.82 0 0 0-2.794 6.523 14.943 14.943 0 0 0-1.383 6.544 40.415 40.415 0 0 0 1.262 7.133c.626 2.66 1.271 5.316 1.911 7.972.545 2.264 1.125 4.524 1.6 6.8.527 2.518 4.384 1.452 3.857-1.063-.928-4.429-2.095-8.813-3.144-13.214-.41-1.722-.86-3.446-1.171-5.19a11.865 11.865 0 0 1 .284-6.287c.705-2.02 1.624-3.98 2.478-5.941 2.02-4.641 4.127-9.244 6.173-13.874a2.064 2.064 0 0 0-.718-2.737 2.015 2.015 0 0 0-2.736.718ZM139.154 130.619c2.231-7.184 4.2-14.466 6.057-21.754.872-3.418 1.973-7.027 2-10.573a6.95 6.95 0 0 0-8.105-7 7.074 7.074 0 0 0-5.269 3.975 48.515 48.515 0 0 0-1.648 4.853c-.8 2.452 3.059 3.5 3.857 1.064.693-2.115 1.034-5.38 3.615-5.94a3.122 3.122 0 0 1 3.24 1.407c.523 1.083.316 2.61.064 4.1-1.1 6.456-3.1 12.832-4.863 19.129-.9 3.235-1.814 6.47-2.81 9.678-.766 2.464 3.094 3.518 3.857 1.063Z"
        className="c"
      />
      <path
        d="M146.86 134.67c2.471-7.77 4.822-15.652 6.6-23.613.9-4.025 1.616-8.114 2.131-12.207.443-3.523.628-7.62-2.841-9.751a6.491 6.491 0 0 0-6.965-.076c-1.457 1.046-2.249 2.847-3.141 4.358-1.312 2.222 2.144 4.237 3.453 2.019a16.638 16.638 0 0 1 1.765-2.91c.847-.907 2.638-.384 3.347.485a4.519 4.519 0 0 1 .643 3.232c-.092 1.587-.319 3.167-.563 4.736a173.448 173.448 0 0 1-4.522 19.976 372.845 372.845 0 0 1-3.764 12.688c-.781 2.459 3.079 3.511 3.857 1.063Z"
        className="c"
      />
      <path
        d="M153.964 105.975c1.363.019 1.941.5 2.1 1.865a9.664 9.664 0 0 1-.364 3.084c-.562 2.816-1.231 5.61-1.933 8.394-1.44 5.707-2.973 11.433-4.961 16.977-.87 2.428 2.994 3.473 3.858 1.063a188.649 188.649 0 0 0 5.544-19.341 75.145 75.145 0 0 0 1.819-8.724 7.9 7.9 0 0 0-.923-4.863 5.917 5.917 0 0 0-5.136-2.455c-2.575-.035-2.576 3.965 0 4Z"
        className="c"
      />
      <path
        d="M17.132 84.975a.754.754 0 0 1-1.464.018c-.828-3.192-2.114-7.006-4.066-9.279-2.382-2.773-5.824-3.951-9.014-4.636a.754.754 0 0 1 0-1.473c3.159-.67 6.642-1.849 8.958-4.349C13.754 62.877 15 58.089 15.7 54.84a.755.755 0 0 1 1.473-.017c.776 3.249 2.157 8.05 4.366 10.433 2.293 2.475 5.607 3.655 8.669 4.328a.754.754 0 0 1-.011 1.475c-3.27.655-6.855 1.778-9.236 4.55-1.961 2.272-3.078 6.145-3.829 9.366Z"
        style={{
          fill: "#ffda71",
        }}
      />
      <path
        d="m15.2 84.443-.1.257.515-.883.263-.183h1.064q.8.935.458.085-.1-.383-.216-.763-.2-.683-.421-1.356c-.332-1.009-.713-2-1.134-2.972A16.132 16.132 0 0 0 12.747 74a14.173 14.173 0 0 0-4.513-3.192c-1.743-.8-3.588-1.072-5.349-1.746l.882.514v1.534l-.882.514c.9-.342 1.9-.468 2.828-.756a23.3 23.3 0 0 0 3.04-1.188 13.174 13.174 0 0 0 4.925-3.888 18.606 18.606 0 0 0 2.563-5.243c.6-1.76.817-3.687 1.472-5.411l-.515.883-1.539-.015-.514-.883c.7 1.72.967 3.656 1.607 5.415a20.1 20.1 0 0 0 2.553 5.125 13.328 13.328 0 0 0 4.731 3.9 21.85 21.85 0 0 0 3.032 1.246c.928.3 1.934.442 2.839.793l-.883-.514-.009-1.532.882-.515c-1.743.64-3.589.878-5.321 1.622A13.957 13.957 0 0 0 19.8 73.9c-2.636 2.847-3.729 6.855-4.6 10.539-.59 2.5 3.265 3.572 3.857 1.063.742-3.151 1.556-6.855 3.976-9.185a11.326 11.326 0 0 1 4.309-2.458c1.41-.473 3.607-.514 4.675-1.62a2.774 2.774 0 0 0-1.051-4.5 45.24 45.24 0 0 1-4.733-1.539 9.717 9.717 0 0 1-3.762-2.95 17.405 17.405 0 0 1-2.114-4.495c-.521-1.538-.795-3.177-1.355-4.693a2.752 2.752 0 0 0-4.286-1.2c-1.218.982-1.287 3.042-1.676 4.467a23.306 23.306 0 0 1-1.74 4.744c-1.615 3.072-4.718 4.476-7.953 5.3-1.655.427-3.421.985-3.347 3.076.081 2.2 2.148 2.521 3.844 3a13.762 13.762 0 0 1 5.068 2.426 11.584 11.584 0 0 1 3.155 4.535 29.821 29.821 0 0 1 1.081 3.03 12.882 12.882 0 0 0 .9 2.817 2.762 2.762 0 0 0 2.886 1.234 2.911 2.911 0 0 0 2.122-1.981 2.012 2.012 0 0 0-1.4-2.46 2.052 2.052 0 0 0-2.456 1.393Z"
        className="c"
      />
    </g>
  </svg>
                  
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3.5 sm:bottom-7 sm:left-7 sm:right-7 sm:px-[22px] sm:py-[18px]">
                  <span className="sv-serif text-[15px] sm:text-[20px]">
                    Clear science. Clear skin.
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-[.14em] text-[#4B4886] sm:text-[12px]">
                    Solvestic
                  </span>
                </div>
              </div>
            </div>

            <SpinningBadge />
          </div>

          <Sparkle size={22} color="#8E91C4" delay=".3s" style={{ top: 90, left: "44%" }} />
          <Sparkle size={16} color="#B6B8DB" delay="1.4s" style={{ bottom: 40, left: "42%" }} />
          <Sparkle size={18} color="#8E91C4" delay="2.1s" style={{ top: 120, right: 60 }} />
          <Sparkle size={14} color="#B6B8DB" delay=".9s" style={{ bottom: 60, left: 60 }} />
        </section>

        {/* Stats */}
        <section className="flex flex-col items-center gap-10 px-5 py-20 sm:px-13 ">
          <h2 className="sv-h2 max-w-[760px] text-black text-center text-[32px] font-light leading-[1.15] sm:text-[40px] lg:text-[48px]">
            Results you can <em>see and measure.</em>
          </h2>

          <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {STATS.map((s, i) => (
              <div
                key={i}
                className="group flex flex-col gap-3 rounded-b-2xl border-t-[1.5px] border-[#26244F] px-0 py-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(38,36,79,.12)]"
              >
                <div className="sv-serif text-[#7B44BF] text-[48px] font-light leading-none sm:text-[58px] lg:text-[64px]">
                  {s.value}
                </div>
                <div className="text-[13px] leading-[1.5] sm:text-[15px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        
        </section>

        {/* Principles */}
        <section className="bg-[#b1a2cf] px-5 py-6 text-white sm:px-10 sm:py-13">
          <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <h2 className="sv-h2 max-w-[640px] text-[34px] font-light leading-[1.1] sm:text-[42px] lg:text-[52px]">
              Three principles{" "}
              <em className="text-[#fff]">behind every formula</em>
            </h2>

            <p className="max-w-[440px] text-[13px] leading-[1.6] text-[#fff] sm:text-[15px] lg:text-[17px]">
              We keep our approach simple, so what goes on your skin is only
              what works for it.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PRINCIPLES.map((p) => (
              <article
                key={p.title}
                className="group flex flex-col gap-5 rounded-[20px] bg-[#fff] p-6 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(0,0,0,.18)] sm:p-8 lg:p-9"
              >
                <div className="sv-pulse flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#b1a2cf] sm:h-14 sm:w-14">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="1.6"
                    aria-hidden="true"
                  >
                    {p.icon}
                  </svg>
                </div>

                <h3 className="sv-serif text-[#7d45c2] text-[24px] sm:text-[28px]">
                  {p.title}
                </h3>

                <p className="text-[13px] leading-[1.9] text-[#7d45c2] sm:text-[15px]">
                  {p.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* How skin works */}
        <section className="grid grid-cols-1 items-center gap-12 px-5 py-6 sm:px-10 md:grid-cols-2 sm:gap-15">
          <img
            className="sv-float mx-auto h-[360px] w-full max-w-[600px] rounded-3xl object-cover sm:h-[460px] lg:h-[560px]"
            src={"/svg2.svg"}
            alt="Illustration of skin layers with a serum drop reaching the barrier"
          />

          <div className="flex flex-col gap-6">
            <div className="text-[10px] font-bold uppercase tracking-[.22em] text-[#7d45c2] sm:text-[13px]">
              How skin works
            </div>

            <h2 className="sv-h2 text-[#7d45c2] text-[34px] font-light leading-[1.1] sm:text-[42px] lg:text-[52px]">
              Healthy skin starts with{" "}
              <em>a healthy barrier.</em>
            </h2>

            <p className="text-[15px] leading-[1.7] sm:text-[17px]">
              The outer layer of skin works like a brick wall — cells held
              together by a mortar of lipids. It locks moisture in and keeps
              irritants out.
            </p>

            <p className="text-[15px] leading-[1.7] sm:text-[17px]">
              When that wall is damaged by sun, pollution or harsh products,
              skin loses water and shows it as dryness, dullness, redness and
              breakouts.
            </p>

            <div className="flex flex-wrap gap-2.5">
              <span className="rounded-full bg-[#7d45c2] text-white px-4 py-2.5 text-[12px] font-medium sm:px-[18px] sm:text-[14px]">
                Strong barrier = lasting hydration
              </span>
              <span className="rounded-full bg-[#7d45c2] text-white px-4 py-2.5 text-[12px] font-medium sm:px-[18px] sm:text-[14px]">
                Damaged barrier = dullness &amp; sensitivity
              </span>
            </div>
          </div>
        </section>

        {/* Equation */}
        <section className="flex flex-col items-center gap-7 bg-[#b1a2cf] px-5 py-6 text-center sm:px-10 sm:py-13">
          <div className="text-[10px] font-bold uppercase tracking-[.22em] text-[#ffff] sm:text-[13px]">
            Our formula for skincare
          </div>

          <div className="sv-equation-line flex text-[#fff] flex-wrap items-center justify-center gap-4 text-[34px] font-light sm:gap-7 sm:text-[44px] lg:text-[54px]">
            <span>Science</span>
            <span className="text-[.74em]">+</span>
            <span>Nature</span>
            <span className="text-[.74em]">=</span>
            <em>Solvestic</em>
          </div>

          <p className="max-w-[820px] text-[#fff] text-[15px] leading-[1.7] sm:text-[18px]">
            Lab-proven actives meet skin-loving botanicals. Every formula is
            developed with dermatologists and tested for safety and results
            before it reaches you.
          </p>
        </section>

        {/* Why it matters */}
        <section className="grid grid-cols-1 items-center gap-12 px-5 py-6 md:px-10 md:grid-cols-2 md:py-13">
          <div className="flex flex-col gap-6">
            <div className="text-[10px] font-bold uppercase tracking-[.22em] text-[#7d45c2] sm:text-[13px]">
              Why it matters
            </div>

            <h2 className="sv-h2 text-[34px] text-[#7d45c2]  font-light leading-[1.1] sm:text-[42px] lg:text-[52px]">
              Nothing hidden. <em>Nothing unnecessary.</em>
            </h2>

            <p className="text-[15px] leading-[1.7] sm:text-[17px]">
              We list every ingredient and why it’s there. Our products are
              tested on real skin, free from [parabens, sulphates — add your
              free-from list], and never tested on animals.
            </p>

            <a
              href="#"
              className="self-start border-b-[1.5px] border-[#26244F] pb-1 text-[13px] font-medium transition hover:tracking-[.02em] sm:text-[15px]"
            >
              See our ingredient list →
            </a>
          </div>

          <img
            className="sv-float-slow mx-auto h-[320px] w-full max-w-[600px] rounded-[24px_140px_24px_24px] object-cover sm:h-[400px] lg:h-[480px] lg:rounded-[24px_240px_24px_24px]"
            src={"/nothing.svg"}
            alt="Cream swatch, serum drop and botanicals on lavender"
          />
        </section>

        {/* Benefits ticker */}
        {/* <div className="flex h-[76px] items-center overflow-hidden bg-[#ad51c1]  text-[22px] text-white sm:h-24 sm:text-[28px]">
          <Marquee
            items={BENEFITS}
            className="sv-marquee-track sv-marquee--fast"
            renderItem={([lead, accent]) => (
              <span>
                {lead} <em className="text-[#B6B8DB]">{accent}</em>
              </span>
            )}
          />
        </div> */}

        {/* Day / Night system */}
        

        {/* Experts */}
        <section className="px-5 py-6 sm:px-10 sm:py-13">
          <div className="mb-10 flex flex-col gap-5 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
            <div className="flex flex-col gap-6">
              <div className="text-[10px] font-bold uppercase tracking-[.22em] text-[#7d45c2] sm:text-[13px]">
                Experts' corner
              </div>

              <h2 className="sv-h2 text-[#7d45c2] text-[34px] font-light leading-[1.1] sm:text-[42px] lg:text-[52px]">
                The Solvestic <em>Advisory Board</em>
              </h2>
            </div>

            <p className="max-w-[460px] text-[14px] leading-[1.6] sm:text-[17px]">
              The dermatologists, cosmetic chemists and formulators who guide
              every Solvestic product.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {EXPERTS.map((x, i) => (
              <article
                key={i}
                className="flex flex-col gap-4 rounded-[20px] border border-[#DCDDEF] p-5 transition duration-300 hover:-translate-y-2 hover:shadow-[0_22px_48px_rgba(38,36,79,.12)] sm:rounded-[24px] sm:p-7"
              >
                {x.photo ? (
                  <img
                    src={x.photo}
                    alt={x.name}
                    className="h-[220px] w-full rounded-2xl object-cover sm:h-[280px]"
                  />
                ) : (
                  <div className="flex h-[220px] w-full items-center justify-center rounded-2xl bg-[#EEEFF8] text-[11px] font-bold uppercase tracking-[.14em] text-[#4B4886] sm:h-[280px]">
                    [Portrait]
                  </div>
                )}

                <h3 className="sv-serif text-[24px] sm:text-[26px]">
                  {x.name}
                </h3>

                <div className="text-[13px] font-medium text-[#4B4886] sm:text-[14px]">
                  {x.role}
                </div>

                <p className="text-[13px] leading-[1.6] sm:text-[15px]">
                  {x.bio}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        
      </main>

      {/* Footer */}
      
    </div>
  );
}
