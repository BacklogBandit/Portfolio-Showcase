import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 pt-12 pb-12">
      <div className="glass-card rounded-3xl p-12 md:p-20 text-center relative overflow-hidden flex flex-col items-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6 text-[#C5ADC5]">
            Let's Build Something Extraordinary
          </h2>
          
          <p className="text-lg md:text-xl text-slate-300/70 mb-12 max-w-2xl mx-auto">
            Open to PM roles, consulting, and conversations about AI products.
          </p>
          
          <div className="flex items-center justify-center gap-6 mb-16">
            <a 
              href="https://www.linkedin.com/in/samar5700/" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-xl glass-card-hover flex items-center justify-center text-foreground hover:text-[#C5ADC5] hover:border-[#C5ADC5]/40 transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            
            <a 
              href="https://github.com/BacklogBandit" 
              target="_blank" 
              rel="noreferrer"
              className="w-12 h-12 rounded-xl glass-card-hover flex items-center justify-center text-foreground hover:text-[#C5ADC5] hover:border-[#C5ADC5]/40 transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            
            <a 
              href="mailto:samarjeet1997@outlook.com" 
              className="w-12 h-12 rounded-xl glass-card-hover flex items-center justify-center text-foreground hover:text-[#C5ADC5] hover:border-[#C5ADC5]/40 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
        
        <div className="mt-8 text-center text-slate-300/40 text-sm">
          © 2025 Samarjeet Sharma · Built with purpose
        </div>
      </div>
    </section>
  );
}