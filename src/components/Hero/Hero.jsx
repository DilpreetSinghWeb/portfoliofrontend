import "./hero.css";
import profilePic from "../../images/02.jpg";
import Shapes from "../Shapes/Shapes";
import {motion} from "framer-motion"
const Hero = () => {
  const shapePositions = [
    { type: 'circle', top: '10%', left: '5%' },
    { type: 'square', top: '20%', left: '20%' },
    { type: 'star', top: '30%', left: '15%' },
    { type: 'circle', top: '50%', left: '60%' },
    { type: 'square', top: '70%', left: '80%' },
    { type: 'circle', top: '10%', left: '80%' },
    // { type: 'square', top: '80%', left: '10%' },
    // { type: 'star', top: '20%', left: '75%' },
    { type: 'circle', top: '40%', left: '10%' },
    // { type: 'square', top: '60%', left: '25%' },
    { type: 'star', top: '25%', left: '45%' },
    { type: 'circle', top: '35%', left: '80%' },
    { type: 'square', top: '80%', left: '10%' },
    // { type: 'star', top: '70%', left: '30%' },
  ];
  
  return (
    <>
      <section className="hero banner" id="hero">
        <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial state before appearing
      animate={{ opacity: 1, y: 0 }} // Final state when appearing
      transition={{ duration: 0.8, delay: 0.2 }} // Control speed and delay
    >

        <div className="hero_container">
          <div className="hero_container_content">
            <h2>
              Hi, I'm{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fd3c3d, #f8a19a, #707c28)",
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent", 
                  padding: "8px 0",
                  borderRadius: "7px",
                  maxWidth:"10px"
                }}
              >
                Dilpreet
              </span>{" "}
            </h2>
            <h3 className="fw_400">Full Stack Web Developer</h3>
            <p className=" fw_400" >
            I develop impressive websites with excellent quality through persistent effort, learning, and artistic flair.
            </p>
              <button className="hero_btn | btn"><a href="/cv.pdf" download> Download CV</a></button>
            
          </div>
          <div className="hero_container_img">
            <img src={profilePic} alt="Profile_Picture" />
          </div>
        </div>
        <div className="hero_shapes">
        <Shapes positions={shapePositions} />
      </div>
        </motion.div>
        <div className="hero_wave">
          <svg
            className="hero_wave_img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="var(--color-white-bg)"
              fill-opacity="1"
              d="M0,160L80,186.7C160,213,320,267,480,277.3C640,288,800,256,960,245.3C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
        
      </section>
    </>
  );
};

export default Hero;
