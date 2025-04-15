"use client";
import WelcomeBox from "./components/WelcomeBox";

export default function Home() {
  return (
    <div className="bg-[url('/img3.jpg')] min-h-[500px] bg-fixed bg-center bg-no-repeat bg-cover h-screen font-mono">
      <div className="h-screen flex flex-col justify-center items-center  bg-fixed bg-center bg-no-repeat bg-cover ">
        <span className="text-4xl text-center text-white font-bold mt-10 bg-[#FEF5ED] opacity-90 p-4 rounded-lg shadow-lg hover:opacity-100 transition-opacity duration-300">
          <h1 className="p-5 text-[#99A799] font-mono">
            Hej! Hello! My name is Hannah. <br />
            I'm a junior developer. <br />
            Welcome to my portfolio!
          </h1>

          <h2 className="flex flex-col items-center text-[#99A799] text-2xl font-bold opacity-100 z-10">
            I'm Hannah, a passionate software engineer with a love for coding
            and technology.
            <div className="flex justify-center items-center mt-4 gap-4">
              <br />
              <button className="bg-[#99A799] text-white px-4 py-2 rounded mt-4 hover:scale-105 transition-transform duration-300">
                <a href="#projects">View My Projects</a>
              </button>
              <button className="bg-[#99A799] text-white px-4 py-2 rounded mt-4 hover:scale-105 transition-transform duration-300">
                <a href="#contact">View my resume</a>
              </button>
              <button className="bg-[#99A799] text-white px-4 py-2 rounded mt-4 hover:scale-105 transition-transform duration-300">
                <a href="#contact">Contact Me</a>
              </button>
            </div>
          </h2>
        </span>
      </div>

      <div className="flex justify-center p-6 h-400 bg-[#FEF5ED]">
        <h1 className="text-4xl text-[#99A799] font-bold mb-4">Projects</h1>
      </div>

      <div className="h-screen flex flex-col justify-center items-center  bg-fixed bg-center bg-no-repeat bg-cover ">
        <span className="text-4xl text-center text-white font-bold mt-10 bg-[#FEF5ED] opacity-80 p-4 rounded-lg shadow-lg">
          <h1 className="p-5 text-[#99A799]">Here are some of my projects.</h1>
        </span>
      </div>
    </div>
  );
}
