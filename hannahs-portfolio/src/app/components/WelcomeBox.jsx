import { Parallax } from "react-parallax";
import React from "react";
import { Button } from "@mui/material";
import { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedTextWord from "./AnimatedTextWord";
import TopNav from "./TopNav";
import { Typography } from "@mui/material";
import TypeWriter from "./TypeWriter";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";


const WelcomeBox = () => (
  <div className="items-center justify-center items-center min-h-screen p-0 lg:flex-col ">


  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 3.5 }} className="relative flex flex-col items-center justify-center mt-20 lg:mt-0">
      <TypeWriter text="Hej! Hello!" className="lg:absolute top-50" />
      <div className="flex rounded-lg p-5 flex-col items-center justify-center mt-4 lg:mt-0 bg-rose-600 sm:hidden md:hidden lg:hidden w-full sm:w-3/4 lg:w-full">
        <TypeWriter text="My Name is Hannah." className="text-5xl font-caveat" />
        <TypeWriter text="I Am a Frontend Developer." className="text-5xl font-caveat" />
        <AnimatedTextWord text="✨💻🎨" className="text-5xl font-caveat" />
        <img src="/hannah-img.jpg" alt="Hannah" className="rounded-full mt-4 w-2/4 lg:w-full" />
      </div>
      <img
        src="/skb.svg"
        alt="Hannah Mobile"
        className="hidden sm:block w-full sm:w-3/4 lg:w-full mt-4"
      />
    
    </motion.div>
<div className=" flex flex-col items-center bottom-30 justify-center text-center"> 
  <a href="#projects">
    <motion.button
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}

     className="bg-rose-600 hover:bg-[#FF6B6B] text-white font-mono py-2 px-4 rounded-xl mt-4">
     
      
      <p className="text-5xl font-caveat">Explore Portfolio <KeyboardArrowDownIcon fontSize="xl" className="animate-bounce"></KeyboardArrowDownIcon></p>
    </motion.button>

  </a>
    </div>
  </div>
);

export default WelcomeBox;
