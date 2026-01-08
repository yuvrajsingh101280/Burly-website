import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const points = [
    {
      title: "Manufacturer Focus",
      desc: "In-house manufacturing ensures strict control over raw materials, formulations, and production standards for consistent output.",
    },
    {
      title: "Consistent Quality",
      desc: "Each product is developed and tested to deliver reliable cleaning performance, safety, and long-term customer satisfaction.",
    },
    {
      title: "Wide Product Range",
      desc: "A complete portfolio covering daily home care needs, designed to serve households, institutions, and commercial buyers.",
    },
    {
      title: "Distributor Support",
      desc: "Strong backend support, marketing assistance, and supply reliability to help distributors grow steadily in their territories.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 md:py-32 overflow-hidden bg-white"
    >
      {/* BIG BRAND WORD (BACKGROUND) */}
      <div className="absolute inset-0 pointer-events-none">
        <h2 className="absolute -top-8 left-1/2 -translate-x-1/2 text-[120px] sm:text-[160px] md:text-[220px] font-extrabold tracking-tight text-red-600/5 select-none">
          BURLY
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-24 items-start">
        {/* ================= LEFT: TEXT ================= */}
        <div className="about-reveal">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-[4px] bg-red-600 rounded-full" />
            <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
              About Us
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            About Burly Chem Products
          </h2>

          <div className="mt-8 space-y-6 text-gray-600 leading-relaxed max-w-xl">
            <p>
              Burly Chem Products is a dedicated manufacturer of home care and
              cleaning solutions, committed to delivering consistent quality,
              effective formulations, and reliable supply across India.
            </p>

            <p>
              Our product range is developed with a focus on hygiene,
              performance, and affordability, making Burly a trusted choice for
              households, institutions, and distribution partners.
            </p>

            <p>
              With a growing distributor network and strong marketing support,
              we believe in building long-term partnerships that grow together.
            </p>
          </div>
        </div>

        {/* ================= RIGHT: CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {points.map((item, i) => (
            <div
              key={i}
              className="about-reveal relative rounded-3xl bg-white p-8 sm:p-10 pt-14 ring-1 ring-black/5 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* NUMBER BADGE */}
              <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-md">
                <span className="text-white font-extrabold text-lg">
                  {i + 1}
                </span>
              </div>

              <p className="text-lg sm:text-xl font-semibold text-gray-900">
                {item.title}
              </p>

              <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>

              {/* ACCENT LINE */}
              <span className="absolute bottom-6 left-8 w-10 h-[3px] bg-red-600 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
