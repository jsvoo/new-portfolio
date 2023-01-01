import "../styles/about.scss";
import {
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaReact,
  FaSass,
  FaGithub
} from "react-icons/fa";
import { SiJquery, SiMongodb, SiMysql, SiGithub } from "react-icons/si";
import { MdWork } from "react-icons/md";
import { useContext } from "react";
import { contextManager } from "../context/PortfolioContext";
export default function About() {
  const { initial } = useContext(contextManager);

  return (
    <div
      className={
        initial.light_mode ? "about-container a-light-mode" : "about-container"
      }
    >
      <div className="about">
        <div className="header">
          ABOUT <span className="green">ME</span>
        </div>

        <div className="summaries">
          <div className="about-me-text">
            <h1>INFORMATION ABOUT ME</h1>
            <div className="about-text-width">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Eveniet et voluptatem omnis velit similique quaerat, accusamus
                incidunt debitis quas?
              </p>

              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Pariatur totam libero quas quis dicta at voluptate repellat ut,
                obcaecati praesentium. Aperiam, necessitatibus.
              </p>

              <a className="button" href="../images/image.jpg" download>
                Download CV
                <div className="green-icon">
                  <FaDownload />
                </div>
              </a>
            </div>
          </div>

          <div className="stats-section">
            <div className="stat">
              <div className="number green">30+ </div>
              <div className="text">PROJECTS COMPLETED</div>
            </div>
            <div className="stat">
              <div className="number green">3+ </div>
              <div className="text">YEARS OF EXPEREIENCE</div>
            </div>
            <div className="stat">
              <div className="number green">10+ </div>
              <div className="text">LIBRARIES & FRAMEWORKS</div>
            </div>
            <div className="stat">
              <div className="number green">650+ </div>
              <div className="text">PROJECTS COMPLETED</div>
            </div>
          </div>
        </div>

        <div className="divider">
          <div className="new-section">
            <h2>MY SKILLS</h2>
          </div>
        </div>

        <div className="my-skills-section">
          <div className="skill html">
            <h3>HTML5</h3>
            <div className="skill-icon-section">
              <FaHtml5 className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill css">
            <h3>CSS3</h3>
            <div className="skill-icon-section">
              <FaCss3Alt className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill js">
            <h3>JAVASCRIPT</h3>
            <div className="skill-icon-section">
              <FaJsSquare className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill react">
            <h3>REACT JS</h3>
            <div className="skill-icon-section">
              <FaReact className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill node">
            <h3>NODE JS</h3>
            <div className="skill-icon-section">
              <FaNode className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill jquery">
            <h3>JQUERY</h3>
            <div className="skill-icon-section">
              <SiJquery className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill mongodb">
            <h3>MONGODB</h3>
            <div className="skill-icon-section">
              <SiMongodb className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill mysql">
            <h3>MYSQL</h3>
            <div className="skill-icon-section">
              <SiMysql className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill sass">
            <h3>SASS</h3>
            <div className="skill-icon-section">
              <FaSass className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>

          <div className="skill git">
            <h3>GIT & GITHUB</h3>
            <div className="skill-icon-section">
              <SiGithub className="icon" />{" "}
              <div className="full-width">
                <div className="progress-bar"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider">
          <div className="new-section">
            <h2>MY TIMELINE</h2>
          </div>
        </div>

        <div className="timeline-section">
          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2010 - PRESENT</div>
              <div className="body">
                <div className="role">
                  WEB DEVELOPER -{" "}
                  <span className="company">REWORK TECHNOLOGIES</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis rerum beatae libero error temporibus porro.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2010 - PRESENT</div>
              <div className="body">
                <div className="role">
                  WEB DEVELOPER -{" "}
                  <span className="company">REWORK TECHNOLOGIES</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis rerum beatae libero error temporibus porro.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2010 - PRESENT</div>
              <div className="body">
                <div className="role">
                  WEB DEVELOPER -{" "}
                  <span className="company">REWORK TECHNOLOGIES</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis rerum beatae libero error temporibus porro.
                </p>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2010 - PRESENT</div>
              <div className="body">
                <div className="role">
                  WEB DEVELOPER -{" "}
                  <span className="company">REWORK TECHNOLOGIES</span>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis rerum beatae libero error temporibus porro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
