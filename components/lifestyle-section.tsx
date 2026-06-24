"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const LIFESTYLE = [
  {
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/78f1c3ba-e41b-433a-8047-36aa24668408.png",
    label: "Sprint",
    caption: "Full-sprint on asphalt — carbon midsole in action",
    span: "row-span-1",
  },
  {
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/3a25d849-8501-40aa-a3b8-551209cb733f.png",
    label: "Elevation",
    caption: "Freeze-frame at peak height",
    span: "row-span-2",
  },
  {
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/86c39b9c-c6cb-416e-94ee-c8bee6c58164.png",
    label: "Terrain",
    caption: "Volcanic terrain — APEX ONE vs. raw earth",
    span: "row-span-1",
  },
  {
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/8503efb0-536e-41dd-ac4d-2cf8c0d8fc15.png",
    label: "Ground",
    caption: "Ground-level foot detail",
    span: "row-span-1",
  },
]

export function LifestyleSection() {
  return (
    <section className="bg-black py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12"
        >
          <div>
            <span className="font-body text-xs tracking-[0.3em] text-[#CC0000] uppercase font-semibold">
              Campaign Shots
            </span>
            <h2 className="font-display text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-none tracking-tight text-white mt-1">
              LIVE THE STRYDE
            </h2>
          </div>
          <p className="font-body text-xs tracking-wide text-white/30 max-w-xs sm:text-right">
            Shot on location · Reykjavik & NYC · Lensed on Phase One IQ4
          </p>
        </motion.div>

        {/* Editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 h-[70vh] min-h-[480px]">
          {/* Big left image (sprint) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative col-span-1 md:col-span-1 row-span-2 rounded-2xl overflow-hidden group"
          >
            <Image
              src={LIFESTYLE[0].url}
              alt={LIFESTYLE[0].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-2xl text-white leading-none">{LIFESTYLE[0].label}</p>
              <p className="font-body text-xs text-white/40 mt-1">{LIFESTYLE[0].caption}</p>
            </div>
          </motion.div>

          {/* Top right (elevation — tall) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="relative col-span-1 row-span-2 rounded-2xl overflow-hidden group"
          >
            <Image
              src={LIFESTYLE[1].url}
              alt={LIFESTYLE[1].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-2xl text-white leading-none">{LIFESTYLE[1].label}</p>
              <p className="font-body text-xs text-white/40 mt-1">{LIFESTYLE[1].caption}</p>
            </div>
          </motion.div>

          {/* Top-right terrain */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative col-span-2 md:col-span-1 row-span-1 rounded-2xl overflow-hidden group"
          >
            <Image
              src={LIFESTYLE[2].url}
              alt={LIFESTYLE[2].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-xl text-white leading-none">{LIFESTYLE[2].label}</p>
              <p className="font-body text-xs text-white/40 mt-1">{LIFESTYLE[2].caption}</p>
            </div>
          </motion.div>

          {/* Bottom-right foot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="relative col-span-2 md:col-span-1 row-span-1 rounded-2xl overflow-hidden group"
          >
            <Image
              src={LIFESTYLE[3].url}
              alt={LIFESTYLE[3].label}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-display text-xl text-white leading-none">{LIFESTYLE[3].label}</p>
              <p className="font-body text-xs text-white/40 mt-1">{LIFESTYLE[3].caption}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
