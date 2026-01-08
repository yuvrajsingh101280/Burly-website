import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  const links = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Distributorship", href: "#distributor" },
    { name: "Contact", href: "#contact" },
  ];
  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setOpen(false); // closes mobile menu if open
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
        }`}
      >
        {/* Red accent line */}
        <div className="absolute top-0 inset-x-0 h-[3px] bg-red-600" />

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center" onClick={handleLogoClick}>
            <Link to="/">
              {" "}
              <img src={assets.logo} alt="Burly Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-10 text-sm font-semibold text-gray-800">
            {links.map((link) => (
              <a key={link.name} href={link.href} className="relative group">
                {link.name}
                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-red-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* CTA */}
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 inline-flex items-center justify-center rounded-full border-2 border-red-600 px-6 py-2 text-red-600 font-bold hover:bg-red-600 hover:text-white transition"
            >
              Become a Distributor
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-gray-900"
            onClick={() => setOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Panel */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Brand Header */}
              <div className="relative px-6 py-6 border-b">
                <div className="absolute top-0 inset-x-0 h-[4px] bg-red-600" />

                <div className="flex items-center justify-between">
                  <img src={assets.logo} alt="Burly Logo" className="h-9" />
                  <button onClick={() => setOpen(false)}>
                    <X size={26} />
                  </button>
                </div>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-8 py-10 gap-6 text-lg font-semibold text-gray-800">
                {links.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-gray-200 pb-2"
                  >
                    {link.name}
                  </a>
                ))}

                <a
                  href="https://forms.gle/qRfiwEoJybW2D28U9r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex justify-center rounded-full bg-red-600 px-6 py-3 text-white font-bold"
                >
                  Become a Distributor
                </a>
              </nav>

              {/* Footer note */}
              <div className="mt-auto px-8 py-6 text-sm text-gray-500">
                Clean With Confidence
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
