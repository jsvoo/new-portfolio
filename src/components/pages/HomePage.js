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
            I'm a Web developer, I love to create beautiful and functional
            websites. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nostrum corporis iste repellendus fuga delectus rerum assumenda
            magnam sint nam cum.
          </p>
          <a className="button" href="../images/image.jpg" download>
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
