"use client"

import { motion } from "framer-motion"
import { writes } from "@/data/writes"

export default function CTASection() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-primary text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 font-heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {writes.cta.title}
        </motion.h2>

        <motion.p
          className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {writes.cta.description}
        </motion.p>

        <motion.a
          href="https://forms.gle/pathpilot-waitlist"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Join the Waitlist
        </motion.a>
      </div>
    </motion.section>
  )
}
