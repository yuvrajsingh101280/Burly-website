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
    name: "Toilet Cleaner",
    variants: [
      {
        label: "250 ml",
        price: "₹42",
        image: assets.Toilet1,
      },
      {
        label: "500 ml",
        price: "₹86",
        image: assets.Toilet1,
      },
      {
        label: "1 Ltr",
        price: "₹149",
        image: assets.Toilet1,
      },
      {
        label: "5 Ltr",
        price: "₹449",
        image: assets.Toilet5,
      },
    ],
  },
  {
    name: "Dishwash Gel",
    variants: [
      {
        label: "250 ml",
        price: "₹49",
        image: assets.Dishwash2,
      },
      {
        label: "500 ml",
        price: "₹88",
        image: assets.Dishwash2,
      },
      {
        label: "5 Ltr",
        price: "₹549",
        image: assets.Dishwash1,
      },
    ],
  },
  {
    name: "Liquid Detergent",
    variants: [
      {
        label: "1 Ltr",
        price: "₹179",
        image: assets.LiquidDetergent1,
      },
      {
        label: "5 Ltr",
        price: "₹749",
        image: assets.LiquidDetergent2,
      },
    ],
  },
  {
    name: "Floor Cleaner",
    variants: [
      {
        label: "500 ml",
        price: "₹119",
        image: assets.FloorCleaner3,
      },
      {
        label: "1 Ltr",
        price: "₹199",
        image: assets.FloorCleaner2,
      },
      {
        label: "5 Ltr",
        price: "₹775",
        image: assets.FloorCleaner1,
      },
    ],
  },
  {
    name: "Glass Cleaner",
    variants: [
      {
        label: "500 ml",
        price: "₹99",
        image: assets.GlassCleaner2,
      },
      {
        label: "5 Ltr",
        price: "₹421",
        image: assets.GlassCleaner,
      },
    ],
  },
  {
    name: "Kitchen Cleaner",
    variants: [
      {
        label: "500 ml",
        price: "₹119",
        image: assets.KitchenCleaner2,
      },
      {
        label: "5 Ltr",
        price: "₹799",
        image: assets.KitchenCleaner1,
      },
    ],
  },
  {
    name: "Liquid Soap",
    variants: [
      {
        label: "5 Ltr",
        price: "₹649",
        image: assets.LiquidSoap,
      },
    ],
  },
  {
    name: "Car Wash Shampoo",
    variants: [
      {
        label: "5 Ltr",
        price: "₹1049",
        image: assets.CarWash,
      },
    ],
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
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-red-200/40 blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-100/40 blur-[140px]" />
      </div>

      {/* BRAND STAMP */}
      <h2 className="absolute top-20 left-1/2 -translate-x-1/2 text-[22vw] font-extrabold text-red-600/5 tracking-tight select-none">
        Burly
      </h2>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-3xl mb-24">
          <span className="text-sm uppercase tracking-[0.3em] text-red-600 font-bold">
            Product Range
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Engineered for <br /> Powerful Cleaning
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Professional-grade formulations trusted by households, retailers,
            and distributors across India.
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="space-y-32">
          {products.map((product, i) => (
            <ProductBlock key={i} product={product} flip={i % 2 !== 0} />
          ))}
        </div>

        {/* ================= CATALOGUE CTA ================= */}
        <div className="mt-40 relative rounded-3xl overflow-hidden">
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-200 via-red-100 to-transparent blur-2xl" />

          <div className="relative bg-white rounded-3xl px-10 py-16 text-center shadow-xl">
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Download Complete Product Catalogue
            </h3>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Get detailed MRPs, pack sizes, and the full Burly product range —
              perfect for distributors, retailers, and bulk buyers.
            </p>

            <a
              href={assets.catalouge}
              download
              className="inline-flex items-center gap-3 mt-8 px-10 py-4 rounded-full bg-red-600 text-white font-bold text-lg shadow-lg hover:bg-red-700 transition"
            >
              📄 Download Catalogue (PDF)
            </a>
          </div>
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
      {/* IMAGE */}
      <div className="relative flex justify-center">
        <div className="absolute inset-0 bg-red-300/20 blur-3xl rounded-full" />

        <Zoom>
          <img
            src={product.variants[active].image}
            alt={product.name}
            className="relative max-h-[420px] w-auto object-contain cursor-zoom-in transition-transform duration-500 hover:scale-105"
          />
        </Zoom>

        {/* PRICE */}
        <div className="absolute bottom-4 right-4 bg-red-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
          {product.variants[active].price}
        </div>
      </div>

      {/* CONTENT */}
      <div className="text-center lg:text-left">
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-5 text-gray-600 max-w-lg mx-auto lg:mx-0">
          Designed for maximum effectiveness with minimal effort. Suitable for
          daily use, bulk supply, and professional cleaning applications.
        </p>

        {/* VARIANTS */}
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
