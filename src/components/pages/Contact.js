import "../styles/contact.scss";
import { IoLocationSharp, IoMail, IoLanguage } from "react-icons/io5";
import {
  FaUserGraduate,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaYoutube,
} from "react-icons/fa";
import { useContext, useState } from "react";
import { contextManager } from "../context/PortfolioContext";

export default function Contact() {
  const { initial } = useContext(contextManager);
  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  function sendMessage() {
    console.log(message);
    fetch("https://tumblr-api.cyclic.app/portfolio/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message),
    })
      .then((resp) => resp.json())
      .then((data) => console.log(data));

    //   .catch((err)=>{
    //   console.log(err)
    // })
  }

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
            Would you like to talk? Please contact me through any of the
            following avenues.
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
            {/* <div className="items">
              <span className="item">
                {" "}
                <FaUserGraduate className="contact_icon" /> Education
              </span>{" "}
              <span>: Kogi State University, Rework Academy</span>
            </div> */}
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
            <input
              type="text"
              placeholder="YOUR NAME"
              value={message.name}
              onChange={(e) => setMessage({ ...message, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="YOUR EMAIL"
              value={message.email}
              onChange={(e) =>
                setMessage({ ...message, email: e.target.value })
              }
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="ENTER SUBJECT"
              value={message.subject}
              onChange={(e) =>
                setMessage({ ...message, subject: e.target.value })
              }
            />
          </div>
          <div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message Here..."
              value={message.message}
              onChange={(e) =>
                setMessage({ ...message, message: e.target.value })
              }
            >
              {" "}
            </textarea>
          </div>

          <button onClick={() => sendMessage()}>Send Message</button>
        </div>
      </div>
    </div>
  );
}
