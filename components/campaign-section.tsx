"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const BILLBOARD_URL =
  "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/bf9c9039-6daf-436a-85cc-b05114fdc737.png"

const STATS = [
  { value: "500", label: "Pairs Produced", suffix: "" },
  { value: "01", label: "Colorway", suffix: "" },
  { value: "NYC", label: "Origin", suffix: "" },
  { value: "24", label: "Month Crafting", suffix: "mo." },
]

export function CampaignSection() {
  return (
    <section id="campaign" className="bg-black">
      {/* Stats row */}
      <div className="border-y border-white/5 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="px-8 text-center md:text-left"
              >
                <div className="font-display text-[6vw] sm:text-5xl md:text-6xl leading-none text-white mb-2">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-[#CC0000] text-[0.6em]">{stat.suffix}</span>
                  )}
                </div>
                <div className="font-body text-xs tracking-[0.2em] text-white/30 uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Billboard full-width */}
      <div className="relative w-full aspect-[16/7] overflow-hidden">
        <Image
          src={BILLBOARD_URL}
          alt="STRYDE APEX ONE Campaign — New York"
          fill
          className="object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
        {/* Caption */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-display text-[4vw] sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-2xl">
              NEW YORK CITY · SS2025
            </p>
            <p className="font-body text-xs tracking-[0.3em] text-white/50 mt-2 uppercase">
              Campaign Photography
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
