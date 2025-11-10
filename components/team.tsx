"use client"
import { motion } from "framer-motion"
import { User } from "lucide-react"; // Lucide profile icon
import { LucideIcon } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  icon: LucideIcon; // use Lucide React icon component
}



const teamMembers: TeamMember[] = [
  {
    name: "Saidu Hamza",
    role: "CEO",
    icon: User,
  },
  {
    name: "Salamatu Umar Ardo",
    role: "Project Manager",
    icon: User,
  },
  {
    name: "Abdulrahman Abdulrahim",
    role: "FE Engineer",
    icon: User,
  },
  {
    name: "Nasir Muhd Kabir",
    role: "AI Engineer",
    icon: User,
  },
  {
    name: "Yero Muhd",
    role: "Quality Assurance",
    icon: User,
  },
];

export default function Team() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="team" className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading text-white">
            MEET THE TEAM BEHIND PATHPILOT
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Our passionate team of experts is dedicated to revolutionizing navigation and empowering individuals to
            navigate life with confidence and independence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-colors"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="aspect-square rounded-lg overflow-hidden bg-white/20 mb-6 border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.i || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-1 font-heading">{member.name}</h3>
              <p className="text-blue-100 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
