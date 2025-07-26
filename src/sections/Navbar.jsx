import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "project", "education", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90%] sm:max-w-fit">
      {/* Mobile Menu Toggle */}
      <div className="sm:hidden flex justify-end">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-black border border-purple-600 text-white p-2 rounded-full focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Links */}
      <ul
        className={`${
          isOpen ? "flex" : "hidden"
        } sm:flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-2 sm:mt-0 px-4 sm:px-6 py-2 bg-black border border-purple-600 rounded-2xl sm:rounded-full transition-all duration-300`}
      >
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              onClick={() => setIsOpen(false)} // Close menu on link click (mobile)
              className={`capitalize px-4 py-2 rounded-full font-medium text-sm sm:text-base transition-all duration-300 ${
                active === item
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:opacity-90"
                  : "text-white hover:text-purple-300"
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
