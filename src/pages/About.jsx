import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiVite, SiFramer, SiMongodb, SiExpress, SiNodedotjs } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-2xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-600 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-200 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-2xl" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-white text-2xl" /> },
  { name: "Vite", icon: <SiVite className="text-purple-400 text-2xl" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-pink-400 text-2xl" /> },
];

const About = () => {
  return (
    <section className="min-h-screen px-6 py-20 bg-[#E5B8F4] dark:bg-[#1A103D] text-[#2D033B] dark:text-[#EDE9F9] transition-colors duration-300">
      <div className="max-w-6xl mx-auto text-center space-y-16 mt-12">

        {/* Heading & Intro */}
        <div className="space-y-6">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl max-w-prose mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            I'm <span className="font-semibold text-[#810CA8]">Akanksha Kumari</span>, a frontend-focused MERN Stack Developer currently pursuing B.Tech in Computer Science at IIIT Bhagalpur (CGPA: 8.4). I’m passionate about building responsive, accessible, and performant web applications. I’ve developed scalable platforms like <span className="font-semibold">Krishi Help</span> and <span className="font-semibold">Krishi Haat</span>, and love solving problems on LeetCode and Codeforces.
          </motion.p>
        </div>

        {/* Education & Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#810CA8]">🎓 Education</h3>
            <p><span className="font-semibold">B.Tech, CSE</span> – IIIT Bhagalpur</p>
            <p>📊 CGPA: 8.4</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#810CA8]">🏆 Achievements</h3>
            <ul className="list-disc ml-5 space-y-2">
              <li>Smart India Hackathon Finalist – Top 6 team</li>
              <li>Code2Win Finalist – Top 20 out of 300+ teams</li>
              <li>Solved 350+ LeetCode & 200+ Codeforces problems</li>
              <li>2⭐ Coder on CodeChef</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#810CA8]/30 w-1/2 mx-auto"></div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6">🚀 My Tech Stack</h3>
          <div className="bg-white dark:bg-[#2D1B5A] p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 transform hover:scale-110 transition"
                >
                  {skill.icon}
                  <span className="text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
