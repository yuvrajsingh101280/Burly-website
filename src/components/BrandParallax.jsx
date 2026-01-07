import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function BrandParallax() {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background parallax (slow & stable)
      gsap.fromTo(
        bgRef.current,
        { y: "-6%" },
        {
          y: "6%",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      // Content reveal
      gsap.fromTo(
        contentRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-screen min-h-[90vh] overflow-hidden"
    >
      {/* ================= BACKGROUND IMAGE ================= */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url('${assets.parallax}')`,
        }}
      />

      {/* ================= BRAND STRUCTURE LAYER ================= */}
      <div className="absolute inset-0">
        {/* Dominant brand red (left-weighted) */}
        <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-red-600 via-red-600/85 to-transparent" />

        {/* Soft light balancing (keeps it clean) */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-white/10" />
      </div>

      {/* ================= BRAND FRAME LINES ================= */}
      <div className="absolute top-10 left-6 right-6 md:left-12 md:right-12 h-[2px] bg-white/50" />
      <div className="absolute bottom-10 left-6 right-6 md:left-12 md:right-12 h-[2px] bg-white/50" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 min-h-[90vh] flex items-center">
        <div ref={contentRef} className="max-w-2xl text-white">
          <span className="block mb-6 text-sm font-bold tracking-widest uppercase text-white/80">
            Our Commitment
          </span>

          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Built on Quality.
            <br />
            Driven by Trust.
          </h2>

          <p className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed">
            From manufacturing to distribution, Burly Chem Products delivers
            consistent performance and dependable supply across India.
          </p>
        </div>
      </div>
    </section>
  );
}
