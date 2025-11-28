import Hero from "@/components/Hero"
import { Navigation } from "@/components/Navigation"
import Features from "@/components/Features"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Features />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home