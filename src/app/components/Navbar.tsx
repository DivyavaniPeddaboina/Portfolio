"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md">
      <ul className="flex items-center justify-around w-full py-5 text-sm sm:text-base text-white/80 list-none m-0 p-0 px-4 sm:px-8">
        <li>
          <a href="#home" className="hover:text-cyan-300 transition-colors whitespace-nowrap">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-cyan-300 transition-colors whitespace-nowrap">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-cyan-300 transition-colors whitespace-nowrap">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-cyan-300 transition-colors whitespace-nowrap">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-cyan-300 transition-colors whitespace-nowrap">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}