"use client"

import { motion } from "framer-motion"

const writes = {
  cta: {
    title: "Ready to Transform Your Navigation Experience?",
    description: "Join our waitlist today and be among the first to experience PathPilot's revolutionary navigation technology."
  }
}

export default function CTASection() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-white text-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 font-heading text-black"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {writes.cta.title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {writes.cta.description}
        </motion.p>

        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdfQN2emiyQFNfz2ePK7LlJq4po0QI-8qenR78VfI7I9CUP2w/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-colors"
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