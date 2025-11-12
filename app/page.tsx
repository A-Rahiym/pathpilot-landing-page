// Main landing page using all components
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import WhyItMatters from "@/components/why-it-matters"
import Features from "@/components/features"
import SeeHowItWorks from "@/components/see-how-it-works"
import CTASection from "@/components/cta-section"
import Team from "@/components/team"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <WhyItMatters />
      <Features />
      {/* <SeeHowItWorks /> */}
      <CTASection />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
