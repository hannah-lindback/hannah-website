import { EmailRounded } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 p-6 bg-[#FFDEDE] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-black font-caveat">Get in Touch</h2>
      <p className="text-lg text-black font-mono text-center">
        I would love to hear from you! Feel free to reach out via email or connect with me on LinkedIn.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        {/* Email Section */}
        <a
          href="mailto:hannahlindback@gmail.com"
          className="flex items-center gap-2 text-lg text-[#FF6B6B] hover:text-[#99A799] font-mono"
        >
          <EmailRounded className="text-[#FF6B6B] hover:text-[#99A799]" />
          Email Me
        </a>

        {/* LinkedIn Section */}
        <a
          href="https://www.linkedin.com/in/hannah-lindback/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-lg text-[#FF6B6B] hover:text-[#99A799] font-mono"
        >
          <LinkedInIcon className="text-[#FF6B6B] hover:text-[#99A799]" />
          LinkedIn
        </a>
      </div>
    </div>
  );
}