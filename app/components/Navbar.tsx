export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 absolute top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-lg font-semibold text-white">
          MintCode
        </span>

        <div className="flex gap-6 text-slate-300">
          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
