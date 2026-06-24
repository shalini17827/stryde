"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"

const COMMERCIAL_URL =
  "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/b02ab885-eb84-4527-a66f-2ac77e2d6b40.mp4"
const PRODUCT_CLIP_URL =
  "https://galaxy-prod.tlcdn.com/gen/user_389Gj5Ja3HWkgCDyJMqqhTJa1Rr/c44d34e3-d136-4ddf-b31b-4cd1c7ab5d46.mp4"

export function VideoSection() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

  return (
    <section className="bg-[#0a0a0a] py-24 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4"
        >
          <div>
            <span className="font-body text-xs tracking-[0.3em] text-[#CC0000] uppercase font-semibold">
              In Motion
            </span>
            <h2 className="font-display text-[7vw] sm:text-[5vw] lg:text-[4vw] leading-none tracking-tight text-white mt-1">
              SEE IT MOVE
            </h2>
          </div>
          <p className="font-body text-xs tracking-wide text-white/30 max-w-xs text-right">
            Shot on location · New York & Iceland ·{" "}
            <span className="text-white/50">Campaign MMXXV</span>
          </p>
        </motion.div>

        {/* Commercial video (main) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer bg-[#111]"
          onClick={togglePlay}
        >
          <video
            ref={videoRef}
            src={COMMERCIAL_URL}
            className="w-full h-full object-cover"
            loop
            playsInline
            onEnded={() => setPlaying(false)}
          />

          {/* Play overlay */}
          <div
            className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 ${
              playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
            }`}
          >
            <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-200">
              {playing ? (
                <Pause className="w-6 h-6 text-white" />
              ) : (
                <Play className="w-6 h-6 text-white ml-1" />
              )}
            </div>
          </div>

          {/* Label */}
          <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
            <span className="font-body text-xs tracking-widest text-white/40 uppercase bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
              10-sec Commercial
            </span>
          </div>
        </motion.div>

        {/* Product-only clip (auto-loop) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
        >
          <div>
            <p className="font-body text-xs tracking-[0.3em] text-white/30 uppercase mb-3">
              Product Clip
            </p>
            <h3 className="font-display text-4xl leading-none tracking-tight text-white mb-4">
              THE APEX ONE
              <br />
              <span className="text-white/30">UP CLOSE</span>
            </h3>
            <p className="font-body text-sm text-white/40 leading-relaxed max-w-sm">
              Every stitch. Every seam. 5 seconds of pure product cinema — no cuts, no
              distractions, just craft.
            </p>
          </div>
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#111]">
            <video
              src={PRODUCT_CLIP_URL}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="absolute bottom-4 left-4">
              <span className="font-body text-xs tracking-widest text-white/40 uppercase bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                5-sec Product Clip
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
