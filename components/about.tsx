"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { writes } from "@/data/writes"

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-16 md:py-24 bg-primary text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">{writes.about.title}</h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-6">{writes.about.text}</p>
            <p className="text-md text-blue-100">Navigating with dignity — for all.</p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/smartphone-app-interface.jpg"
              alt="PathPilot Mobile App"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
