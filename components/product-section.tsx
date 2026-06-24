"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const PRODUCT_ANGLES = [
  {
    id: "flatlay",
    label: "Flat Lay",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/23da347b-fcc9-4d85-b0e9-494981e7ebf3.png",
  },
  {
    id: "side",
    label: "Side Profile",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/48ddffad-57cb-4b82-9766-fa039859a797.png",
  },
  {
    id: "macro",
    label: "Macro Detail",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/c35dc3c3-3f94-4ec4-86f1-4362d242c5bf.png",
  },
  {
    id: "floating",
    label: "Dynamic Float",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/3af772a4-81a0-4c0a-852f-1ef268892e97.png",
  },
  {
    id: "ground",
    label: "Ground Angle",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/ca510ead-9462-4bee-b1e0-c469e7543a7c.png",
  },
  {
    id: "sole",
    label: "Sole Tread",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/239fbe36-f53f-4ad5-a0c8-36583a969f05.png",
  },
  {
    id: "heel",
    label: "Heel Detail",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/b7165e65-693c-4bb8-adf4-00fbdc2daa23.png",
  },
  {
    id: "birds",
    label: "Bird's Eye",
    url: "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/7173a985-4ec3-4095-8ca7-21b3354545c0.png",
  },
]

const SIZES = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "12"]

export function ProductSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <section id="collection" className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="mb-16">
          <span className="font-body text-xs tracking-[0.3em] text-[#CC0000] uppercase font-semibold">
            The Product
          </span>
          <h2 className="font-display text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-none tracking-tight text-white mt-2">
            APEX ONE
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Main image + thumbnails */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-square bg-[#111] rounded-2xl overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={PRODUCT_ANGLES[activeIndex].url}
                    alt={PRODUCT_ANGLES[activeIndex].label}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Angle label */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="font-body text-xs tracking-widest text-white/40 uppercase bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {PRODUCT_ANGLES[activeIndex].label}
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-8 gap-2">
              {PRODUCT_ANGLES.map((angle, i) => (
                <button
                  key={angle.id}
                  onClick={() => setActiveIndex(i)}
                  className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    i === activeIndex
                      ? "border-[#CC0000]"
                      : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image src={angle.url} alt={angle.label} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Purchase card */}
          <div className="lg:pt-0 space-y-8">
            <div>
              <h3 className="font-display text-5xl tracking-tight text-white">
                STRYDE APEX ONE
              </h3>
              <p className="font-body text-sm text-white/40 tracking-wider uppercase mt-1">
                Vol. 01 · Obsidian / Ivory / Crimson
              </p>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl text-white">$340</span>
              <span className="font-body text-sm text-white/30">USD</span>
            </div>

            <p className="font-body text-sm text-white/50 leading-relaxed max-w-md">
              Built from full-grain Italian calf leather with a carbon-fibre composite midsole.
              500 numbered pairs. Each box includes a certificate of authenticity.
            </p>

            {/* Size selector */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-xs tracking-[0.2em] text-white/40 uppercase">
                  Select Size (US)
                </span>
                {selectedSize && (
                  <span className="font-body text-xs text-[#CC0000]">
                    Size {selectedSize} selected
                  </span>
                )}
              </div>
              <div className="grid grid-cols-5 gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2.5 rounded-lg border text-xs font-body tracking-wide transition-all duration-150 ${
                      selectedSize === size
                        ? "border-[#CC0000] bg-[#CC0000]/10 text-white"
                        : "border-white/10 text-white/40 hover:border-white/30 hover:text-white/70"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="space-y-3 pt-2">
              <button
                className={`w-full py-4 rounded-full font-body text-sm tracking-widest font-semibold uppercase transition-all duration-200 ${
                  selectedSize
                    ? "bg-[#CC0000] text-white hover:bg-[#aa0000]"
                    : "bg-white/10 text-white/30 cursor-not-allowed"
                }`}
                disabled={!selectedSize}
              >
                {selectedSize ? "Reserve Pair" : "Select a Size"}
              </button>
              <p className="font-body text-xs text-white/25 text-center tracking-wide">
                Free shipping · Limit 1 per customer · Ships Nov 2025
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Full-Grain Leather", "Carbon Midsole", "NYC Made", "Limited 500"].map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs text-white/30 border border-white/10 px-3 py-1 rounded-full tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
