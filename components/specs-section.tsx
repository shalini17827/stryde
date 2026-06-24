"use client"

import { motion } from "framer-motion"

const SPECS = [
  { label: "Upper Material", value: "Full-grain Italian calf leather, Cordura® woven paneling" },
  { label: "Midsole", value: "Carbon-fibre composite sandwich, dual-density EVA cushioning" },
  { label: "Outsole", value: "Continental® rubber compound, herringbone tread pattern" },
  { label: "Lining", value: "Moisture-wicking Merino wool sock liner" },
  { label: "Closure", value: "Flat wax-coated laces + stainless D-ring hardware" },
  { label: "Colorway", value: "Obsidian / Ivory / Crimson — Vol. 01 (only colorway)" },
  { label: "Construction", value: "Goodyear welt, hand-stitched NYC workshop" },
  { label: "Production", value: "500 numbered pairs. Serialized on inner tongue label." },
  { label: "Sizing", value: "US 7 – 12 (half sizes available)" },
  { label: "Weight", value: "9.2 oz (per shoe, US 9)" },
]

export function SpecsSection() {
  return (
    <section id="specs" className="bg-[#0d0d0d] py-24 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] text-[#CC0000] uppercase font-semibold">
            Technical Detail
          </span>
          <h2 className="font-display text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-none tracking-tight text-white mt-1">
            SPEC SHEET
          </h2>
        </motion.div>

        {/* Specs grid */}
        <div className="divide-y divide-white/5">
          {SPECS.map((spec, i) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-0 py-5"
            >
              <span className="font-body text-xs tracking-[0.2em] text-white/25 uppercase sm:w-1/3 flex-shrink-0 pt-0.5">
                {spec.label}
              </span>
              <span className="font-body text-sm text-white/70 sm:flex-1">{spec.value}</span>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="font-body text-xs text-white/20 tracking-wide mt-12 border-t border-white/5 pt-8"
        >
          Specifications subject to change. Final production samples may vary slightly.
          All pairs include dust bag, tissue wrap, and serialized certificate of authenticity.
        </motion.p>
      </div>
    </section>
  )
}
