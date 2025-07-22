import { useState, useEffect } from "react";

const sections = ["home", "about", "project", "education", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

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
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <ul className="flex gap-6 px-6 py-2 bg-black border border-purple-600 rounded-full">
        {sections.map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={`capitalize px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                active === item
                  ? "px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full hover:opacity-90 transition-all"
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
