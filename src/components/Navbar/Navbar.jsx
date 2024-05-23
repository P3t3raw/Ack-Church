import { useEffect, useState } from "react";
import Logo from "../../assets/LogoP.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <div className={active ? "navContainer active" : "navContainer"}>
      <nav>
        <Link to="/" className="link">
          <div className="logoName">
            <img src={Logo} className="logo" />
            <h3> ACK St.Peter&apos;s Embakasi</h3>
          </div>
        </Link>
        <div className="links">
          <ul className="navLinks">
            <li>Home</li>
            <li>About</li>
            <li>Ministries</li>
            <li>Sermons</li>
            <li>Activities</li>
            <li>Get Involved</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
