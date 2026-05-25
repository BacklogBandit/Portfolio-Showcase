import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Calendar, Bot, BarChart2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function WorkExperience() {
  const [weight, setWeight] = useState([75]);
  const [daysElapsed, setDaysElapsed] = useState([30]);
  const [halfLife, setHalfLife] = useState([21]);

  const score = weight[0] * Math.pow(0.5, daysElapsed[0] / halfLife[0]);
  const scoreColor = score > 50 ? "#22c55e" : score >= 20 ? "#eab308" : "#ef4444";

  return (
    <section id="work" className="scroll-mt-24 pt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="section-heading font-display text-3xl md:text-4xl font-bold text-foreground">
          Systems I've Built
        </h2>
        <span className="accent-bar" />
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TILE 1 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card-hover rounded-2xl p-7 lg:col-span-2 flex flex-col gap-6"
        >
          {/* PART A */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="font-display font-bold text-xl text-foreground">AI-Powered Lead Scoring & Routing Engine</h3>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Orchestrated a dual-layer predictive lead scoring matrix balancing firmographic ICP vectors against dynamic behavioral intent signals to eliminate lead leakage across the full acquisition funnel.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#111216]/50 p-6 rounded-xl border border-[#C5ADC5]/10">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400">Initial Weight (wᵢ)</span>
                    <span className="text-[#C5ADC5] font-mono">{weight[0]}</span>
                  </div>
                  <Slider min={0} max={100} step={1} value={weight} onValueChange={setWeight} className="my-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400">Days Elapsed (Δtᵢ)</span>
                    <span className="text-[#C5ADC5] font-mono">{daysElapsed[0]}</span>
                  </div>
                  <Slider min={0} max={90} step={1} value={daysElapsed} onValueChange={setDaysElapsed} className="my-2" />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-2">
                    <span className="text-slate-400">Half-Life (τ)</span>
                    <span className="text-[#C5ADC5] font-mono">{halfLife[0]}</span>
                  </div>
                  <Slider min={14} max={30} step={1} value={halfLife} onValueChange={setHalfLife} className="my-2" />
                </div>
              </div>
              
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="font-mono text-sm px-4 py-2 bg-[#111216] border border-[#C5ADC5]/20 rounded-md text-slate-300">
                  S<sub className="text-[10px]">behavioral</sub>(t) = Σ w<sub className="text-[10px]">i</sub> × 0.5<sup className="text-[10px]">(Δt<sub className="text-[8px]">i</sub>/τ)</sup>
                </div>
                <div className="text-5xl font-bold font-mono tracking-tighter" style={{ color: scoreColor }}>
                  {score.toFixed(1)}
                </div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* TILE 2 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="glass-card-hover rounded-2xl p-7 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3 text-[#C5ADC5]">
            <div className="opacity-80"><MessageSquare className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-xl text-foreground">Conversational Intelligence Platform</h3>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-[#C5ADC5]/10 border border-[#C5ADC5]/20 text-[#C5ADC5] px-2 py-0.5 rounded text-xs font-medium">15% Adoption ↑ · 35% Billing ↑ · 95% Ops Automation</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed flex-grow">
            Devised and scaled an AI call analysis framework leveraging fine-tuned sentence-level transformer models (RoBERTa/DeBERTa) alongside fast rule-based lexicon layers. Achieved a 15% lift in product adoption and a 35% increase in billing volume while automating customer discussion capture to slash manual operational hours by 95%.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#2a2c38]">
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">RoBERTa/DeBERTa</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">95% Ops Reduced</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">35% Billing Growth</span>
          </div>
        </motion.div>

        {/* TILE 3 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-card-hover rounded-2xl p-7 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3 text-[#C5ADC5]">
            <div className="opacity-80"><Calendar className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-xl text-foreground">0-to-1 Meeting Scheduler + Chrome Plugin</h3>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-[#C5ADC5]/10 border border-[#C5ADC5]/20 text-[#C5ADC5] px-2 py-0.5 rounded text-xs font-medium">40% Demo Conversion ↑</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed flex-grow">
            Launched a zero-to-one native meeting scheduler featuring advanced multi-timezone routing loops, webhooks, calendar sync frameworks, and white-labeled booking structures. Contributed to a 40% increase in demo conversions and shipped a high-performance Chrome plugin extending CRM utility directly inside LinkedIn, Gmail, and Salesforce profiles.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#2a2c38]">
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">Multi-timezone</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">40% More Demos</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">Chrome Extension</span>
          </div>
        </motion.div>

        {/* TILE 4 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="glass-card-hover rounded-2xl p-7 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3 text-[#C5ADC5]">
            <div className="opacity-80"><Bot className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-xl text-foreground">AI Agent Sourcing & Hiring Platform</h3>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-[#C5ADC5]/10 border border-[#C5ADC5]/20 text-[#C5ADC5] px-2 py-0.5 rounded text-xs font-medium">$10K+ QoQ Revenue · 50% Faster Qualification</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed flex-grow">
            Conceptualized and shipped a multi-channel AI autonomous agent MVP within 3 months (beating the 6-month historical baseline). Conducted 30+ comprehensive user interviews to engineer real-time profiling alerts and tagging pipelines, generating over $10K+ in quarterly revenue growth and cutting qualification turnaround times by 50%.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#2a2c38]">
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">3 Month Build</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">30+ User Interviews</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">$10K+ QoQ</span>
          </div>
        </motion.div>

        {/* TILE 5 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass-card-hover rounded-2xl p-7 flex flex-col"
        >
          <div className="flex items-center gap-3 mb-3 text-[#C5ADC5]">
            <div className="opacity-80"><BarChart2 className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-xl text-foreground">Product Analytics & Mixpanel Architecture</h3>
          </div>
          <div className="mb-4">
            <span className="inline-block bg-[#C5ADC5]/10 border border-[#C5ADC5]/20 text-[#C5ADC5] px-2 py-0.5 rounded text-xs font-medium">530 Events Tracked · 50hrs/wk Saved</span>
          </div>
          <p className="text-slate-300 text-sm leading-relaxed flex-grow">
            Commanded a 4-member cross-functional engineering team to build an end-to-end telemetry architecture map tracking ~530 distinct user behavioral actions. Provisioned custom product health dashboards on Mixpanel and Metabase, saving internal product and GTM teams over 50 hours of manual data tracking effort weekly.
          </p>
          <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-[#2a2c38]">
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">~530 Events</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">Mixpanel + Metabase</span>
            <span className="bg-[#B2B5E0]/10 border border-[#B2B5E0]/20 text-[#B2B5E0] text-xs rounded-full px-3 py-1">50hrs Saved/Week</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}