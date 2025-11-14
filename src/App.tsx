import { motion } from "framer-motion";
import ThreeDCube from "./ThreeDCube";

const skillsDetailed = [
  { category: "Languages", items: ["C++", "JavaScript", "SQL"] },
  { category: "Web Technologies", items: ["TypeScript", "HTML", "CSS"] },
  { category: "Frameworks & Libraries", items: ["React.js", "Next.js", "Node.js", "Express.js"] },
  { category: "Databases", items: ["PostgreSQL", "MongoDB", "Redis"] },
  { category: "AWS & DevOps", items: ["EC2", "S3", "Amplify", "API Gateway", "Cognito", "Git"] },
  { category: "Architecture", items: ["Microservices", "REST APIs", "System Design", "Distributed Systems"] },
  { category: "Core CS Subjects", items: ["Algorithms", "OOP", "OS", "Networks", "DBMS"] },
  { category: "Interests", items: ["Generative AI", "Full-Stack", "Scalable Backend"] }
];

const projects = [
  {
    name: "Homify – Rental App",
    desc: "Production-ready real estate rental platform with geospatial search and host/tenant dashboards.",
    stack: ["React", "Next.js", "Node.js", "AWS", "Tailwind"],
    github: "https://github.com/Guri9368/homify-a-rental-app",
    live: "https://main.d2ernz8r01dkel.amplifyapp.com",
    img: "/homify.png"
  },
  {
    name: "Chatsync – Microservice Chat App",
    desc: "Realtime, scalable chat platform built with Dockerized Node/MSA backend.",
    stack: ["React", "TypeScript", "Node.js", "Socket.io"],
    github: "https://github.com/Guri9368/chat_app_micro_backend",
    img: "/chat_app_micro.png"
  },
  {
    name: "Wellness Wise",
    desc: "Wellness tracker with analytics and AI-driven health insights.",
    stack: ["Next.js", "TypeScript", "Redux", "Material UI"],
    github: "https://github.com/Guri9368/WellnessWise",
    img: "/Wellnesswise.png"
  },
  {
    name: "AI Expense Dashboard",
    desc: "Expense analytics dashboard with smart AI-based categorization.",
    stack: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Guri9368/ai-expense",
    img: "/aiexpensedashboard.png"
  },
  {
    name: "Finance Dashboard",
    desc: "Track finances and investments with real-time data and custom charts.",
    stack: ["React", "TypeScript", "apexcharts.js"],
    github: "https://github.com/Guri9368/finance_dashboard",
    img: "/finance.png"
  },
  {
    name: "FuelEU Maritime Platform",
    desc: "Full-stack app for EU maritime compliance, emissions, and pooling.",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    github: "https://github.com/Guri9368/fueleu-maritime-platform",
    img: "/fuel.png"
  }
];

const journeyData = [
  {
    emoji: "💡",
    title: "750+ LeetCode Qs",
    desc: "Top 10%, daily coder",
    bg: "from-indigo-500 via-purple-500 to-indigo-600"
  },
  {
    emoji: "💻",
    title: "25+ Full-Stack Projects",
    desc: "MERN/Next.js & more",
    bg: "from-blue-600 via-indigo-500 to-purple-600"
  },
  {
    emoji: "☁️",
    title: "Cloud/Microservices",
    desc: "AWS, Docker",
    bg: "from-teal-500 via-blue-500 to-indigo-500"
  },
  {
    emoji: "🧑‍💻",
    title: "Modern Web/JS",
    desc: "React, TS, Node, CI/CD",
    bg: "from-purple-600 via-pink-500 to-indigo-600"
  }
];

const briefAchievements = [
  { icon: "🏆", title: "WebDev Champ", desc: "WebCode, Avishkar" },
  { icon: "🤖", title: "Robotics Finalist", desc: "IIT Bombay" },
  { icon: "🥈", title: "Botrush Runner-Up", desc: "MNNIT Robotics" },
  { icon: "🚀", title: "CodeChef AIR 41", desc: "Top 50 coding" },
  { icon: "🧑‍💻", title: "E-Cell Design Lead", desc: "2023–Now" },
  { icon: "🗣️", title: "Tedx/E-Summit Org.", desc: "2024–25" }
];

const contactLinks = [
  { icon: "📧", label: "Email", url: "mailto:gurigurmeet1234567@gmail.com", color: "from-pink-500 to-rose-500" },
  { icon: "🔗", label: "GitHub", url: "https://github.com/Guri9368", color: "from-gray-700 to-gray-900" },
  { icon: "💼", label: "LinkedIn", url: "https://www.linkedin.com/in/gurmeet-singh-rathor-1bbbaa270/", color: "from-blue-600 to-blue-800" },
  { icon: "📄", label: "Resume", url: "https://drive.google.com/file/d/17-89rGNmYDvzhbVcwraZtP-lyUzzIvZC/view?usp=sharing", color: "from-green-500 to-teal-600" },
  { icon: "💻", label: "LeetCode", url: "https://leetcode.com/u/gurmeet_s_r9/", color: "from-yellow-500 to-orange-500" }
];

