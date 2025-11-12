"use client";
import { motion } from "framer-motion";
import { User } from "lucide-react"; // Lucide profile icon

interface TeamMember {
  name: string;
  role: string;
  image: string; // use Lucide React icon component
}

const teamMembers: TeamMember[] = [
  {
    name: "Saidu Hamza",
    role: "CEO",
    image: "/hamza.jpg",
  },
  {
    name: "Salamatu Umar Ardo",
    role: "Project Manager",
    image: "/salma.jpg",
  },
  {
    name: "Abdulrahman Abdulrahim",
    role: "FE Engineer",
    image: "/abdul.jpg",
  },
  {
    name: "Nasir Muhd Kabir",
    role: "AI Engineer",
    image: "/kabiru.jpg",
  },
  {
    name: "Yero Muhd",
    role: "Quality Assurance",
    image: "/yero.jpg",
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
            Our passionate team of experts is dedicated to revolutionizing
            navigation and empowering individuals to navigate life with
            confidence and independence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-start gap-8 md:gap-0 md:-space-x-12 lg:-space-x-16"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
              whileHover={{ y: -12, scale: 1.05 }}
            >
              <motion.div
                className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-full overflow-hidden bg-white border-4 border-white shadow-xl mb-6"
                whileHover={{ scale: 1.08 }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
                  {index + 1}
                </div> */}
              </motion.div>

              <div className="flex flex-col items-center space-y-1 max-w-[110px] md:max-w-[120px]">
                {/* <p className="text-[10px] text-blue-300 uppercase tracking-wide">
                  Post Title
                </p> */}
                <h3 className="text-sm md:text-base font-bold text-white text-center leading-tight">
                  {member.name}
                </h3>
                <p className="text-[11px] text-gray-300 text-center leading-snug">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
