import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power4.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: 40, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: "power4.out",
        delay: 0.2,
      }
    );

    // Subtle scroll depth
    gsap.to(imageRef.current, {
      y: -40,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section className="relative pt-36 pb-32 overflow-hidden bg-white">
      {/* ================= PAPER-LIKE BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 w-[55%] h-full bg-gradient-to-r from-red-50 to-transparent" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] rounded-full bg-red-100 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* ================= TEXT ================= */}
        <div ref={textRef}>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Clean With{" "}
            <span className="relative inline-block text-red-600">
              Confidence
              <span className="absolute -bottom-2 left-0 w-full h-[4px] bg-red-600 rounded-full" />
            </span>
          </h1>

          <p className="mt-6 text-xl font-semibold text-gray-700 max-w-xl">
            Manufacturer of Home Care & Cleaning Products
          </p>

          <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
            Burly Chem Products delivers high-performance cleaning solutions
            trusted by households, businesses, and distributors across India.
          </p>

          {/* TRUST STRIP */}
          <div className="mt-6 flex items-center gap-6 text-sm font-semibold text-gray-700">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              Pan-India Distribution
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              Quality Tested Products
            </span>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-wrap gap-6">
            <motion.a
              href="#products"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full bg-red-600 text-white font-semibold shadow-lg shadow-red-600/30 hover:bg-red-700 transition"
            >
              View Products
            </motion.a>

            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdkuU2O2CGEevGUbkvgKU4XEzEnUtYFf2oK9M-B39_WWGI5RA/viewform?usp=header"
              target="_blank"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-50 transition"
            >
              Become a Distributor
            </motion.a>
          </div>
        </div>

        {/* ================= IMAGE ================= */}
        <div ref={imageRef} className="relative rounded-3xl overflow-hidden">
          {/* Glow base */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-red-100 to-transparent blur-3xl scale-110" />

          {/* Product */}
          <motion.img
            src={assets.hero2}
            alt="Burly Product Range"
            className="relative z-10 w-full max-w-xl mx-auto object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Shine sweep */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-12"
            initial={{ x: "-120%" }}
            animate={{ x: "120%" }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              repeatDelay: 2,
            }}
          />
        </div>
      </div>
    </section>
  );
}
