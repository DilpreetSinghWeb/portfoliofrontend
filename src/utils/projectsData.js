
import portfolio from "../images/portfolio.png";
import speed_wheels from "../images/speedWheels.png";
import ramen_shop from "../images/ramenShop.png";
import blogoSphere from "../images/blogosphere.png";
import doctor from "../images/doctor.png";
import blogWebsite from "../images/blogWebsite.png";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiMongodb, DiNodejs } from "react-icons/di";
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiEjs, SiExpress, SiStripe } from "react-icons/si";
export const projectsData = [
    {
      title: "My Portfolio",
      description:
        "A portfolio showcasing my web development projects and personal info, combining frontend and backend skills.",
      image: portfolio,
      tech: [<FaReact size={20} />, <FaNodeJs size={20} />, <DiMongodb size={20} />],
      link: "https://dilpreetsinghportfolio.onrender.com",
      type: "Full Stack Project",
    },
    {
      title: "Speed Wheels",
      description:
        "'Speed Wheels' is a React-based car collection website with a unique interface for an enhanced browsing experience.",
      image: speed_wheels,
      tech: [<FaReact size={20} />, <TiCss3 size={20} />],
      link: "https://dilpreetsinghweb.github.io/SpeedWheels/",
      type: "Frontend Project",
    },
    {
      title: "Ramen Shop",
      description:
        "'The Ramen Shop' website features dishes, services, and interactive maps, built with HTML, CSS, and JS.",
      image: ramen_shop,
      tech: [<TiHtml5 size={20} />, <TiCss3 size={20} />, <RiJavascriptFill size={20} />],
      link: "https://dilpreetsinghweb.github.io/TheRamenShop/",
      type: "Frontend Project",
    },
    {
      title: "BlogoSphere",
      description:
        "'Blogosphere' integrates MongoDB for user data, featuring secure login/registration and a user-friendly blog interface.",
      image: blogoSphere,
      tech: [<RiTailwindCssFill size={20} />, <SiExpress size={20} />, <DiMongodb size={20} />, <SiEjs size={20} />],
      link: "https://blogosphere-uiag.onrender.com",
      type: "Full Stack Project",
    },
    {
      title: "Health Care",
      description:
        "Health Care is a full-stack system for patients to book doctor appointments with secure login and a user-friendly interface.",
      image: doctor,
      tech: [<RiTailwindCssFill size={20} />, <SiExpress size={20} />, <DiMongodb size={20} />, <SiStripe size={20} />],
      link: "https://holistichealthcare.netlify.app",
      type: "Full Stack Project",
    },
    {
      title: "Blog Website",
      description:
        "A secure blog platform for creating and sharing posts, with user authentication powered by MongoDB.",
      image: blogWebsite,
      tech: [<RiTailwindCssFill size={20} />, <SiExpress size={20} />, <DiMongodb size={20} />, <DiNodejs size={20} />],
      link: "https://quickblogqb.netlify.app",
      type: "Full Stack Project",
    },
  ];