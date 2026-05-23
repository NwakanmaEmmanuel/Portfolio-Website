import { experience } from "../data/data";

const chips = ["⟨/⟩ Clean Code", "📱 Responsive", "⚡ Performance", "📐 Scalable"];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-16 tracking-tight">About Me</h2>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left — bio */}
        <div>
          <p className="text-gray-500 text-base leading-relaxed mb-5">
            I'm a passionate frontend developer currently studying Applied Mathematics at the
            University of Lagos. I specialize in building scalable, responsive web applications
            using React and modern JavaScript.
          </p>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            My approach combines clean code, attention to detail, and a deep understanding of
            user experience to deliver products that not only look great but perform exceptionally.
          </p>
          <div className="flex flex-wrap gap-3">
            {chips.map((c) => (
              <span
                key={c}
                className="bg-white border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-600 font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Right — experience */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-6">Experience</h3>
          <div className="flex flex-col gap-6">
            {experience.map((e, i) => (
              <div key={i} className="border-l-2 border-gray-200 pl-5">
                <p className="font-semibold text-gray-900 text-sm">{e.role}</p>
                <p className="text-xs text-indigo-600 font-medium mt-0.5">{e.org}</p>
                <p className="text-xs text-gray-400 mt-0.5 mb-2">{e.dates}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{e.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
