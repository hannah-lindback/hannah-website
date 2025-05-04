"use client";
import WelcomeBox from "./components/WelcomeBox";
import Projects from "./components/Projects";
import About from "./components/About";
import ParallaxComponent from "./components/ParallaxComponent";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-rose-600 via-rose-400 to-pink-300  flex flex-col items-center text-center lg:justify-center">
      <ParallaxComponent offset={300} sectionId="home">
        <div className=" flex flex-col justify-center items-center">
          <WelcomeBox />
          
        </div>
      </ParallaxComponent>


      {/* Static Project Section */}
     <div className="flex flex-row">
      <div className="w-1/4  justify-center items-center"></div>
      <div>
      <div id="projects" className="text-center py-30 bg-rose-300 rounded-t-xl  ">
        <h1 className="text-6xl/20 line-height-0 text-rose-600 font-caveat ">Projects</h1>
        <Projects />
      </div>
      {/* About Section */}
      <div id="resume" className="text-center py-30  bg-[#FFDEDE] items-center bg-rose-300 ">
      <h1 className="text-6xl/20 line-height-0 text-rose-600 font-caveat ">Projects</h1>
        <About />

    </div>
      {/* Contact Section */}
      <div id="contact" className="text-center py-30  bg-rose-300 items-center  h-screen">
      <h1 className="text-6xl/20 line-height-0 text-rose-600 font-caveat ">Contact</h1>

        <Contact />
      </div>
      </div>
      <div className="w-1/4 justify-center items-center"></div>
      </div>
      {/* Footer */}
      

      
    </div>
  );
}
