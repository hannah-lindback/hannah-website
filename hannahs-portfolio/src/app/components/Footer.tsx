import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-rose-600 via-rose-400 w-full to-pink-300  justify-center items-center gap-7 bg-[#FFDEDE] p-6 ">
                <div className=" p-4 flex gap-5 items-center justify-center">
                <p className="text-lg text-white">
                     Hannah Lindbäck 2025.
                </p>
                <div>
                <Link href="github.com/hannahlindback" className="text-lg text-white hover:text-[#99A799]">
                    <GitHubIcon fontSize="large" />
                </Link>
                <Link href="https://www.linkedin.com/in/hannah-lindback/" className="text-lg text-white hover:text-[#99A799]">
                    <LinkedInIcon fontSize="large" />
                </Link>
                </div>


                </div>
        </footer>
    );
}
