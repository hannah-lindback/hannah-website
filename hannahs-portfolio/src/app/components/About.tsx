import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stepper from "./Stepper";
const About = () => {
  return (
    <div className="flex  flex-col  rounded-lg gap-4 p-4 font-caveat text-">
      <div className="flex flex-col gap-4 md:flex-row justify-center">
        <div className="flex flex-col gap-4 bg-rose-400 text-left rounded-lg p-4 justify-center items-center">
          <img
            src="/hannah-img.jpg"
            alt="Hannah Lindbäck"
            className="rounded-full w-50 h-50 object-cover"
          />
          <div className="flex flex-col justify-center items-center text-center">
            <div className="flex flex-col gap-2 bg-rose-400 rounded-lg p-4 font-caveat text-white">
              <h2 className="text-4xl  font-caveat">Programming Languages</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">JavaScript</p>
                <p className=" ">TypeScript</p>
                <p className="">Python</p>
                <p className=" ">SQL</p>
              </div>
              <h2 className="text-4xl ">Frontend Development</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">React</p>
                <p className="">Vue</p>
                <p className="">HTML5</p>
                <p className="">CSS3</p>
              </div>
              <h2 className="text-4xl ">Backend Development</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">Node</p>
                <p className="">Express</p>
                <p className="">Flask</p>
                <p className="">MongoDB</p>
                <p className="">PostgreSQL</p>
                <p className="">MySQL</p>
              </div>
              <h2 className="text-4xl ">Tools, Cloud & Platforms</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">Git</p>
                <p className="">GitHub</p>
                <p className="">Vercel</p>
                <p className="">Figma</p>
                <p className="">Postman</p>
                <p className="">Heroku</p>
                <p className="">Railway</p>
              </div>

              <h2 className="text-4xl ">Development Methodologies</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">Agile methods</p>
                <p className="">Scrum</p>
                <p className="">Kanban</p>
              </div>
              <h2 className="text-4xl ">Languages</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">Swedish</p>
                <p className="">English</p>
                <p className="">Spanish</p>
              </div>
              <h2 className="text-4xl ">Other</h2>
              <div className="flex flex-col gap-2 bg-rose-500 rounded-lg text-2xl">
                <p className="">Driver's license (B)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-white md:w-1/2">
          <div className="flex flex-col gap-4 bg-rose-400 text-left rounded-lg p-4">
            <h2 className="text-2xl  underline">Hannah Lindbäck</h2>
            <p>
              <EmailIcon fontSize="large" /> hannahlindback@gmail.com
            </p>
            <p>
              <GitHubIcon fontSize="large" /> github.com/hannahlindback
            </p>
            <p>
              <LinkedInIcon fontSize="large" /> linkedin.com/in/hannah-lindback
            </p>
          </div>
          <div className="flex flex-col gap-4 bg-rose-400 text-left rounded-lg p-4">
            <h2 className="text-3xl  underline">Work Experience</h2>
            <div className="bg-rose-500 rounded-lg p-4 text-2xl">
              <p className="">
                IT and Helpdesk-support | June 2021 - present
              </p>
              <p className="">Digimentor | aug. 2023 - present </p>
              <p className="">Operator | jun. 2024 - aug.2024 </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 bg-rose-500 text-left rounded-lg p-4 text-2xl">
            <h2 className="  underline">About Me</h2>

            <p>
              Hey there! I am a 23 year old almost graduated computer science
              student who is currently studying the Information Architect
              program at Malmö University. I am passionate about web development
              and have a strong interest in creating user-friendly and visually
              appealing applications. I have experience with both frontend and
              backend development, and I enjoy working with various technologies
              to build innovative solutions. In my free time, I love to explore
              new programming languages and frameworks, as well as contribute to
              open-source projects. I am always eager to learn and grow as a
              developer, and I look forward to taking on new challenges in the
              tech industry.
            </p>
            <p>
              In my free time, I enjoy playing video games, reading, and
              spending time with my family and friends. I also love to go for
              the occasional run outside! I am always looking for new adventures
              and opportunities to learn and grow.
            </p>
            <p>
              Feel free to reach out if you have any questions or if you'd like
              to connect!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
