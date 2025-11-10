"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react"
import { writes } from "@/data/writes"

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <motion.section
      id="contact"
      className="py-16 md:py-24 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-heading">{writes.contact.title}</h2>
            <p className="text-lg text-muted-foreground mb-8">{writes.contact.subtitle}</p>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="flex gap-4 items-start" variants={itemVariants} whileHover={{ x: 8 }}>
              <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a href={`mailto:${writes.contact.email}`} className="text-primary hover:underline">
                  {writes.contact.email}
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start" variants={itemVariants} whileHover={{ x: 8 }}>
              <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                <a href={`tel:${writes.contact.phone.replace(/\D/g, "")}`} className="text-primary hover:underline">
                  {writes.contact.phone}
                </a>
              </div>
            </motion.div>

            <motion.div className="flex gap-4 items-start" variants={itemVariants} whileHover={{ x: 8 }}>
              <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Office</h3>
                <p className="text-muted-foreground">{writes.contact.address}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
