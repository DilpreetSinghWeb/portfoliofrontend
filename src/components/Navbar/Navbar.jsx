import { useEffect, useState } from "react";
import "./navbar.css";
import { Close, MenuSharp } from "@mui/icons-material";
import webLogo from "../../images/mainLogo.png";
const Navbar = () => {
  const [navbarMaxWidth, setNavbarMaxWidth] = useState("850px");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeightThreshold = 500;
      const navbar_bg = document.querySelector(".navbar_bg");
      const scrollHeight =
        window.pageYOffset || document.documentElement.scrollTop;
        
      if (scrollHeight > scrollHeightThreshold) {
        navbar_bg.style.background = "linear-gradient(135deg, #1a1a1a, #2e2e2e)";
        // navbar_bg.style.background = "var(--color-text)"
        navbar_bg.style.color = "white";
        setNavbarMaxWidth("1300px");
      } else {
        navbar_bg.style.background = "transparent";
        navbar_bg.style.color = "#fff";
        setNavbarMaxWidth("850px");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="navbar | navbar_bg" id="navbar">
        <div
          className="navbar_container "
          style={{
            maxWidth: navbarMaxWidth,
            margin: "auto",
            transition: "all .3s ease",
          }}
        >
          <div className="navbar_container_logo">
            <img src={webLogo} alt="" />
          </div>
          <div
            className={`navbar_container_bars ${menuOpen ? "open" : ""}`}
            onClick={handleMenuClick}
            style={{ transition: "transform .1s ease-in" }}
          >
            {menuOpen ? (
              <Close style={{ fontSize: "35px" }} />
            ) : (
              <MenuSharp style={{ fontSize: "35px" }} />
            )}
          </div>
          <div className={`navbar_container_items ${menuOpen ? "open" : ""}`}>
            <ul>
            <li>
                <a
                  className={`${menuOpen ? "open" : ""}`}
                  onClick={handleMenuClick}
                  href="#skills"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className={`${menuOpen ? "open" : ""}`}
                  onClick={handleMenuClick}
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              
              <li>
                <a
                  className={`${menuOpen ? "open" : ""}`}
                  onClick={handleMenuClick}
                  href="#footer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
