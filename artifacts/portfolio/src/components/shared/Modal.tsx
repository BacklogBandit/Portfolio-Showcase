import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed left-[50%] top-[50%] z-50 w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] p-4"
          >
            <div
              className="w-full rounded-2xl overflow-hidden flex flex-col shadow-2xl"
              style={{
                background: "rgba(17,18,22,0.97)",
                border: "1px solid #2a2c38",
              }}
            >
              <div
                className="flex items-center justify-between px-6 py-5 border-b border-[#2a2c38]"
              >
                <h2 className="font-display text-xl font-bold text-foreground pr-4">
                  {title}
                </h2>
                <button
                  onClick={onClose}
                  className="rounded-lg p-2 text-slate-500 hover:text-[#C5ADC5] transition-colors flex-shrink-0 bg-[#C5ADC5]/5"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-6 py-6 overflow-y-auto max-h-[75vh]">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}