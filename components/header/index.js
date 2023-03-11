import Link from "next/link";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link legacyBehavior href="/">
          <a className="text-xl font-bold">Artificial intelligence</a>
        </Link>
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Menu Button"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M18.293 5.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-2 2a1 1 0 01-1.414-1.414L18.586 9H3a1 1 0 010-2h15.586l-1.293-1.293a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
            </svg>
          )}
        </button>
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:block md:flex md:items-center md:w-auto`}
        >
          <ul className="text-lg md:flex-grow md:flex md:justify-end md:space-x-4">
            <li>
              <Link legacyBehavior href="/">
                <a className="block hover:text-gray-300">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/history">
                <a className="block hover:text-gray-300">History</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/applications">
                <a className="block hover:text-gray-300">Applications</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/challenges">
                <a className="block hover:text-gray-300">Challenges</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

