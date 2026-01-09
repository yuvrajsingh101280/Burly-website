"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { assets } from "../assets/assets";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "Burly Toilet Cleaner",
    description:
      "Powerful toilet cleaning formula that removes tough stains, kills germs, and eliminates odor. Available in 250 ml, 500 ml, 1 Ltr, and 5 Ltr packs for home and commercial use.",
    variants: [
      { label: "250 ml", price: "₹42", image: assets.Toilet250 },
      { label: "500 ml", price: "₹86", image: assets.Toilet1 },
      { label: "1 Ltr", price: "₹149", image: assets.Toilet1 },
      { label: "5 Ltr", price: "₹449", image: assets.Toilet5 },
    ],
  },
  {
    name: "Burly Dishwash Gel",
    description:
      "Highly effective dishwashing gel that cuts grease instantly while being gentle on hands. Available in 250 ml, 500 ml, and 5 Ltr variants for daily kitchen cleaning.",
    variants: [
      { label: "250 ml", price: "₹49", image: assets.Dishwash2 },
      { label: "500 ml", price: "₹88", image: assets.Dishwash2 },
      { label: "5 Ltr", price: "₹549", image: assets.Dishwash1 },
    ],
  },
  {
    name: "Burly Liquid Detergent",
    description:
      "Advanced liquid detergent designed for deep fabric cleaning with long-lasting freshness. Suitable for bucket wash and machine wash in 1 Ltr and 5 Ltr packs.",
    variants: [
      { label: "1 Ltr", price: "₹179", image: assets.LiquidDetergent1 },
      { label: "5 Ltr", price: "₹749", image: assets.LiquidDetergent2 },
    ],
  },
  {
    name: "Burly Floor Cleaner",
    description:
      "Multi-surface floor cleaner that removes dirt, stains, and bacteria while leaving a pleasant fragrance. Available in 500 ml, 1 Ltr, and 5 Ltr packs.",
    variants: [
      { label: "500 ml", price: "₹119", image: assets.FloorCleaner3 },
      { label: "1 Ltr", price: "₹199", image: assets.FloorCleaner2 },
      { label: "5 Ltr", price: "₹775", image: assets.FloorCleaner1 },
    ],
  },
  {
    name: "Burly Glass Cleaner",
    description:
      "Fast-drying glass cleaner that delivers crystal-clear shine without streaks. Ideal for mirrors, windows, and glass surfaces in 500 ml and 5 Ltr sizes.",
    variants: [
      { label: "500 ml", price: "₹99", image: assets.GlassCleaner2 },
      { label: "5 Ltr", price: "₹421", image: assets.GlassCleaner },
    ],
  },
  {
    name: "Burly Kitchen Cleaner",
    description:
      "Heavy-duty kitchen cleaner formulated to remove grease, oil, and tough stains from slabs, chimneys, and tiles. Available in 500 ml and 5 Ltr packs.",
    variants: [
      { label: "500 ml", price: "₹119", image: assets.KitchenCleaner2 },
      { label: "5 Ltr", price: "₹799", image: assets.KitchenCleaner1 },
    ],
  },
  {
    name: "Burly Liquid Soap",
    description:
      "Gentle yet effective liquid soap that cleans hands thoroughly while maintaining skin softness. Supplied in an economical 5 Ltr pack for bulk usage.",
    variants: [{ label: "5 Ltr", price: "₹649", image: assets.LiquidSoap }],
  },
  {
    name: "Burly Car Wash Shampoo",
    description:
      "Premium car wash shampoo that removes dirt and grime while protecting vehicle paint and shine. Available in a 5 Ltr pack for professional and bulk use.",
    variants: [{ label: "5 Ltr", price: "₹1049", image: assets.CarWash }],
  },
];

/* ================= MAIN SECTION ================= */

export default function Products() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll(".product-block"),
      { opacity: 0, y: 120 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.25,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="relative py-32 overflow-hidden bg-[#fff7f7]"
    >
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="space-y-32">
          {products.map((product, i) => (
            <ProductBlock key={i} product={product} flip={i % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= PRODUCT BLOCK ================= */

function ProductBlock({ product, flip }) {
  const [active, setActive] = useState(0);

  return (
    <div
      className={`product-block grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
        flip ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative flex justify-center">
        <Zoom>
          <img
            src={product.variants[active].image}
            alt={product.name}
            className="relative max-h-[420px] w-auto object-contain cursor-zoom-in transition-transform duration-500 hover:scale-105"
          />
        </Zoom>

        <div className="absolute bottom-4 md:bottom-6 md:right-20 right-1 bg-red-600 text-white px-5 py-2 rounded-full text-sm md:text-xl font-bold shadow-lg">
          {product.variants[active].price}
        </div>
      </div>

      <div className="text-center lg:text-left">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-5 text-gray-600 max-w-lg mx-auto lg:mx-0">
          {product.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
          {product.variants.map((variant, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === i
                  ? "bg-red-600 text-white shadow-md scale-105"
                  : "bg-white border border-gray-300 text-gray-700 hover:border-red-500"
              }`}
            >
              {variant.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
