import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Button from "../ui/Button";  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = ["Home", "About", "Services", "Gallery", "Contact"];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full bg-white px-6 py-4 flex items-center justify-between z-50 sticky top-0">

      {/* Logo */}
      <Link to="/" className="text-[24px] font-playfair italic text-[#1C1917] font-semibold cursor-pointer">
        Honeycombs
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <li key={item} className="relative group">
            <NavLink
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className={({ isActive }) =>
                `text-[16px] font-medium transition ${
                  isActive ? "text-[#B45309]" : "text-[#57534E] hover:text-[#B45309]"
                }`
              }
            >
              {item}
            </NavLink>

            {/* Hover underline */}
            <span className="absolute left-0 -bottom-1 h-0.5 bg-[#F59E0B] w-0 group-hover:w-full transition-all duration-300"></span>
          </li>
        ))}
      </ul>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* Desktop CTA */}
        <Button variant="primary" className="hidden md:block" onClick={() => navigate("/contact")}>
          BOOK NOW
        </Button>

        {/* Hamburger */}
        <button className="md:hidden cursor-pointer" onClick={() => setIsOpen(true)}>
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[75%] max-w-75 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 🔥 Top Bar (Logo + Close) */}
        <div className="flex items-center justify-between p-4 border-b border-[#F3F4F6]">
          <Link to="/" className="text-lg font-playfair italic text-[#1C1917] font-semibold cursor-pointer" onClick={() => setIsOpen(false)}>
            Honeycombs
          </Link>

          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>

        {/* Links */}
        <ul className="flex flex-col gap-6 px-6 mt-8">
          {navItems.map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-medium px-2 py-2 rounded transition-colors duration-200 ${
                    isActive
                      ? "text-[#B45309] bg-[#F7F1E5]"
                      : "text-gray-700 active:bg-gray-100 focus:bg-gray-100"
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile CTA */}
        <div className="px-6 mt-8">
          <Button variant="primary" className="w-full" onClick={() => {
            setIsOpen(false);
            navigate("/contact");
          }}>

            BOOK NOW
          </Button>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;