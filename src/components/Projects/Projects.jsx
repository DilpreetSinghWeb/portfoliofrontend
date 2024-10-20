import "./projects.css";
import LaunchIcon from "@mui/icons-material/Launch";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { projectsData } from "../../utils/projectsData";



const Projects = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.05,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8 },
      });
    
    }
  }, [controls, inView]);

  return (
    <div className="projects">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="projects_container" id="projects">
          <div className="heading">
            <h1>
              <span style={{ color: "#FE3838" }}>proj</span>{" "}
              <span style={{ color: "var(--color-text)" }}>ects</span>
            </h1>
          </div>
          <div className="projects_container_boxes">
            {projectsData.map((project, index) => (
              <div className="projects_container_box content-box" key={index}>
                <div className="projects_container_box_img_container">
                  <div className="projects_container_box_img">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="projects_container_project_img_content">
                    <h3>Tech Stack👩🏻‍💻</h3>
                    <div className="flex_align_justify_center">
                      {project.tech.map((icon, index) => (
                        <h4 className="flex_align_justify_center" key={index}>
                          {icon}
                        </h4>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="projects_container_box_text">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h3 style={{ color: "var(--color-primary)" }}>
                      {project.title}
                    </h3>
                    <span
                      className="fw_400 projects_container_box_text_type"
                      style={{ textDecoration: "underline" }}
                    >
                      {project.type}
                    </span>
                  </div>

                  <p className="projects_container_box_description">{project.description}</p>

                  <div>
                    <button className="project_btn">
                      <a href={project.link} target="_blank" rel="noreferrer">
                        Preview
                      <LaunchIcon size={25} />
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
