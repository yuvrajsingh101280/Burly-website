"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TrendingUp, ShieldCheck, MapPinned, Headset } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Distributorship() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= TEXT + CONTENT REVEAL ================= */
      gsap.fromTo(
        ".dist-animate",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.16,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      /* ================= IMAGE REVEAL (NO SCRUB) ================= */
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, y: 60, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="distributor"
      className="relative py-24 md:py-32 overflow-hidden bg-[#fff7f7]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] md:w-[900px] h-[700px] md:h-[900px] bg-red-200/40 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-red-100/40 blur-[140px]" />
      </div>

      {/* BRAND STAMP */}
      <h2 className="absolute top-12 md:top-16 left-1/2 -translate-x-1/2 text-[28vw] md:text-[22vw] font-extrabold tracking-tight text-red-600/5 select-none pointer-events-none">
        PARTNER
      </h2>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* IMAGE */}
        <div className="dist-animate relative flex justify-center">
          <div
            ref={imageRef}
            className="relative rounded-[32px] overflow-hidden shadow-2xl"
          >
            <img
              src="https://res.cloudinary.com/dwiaowohz/image/upload/v1767840463/photo-1600880292203-757bb62b4baf_uic5vn.jpg"
              alt="Distribution Partnership"
              className="w-full max-w-[480px] md:max-w-[520px] h-[360px] md:h-[420px] object-cover"
            />
          </div>

          {/* FLOAT ACCENT */}
          <div className="absolute -bottom-10 -left-10 w-24 md:w-28 h-24 md:h-28 rounded-full bg-red-600/10" />
        </div>

        {/* CONTENT */}
        <div className="space-y-8">
          <div className="dist-animate">
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Become a Burly Distributor
            </h2>

            <p className="mt-5 md:mt-6 text-gray-600 leading-relaxed">
              Burly Chem Products invites motivated and growth-oriented partners
              to join our expanding distributor network across India.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Our distributorship model is designed to offer strong profit
              margins, exclusive territory rights, and complete sales and
              marketing support, ensuring long-term business stability.
            </p>
          </div>

          {/* BENEFITS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 dist-animate">
            {[
              { icon: TrendingUp, text: "Attractive Profit Margins" },
              { icon: MapPinned, text: "Exclusive Territory Rights" },
              { icon: Headset, text: "Sales & Marketing Support" },
              { icon: ShieldCheck, text: "Trusted & Growing Brand" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-xl transition"
                >
                  <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center">
                    <Icon className="text-red-600" size={22} />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          {/* INVESTMENT BOX */}
          <div className="dist-animate rounded-3xl p-[2px] bg-gradient-to-r from-red-300 via-red-200 to-transparent">
            <div className="bg-white rounded-3xl p-6">
              <p className="text-sm text-gray-600">
                <span className="font-semibold text-gray-900">
                  Investment Range:
                </span>{" "}
                ₹49,000 – ₹3,00,000 (based on selected plan & territory)
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="dist-animate pt-4">
            <a
              href="https://forms.gle/qRfiwEoJybW2D28U9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-red-600 px-12 py-4 text-white font-extrabold hover:bg-red-700 transition shadow-xl"
            >
              Apply for Distributorship
            </a>

            <p className="mt-3 text-xs text-gray-500">
              Our team will review your application and contact you shortly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
