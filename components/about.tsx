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
          {/* Image (now visible on mobile) */}
          <motion.div
            className="flex justify-center md:justify-start order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/phone1.png"
              alt="PathPilot Mobile App"
              width={200}
              height={200}
              className="rounded-lg w-3/4 sm:w-2/3 md:w-auto"
              priority
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
              {writes.about.title}
            </h2>
            <p className="text-lg text-blue-50 leading-relaxed mb-6">
              {writes.about.text}
            </p>
            <p className="text-md text-blue-100">
              Navigating with dignity — for all.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
