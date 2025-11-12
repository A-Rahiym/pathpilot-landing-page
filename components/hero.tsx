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
        <Image src="/bg.jpg" alt="Background" fill className="object-cover" priority />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants} className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight font-heading">
              {writes.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 text-pretty">
              {writes.hero.subtitle}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdfQN2emiyQFNfz2ePK7LlJq4po0QI-8qenR78VfI7I9CUP2w/viewform?usp=dialog"
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

          {/* Image (now visible on mobile) */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end mt-10 md:mt-0"
          >
            <Image
              src="/phone2.png"
              alt="PathPilot App"
              width={200}
              height={200}
              className="rounded-lg w-3/4 sm:w-2/3 md:w-auto"
              priority
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
