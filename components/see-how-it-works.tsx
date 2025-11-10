"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function SeeHowItWorks() {
  return (
    <motion.section
      className="py-16 md:py-24 bg-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-heading">See How PathPilot Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch a quick demo of our AI-powered navigation system in action
          </p>
        </motion.div>

        {/* Video/Image Placeholder */}
        <motion.div
          className="aspect-video bg-gray-300 rounded-lg flex items-center justify-center overflow-hidden shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src="/pathpilot-app-demo-interface-showing-navigation.jpg"
            alt="PathPilot Demo"
            width={1000}
            height={600}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
