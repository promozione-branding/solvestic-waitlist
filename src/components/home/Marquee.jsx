"use client";

import { motion } from "framer-motion";

const problems = [
  "Sun Tan",
  "Melasma",
  "Post Acne Marks",
  "Dullness",
  "Uneven Skin Tone",
];

// Make one long continuous set
const marqueeItems = [...problems, ...problems, ...problems];

function MarqueeSet({ duplicate = false }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={duplicate}
    >
      {marqueeItems.map((problem, index) => (
        <div
          key={`${duplicate ? "second" : "first"}-${index}`}
          className="flex shrink-0 items-center gap-8 px-4 sm:gap-10 sm:px-6"
        >
          <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.14em] text-purple-900 sm:text-sm">
            {problem}
          </span>

          <span className="text-sm text-purple-300">•</span>
        </div>
      ))}
    </div>
  );
}

export default function Problems() {
  return (
    <div className="w-full overflow-hidden bg-white">
      <motion.div
        className="flex h-[30px] w-max items-center"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          willChange: "transform",
        }}
      >
        {/* First set */}
        <MarqueeSet />

        {/* Exact duplicate */}
        <MarqueeSet duplicate />
      </motion.div>
    </div>
  );
}