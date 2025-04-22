
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-end items-center">
          <ul className="flex space-x-6 text-sm font-light">
            <li>
              <a href="#about" className="text-white hover:text-gold transition-colors">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white hover:text-gold transition-colors">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gold transition-colors">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
