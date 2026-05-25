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
            My journey wasn't a straight line. I started in Sales, learning the ultimate product truth:{" "}
            <span className="text-foreground/85 font-medium">Understanding a customer's need is everything.</span>{" "}
            In Consulting, I mastered translating messy stakeholder chaos into clear technical roadmaps. Today, as a Product Manager,
            I blend an engineering core with absolute consumer first thinking to architect intelligent, scalable software.
          </p>
          <p>
            I swap rigid hierarchy for genuine collaboration and a touch of wit. Off the clock, I chase half-marathon personal bests,
            surf, ride my motorcycle, and back Liverpool FC.
          </p>
          <p className="text-foreground/85 font-medium font-display text-lg md:text-xl">
            I build products and teams to go the distance.
          </p>
        </div>
      </motion.div>
    </section>
  );
}