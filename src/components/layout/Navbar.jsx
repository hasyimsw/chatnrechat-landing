import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  const navLinks = [
    { name: "Beranda", target: "beranda" },
    { name: "Fitur-fitur", target: "fitur" },
    { name: "Teknologi", target: "teknologi" },
    { name: "FAQ", target: "faq" },
  ];

  // Shadow saat scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.getElementById(link.target),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // Scroll handler
  const handleScrollTo = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }

    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${isScrolled ? "bg-[#f2f5ff] shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-[1024px] mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleScrollTo("beranda")}
          className="cursor-pointer"
        >
          <img src={logo} alt="logo" className="w-8 h-8" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.target;

            return (
              <button
                key={index}
                onClick={() => handleScrollTo(link.target)}
                className={`transition font-medium cursor-pointer
                ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {link.name}
              </button>
            );
          })}
        </nav>

        {/* Desktop Download */}
        <div className="hidden md:block">
          <button
            onClick={() => handleScrollTo("download")}
            className="bg-blue-600 text-white px-8 py-2 rounded-lg text-sm hover:bg-blue-700 transition shadow-md shadow-blue-200"
          >
            Download
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-xl cursor-pointer" onClick={() => setIsOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-64 h-full bg-[#f2f5ff] shadow-lg z-50 p-6"
          >
            {/* Close */}
            <div className="flex justify-end mb-8">
              <button onClick={() => setIsOpen(false)} className="text-xl cursor-pointer">
                <FaTimes />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, index) => {
                const isActive = activeSection === link.target;

                return (
                  <button
                    key={index}
                    onClick={() => handleScrollTo(link.target)}
                    className={`text-left transition font-medium cursor-pointer
                    ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </button>
                );
              })}

              {/* Download */}
              <button
                onClick={() => handleScrollTo("download")}
                className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition shadow-md shadow-blue-200"
              >
                Download
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
