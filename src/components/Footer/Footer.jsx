import { FiTwitter } from "react-icons/fi";
import { IoLogoFacebook, IoLogoInstagram } from "react-icons/io";
import { VscGithub } from "react-icons/vsc";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="horizontal">
      <div className="social-icons">
        <a href="#">
          <FiTwitter size={40} />
        </a>
        <a href="#">
          <IoLogoFacebook size={40} />
        </a>
        <a href="#">
          <IoLogoInstagram size={40} />
        </a>
        <a href="#">
          <VscGithub size={40} />
        </a>
      </div>
      <div className="copyright">&copy; Copyright 2023
      </div>
    </footer>
  );
};

export default Footer;