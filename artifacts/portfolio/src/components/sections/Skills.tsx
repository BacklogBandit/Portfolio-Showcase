import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages & Core Processing",
    style: "bg-[#b2b5e0]/10 border border-[#b2b5e0]/25 text-[#b2b5e0]",
    skills: ["Python", "SQL", "JavaScript (ES6+)", "Node.js", "REST APIs", "Webhooks", "JSON Processing"],
  },
  {
    category: "Product Architecture & Frameworks",
    style: "bg-[#c5adc5]/10 border border-[#c5adc5]/25 text-[#c5adc5]",
    skills: ["0-to-1 Architecture", "LLM Memory Architectures", "Vector Embeddings", "Context Engineering", "System Engineering Blueprints"],
  },
  {
    category: "Product Competencies",
    style: "bg-[#b2b5e0]/10 border border-[#b2b5e0]/25 text-[#b2b5e0]",
    skills: ["Mixpanel Telemetry", "Metabase Dashboarding", "A/B Testing Loops", "Funnel Optimization", "User Cohort Mapping", "Retention Analytics", "User Interviews", "Market Research", "Competitive Analytics", "Prioritization", "Product Sense"],
  },
  {
    category: "Product Execution & Tools",
    style: "bg-[#c5adc5]/10 border border-[#c5adc5]/25 text-[#c5adc5]",
    skills: ["Jira Automation", "Figma Prototyping", "Miro Topology", "Cursor Workflow", "Replit Vibe Coding", "Agile Sprint Management", "Google AI Studio", "Antigravity"],
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } },
  };

  return (
    <section id="skills" className="scroll-mt-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-heading font-display text-3xl md:text-4xl font-bold text-foreground">
          Skills & Toolkit
        </h2>
        <span className="accent-bar" />
      </motion.div>

      <div className="glass-card rounded-2xl p-8">
        {skillsData.map((group, i) => (
          <div key={i} className={`${i > 0 ? "border-t border-[#2a2c38] pt-6 mt-6" : ""}`}>
            <h3 className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-4 font-semibold">
              {group.category}
            </h3>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {group.skills.map((skill, j) => (
                <motion.div
                  key={j}
                  variants={item}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-default select-none ${group.style} hover:opacity-80`}
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}