import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profilePic from "../assets/akanksha.jpg"; // ✅ your image

const Hero = () => {
  return (
    <section className="h-screen bg-[#E5B8F4] dark:bg-[#1A103D] flex items-center justify-center px-6 transition-colors duration-300">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 text-center md:text-left">
        
        {/* Text Section */}
        <div className="flex-1">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-[#2D033B] dark:text-[#EDE9F9] flex justify-center md:justify-start items-center gap-3"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Akanksha <span className="wave text-5xl">👋</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-xl md:text-2xl text-[#2D033B] dark:text-[#EDE9F9]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A MERN Stack Developer passionate about building scalable, modern, and accessible web applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-block mt-8 px-6 py-3 bg-[#810CA8] text-white rounded-full text-lg font-semibold shadow hover:bg-[#C147E9] transition"
            >
              View Projects
            </Link>
          </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <img
            src={profilePic}
            alt="Akanksha"
            className="w-60 h-60 md:w-80 md:h-80 rounded-full object-cover border-4 border-[#810CA8] shadow-lg mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
