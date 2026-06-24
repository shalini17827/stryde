import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Ticker } from "@/components/ticker"
import { ProductSection } from "@/components/product-section"
import { CampaignSection } from "@/components/campaign-section"
import { VideoSection } from "@/components/video-section"
import { LifestyleSection } from "@/components/lifestyle-section"
import { SpecsSection } from "@/components/specs-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Ticker />
      <ProductSection />
      <CampaignSection />
      <VideoSection />
      <LifestyleSection />
      <SpecsSection />
      <Footer />
    </main>
  )
}
