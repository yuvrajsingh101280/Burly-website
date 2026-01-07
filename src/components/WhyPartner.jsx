"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TrendingUp, MapPinned, Headset, Boxes } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function WhyPartner() {
  const sectionRef = useRef(null);
  const mainImgRef = useRef(null);
  const floatImgRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      /* ================= REVEAL ================= */
      gsap.fromTo(
        ".partner-animate",
        { opacity: 0, y: 70 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.18,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      /* ================= PARALLAX ================= */
      gsap.to(mainImgRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(floatImgRef.current, {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32 overflow-hidden bg-[#fff7f7]"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-200/40 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100/40 blur-[140px]" />
      </div>

      {/* BRAND STAMP */}
      <h2 className="absolute top-12 left-1/2 -translate-x-1/2 text-[22vw] font-extrabold text-red-600/5 tracking-tight select-none">
        PARTNER
      </h2>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT – VISUAL */}
        <div className="partner-animate relative flex justify-center">
          <div
            ref={mainImgRef}
            className="relative rounded-[32px] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
              alt="Burly Distribution Network"
              className="w-full max-w-[520px] h-[420px] object-cover"
            />
          </div>

          <div
            ref={floatImgRef}
            className="absolute -bottom-12 -right-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
              alt="Sales & Distributor Support"
              className="w-56 h-40 object-cover"
            />
          </div>

          <div className="absolute -top-6 -left-6 w-28 h-28 rounded-full bg-red-600/10" />
        </div>

        {/* RIGHT – CONTENT (UNCHANGED TEXT) */}
        <div className="space-y-10">
          <div className="partner-animate">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              A Solid Partnership Built for
              <br />
              Long-Term Growth
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Burly Chem Products is a fast-growing Indian manufacturer in the
              home care segment, committed to delivering consistent quality and
              reliable supply across India.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe a strong business relationship is built on mutual
              growth. That is why our distributorship model is designed to help
              partners build a highly profitable and stable business within
              their chosen area.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With a complete product range under one brand, Burly enables easy
              market penetration across home, personal, and auto care
              categories.
            </p>
          </div>

          {/* BENEFITS – SAME CONTENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 partner-animate">
            {[
              {
                icon: TrendingUp,
                title: "Best Profit Margins",
                desc: "We offer competitive and attractive margins that allow distributors to earn strong profits and scale their business confidently.",
              },
              {
                icon: MapPinned,
                title: "Exclusive Territory Rights",
                desc: "Distributors receive sole rights within their selected geographical area, protecting them from unnecessary internal competition.",
              },
              {
                icon: Headset,
                title: "100% Sales & Marketing Support",
                desc: "Complete support including training, product knowledge, marketing materials, digital promotion, and operational guidance.",
              },
              {
                icon: Boxes,
                title: "High Demand & Versatile Portfolio",
                desc: "A wide range of daily-use home, personal, and auto care products ensures consistent demand across retailers and consumers.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <Icon size={24} className="text-red-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= TRUST BOX ================= */}
      <div className="relative max-w-5xl mx-auto px-6 mt-28 partner-animate">
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-red-300 via-red-200 to-transparent">
          <div className="bg-white rounded-3xl px-10 py-12 text-center shadow-xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              We are looking for motivated and hardworking partners who are
              ready for long-term investment and growth.
            </p>

            <p className="mt-4 text-xl font-extrabold text-gray-900">
              Your success is our success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
