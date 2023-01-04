import "../styles/homePage.scss";
import { FaDownload } from "react-icons/fa";
import image from "../images/image.jpg";
import { useContext } from "react";
import { contextManager } from "../context/PortfolioContext";
export default function HomePage() {
  const { initial } = useContext(contextManager);

  return (
    <div
      className={
        initial.light_mode
          ? "homepage-container h-light-mode"
          : "homepage-container"
      }
    >
      <div className="homepage">
        <div className="image-section">
          <div className="image-background"></div>
          <div className="main-image">
            <img src={image} alt="Onoja Victor" />
          </div>
        </div>
        <div className="text-section">
          <h1>
            Hi, I'm{" "}
            <span className="green">
              Victor <br /> O. Onoja.
            </span>
            &nbsp; A <br /> Web Developer
          </h1>
          <p>
            I'm a web developer who thrives at working in a collaborative
            environment to design user-friendly, visually pleasing, and
            functional applications utilizing JavaScript, HTML, and CSS with a
            focus on problem-solving.
          </p>
          <a className="button" href="../images/resume.pdf" download>
            Download CV
            <div className="green-icon">
              <FaDownload />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
