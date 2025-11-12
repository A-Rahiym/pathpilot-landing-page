"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Compass } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation links
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Contact", href: "#contact" },
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <motion.nav
      className="fixed top-0 w-full bg-white shadow-sm z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.05 }}>
            <Link href="/" className="flex items-center align-middle gap-1">
              <Image
              src='/Logo.svg'
              alt="logo"
              width={48}
              height={48}
              />
              <span className="text-2xl font-bold text-primary font-heading">PathPilot</span>
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <motion.div key={link.label} whileHover={{ y: -2 }}>
                <Link href={link.href} className="text-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex gap-4">
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfQN2emiyQFNfz2ePK7LlJq4po0QI-8qenR78VfI7I9CUP2w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.a>
          </div>
          {/* Mobile Menu Button */}
          <motion.button
            onClick={toggleMenu}
            className="md:hidden text-foreground"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden overflow-hidden ${isOpen ? "block" : "hidden"}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="pb-4 border-t border-border">
            {links.map((link) => (
              <motion.div key={link.label} whileHover={{ x: 8 }}>
                <Link
                  href={link.href}
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdfQN2emiyQFNfz2ePK7LlJq4po0QI-8qenR78VfI7I9CUP2w/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-full hover:bg-primary/90 transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Waitlist
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
