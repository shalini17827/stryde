"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-black/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="#"
          className="font-display text-2xl tracking-widest text-white hover:text-[#CC0000] transition-colors duration-200"
        >
          STRYDE
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {["COLLECTION", "CAMPAIGN", "SPECS", "ABOUT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-body text-xs tracking-widest text-white/60 hover:text-white transition-colors duration-200 uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#collection"
            className="font-body text-xs tracking-widest bg-[#CC0000] text-white px-5 py-2 rounded-full hover:bg-[#aa0000] transition-all duration-200 uppercase font-semibold"
          >
            Pre-Order
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/5 px-6 py-6 space-y-4">
          {["COLLECTION", "CAMPAIGN", "SPECS", "ABOUT"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-xs tracking-widest text-white/60 hover:text-white transition-colors uppercase"
            >
              {item}
            </a>
          ))}
          <a
            href="#collection"
            className="block font-body text-xs tracking-widest bg-[#CC0000] text-white px-5 py-2.5 rounded-full text-center uppercase font-semibold mt-4"
          >
            Pre-Order Now
          </a>
        </div>
      )}
    </nav>
  )
}
