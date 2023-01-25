import "../styles/portfolio.scss";
import { FaGithub, FaChrome } from "react-icons/fa";
import { FiCodesandbox } from "react-icons/fi";
import { useContext } from "react";
import { Link } from "react-router-dom";
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

          <div className=" row-item akeru">
            <div className="row-text">
              <h2 className="child  ">Haulage and Logistics System + asset management system</h2>
              <p>Frontend:  React JS</p>
              <p>Backend:  Node JS</p>
              <h3>View Live project</h3>
              <div className="source">
                <a
                  href="https://akeru.ng"
                  target="blank"
                >
                  <div className="icon">
                    <FaChrome />
                  </div>
                </a>


              </div>
            </div>
          </div>

          <div className=" row-item reworkacademy">
            <div className="row-text">
              <h2 className="child  ">School Management System</h2>
              <p>Frontend:  React JS</p>
              <p>Backend:  Node JS</p>
              <h3>View Live project</h3>
              <div className="source">
                <a
                  href="https://reworkacademy.co"
                  target="blank"
                >
                  <div className="icon">
                    <FaChrome />
                  </div>
                </a>


              </div>
            </div>
          </div>

          <div className=" row-item">
            <div className="row-text">
              <h2 className="child">Ecommerce system + Content Management System </h2>
              <p>With React JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <a
                  href="https://github.com/jsvoo/Ecommerce-flipkart-copy-with-ReactJs"
                  target="blank"
                >
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>
 
              </div>
            </div>
          </div>


          <div className=" row-item row-item2">
            <div className="row-text">
              <h2 className="child">Ecommerce system + Admin dashboard </h2>
              <p>With jQuery</p>
              <h3>Project Source</h3>

              <div className="source">
                <a href="https://github.com/jsvoo/Sassi-Holford" target="blank">
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>

                <a href="https://sassiholford-copy.netlify.app/" target="blank">
                  <div className="icon">
                    <FaChrome />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className=" row-item row-item3">
            <div className="row-text">
              <h2 className="child">Complex Blog system </h2>
              <p>With React JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <a
                  href="https://github.com/jsvoo/Tumblr-blog-system"
                  target="blank"
                >
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>

                <a href="https://codesandbox.io/s/tumblr-ps9r9d" target="blank">
                  <div className="icon">
                    <FiCodesandbox />
                  </div>
                </a>

                <a href="https://pm2nvq-3000.preview.csb.app/" target="blank">
                  <div className="icon">
                    <FaChrome />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className=" row-item row-item4">
            <div className="row-text">
              <h2 className="child">Quiz App </h2>
              <p>With Vanilla JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <a href="https://github.com/jsvoo/Quiz-app" target="blank">
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>
                {/* <div className="icon">
                  <FiCodesandbox />
                </div> */}
              </div>
            </div>
          </div>

          <div className=" row-item row-item5">
            <div className="row-text">
              <h2>Blog Management API </h2>
              <p>With Node JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <a
                  href="https://github.com/jsvoo/Tumblr-Backend"
                  target="blank"
                >
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>
                <a href="https://tumblr-api.cyclic.app/posts" target="blank">
                  <div className="icon">
                    <FaChrome />
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className=" row-item row-item6">
            <div className="row-text">
              <h2 className="child">Listing Application </h2>
              <p>With Node JS</p>
              <h3>Project Source</h3>
              <div className="source">
                <a
                  href="https://github.com/jsvoo?tab=repositories"
                  target="blank"
                >
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>
                {/* <div className="icon">
                  <FiCodesandbox />
                </div> */}
              </div>
            </div>
          </div>

          <div className=" row-ite row-item-more">
            {/* <center>More</center> */}
            <div className="more-row-text">
              <h2 className="child">View More Projects </h2>
              <div className="source">
                <a
                  href="https://github.com/jsvoo?tab=repositories"
                  target="blank"
                >
                  <div className="icon">
                    <FaGithub />
                  </div>
                </a>
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
