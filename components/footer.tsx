"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-4xl tracking-widest text-white">STRYDE</span>
            <p className="font-body text-xs text-white/30 leading-relaxed mt-4 max-w-xs">
              Made for the ones who move. Designed in New York. Built to outlast everything.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="font-body text-xs tracking-[0.2em] text-white/20 uppercase mb-4">
                Product
              </p>
              <div className="space-y-2">
                {["APEX ONE", "Sizing Guide", "Materials", "Care"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block font-body text-sm text-white/40 hover:text-white/80 transition-colors duration-150"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-body text-xs tracking-[0.2em] text-white/20 uppercase mb-4">
                Brand
              </p>
              <div className="space-y-2">
                {["Campaign", "About", "Stockists", "Press"].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block font-body text-sm text-white/40 hover:text-white/80 transition-colors duration-150"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] text-white/20 uppercase mb-4">
              Early Access
            </p>
            <p className="font-body text-sm text-white/40 mb-4 leading-relaxed">
              500 pairs. Join the list to unlock priority pre-order access.
            </p>
            {submitted ? (
              <div className="flex items-center gap-2 text-[#CC0000]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] inline-block" />
                <span className="font-body text-sm">You are on the list.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@address.com"
                  required
                  className="flex-1 bg-white/5 border border-white/10 text-white text-xs px-4 py-3 rounded-l-full placeholder:text-white/20 focus:outline-none focus:border-white/30 font-body"
                />
                <button
                  type="submit"
                  className="bg-[#CC0000] text-white px-4 py-3 rounded-r-full hover:bg-[#aa0000] transition-colors duration-200 flex items-center"
                >
                  <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body text-xs text-white/15 tracking-wide">
            © 2025 STRYDE. All rights reserved. New York, NY.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Instagram", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-body text-xs text-white/20 hover:text-white/50 transition-colors duration-150 tracking-wide"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
