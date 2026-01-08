"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger);

export default function ProductRangeInfo() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= REVEAL TIMELINE ================= */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".range-tag", {
        opacity: 0,
        y: 40,
        duration: 0.6,
        ease: "power3.out",
        immediateRender: false,
      })
        .from(
          ".range-title",
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.3"
        )
        .from(
          ".range-text",
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.4"
        )
        .from(
          ".range-chip",
          {
            opacity: 0,
            y: 20,
            stagger: 0.08,
            duration: 0.5,
            ease: "power3.out",
            immediateRender: false, // 🔥 KEY FIX
          },
          "-=0.3"
        )
        .from(
          imageRef.current,
          {
            opacity: 0,
            y: 80,
            scale: 0.95,
            duration: 1,
            ease: "power3.out",
            immediateRender: false,
          },
          "-=0.6"
        );

      /* ================= SCROLL PARALLAX ================= */
      gsap.to(imageRef.current, {
        y: window.innerWidth < 768 ? -30 : -60, // softer on mobile
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      /* ================= MOUSE PARALLAX (DESKTOP ONLY) ================= */
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      if (!isTouch) {
        const handleMouseMove = (e) => {
          const { innerWidth, innerHeight } = window;
          const x = (e.clientX / innerWidth - 0.5) * 20;
          const y = (e.clientY / innerHeight - 0.5) * 20;

          gsap.to(imageRef.current, {
            x,
            y,
            duration: 0.6,
            ease: "power3.out",
          });
        };

        window.addEventListener("mousemove", handleMouseMove, {
          passive: true,
        });

        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden bg-[#fff7f7]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[700px] md:h-[900px] bg-red-200/40 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-red-100/40 blur-[140px]" />
      </div>

      {/* BRAND STAMP */}
      <h2 className="absolute top-16 left-1/2 -translate-x-1/2 text-[26vw] md:text-[22vw] font-extrabold tracking-tight text-red-600/5 select-none pointer-events-none">
        RANGE
      </h2>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* LEFT */}
        <div className="space-y-8 md:space-y-10">
          <span className="range-tag inline-block text-sm font-bold tracking-widest text-red-600 uppercase">
            Complete Product Portfolio
          </span>

          <h2 className="range-title text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            One Brand. <br /> Every Cleaning Need.
          </h2>

          <div className="space-y-5 text-gray-600 max-w-xl">
            <p className="range-text">
              Burly products are manufactured using premium-quality raw
              materials to ensure consistent performance and market trust.
            </p>

            <p className="range-text">
              A complete range that helps distributors and retailers expand
              faster with one reliable brand.
            </p>
          </div>

          {/* CHIPS */}
          <div className="flex flex-wrap gap-3 max-w-xl">
            {[
              "Toilet Cleaner",
              "Liquid Soap",
              "Dishwash Gel",
              "Kitchen Cleaner",
              "Glass Cleaner",
              "Liquid Detergent",
              "Car Wash Shampoo",
              "Floor Cleaner",
            ].map((item, i) => (
              <span
                key={i}
                className="range-chip px-4 md:px-5 py-2 rounded-full text-sm font-semibold bg-white border border-gray-200 text-gray-800 shadow-sm hover:border-red-600 hover:text-red-600 transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center mt-12 lg:mt-0">
          <div className="absolute inset-0 bg-red-300/20 blur-3xl rounded-full" />

          <img
            ref={imageRef}
            src={assets.burlyproductrange}
            alt="Burly complete product range"
            className="relative max-h-[360px] md:max-h-[480px] w-auto object-contain drop-shadow-2xl will-change-transform"
          />

          <div className="absolute -bottom-6 right-16 w-28 h-[5px] bg-red-600 rounded-full hidden md:block" />
        </div>
      </div>
    </section>
  );
}
