import "./Expertise.css";
import { motion } from "framer-motion"; // Import motion
import { FaNodeJs, FaReact, FaPython } from "react-icons/fa"; // Add Python icon
import { DiMongodb, DiMysql } from "react-icons/di"; // Add MySQL icon
import { TiCss3, TiHtml5 } from "react-icons/ti";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiCanva, SiEjs, SiExpress, SiFigma, SiStripe, SiCplusplus, SiC } from "react-icons/si"; // Add C++ icon
import React from "react";

const Expertise = () => {
    const iconSize = 40; // Define a single size for all icons

    // Updated icons array with names
    const icons = [
        { component: <TiHtml5 />, name: "HTML5" },
        { component: <TiCss3 />, name: "CSS3" },
        { component: <RiJavascriptFill />, name: "JavaScript" },
        { component: <SiEjs />, name: "EJS" },
        { component: <RiTailwindCssFill />, name: "Tailwind CSS" },
        { component: <FaReact />, name: "React" },
        { component: <FaNodeJs />, name: "Node.js" },
        { component: <SiExpress />, name: "Express" },
        { component: <DiMongodb />, name: "MongoDB" },
        { component: <DiMysql />, name: "MySQL" }, // Add MySQL
        { component: <SiStripe />, name: "Stripe" },
        { component: <SiFigma />, name: "Figma" },
        { component: <SiCanva />, name: "Canva" },
        { component: <SiC />, name: "C" },
        { component: <SiCplusplus />, name: "C++" }, // Add C++
        { component: <FaPython />, name: "Python" }, // Add Python
    ];

    return (
        <div className="expertise">
            <div className="expertise_container">
                <h1>
                    <span style={{ color: "#FE3838" }}>Experi</span>
                    <span style={{ color: "#ffffff" }}>ence With</span>
                </h1>
                <div className="carousel">
                    <div className="carousel-inner">
                        {/* Duplicate icons for seamless scrolling */}
                        {icons.concat(icons).map((icon, index) => (
                            <motion.div
                                key={index}
                                className="carousel-item"
                                initial={{ opacity: 0, y: 20 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }} 
                                viewport={{ once: true }} 
                            >
                                <div className="expertise_container_language">
                                    <div className="expertise_container_language_icon">
                                        {React.cloneElement(icon.component, { size: iconSize })}
                                    </div>
                                    <p>{icon.name}</p> {/* Display the language name */}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expertise;
