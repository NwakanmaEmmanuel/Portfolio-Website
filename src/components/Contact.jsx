import { contact } from "../data/data";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-white text-center">
      <div className="max-w-lg mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Let's Build Something Amazing
        </h2>
        <p className="text-gray-500 text-base leading-relaxed mb-10">
          I'm currently available for freelance work and full-time opportunities.
          Let's discuss how we can work together!
        </p>
        <div className="flex gap-4 justify-center">
          <a href={`mailto:${contact.email}`}>
            <button className="bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors flex items-center gap-2">
              ✉ Send Email
            </button>
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">
            <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-900 hover:text-white transition-colors flex items-center gap-2">
              in LinkedIn Profile
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
