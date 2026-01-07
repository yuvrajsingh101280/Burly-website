"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { PhoneCall, Users, FileSignature, Rocket } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    desc: "After reviewing the proposal, get in touch with our team to express your interest.",
  },
  {
    icon: Users,
    title: "Meeting & Area Assessment",
    desc: "Our sales team will assess your area and discuss a detailed business plan with you.",
  },
  {
    icon: FileSignature,
    title: "Agreement",
    desc: "Once all terms are finalized, an official distributorship agreement is signed.",
  },
  {
    icon: Rocket,
    title: "Training & Launch",
    desc: "You receive training and we jointly launch distribution in your selected area.",
  },
];

export default function NextSteps() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 80,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-28 bg-[#fff7f7] overflow-hidden"
    >
      {/* SOFT BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fff7f7] to-white" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
            How It Works
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Your Journey With Burly
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            A simple, transparent, and growth-focused process designed to help
            you launch fast and scale confidently.
          </p>
        </div>
        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center font-extrabold text-lg shadow-lg">
                  {i + 1}
                </div>

                {/* ICON */}
                <div className="w-14 h-14 mb-6 rounded-full bg-red-50 flex items-center justify-center">
                  <Icon className="text-red-600" size={26} />
                </div>

                <h3 className="text-lg font-extrabold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
        {/* TRUST BOX
        <div className="mt-24 flex justify-center">
          <div className="rounded-3xl p-[2px] bg-gradient-to-r from-red-300 via-red-200 to-transparent">
            <div className="bg-white rounded-3xl px-12 hover:bg-red-100 py-10 text-center shadow-xl">
              <p className="text-lg text-gray-700">
                Your growth journey starts here.
              </p>
              <p className="mt-2 text-2xl font-extrabold text-gray-900">
                Your success is our success.
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
