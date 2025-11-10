"use client";

import type React from "react";

import { motion } from "framer-motion";
import { writes } from "@/data/writes";
import { Navigation, Brain, Users, Accessibility, Globe } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<any> } = {
  NavigationIcon: Navigation,
  BrainIcon: Brain,
  UsersIcon: Users,
  AccessibilityIcon: Accessibility,
  GlobeIcon: Globe,
};

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="features" className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            The Smarter Way to Navigate
          </h2>
          <p className="text-lg text-blue-100">
            Powered by AI, designed for independence, built for accessibility
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {writes.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Globe;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group bg-white border-2 border-blue-500 rounded-xl p-6 shadow-sm hover:bg-blue-600 hover:border-blue-600 hover:shadow-lg transition-colors transition-shadow transition-border duration-300"
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-lg border-blue-700  mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                >
                  <IconComponent className="w-6 h-6 text-blue-500 group-hover:text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 font-heading text-gray-900 group-hover:text-white">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 group-hover:text-white">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
