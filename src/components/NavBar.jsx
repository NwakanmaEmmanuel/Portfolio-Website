import { useState, useEffect } from "react";
import { navLinks } from "../data/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-8 h-16 flex items-center justify-between ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <span className="font-bold text-xl text-gray-900 tracking-tight">Emmanuel Nwakanma </span>
      <div className="flex gap-8">
        {navLinks.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            className="text-sm text-gray-500 cursor-pointer hover:text-gray-900 transition-colors font-medium"
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
