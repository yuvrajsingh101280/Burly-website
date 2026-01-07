"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(leftRef.current.children, {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(formRef.current, {
        opacity: 0,
        y: 80,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* SOFT ACCENT GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-red-100/40 blur-[160px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-50 blur-[140px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* LEFT – INFO */}
        <div ref={leftRef} className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Get in Touch with Burly
          </h2>

          <p className="text-gray-600 leading-relaxed max-w-lg">
            Whether you’re interested in our products or want to become a
            distributor, our team is here to assist you.
          </p>

          <div className="space-y-3 text-gray-700 text-sm">
            <p>
              <span className="font-semibold text-gray-900">Company:</span>{" "}
              Burly Chem Products
            </p>
            <p>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              burlychemproducts@gmail.com
            </p>
            <p>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              7602380891, 7631546903
            </p>
            <p>
              <span className="font-semibold text-gray-900">Address:</span> KH
              No. 74/25, Gali No. 26, A Block, Kaushik Enclave, Burari, Delhi –
              110084
            </p>
          </div>
        </div>

        {/* RIGHT – FORM */}
        <div
          ref={formRef}
          className="relative rounded-[32px] bg-white p-10 shadow-2xl border border-gray-200"
        >
          {/* FORM GLOW BORDER */}
          <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-red-200/40 to-transparent blur-xl" />

          <form
            action="https://formsubmit.co/burlychemproducts@gmail.com"
            method="POST"
            className="space-y-5"
          >
            {/* FormSubmit settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_subject"
              value="New Inquiry from Burly Website"
            />

            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-100 transition"
            />

            <button
              type="submit"
              className="w-full bg-red-600 text-white font-extrabold py-3 rounded-full hover:bg-red-700 transition shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
