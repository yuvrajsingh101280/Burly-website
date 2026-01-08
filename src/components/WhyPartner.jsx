import { useRef } from "react";
import { motion } from "framer-motion";
import { TrendingUp, MapPinned, Headset, Boxes } from "lucide-react";

export default function WhyPartner() {
  const sectionRef = useRef(null);

  /* FADE UP ONLY (SAFE & SMOOTH) */
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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
      <h2 className="absolute top-10 md:top-12 left-1/2 -translate-x-1/2 text-[28vw] md:text-[22vw] font-extrabold text-red-600/5 tracking-tight select-none pointer-events-none">
        PARTNER
      </h2>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* LEFT – VISUAL */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative flex justify-center"
        >
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl">
            <img
              src="https://res.cloudinary.com/dwiaowohz/image/upload/v1767840227/photo-1586528116311-ad8dd3c8310d_r5tivd.jpg"
              alt="Burly Distribution Network"
              className="w-full max-w-[480px] md:max-w-[520px] h-[360px] md:h-[420px] object-cover"
            />
          </div>

          <div className="absolute -bottom-10 -right-6 md:-right-10 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src="https://res.cloudinary.com/dwiaowohz/image/upload/v1767840336/photo-1600880292089-90a7e086ee0c_pzioz4.jpg"
              alt="Sales & Distributor Support"
              className="w-48 md:w-56 h-32 md:h-40 object-cover"
            />
          </div>

          <div className="absolute -top-6 -left-6 w-24 md:w-28 h-24 md:h-28 rounded-full bg-red-600/10" />
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-8 md:space-y-10"
        >
          <div>
            <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              A Solid Partnership Built for
              <br />
              Long-Term Growth
            </h2>

            <p className="mt-5 md:mt-6 text-gray-600 leading-relaxed">
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

          {/* BENEFITS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                icon: TrendingUp,
                title: "Best Profit Margins",
                desc: "We offer competitive and attractive margins that allow distributors to earn strong profits.",
              },
              {
                icon: MapPinned,
                title: "Exclusive Territory Rights",
                desc: "Distributors receive sole rights within their selected geographical area.",
              },
              {
                icon: Headset,
                title: "100% Sales & Marketing Support",
                desc: "Complete support including training and marketing assistance.",
              },
              {
                icon: Boxes,
                title: "High Demand Portfolio",
                desc: "Daily-use products ensuring consistent market demand.",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex gap-4 items-start bg-white border border-gray-200 rounded-2xl p-5 md:p-6 hover:shadow-xl transition"
                >
                  <div className="w-11 md:w-12 h-11 md:h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <Icon size={22} className="text-red-600" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* TRUST BOX */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative max-w-5xl mx-auto px-6 mt-20 md:mt-28"
      >
        <div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-red-300 via-red-200 to-transparent">
          <div className="bg-white rounded-3xl px-8 md:px-10 py-10 md:py-12 text-center shadow-xl">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              We are looking for motivated and hardworking partners who are
              ready for long-term investment and growth.
            </p>

            <p className="mt-4 text-lg md:text-xl font-extrabold text-gray-900">
              Your success is our success.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
