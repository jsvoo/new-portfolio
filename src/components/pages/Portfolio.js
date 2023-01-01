import "../styles/portfolio.scss";
import { FaGithub } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { useContext } from "react";
import { contextManager } from "../context/PortfolioContext";
export default function Portfolio() {
  const { initial } = useContext(contextManager);
  return (
    <div
      className={
        initial.light_mode
          ? "portfolio-container p-light-mode"
          : "portfolio-container"
      }
    >
      <div className="portfolio-page contact-page">
        <div className="header">
          <p>
            MY <span className="green">PORTFOLIO</span>
          </p>
        </div>
        <p className="intro-text">
          Here are some of the works I've done with different
          frameworks/libraries
        </p>

        <div className="row1">
          <div className=" row-item">
            <div className="row-text">
              <h2 className="child">Ecommerce system </h2>
              <p>With React JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>
          <div className=" row-item row-item2">
            <div className="row-text">
              <h2 className="child">Ecommerce system </h2>
              <p>With jQuery</p>
              <h3>Project Source</h3>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>

          <div className=" row-item row-item3">
            <div className="row-text">
              <h2 className="child">Blog system </h2>
              <p>With React JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>

          <div className=" row-item row-item4">
            <div className="row-text">
              <h2 className="child">Quiz App </h2>
              <p>With Vanilla JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>

          <div className=" row-item row-item5">
            <div className="row-text">
              <h2>Blog Management API </h2>
              <p>With Node JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>

          <div className=" row-item row-item6">
            <div className="row-text">
              <h2 className="child">Listing Application </h2>
              <p>With Node JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>

          <div className=" row-ite row-item-more">
            {/* <center>More</center> */}
            <div className="more-row-text">
              <h2 className="child">View More Projects </h2>
              <div className="source">
                <div className="icon">
                  <FaGithub />
                </div>
                <div className="icon">
                  <FiCodesandbox />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
