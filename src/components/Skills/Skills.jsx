import { useState } from "react";
import { useInView } from 'react-intersection-observer'; // Import intersection observer hook
import { motion } from 'framer-motion'; // Import framer motion
import "./Skills.css";
import { FaArrowRight } from "react-icons/fa";
import SkillsImg from "../../images/Skills.png";

const Skills = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,    
  });

  const fullText =
    "As a full-stack developer, I possess a comprehensive skill set that enables me to design and build dynamic web applications from the ground up. I excel at transforming complex requirements into clean, efficient code and intuitive interfaces. My front-end expertise includes creating responsive layouts with HTML, CSS, and JavaScript frameworks like React, focusing on delivering an exceptional user experience. On the back end, I am adept at building robust APIs with Node.js and Express, while utilizing MongoDB and MySQL for reliable data storage. I prioritize best practices in code quality, performance optimization, and security to deliver scalable solutions that meet client needs.";

  const shortText = fullText.slice(0, 380) + "...";

  const skillData = [
    {
      title: "Frontend Development",
      icon: <FaArrowRight size={18} fill="#ffffff" />,
      description:
        "Creating responsive web applications using HTML, CSS, and React, focused on delivering great user experiences."
    },
    {
      title: "Backend Development",
      icon: <FaArrowRight size={18} fill="#ffffff" />,
      description:
        "Building robust APIs with Node.js and Express, ensuring efficient server operations and secure data handling."
    },
    {
      title: "Database Management",
      icon: <FaArrowRight size={18} fill="#ffffff" />,
      description:
        "Managing data with MongoDB and MySQL, ensuring reliable storage and retrieval for scalable applications."
    },
    {
      title: "UI/UX Design",
      icon: <FaArrowRight size={18} fill="#ffffff" />,
      description:
        "Designing modern and intuitive interfaces using tools like Figma, emphasizing usability and user engagement."
    }
  ];

  return (
    <motion.div
      ref={skillsRef} 
      initial={{ opacity: 0, y: 50 }} 
      animate={skillsInView ? { opacity: 1, y: 0 } : {}} 
      transition={{ duration: 0.8, delay: 0.2 }} 
      className="skills" id="skills"
    >
      <div className="skills_container">
        <div className="skills_container_main_heading">
          <div className="heading">
            <h1>
              <span style={{ color: "#FE3838" }}>Ski</span>{" "}
              <span style={{ color: "var(--color-text)" }}>lls</span>
            </h1>

            <p>
              {isExpanded ? fullText : shortText}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="read-more-btn"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </p>
          </div>
        </div>

        <div className="skills_container_main_content">
          <div className="skills_container_left">
            <div className="skills_container_content">
              {skillData.map((skill, index) => (
                <motion.div
                  className="skills_container_content_left_right"
                  key={index}
                  initial={{ opacity: 0, y: 50 }} // Animation for each skill item
                  animate={skillsInView ? { opacity: 1, y: 0 } : {}} // Triggered when scrolled into view
                  transition={{ duration: 0.6, delay: index * 0.2 }} // Delay each item slightly
                >
                  <div className="left">
                    <div className="icon flex_align_justify_center">
                      {skill.icon}
                    </div>
                  </div>
                  <div className="right">
                    <h3>{skill.title}</h3>
                    <p>{skill.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            className="skills_container_right"
            initial={{ opacity: 0, x: 100 }} // Slide in from right
            animate={skillsInView ? { opacity: 1, x: 0 } : {}} // Triggered when visible
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={SkillsImg} alt="Skills" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
