import "../styles/contact.scss";
import { IoLocationSharp, IoMail, IoLanguage } from "react-icons/io5";
import {
  FaUserGraduate,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaYoutube
} from "react-icons/fa";
import { useContext } from "react";
import { contextManager } from "../context/PortfolioContext";

export default function Contact() {
  const { initial } = useContext(contextManager);
  return (
    <div
      className={
        initial.light_mode
          ? "contact-page-container c-light-mode"
          : "contact-page-container"
      }
    >
      <div className="contact-page">
        <div className="header">
          <p>
            {" "}
            CONTACT <span className="green">ME</span>
          </p>
        </div>
        <div className="text-region">
          <h1>CONTACT ME HERE</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. A, ea.
          </p>

          <div className="details">
            <div className="items">
              <span className="item">
                {" "}
                <IoLocationSharp className="contact_icon" /> Location
              </span>{" "}
              <span>: Abuja, Nigeria</span>
            </div>
            <div className="items">
              <span className="item">
                {" "}
                <IoMail className="contact_icon" /> Email
              </span>{" "}
              <span>: onoja.jsdev@gmail.com</span>
            </div>
            <div className="items">
              <span className="item">
                {" "}
                <FaUserGraduate className="contact_icon" /> Education
              </span>{" "}
              <span>: Kogi State University, Rework Academy</span>
            </div>
            <div className="items">
              <span className="item">
                {" "}
                <FaPhone className="contact_icon" /> Mobile Number
              </span>{" "}
              <span>: +2348154799404, +2347045966607</span>
            </div>
            <div className="items">
              <span className="item">
                {" "}
                <IoLanguage className="contact_icon" /> Languages
              </span>{" "}
              <span>: English, Igala, Yoruba</span>
            </div>
          </div>
        </div>

        <div className="socials">
          <div className="icon">
            <FaFacebookF />
          </div>
          <div className="icon">
            <FaTwitter />
          </div>
          <div className="icon">
            <FaGithub />
          </div>
          <div className="icon">
            <FaYoutube />
          </div>
        </div>

        <div className="input-section">
          <div>
            <input type="text" placeholder="YOUR NAME" />
          </div>
          <div>
            <input type="text" placeholder="YOUR EMAIL" />
          </div>
          <div>
            <input type="text" placeholder="ENTER SUBJECT" />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message Here..."
            >
              {" "}
            </textarea>
          </div>

          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}
