"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { writes } from "@/data/writes"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section
      id="home"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-slate-900 to-slate-800 text-white overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
        <Image src="/navigation-ai-background.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight font-heading">
              {writes.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">{writes.hero.subtitle}</p>
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://forms.gle/pathpilot-waitlist"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {writes.hero.cta}
              </motion.a>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {writes.hero.ctaSecondary}
              </motion.button>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div className="hidden md:block" variants={itemVariants}>
            <Image
              src="/phone-navigation-app-mockup.jpg"
              alt="PathPilot App"
              width={400}
              height={500}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
