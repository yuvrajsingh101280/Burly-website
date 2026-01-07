"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CheckCircle } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    title: "Starter Plan",
    price: "₹49,000",
    features: [
      "Selected products included",
      "GST included",
      "Distributor pays transportation",
      "No salesperson provided",
      "Flex board & posters support",
      "Social media marketing support",
      "Agreement within 90 days",
    ],
  },
  {
    title: "Growth Plan",
    price: "₹99,000",
    highlight: true,
    badge: "Most Preferred",
    features: [
      "5 cartons of all products (90–100 cartons approx.)",
      "GST included",
      "Distributor pays transportation",
      "Dedicated salesperson assigned",
      "Light board & posters",
      "Social media marketing support",
      "Official distributorship agreement",
    ],
  },
  {
    title: "Premium Plan",
    price: "₹1,99,000",
    features: [
      "10 cartons of all products (180–200 cartons approx.)",
      "GST included",
      "Company pays transportation",
      "Dedicated salesperson assigned",
      "Light board & posters",
      "Social media marketing support",
      "10% special discount",
      "Official distributorship agreement",
    ],
  },
];

export default function DistributorInvestment() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".plan-card"),
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#fff7f7]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold tracking-widest text-red-600 uppercase">
            Distributorship
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-gray-900">
            Distributor Investment Plans
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that suits your business capacity and growth goals.
            All plans are designed to ensure long-term profitability.
          </p>
        </div>

        {/* PLANS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`plan-card rounded-3xl p-8 bg-white border shadow-lg transition-all ${
                plan.highlight
                  ? "border-red-600 scale-105 shadow-2xl"
                  : "border-gray-200 hover:shadow-xl"
              }`}
            >
              {/* BADGE */}
              {plan.badge && (
                <div className="mb-4 inline-block bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-extrabold text-gray-900">
                {plan.title}
              </h3>

              <p className="mt-3 text-4xl font-extrabold text-red-600">
                {plan.price}
              </p>

              <div className="mt-6 space-y-3">
                {plan.features.map((f, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <CheckCircle size={18} className="text-green-600 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className={`block text-center rounded-full px-6 py-3 font-bold transition ${
                    plan.highlight
                      ? "bg-red-600 text-white hover:bg-red-700"
                      : "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                  }`}
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* TRUST BOX */}
        <div className="mt-20 flex justify-center">
          <div className="bg-white rounded-3xl px-12 py-10 shadow-xl text-center max-w-3xl">
            <p className="text-lg text-gray-700">
              Transparent investment. Structured support.
            </p>
            <p className="mt-2 text-2xl font-extrabold text-gray-900">
              Built for distributors who want long-term growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
