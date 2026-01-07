import { assets } from "../assets/assets";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current.querySelectorAll(".footer-reveal"),
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <footer ref={footerRef} className="relative mt-28 bg-white overflow-hidden">
      {/* ================= RIBBON DIVIDER ================= */}
      <div className="relative h-10">
        <div className="absolute inset-x-0 top-1/2 h-[3px] bg-red-600" />
        <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-red-600 flex items-center justify-center">
          <span className="text-red-600 font-extrabold text-sm">B</span>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* BRAND */}
        <div className="footer-reveal">
          <img src={assets.logo} alt="Burly Logo" className="h-12 mb-4" />
          <p className="font-semibold text-gray-900 text-lg">
            Burly Chem Products
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Manufacturing of Home Care Products
          </p>
          <p className="text-sm font-semibold text-red-600 mt-3 tracking-wide">
            Clean With Confidence
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="footer-reveal">
          <h4 className="font-semibold text-gray-900 mb-4">Products</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Toilet Cleaner</li>
            <li>Dishwash Gel</li>
            <li>Liquid Detergent</li>
            <li>Floor Cleaner</li>
            <li>Glass Cleaner</li>
          </ul>
        </div>

        {/* DISTRIBUTORSHIP */}
        <div className="footer-reveal">
          <h4 className="font-semibold text-gray-900 mb-4">Distributorship</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>Investment Plans</li>
            <li>Marketing Support</li>
            <li>Exclusive Territory</li>
            <li>
              <a
                href="https://forms.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-red-600 font-semibold hover:underline"
              >
                Apply Now →
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="footer-reveal">
          <h4 className="font-semibold text-gray-900 mb-4">Contact</h4>
          <p className="text-sm text-gray-600">Burari, Delhi – 110084</p>
          <p className="text-sm text-gray-600 mt-3">
            📞{" "}
            <a href="tel:7602380891" className="hover:underline">
              7602380891
            </a>
            ,{" "}
            <a href="tel:7631546903" className="hover:underline">
              7631546903
            </a>
          </p>
          <p className="text-sm text-gray-600 mt-3">
            ✉️{" "}
            <a
              href="mailto:burlychemproducts@gmail.com"
              className="hover:underline"
            >
              burlychemproducts@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Burly Chem Products. All rights reserved.
      </div>
    </footer>
  );
}