function App() {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-[#191b26] via-[#181825] to-[#1f2233] text-white">
      <header className="pt-14 pb-5 flex flex-col items-center text-center space-y-8">
        <ThreeDCube />
        <motion.h1
          className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-violet-200 via-pink-200 to-indigo-200 text-transparent bg-clip-text drop-shadow-lg"
          initial={{ scale: 0.8, opacity: 0, y: -30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.35, duration: 1.2 }}
        >
          Gurmeet Singh Rathor
        </motion.h1>
        <motion.div
          className="text-2xl sm:text-3xl font-bold text-pink-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}>
          Full-Stack Developer | Cloud Microservices | Top 10% Coder
        </motion.div>
        <motion.div
          className="text-lg text-violet-300 mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Node.js • React • AWS • PostgreSQL • Distributed Systems
        </motion.div>
      </header>

      <main className="max-w-7xl mx-auto px-3">

        {/* About Me */}
        <motion.section
          className="bg-[#232543]/90 rounded-3xl shadow-xl p-10 mb-10 backdrop-blur"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-violet-300">About Me</h2>
          <motion.p
            className="text-violet-100 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I build scalable web platforms, automate workflows, and lead project teams: cloud, backend, frontend. <br />
            Always learning. Consistently delivering—from code to production.
          </motion.p>
        </motion.section>

        {/* Work Experience */}
        <motion.section
          className="bg-[#232543]/90 rounded-3xl shadow-xl p-10 mb-12 backdrop-blur"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.08 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-violet-300">Work Experience</h2>
          <motion.div
            className="flex items-center gap-7"
            initial={{ scale: 0.6, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.32 }}
          >
            <div className="flex flex-col items-center justify-center mr-6">
              <span className="text-6xl animate-bounce">🛠️</span>
            </div>
            <div>
              <div className="font-bold text-xl mb-1 text-violet-100">
                Backend Intern - Mobisoftseo
                <span className="text-sm text-violet-400 font-normal ml-3">(2025)</span>
              </div>
              <div className="text-violet-200 text-base">
                Built fast Node APIs, improved backend design (50%+), led API integration, and delivered strong production code.
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills + Projects */}
        <div className="w-full flex flex-col md:flex-row gap-10">
          <motion.aside
            className="flex-[1.2] bg-[#1b1e2f]/80 p-8 rounded-3xl shadow-xl mb-8 md:mb-0 flex flex-col gap-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-pink-300 mb-2">Technical Skills & Interests</h2>
            <div className="space-y-7">
              {skillsDetailed.map((section) => (
                <motion.div
                  key={section.category}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="font-semibold text-violet-200 mb-2">{section.category}:</div>
                  <div className="flex flex-wrap gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item}
                        className="bg-gradient-to-tr from-indigo-500 via-purple-400 to-pink-400 text-white rounded-full px-4 py-1 text-sm font-medium shadow"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.aside>
          <section className="flex-[2.5]">
            <h2 className="text-2xl font-bold mb-6 text-violet-200">Projects</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((proj, idx) => (
                <motion.div
                  key={proj.name}
                  className="bg-[#181825]/95 rounded-xl shadow-lg p-7 flex flex-col hover:shadow-2xl border-t-8 border-b-4 border-violet-900 transition-shadow"
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  whileHover={{ scale: 1.04, borderColor: "#a78bfa" }}
                  transition={{ delay: 0.06 * idx, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={proj.img}
                    alt={proj.name}
                    className="rounded-lg h-36 w-full object-cover mb-4 border border-violet-200"
                    onError={e => { (e.target as HTMLImageElement).src = '/placeholder.png'; }}
                  />
                  <h3 className="font-bold text-lg mb-2 text-purple-100">{proj.name}</h3>
                  <p className="text-md mb-2 text-violet-300 flex-grow">{proj.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {proj.stack.map(stk => (
                      <span key={stk}
                        className="bg-violet-100 text-indigo-900 rounded-lg px-2 py-1 text-xs font-medium">
                        {stk}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 text-indigo-400 font-semibold underline rounded-md hover:text-pink-200 transition-colors"
                      >
                        GitHub Repo →
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-400 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        {/* My Journey */}
        <section className="max-w-7xl mx-auto py-14">
          <h2 className="text-4xl font-extrabold text-center mb-12 text-violet-200">
            <span className="text-white">My</span> <span className="text-purple-400">Journey</span>
          </h2>
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
            {journeyData.map((card, i) => (
              <motion.div
                key={card.title}
                className={`p-8 rounded-2xl shadow-lg flex items-center gap-7 border-2 border-indigo-700 bg-gradient-to-r ${card.bg} text-white`}
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: -1 }}
                transition={{ bounce: 0.3, duration: 0.7, delay: 0.08 * i }}
              >
                <span className="text-5xl">{card.emoji}</span>
                <div>
                  <div className="font-bold text-lg md:text-xl mb-1">{card.title}</div>
                  <div className="text-indigo-50">{card.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Achievements & Activities */}
        <section className="max-w-5xl mx-auto py-10">
          <h2 className="text-3xl font-bold mb-8 text-violet-200 text-center">Achievements & Activities</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {briefAchievements.map((ach, i) => (
              <motion.div
                key={ach.title}
                className="bg-[#232543] rounded-2xl shadow-xl px-5 py-7 flex flex-col items-center text-center border-2 border-violet-900"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, rotate: 1 }}
                transition={{ duration: 0.7, delay: 0.05 * i }}
              >
                <span className="text-3xl mb-2 animate-pulse">{ach.icon}</span>
                <div className="font-bold mb-1 text-pink-200">{ach.title}</div>
                <div className="text-violet-200 text-sm">{ach.desc}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact - Stylish & Attractive */}
        <motion.section
          className="bg-gradient-to-r from-[#232543] to-[#1e1f35] rounded-3xl shadow-2xl p-12 mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-full shadow-lg bg-gradient-to-r ${link.color} text-white font-semibold transition-transform`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, rotate: 2 }}
                transition={{ duration: 0.5, delay: 0.07 * i }}
                viewport={{ once: true }}
              >
                <span className="text-2xl">{link.icon}</span>
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </main>
      <footer className="py-12 bg-[#191b26] text-center text-violet-400 text-sm select-none mt-10">
        &copy; {new Date().getFullYear()} Gurmeet Singh Rathor. Powered by React, TypeScript & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
