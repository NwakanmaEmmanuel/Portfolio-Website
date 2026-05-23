import { contact } from "../data/data";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 px-8 py-6 flex justify-between items-center bg-gray-50">
      <span className="text-sm text-gray-400">© 2026 Frontend Developer Portfolio</span>
      <div className="flex gap-6">
        <a href={contact.github} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-medium">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-medium">LinkedIn</a>
        <a href={`mailto:${contact.email}`} className="text-sm text-gray-400 hover:text-gray-900 transition-colors font-medium">Email</a>
      </div>
    </footer>
  );
}
