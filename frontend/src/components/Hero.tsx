"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import advancedSiliconIP from "../assets/Advanced Silicon IP.jpg";
import semiconductorInnovation from "../assets/semiconductor Product Innovation.jpg";
import applicationSoCs from "../assets/Application Specific SoCs.jpg";
import integratedSolutions from "../assets/Integrated Semiconductor Solution.jpg";

// ─── Mobile slide-4: 2-col chip grid with enough horizontal padding to
//     clear the w-10 nav buttons (40px) sitting at left-2/right-2 (8px).
//     px-14 = 56px each side → chips start at 56px, buttons end at 48px → 8px gap.
const InteractiveItemsMobile = ({ items }: { items: string[] }) => (
  <div className="flex flex-col items-center gap-3 w-full px-14 sm:px-[90px] py-4">
    <motion.div
      className="bg-black/80 backdrop-blur-lg rounded-xl px-4 py-3 border-2 border-cyan-400/50 shadow-2xl text-center w-full"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <h2 className="text-xl font-orbitron font-bold text-white drop-shadow-lg leading-snug">
        Integrated Semiconductor Solutions
      </h2>
    </motion.div>

    <div className="grid grid-cols-2 gap-3 w-full">
      {items.map((item, index) => (
        <motion.div
          key={item}
          className="bg-black/85 backdrop-blur-lg rounded-xl px-2 py-3 border-2 border-cyan-400/60 shadow-xl text-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
          whileHover={{ scale: 1.05, borderColor: "rgba(0,212,255,0.9)" }}
        >
          <div className="text-sm font-rajdhani font-bold text-white leading-snug drop-shadow-lg">
            {item}
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

// ─── Desktop slide-4: pentagon circular animation restored.
//     Container is absolute inset-0 so items are positioned relative to
//     the full-section center — no clipping at any typical desktop height.
//     r_items = 1.35×200 = 270 px  (same as original, fits all viewports ≥600px).
//     r_arrows = 1.5×200 = 300 px.
//     Center box z-30, items z-15 → center always renders on top,
//     making any near-overlap look like a hub-spoke connection.
const InteractiveItemsDesktop = ({ items }: { items: string[] }) => {
  const R = 200;
  const centerAngle = Math.PI / 2;
  const step = (2 * Math.PI) / items.length;
  // Per-item radius multipliers: Analog pulled up (1.1), Power Mgmt & SoC pushed out (1.5), others unchanged
  const chipMult  = [1.1, 1.5, 1.35, 1.35, 1.5];
  const arrowMult = [1.1, 1.5, 1.5,  1.5,  1.5];

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
      {/* Arrow lines */}
      {items.map((_item, i) => {
        const angle = centerAngle + i * step;
        const ax = Math.cos(angle) * arrowMult[i] * R;
        const ay = Math.sin(angle) * arrowMult[i] * R;
        const len = Math.sqrt(ax * ax + ay * ay);
        const rot = (Math.atan2(ay, ax) * 180) / Math.PI;
        return (
          <motion.div
            key={`arrow-${i}`}
            className="absolute h-[2px] pointer-events-none"
            style={{
              width: `${len}px`,
              background: "linear-gradient(90deg,rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.3) 100%)",
              borderRadius: 2,
              transformOrigin: "left center",
              left: "50%",
              top: "50%",
              zIndex: 10,
            }}
            initial={{ scaleX: 0, opacity: 0, rotate: rot }}
            animate={{ scaleX: 1, opacity: 1, rotate: rot }}
            transition={{ duration: 1, delay: i * 0.2 + 0.5, ease: "easeOut" }}
          >
            <motion.div
              className="absolute right-0 top-1/2 -translate-y-1/2"
              style={{
                borderLeft: "8px solid rgba(255,255,255,0.9)",
                borderTop: "4px solid transparent",
                borderBottom: "4px solid transparent",
                marginRight: -8,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 + 1.5 }}
            />
          </motion.div>
        );
      })}

      {/* Center hub — z-30 sits on top of anything that drifts close */}
      <motion.div
        className="absolute bg-black/80 backdrop-blur-lg rounded-xl px-6 md:px-8 py-4 md:py-6 border-2 border-cyan-400/50 shadow-2xl pointer-events-auto"
        style={{ zIndex: 30 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-orbitron font-bold text-white text-center drop-shadow-lg leading-snug">
          Integrated<br />Semiconductor<br />Solutions
        </h2>
      </motion.div>

      {/* Orbital chips */}
      {items.map((item, i) => {
        const angle = centerAngle + i * step;
        const x = Math.cos(angle) * chipMult[i] * R;
        const y = Math.sin(angle) * chipMult[i] * R;
        return (
          <motion.div
            key={item}
            className="absolute bg-black/80 backdrop-blur-lg rounded-xl px-4 md:px-6 py-3 md:py-4 border-2 border-cyan-400/60 shadow-2xl text-center pointer-events-auto"
            style={{ zIndex: 15, width: "165px" }}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
            animate={{ scale: 1, opacity: 1, x, y }}
            transition={{ duration: 1.25, delay: i * 0.2, ease: "easeOut" }}
            whileHover={{
              scale: 1.12,
              borderColor: "rgba(0,212,255,0.9)",
              boxShadow: "0 20px 40px rgba(0,0,0,0.7),0 0 20px rgba(0,212,255,0.35)",
            }}
          >
            <div className="text-base md:text-lg font-rajdhani font-bold text-white leading-snug drop-shadow-lg">
              {item}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

const ITEMS = [
  "Analog Mixed Signal Modules",
  "Power Management",
  "Radio",
  "AI Accelerator",
  "SoC Integration",
];

const InteractiveItems = () => (
  <>
    <div className="lg:hidden w-full">
      <InteractiveItemsMobile items={ITEMS} />
    </div>
    {/* Desktop: rendered as an absolute overlay so it doesn't shift other content */}
    <div className="hidden lg:block">
      <InteractiveItemsDesktop items={ITEMS} />
    </div>
  </>
);

const slides = [
  {
    image: advancedSiliconIP,
    title: "Advanced Silicon IPs",
    description: "Cutting-edge intellectual property cores for next-generation semiconductor designs.",
  },
  {
    image: semiconductorInnovation,
    title: "Semiconductor Product Innovation",
    description: "Pioneering breakthrough semiconductor solutions for tomorrow's technology challenges.",
  },
  {
    image: applicationSoCs,
    title: "Application Specific SoCs",
    description: "Custom system-on-chip solutions tailored for specific application requirements.",
  },
  {
    image: integratedSolutions,
    title: "Integrated Semiconductor Solutions",
    description: "Comprehensive semiconductor integration featuring analog mixed-signal modules, power management, radio frequency, AI acceleration, and SoC integration.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") { e.preventDefault(); prevSlide(); }
      if (e.key === "ArrowRight") { e.preventDefault(); nextSlide(); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const prevSlide = () => setIndex(p => (p === 0 ? slides.length - 1 : p - 1));
  const nextSlide = () => setIndex(p => (p + 1) % slides.length);

  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] h-screen flex flex-col justify-center items-center text-center bg-black text-white w-full overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <motion.img
          key={index}
          src={slides[index].image}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* Slide content overlay */}
      <div className="relative z-10 w-full flex flex-col items-center md:px-8 lg:px-12">
        {index === 3 ? (
          // Slide 4: interactive diagram — InteractiveItemsMobile handles its own
          // button-clearing padding (px-14), so no extra padding here.
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-full"
          >
            <InteractiveItems />
          </motion.div>
        ) : (
          // Slides 1-3: inner wrapper clears the nav buttons on mobile/sm.
          // Mobile buttons end at 48px (left-2 + w-10), sm at 80px (sm:left-4 + sm:w-16).
          <div className="w-full flex flex-col items-center px-[52px] sm:px-[84px] md:px-[120px] lg:px-[140px] xl:px-0">
            <motion.h1
              key={slides[index].title}
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-orbitron font-black text-white drop-shadow-2xl bg-black/70 backdrop-blur-md px-4 xs:px-6 sm:px-10 md:px-12 py-3 xs:py-4 md:py-5 rounded-xl border border-cyan-400/40 w-full sm:max-w-2xl md:max-w-4xl lg:max-w-5xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              {slides[index].title}
            </motion.h1>

            <motion.p
              key={slides[index].description}
              className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl font-rajdhani font-semibold text-white mt-3 xs:mt-4 sm:mt-5 md:mt-7 w-full sm:max-w-xl md:max-w-3xl lg:max-w-4xl bg-black/65 backdrop-blur-md px-4 xs:px-5 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg border border-cyan-400/30 drop-shadow-lg leading-snug"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {slides[index].description}
            </motion.p>
          </div>
        )}
      </div>

      {/* ── Left nav button ──
          Mobile:  w-10 h-10 (40px) at left-2 (8px) → ends at 48px
                   Chip grid has px-14 (56px) → 8px clearance, no overlap
          Desktop: w-16/w-20, pushed further left                         */}
      <button
        className="absolute left-2 sm:left-4 md:left-8 lg:left-12 top-1/2 -translate-y-1/2
            flex items-center justify-center
            w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20
            rounded-full bg-black/70 backdrop-blur-md
            border-2 border-cyan-400/50 hover:border-cyan-300
            shadow-xl hover:shadow-cyan-400/40
            hover:bg-black/90 hover:scale-110
            transition-all duration-300 z-20 group"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <FaChevronLeft className="text-cyan-200 group-hover:text-cyan-300 transition-colors duration-300 text-lg sm:text-3xl md:text-4xl" />
      </button>

      {/* ── Right nav button ── */}
      <button
        className="absolute right-2 sm:right-4 md:right-8 lg:right-12 top-1/2 -translate-y-1/2
            flex items-center justify-center
            w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20
            rounded-full bg-black/70 backdrop-blur-md
            border-2 border-cyan-400/50 hover:border-cyan-300
            shadow-xl hover:shadow-cyan-400/40
            hover:bg-black/90 hover:scale-110
            transition-all duration-300 z-20 group"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <FaChevronRight className="text-cyan-200 group-hover:text-cyan-300 transition-colors duration-300 text-lg sm:text-3xl md:text-4xl" />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-5 sm:bottom-8 flex justify-center w-full px-4 z-20">
        <div className="flex space-x-4 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 ${
                i === index
                  ? "bg-cyan-400 shadow-lg shadow-cyan-400/60 w-5 h-5 sm:w-6 sm:h-6"
                  : "bg-gray-400/60 hover:bg-gray-200 w-4 h-4 sm:w-5 sm:h-5"
              }`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
