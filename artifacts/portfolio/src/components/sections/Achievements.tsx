import { motion } from "framer-motion";
import { Users, Wind, Activity } from "lucide-react";

const achievements = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "300+ Careers Shaped",
    body: "Mentored 300+ professionals through career coaching, interview preparation, and job referrals via LinkedIn community.",
  },
  {
    icon: <Wind className="w-6 h-6" />,
    title: "Aero Club India",
    body: "Conducted 10+ workshops to promote aerosports and spread air-mindedness. Received the Club Chairman's Commendation for outstanding contributions.",
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: "Marathon Runner",
    body: "Consistent long-distance runner with a passion for endurance challenges. Running as a discipline that mirrors product thinking — iterative, resilient, data-informed.",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-heading font-display text-3xl md:text-4xl font-bold text-foreground">
          Beyond the Brief
        </h2>
        <span className="accent-bar" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-hover rounded-2xl p-7 flex flex-col items-start relative overflow-hidden"
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 flex-shrink-0 bg-[#C5ADC5]/10 text-[#C5ADC5]">
              {item.icon}
            </div>

            <h3 className="font-display text-lg font-bold text-foreground mb-3">
              {item.title}
            </h3>

            <p className="text-slate-300/70 text-sm leading-relaxed">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}