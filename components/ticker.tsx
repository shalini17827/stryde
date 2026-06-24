export function Ticker() {
  const items = [
    "PREMIUM LEATHER",
    "APEX ONE",
    "NEW YORK",
    "EST. MMXXV",
    "LIMITED DROP",
    "500 PAIRS",
    "HAND-CRAFTED",
    "APEX ONE",
    "PREMIUM LEATHER",
    "APEX ONE",
    "NEW YORK",
    "EST. MMXXV",
    "LIMITED DROP",
    "500 PAIRS",
    "HAND-CRAFTED",
    "APEX ONE",
  ]

  return (
    <div className="w-full overflow-hidden bg-[#0d0d0d] border-y border-white/5 py-4 select-none">
      <div className="flex gap-0 animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-display text-sm tracking-[0.3em] text-white/40 px-6"
          >
            {item}
            <span className="text-[#CC0000] mx-3">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
