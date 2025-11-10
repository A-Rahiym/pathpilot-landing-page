"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import { writes } from "@/data/writes"
import { Briefcase, AlertCircle, Users } from "lucide-react"

const iconMap: { [key: string]: React.ComponentType<any> } = {
  BriefcaseIcon: Briefcase,
  AlertCircleIcon: AlertCircle,
  UsersIcon: Users,
}

export default function WhyItMatters() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-heading">
            {writes.whyItMatters.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{writes.whyItMatters.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Stats with Icons */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {writes.whyItMatters.features.map((feature, idx) => {
              const IconComponent = iconMap[feature.icon] || AlertCircle
              return (
                <motion.div key={idx} variants={itemVariants} className="border-l-4 border-primary pl-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-3">{feature.description}</p>
                  <ul className="space-y-1 ml-11">
                    {feature.subPoints.map((point, pointIdx) => (
                      <motion.li
                        key={pointIdx}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: pointIdx * 0.1 }}
                      >
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {point}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="/person-walking-with-mobility-aid-experiencing-diff.jpg"
              alt="Why PathPilot Matters"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
