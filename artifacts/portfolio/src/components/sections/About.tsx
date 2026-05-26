import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-card rounded-2xl p-8 md:p-14 relative overflow-hidden"
      >
        <div className="mb-8">
          <h2 className="section-heading font-display text-3xl md:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <span className="accent-bar" />
        </div>

        <div className="space-y-6 text-base md:text-lg text-foreground/60 leading-relaxed max-w-3xl">
          <p>
            I build software products and teams that go the distance. My execution is shaped by a deliberate mix of disciplines: Sales taught me to deeply anchor on customer needs, Consulting turned stakeholder chaos into clean roadmaps, and an Engineering core keeps me grounded in how code actually gets built.
          </p>
          <p>
            I skip the rigid hierarchy for flat, high-energy collaboration and when I'm not shipping features or building personal side projects, I'm usually out for a long run, planning a motorcycle trip, surfing, or backing Liverpool FC.
          </p>
        </div>
      </motion.div>
    </section>
  );
}