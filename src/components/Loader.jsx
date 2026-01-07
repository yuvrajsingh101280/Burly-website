import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#fffdfd]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* ================= RED FRAME RIBBON ================= */}
      <motion.div
        className="absolute top-12 left-0 right-0 h-[3px] bg-[#e30613]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
      />

      <motion.div
        className="absolute bottom-12 left-0 right-0 h-[3px] bg-[#e30613]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
      />

      {/* ================= CONTENT ================= */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Logo */}
        <motion.img
          src={assets.logo}
          alt="Burly Logo"
          className="h-28"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Stroke loader (clean & premium) */}
        <svg width="160" height="4" viewBox="0 0 160 4">
          <motion.line
            x1="0"
            y1="2"
            x2="160"
            y2="2"
            stroke="#e30613"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>

        {/* Tagline */}
        <motion.p
          className="text-md font-semibold tracking-wide text-[#e30613]"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Clean With Confidence
        </motion.p>
      </div>
    </motion.div>
  );
}
