import Card from "./Card";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";
const Projects = () => {
  return (
    <div className="flex flex-col min-h-screen p-0 gap-8 lg:flex-col ">
      <Card
        img="/horosrope-thumbnail.mp4"
        title="HorosCope"
        date="April 2025"
        description="Astrology app that generates horoscopes based on HoroScope API, NASA API and OpenAI API. Dependent on a proxy server built in Java. Made for a university group project in Jacascript frameworks."
        icons={[
          { src: "/react.svg", alt: "React" },
          { src: "/tailwind.svg", alt: "Tailwind CSS" },
          { src: "/openai.svg", alt: "OpenAI" },
          { src: "/next.svg", alt: "Next.js" },
          { src: "/figma.svg", alt: "Figma" },
          { src: "/java.svg", alt: "Java" },
     
        ]}
        responsibilities={[
          "Developed the frontend using React and Tailwind CSS.",
          "Integrated OpenAI API for horoscope generation.",
          "Designed the UI/UX using Figma.",
        ]}
        images={[
          { src: "/horoscope_scr1.png", alt: "HorosCope Screenshot 1", alt: "HorosCope Screenshot 1" },
          { src: "/horoscope_scr2.png", alt: "HorosCope Screenshot 2" },
          { src: "/horoscope_scr3.png", alt: "HorosCope Screenshot 2" },
          { src: "/horoscope_scr4.png", alt: "HorosCope Screenshot 2" },


        ]}
        link={[
          { src: "https://github.com/vinparwes/da395a-g21-project", alt: "GitHub" },
        ]}
          
        


      />

      <Card
        className="object-fill"
        img="/meep.mp4"
        title="Hobbyfynd Marketplace"
        date="April 2025"
        description="Marketplace for second hand crafting materials. Made for a thesis project autumn 2024. Worked for a client in a
        group of 6 students. The project was built as a middleware for ShareTribe APIs. The project was built in React for frontend and Node.js for backend. Other APIs used were Swish and Postnord."
        icons={[
          { src: "/react.svg", alt: "React" },
          { src: "/node.svg", alt: "Node.js" },
          { src: "/vite.svg", alt: "Vite" },
          { src: "/next.svg", alt: "Next.js" },
          { src: "/figma.svg", alt: "Figma" },
        ]}
        responsibilities={[
          "Project lead and fullstack developer.",
          "Handled frontend structure and design.",
          "Designed the UI/UX using Figma.",
          "Worked closely with API-integration with ShareTribes APIs.",
          "Fullstack debugger."
        ]}
        images={[
          { src: "/hobbyfynd_scr1.png", alt: "Hobbyfynd screenshot 1" },
          { src: "/hobbyfynd_scr2.png", alt: "Hobbyfynd screenshot 2" },
          { src: "/hobbyfynd_scr3.png", alt: "Hobbyfynd screenshot 3" },
          { src: "/hobbyfynd_scr4.png", alt: "Hobbyfynd screenshot 4" },
       
        ]}
      />

      <Card
        img="/TodoApp.mp4"
        title="ToDo App"
        date="April 2025"
        description="Todo app built in React as frontend and Node.js as backend. Tailwind CSS was used for styling and Axios and Express for API calls and communication with the backend."
        icons={[
          { src: "/react.svg", alt: "React" },
          { src: "/tailwind.svg", alt: "Tailwind CSS" },
          { src: "/next.svg", alt: "Next.js" },
          { src: "/node.svg", alt: "Node.js" },
          { src: "/figma.svg", alt: "Figma" },
        ]}
        responsibilities={[
          "Developed the frontend using React and Tailwind CSS.",
          "Integrated Axios for API calls.",
          "Designed the UI/UX using Figma.",
          "Developed the backend using Node.js and Express.",
          "Documented REST API in Swagger.",
        ]}
        link ={[
          { src: "https://todoapplication-production-0169.up.railway.app/", alt: "Todo Application" },
        ]}
      />


    </div>
  );
};

export default Projects;
