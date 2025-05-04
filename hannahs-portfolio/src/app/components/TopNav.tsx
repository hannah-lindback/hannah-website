"use client";
import { useState } from "react";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex flex-col sticky bg-gradient-to-r from-rose-600 via-rose-400 to-pink-300 top-0 z-50  shadow-white text-rose-500 font-mono underline items-center justify-between p-2 sm:flex-row sm:gap-12 sm:justify-center sm:p-6">
        <div className="flex items-center justify-between w-full sm:w-auto ">
          <Typography variant="h2">
            <a href="#home" className="text-white font-caveat hover:bg-rose-500">
              HL
            </a>
          </Typography>
          <button
            className="sm:hidden text-white font-caveat hover:bg-rose-500"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } flex-col gap-6 items-center sm:flex sm:flex-row sm:gap-12`}
        >
          <Typography variant="h2">
            <a href="#projects" className="text-white font-caveat hover:bg-rose-500">
              Projects
            </a>
          </Typography>
          <Typography variant="h2">
            <a href="#resume" className="text-white font-caveat hover:bg-rose-500">
              Resume
            </a>
          </Typography>
          <Typography variant="h2">
            <a href="#contact" className="text-white font-caveat hover:bg-rose-500">
              Contact
            </a>
          </Typography>
        </div>
      </nav>
    </>
  );
};

export default Header;