"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const BG_REMOVED_SHOE =
  "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/b9c6376f-557c-40a4-a53a-050e712ca994.png"

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_black_100%)] z-[1]" />

      {/* Giant STRYDE text — behind everything */}
      <div className="absolute inset-0 flex items-center justify-center z-0 select-none pointer-events-none">
        <span
          className="font-display text-[22vw] leading-none tracking-tighter text-white/[0.04] whitespace-nowrap"
          aria-hidden
        >
          STRYDE
        </span>
      </div>

      {/* Shoe image — center, overlapping text */}
      <div className="absolute inset-0 flex items-center justify-center z-[2] pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-[65vw] max-w-[780px] aspect-[16/9]"
        >
          <Image
            src={BG_REMOVED_SHOE}
            alt="STRYDE APEX ONE"
            fill
            className="object-contain drop-shadow-[0_40px_80px_rgba(204,0,0,0.25)]"
            priority
          />
        </motion.div>
      </div>

      {/* Content layer */}
      <div className="relative z-[3] w-full max-w-7xl mx-auto px-6 pt-32 pb-16">
        <div className="flex flex-col justify-end min-h-screen pb-16">
          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mb-8"
          >
            <span className="font-body text-xs tracking-[0.3em] text-[#CC0000] uppercase font-semibold">
              Limited Drop · SS 2025
            </span>
          </motion.div>

          {/* Heading stack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-1 mb-8"
          >
            <h1 className="font-display text-[8vw] sm:text-[6vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-white">
              THE SHOE THAT
            </h1>
            <h1 className="font-display text-[8vw] sm:text-[6vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-white/30">
              MOVES BEFORE
            </h1>
            <h1 className="font-display text-[8vw] sm:text-[6vw] lg:text-[5.5vw] leading-[0.9] tracking-tight text-white">
              YOU DO
            </h1>
          </motion.div>

          {/* Bottom row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="flex flex-col sm:flex-row items-start sm:items-end gap-6 sm:gap-12"
          >
            <div>
              <p className="font-body text-xs tracking-[0.25em] text-white/30 uppercase mb-1">
                Model
              </p>
              <p className="font-body text-sm text-white/70">APEX ONE — Vol. 01</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.25em] text-white/30 uppercase mb-1">
                Availability
              </p>
              <p className="font-body text-sm text-white/70">500 Pairs Worldwide</p>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.25em] text-white/30 uppercase mb-1">
                Retail
              </p>
              <p className="font-body text-sm text-white/70">$340 USD</p>
            </div>
            <div className="sm:ml-auto flex gap-3">
              <a
                href="#collection"
                className="font-body text-xs tracking-widest bg-[#CC0000] text-white px-7 py-3 rounded-full hover:bg-[#aa0000] transition-all duration-200 uppercase font-semibold"
              >
                Pre-Order Now
              </a>
              <a
                href="#campaign"
                className="font-body text-xs tracking-widest border border-white/20 text-white/70 px-7 py-3 rounded-full hover:border-white/50 hover:text-white transition-all duration-200 uppercase"
              >
                Explore
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[4]" />
    </section>
  )
}
