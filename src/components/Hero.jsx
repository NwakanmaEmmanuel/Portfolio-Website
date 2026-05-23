import { useState, useEffect } from "react";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const full = "Frontend Developer";

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setTyped(full.slice(0, i + 1));
      i++;
      if (i === full.length) clearInterval(t);
    }, 70);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-gray-50 to-white"
    >
      {/* Avatar */}
      <div className="w-24 h-24 rounded-full bg-gray-900 flex items-center justify-center text-4xl mb-8 shadow-lg">
        👨‍💻
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
        Hi, I'm a{" "}
        <span className="text-gray-400">
          {typed}
          <span className="animate-pulse">|</span>
        </span>
      </h1>

      <p className="text-gray-500 text-lg max-w-md mb-10">
        I build beautiful, performant web applications that users love.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-10">
        <button
          onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors"
        >
          View My Work
        </button>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="border border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors"
        >
          Get In Touch
        </button>
      </div>

      {/* Social icons */}
      <div className="flex gap-3">
        {[
          { label: "GitHub", icon: "⌥" },
          { label: "LinkedIn", icon: "in" },
          { label: "Email", icon: "✉" },
        ].map(({ label, icon }) => (
          <button
            key={label}
            title={label}
            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm text-gray-500 hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            {icon}
          </button>
        ))}
      </div>
    </section>
  );
}
