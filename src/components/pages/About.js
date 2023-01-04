import "../styles/about.scss";
import {
  FaDownload,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNode,
  FaReact,
  FaSass,
  FaGithub,
} from "react-icons/fa";
import {
  SiJquery,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiExpress,
} from "react-icons/si";
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
                More speed, less space, user-friendly, and aesthetically
                appealing. These principles serve as my road map for every
                process of turning a tale into a useful tool for
                problem-solving.
              </p>

              <p>
                A team, in my opinion, is only as strong as its individual
                members. As a result, in order to maximize my potential and
                achieve both personal and organizational goals, I am devoted to
                continuous self-development for enhanced performance excellence,
                leadership, and professionalism.
              </p>

              <a className="button" href="../images/resume.pdf" download>
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
              <div className="number green">A+ </div>
              <div className="text">AT EXCELLENCE</div>
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

          <div className="skill node">
            <h3>EXPRESS JS</h3>
            <div className="skill-icon-section">
              <SiExpress className="icon" />{" "}
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
              <div className="date">2022 - PRESENT</div>
              <div className="body">
                <div className="role">
                  WEB DEVELOPER AND INSTRUCTOR -{" "}
                  <span className="company">REWORK TECHNOLOGIES</span>
                </div>
                <p>
                  Developing and maintaining the server-side of web
                  applications, planning, designing, and implementing user
                  interface systems for websites, software, and web-based
                  applications, and instructing students at the Rework Academy.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2022</div>
              <div className="body">
                <div className="role">
                  FULL-STACK WEB DEVELOPMENT COURSE -{" "}
                  <span className="company">REWORK ACADEMY</span>
                </div>
                <p>
                  A one-year intensive project-based program leading to
                  certification as a full-stack (MERN) engineer. Extensive
                  knowledge of MongoDB, Express JS, React JS, and Node JS.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2021 - 2022</div>
              <div className="body">
                <div className="role">
                  DATA PERSONNEL -{" "}
                  <span className="company">
                    MARYLAND GLOBAL INITIATIVES CORPORATION
                  </span>
                </div>
                <p>
                  Gathering and organizing research data to develop the COVID-19
                  vaccination safety profile in Nigeria.
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2019 - 2022</div>
              <div className="body">
                <div className="role">
                  RESEARCH ASSISTANT -{" "}
                  <span className="company">KOGI STATE UNIVERSITY</span>
                </div>
                <p>
                  Preparing for and conducting experiments, composing scientific
                  articles for publishing
                </p>
              </div>
            </div>
          </div>

          <div className="timeline-container">
            <div className="timeline-icon">
              <MdWork className="icon" />
            </div>

            <div className="timeline">
              <div className="date">2015 - 2019</div>
              <div className="body">
                <div className="role">
                  BACHELOR'S DEGREE IN BIOCHEMISTRY -{" "}
                  <span className="company">KOGI STATE UNIVERSITY</span>
                </div>
                <p>
                  Natural sciences interdisciplinary discipline requiring
                  critical thinking, teamwork, tenacity, and problem-solving
                  through research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
