"use client";

import { PhoneCall, Users, FileSignature, Rocket } from "lucide-react";

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
  return (
    <section className="relative py-32 overflow-hidden bg-[#fff7f7]">
      {/* BACKGROUND BLOBS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-200/40 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-100/40 blur-[140px]" />
      </div>

      {/* WATERMARK */}
      <h2 className="absolute top-16 left-1/2 -translate-x-1/2 text-[20vw] font-extrabold text-red-600/5 tracking-tight select-none z-0 pointer-events-none">
        STEPS
      </h2>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
            How It Works
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900">
            Your Journey With Burly
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            A simple, transparent, and growth-focused process designed to help
            you launch fast and scale confidently.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-red-200" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="relative bg-white rounded-3xl p-8 text-center border border-gray-200 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {i + 1}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-50 flex items-center justify-center">
                  <Icon className="text-red-600" size={28} />
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

        {/* END MESSAGE */}
        <div className="mt-32 text-center">
          <div className="inline-block rounded-3xl p-[2px] bg-gradient-to-r from-red-300 via-red-200 to-transparent">
            <div className="bg-white rounded-3xl px-12 py-10 shadow-xl">
              <p className="text-lg text-gray-700">
                Your growth journey starts here.
              </p>
              <p className="mt-2 text-2xl font-extrabold text-gray-900">
                Your success is our success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
