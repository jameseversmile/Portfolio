import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-[1028px] mx-auto  py-1 px-4 md:px-20 text-1xl shadow-[0_2px_1px_rgba(0,0,0,0.1)]">
      <header className="flex justify-between items-center">
        <nav className="flex items-center gap-4">
          <Link className="flex items-center gap-4" to="/about">
            <img src="/myimg.png" alt="Logo" className="w-12 h-12" />
            <h3>James Idris</h3>
          </Link>
        </nav>

        {/* Toggle 4 Small Screens */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* desktop menu */}
        <nav className="hidden md:flex items-center gap-4">
          <Link to="/home"><h3 className="hover:text-blue-900">Home</h3></Link>
          <Link to="/about"><h3 className="hover:text-blue-900">About</h3></Link>
          <Link to="/projects"><h3 className="hover:text-blue-900">Projects</h3></Link>
          <Link to="/contact.me"><h3 className="hover:text-blue-900">Contact</h3></Link>
        </nav>
      </header>

      {/* mobile Menu */}
      {isOpen && (
        <div className="flex flex-col gap-3 mt-4 md:hidden">
          <Link to="/home" onClick={() => setIsOpen(false)}><h3 className="hover:text-blue-900">Home</h3></Link>
          <Link to="/about" onClick={() => setIsOpen(false)}><h3 className="hover:text-blue-900">About</h3></Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}><h3 className="hover:text-blue-900">Projects</h3></Link>
          <Link to="/contact.me" onClick={() => setIsOpen(false)}><h3 className="hover:text-blue-900">Contact</h3></Link>
        </div>
      )}
    </div>
  );
}

export default Header;
