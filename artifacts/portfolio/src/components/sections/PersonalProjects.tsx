import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Modal from "@/components/shared/Modal";

interface CaseStudy {
  title: string;
  tag: string;
  teaser: string;
  content: React.ReactNode;
}

const caseStudies: CaseStudy[] = [
  {
    title: "PulseSync — Garmin Fitness Telemetry Pipeline",
    tag: "Vibe Code",
    teaser: "A premium performance visualizer converting raw Garmin biometrics into non-siloed, privacy-first analytics with live training load insights.",
    content: (
      <div className="space-y-6">
        <p className="text-slate-300 leading-relaxed">
          A personal health analytics engine designed to reclaim ownership of wearable biometric data. The platform automates the extraction, transformation, and local storage of complex health metrics, turning raw sensor logs into an interactive, real-time performance dashboard.
        </p>
        <a
          href="https://github.com/BacklogBandit/Garmin_Project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "rgba(197,173,197,0.12)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    )
  },
  {
    title: "Groww — Curbing High Abandonment Rates",
    tag: "PM Analysis",
    teaser: "Behavioural analysis mapping dropout patterns throughout Groww's complex onboarding pipeline, re-engineered to drive completion from 55% to 90%.",
    content: (
      <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
        <p>Re-engineered onboarding workflows to use shorter, gamified, puzzle-based diagnostic matches, driving completion metrics from 55% up to 90% and boosting revenue billings by 20% ($1.8M).</p>
        <p>Identified KYC friction as the primary drop-off trigger. Proposed progressive disclosure, optimistic UI, and a 'Guest Mode' exploration path before the compliance wall.</p>
        <a
          href="https://www.notion.so/User-Research-Groww-db3234cd5f89442fa822f9a0283ac588?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "rgba(197,173,197,0.12)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}
        >
          <ExternalLink className="w-4 h-4" />
          View Full Analysis
        </a>
      </div>
    )
  },
  {
    title: "Apollo.io Teardown",
    tag: "Teardown",
    teaser: "Deep evaluation of user acquisition loops, prospecting pipelines, and activation funnels to eliminate core workflow bottlenecks.",
    content: (
      <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
        <p><span className="font-semibold text-foreground">The Problem:</span> Apollo.io is a powerhouse for sales intelligence, but its UI creates a steep learning curve for new users — leading to delayed time-to-value and churn before activation.</p>
        <p><span className="font-semibold text-foreground">The Insights:</span> Primary friction lives in the complex filtering interface and the setup of a first email sequence. Cognitive load is front-loaded, forcing users to make complex decisions before they understand the platform's core value.</p>
        <p><span className="font-semibold text-foreground">Customer Journey Mapping:</span> Mapped the complete user journey from signup through first successful outreach, identifying 9 key friction moments and 4 high-value delight opportunities that were being missed.</p>
        <p><span className="font-semibold text-foreground">The Solution:</span> Proposed a template-driven onboarding flow, contextual "first-run" guided tours, and a simplified quick-filter view for basic prospecting that could be unlocked progressively.</p>
        <p><span className="font-semibold text-foreground">Improvement Opportunities:</span> Recommended better error handling in the sequence builder and UX changes making the transition from prospecting to outreach feel seamless rather than disjointed across two separate modules.</p>
        <a
          href="https://www.notion.so/Apollo-io-10e1ed29f87c80f88cefe117d1d5e881?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "rgba(197,173,197,0.12)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}
        >
          <ExternalLink className="w-4 h-4" />
          View Full Teardown
        </a>
      </div>
    )
  },
  {
    title: "DNS Control Panel",
    tag: "Architecture",
    teaser: "Architectural system design outlining a highly available, decentralised control panel to securely manage high-volume DNS records across distinct server layers.",
    content: (
      <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
        <p><span className="font-semibold text-foreground">The Problem:</span> Designing a robust DNS management system requires balancing extreme low-latency requirements with high availability and global distribution, without a single point of failure.</p>
        <p><span className="font-semibold text-foreground">The Insights:</span> Traditional monolith architectures collapse under sudden request spikes. A distributed, edge-cached approach is necessary to ensure resilience against DDoS attacks and regional outages simultaneously.</p>
        <p><span className="font-semibold text-foreground">The Solution:</span> Designed a system architecture utilising Anycast routing, a globally distributed key-value store for zone records, and a decoupled control plane for record management with health checks and automated failover.</p>
        <p><span className="font-semibold text-foreground">Trade-offs Explored:</span> Analysed the trade-offs between eventual consistency vs. strict consistency in DNS propagation. Chose availability and partition tolerance (AP in CAP theorem) to meet strict SLA requirements of 99.99% uptime.</p>
        <p><span className="font-semibold text-foreground">Outcomes:</span> Architecture supports sub-50ms resolution globally with zero-downtime record propagation under simulated load testing conditions.</p>
        <a
          href="https://www.notion.so/DNS-Control-Panel-dd419845aeb74edbb227599b9f714132?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "rgba(197,173,197,0.12)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}
        >
          <ExternalLink className="w-4 h-4" />
          View Architecture Doc
        </a>
      </div>
    )
  },
  {
    title: "Google Chrome Find-in-Page",
    tag: "UX Teardown",
    teaser: "Micro-interaction UX teardown proposing dynamic input validation and smarter search state management for Chrome's Find-in-Page feature.",
    content: (
      <div className="space-y-4 text-slate-300 leading-relaxed text-sm">
        <p>Identified that Chrome's Find-in-Page provides no real-time validation feedback — users type full queries before seeing results.</p>
        <p>Proposed: (1) incremental result highlighting as user types, (2) contextual match count with colour-coded density indicator, (3) smart keyboard shortcut discoverability overlay.</p>
        <p>Impact: estimated 30% reduction in search abandonment within the browser UI.</p>
        <a
          href="https://www.notion.so/Google-Chrome-Find-in-Page-25df0324ee0148ef92c9e84eb0d8572d?source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-[1.02]"
          style={{ background: "rgba(197,173,197,0.12)", border: "1px solid rgba(197,173,197,0.25)", color: "#C5ADC5" }}
        >
          <ExternalLink className="w-4 h-4" />
          View Full Teardown
        </a>
      </div>
    )
  }
];

export default function PersonalProjects() {
  const [activeCaseStudy, setActiveCaseStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="scroll-mt-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-heading font-display text-3xl md:text-4xl font-bold text-foreground">
          Projects & Analyses
        </h2>
        <span className="accent-bar" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {caseStudies.map((study, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass-card-hover rounded-2xl p-7 flex flex-col cursor-pointer"
            onClick={() => setActiveCaseStudy(study)}
          >
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-5 w-fit bg-[#C5ADC5]/10 border border-[#C5ADC5]/20 text-[#C5ADC5]">
              {study.tag}
            </div>

            <h3 className="font-display text-lg font-bold text-foreground mt-2 mb-3 leading-snug">
              {study.title}
            </h3>

            <p className="text-slate-300/80 text-sm leading-relaxed flex-grow mb-6">
              {study.teaser}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium mt-auto text-[#C5ADC5] group">
              Read Case Study
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </div>

      <Modal
        isOpen={!!activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
        title={activeCaseStudy?.title || ""}
      >
        <div className="space-y-4">
          {activeCaseStudy && (
            <div className="inline-flex px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-2 bg-[#C5ADC5]/10 border border-[#C5ADC5]/20 text-[#C5ADC5]">
              {activeCaseStudy.tag}
            </div>
          )}
          {activeCaseStudy?.content}
        </div>
      </Modal>
    </section>
  );
}
