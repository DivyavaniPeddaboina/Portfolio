"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-4xl mx-auto px-4 sm :px-6">
        <ul className="flex items-center justify-center gap-4 sm:gap-10 py-4 text-sm sm:text-base text-white/80">
          <li>
            <a href="#home" className="hover:text-cyan-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}