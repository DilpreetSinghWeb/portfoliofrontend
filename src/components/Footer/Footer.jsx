import "./footer.css";
import { useInView } from "react-intersection-observer";
import { FaWhatsapp, FaLinkedin, FaPhoneSquareAlt } from "react-icons/fa";
import ContactPng from "../../images/Contact.png";
import { FaGithub } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { motion } from 'framer-motion';
import Form from "./Form";

const Footer = () => {
  // Use the useInView hook to track footer visibility
  const { ref: headingRef, inView: headingInView } = useInView({
    threshold: 0.2, 
    triggerOnce: true
  });

  const { ref: formRef, inView: formInView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Define motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const footerBottomVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Social media links array
  const socialLinks = [
    { icon: <FaGithub className="footer_bottom_left_icon" size={30} />, url: "https://github.com/DilpreetSinghWeb" },
    { icon: <FaWhatsapp className="footer_bottom_left_icon" size={30} />, url: "https://wa.me/919877320263" },
    { icon: <FaLinkedin className="footer_bottom_left_icon" size={30} />, url: "https://www.linkedin.com/in/dilpreet-singh" },
    { icon: <CiPhone className="footer_bottom_left_icon" size={30} />, url: "tel:+919877320263" },
  ];

  return (
    <div className="footer" id="footer">
      {/* Heading Section */}
      <motion.div 
        className="footer_top_container"
        ref={headingRef}
        initial="hidden"
        animate={headingInView ? "visible" : "hidden"} 
        variants={containerVariants}
        transition={{ duration: 0.9 }} 
      >
        <div className="footer_top">
          <div className="footer_top_left">
            <h2 style={{ color: "var(--color-text)" }}>
              Let's Get In <span style={{ color: "var(--color-secondary)" }}> Touch!</span>
            </h2>
            <p>
              Have a question or need assistance? Reach out via email, phone,
              or the contact form below. We're eager to assist you.
            </p>
            <p style={{ marginTop: "20px", color: "var(--color-secondary)" }} className="fw_600">
              Your message means a lot to us!
            </p>
            <div className="footer_top_left_img">
              <img src={ContactPng} alt="ContactImg" />
            </div>
          </div>

          {/* Form Section */}
          <motion.div
            className="footer_top_right"
            ref={formRef}
            initial={{ opacity: 0, x: 20 }} 
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }} 
          >
            <Form />
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom Section */}
      <motion.div 
        className="footer_bottom_container"
        initial="hidden"
        animate={formInView ? "visible" : "hidden"} 
        variants={footerBottomVariants}
        transition={{ duration: 0.5 }} 
      >
        <div className="footer_bottom">
          <div className="footer_bottom_left">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.icon}
              </a>
            ))}
          </div>
          <div className="footer_bottom_right">
            <h3>Let's Connect </h3>
            <div className="footer_bottom_right_content">
              <div className="footer_bottom_right_content_single">
                <FaPhoneSquareAlt size={22} />
                <a href="tel:+919877320263">+91-9877320263</a>
              </div>
              <div className="footer_bottom_right_content_single">
                <MdEmail size={22} />
                <a href="mailto:dilpreetweb65@gmail.com">dilpreetweb65@gmail.com</a>
              </div>
              <div className="footer_bottom_right_content_single">
                <FaLinkedin size={22} />
                <a target="_blank" href="https://www.linkedin.com/in/dilpreet-singh65" rel="noopener noreferrer">Dilpreet Singh [LinkedIn]</a>

              </div>
            </div>
          </div>
        </div>
        <p>&copy; 2024 Created by Dilpreet Singh. All Rights Reserved.</p>
      </motion.div>
    </div>
  );
};

export default Footer;
