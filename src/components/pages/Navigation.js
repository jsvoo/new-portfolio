import "../styles/navigation.scss";
import HomePage from "./HomePage.js"
import Contact from "./Contact.js"
import About from "./About.js"
import Portfolio from "./Portfolio.js"
import { FaHome, FaUserAlt, FaEnvelopeOpen } from "react-icons/fa";
import { VscColorMode } from "react-icons/vsc";
import { MdWork } from "react-icons/md";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextManager } from "../context/PortfolioContext";

export default function Navigation() {
  const { initial, setinitial, clicked, setClicked } = useContext(
    contextManager
  );
  return ( 
    
    <>
    <div
      className={initial.light_mode ? "nav-items n-light-mode" : "nav-items"}
    >
      
      <div
        className={initial.light_mode ? "green-ico mode" : "ico mode"}
        onClick={() =>
          setinitial({ ...initial, light_mode: !initial.light_mode })
        }
      >
        <VscColorMode />
      </div>

      <div
        // to="/"
        className={clicked.home ? "green-icon" : "icon"}
        onClick={() => setClicked({ ...initial, home: true })}
      >
        <FaHome />
      </div>
      <div
        // to="/about"
        className={clicked.about ? "green-icon" : "icon"}
        onClick={() => setClicked({ ...initial, about: true })}
      >
        <FaUserAlt />
      </div>
      <div
        // to="portfolio"
        className={clicked.portfolio ? "green-icon" : "icon"}
        onClick={() => setClicked({ ...initial, portfolio: true })}
      >
        <MdWork />
      </div>
      <div
        // to="/contact"
        className={clicked.contact ? "green-icon" : "icon"}
        onClick={() => setClicked({ ...initial, contact: true })}
      >
        <FaEnvelopeOpen />
      </div>
    </div>
    
      {
      clicked.home?(<HomePage/>):null
      }
      {
      clicked.about?(<About/>):null
      }
      {
      clicked.portfolio?(<Portfolio/>):null}
      {
      clicked.contact?(<Contact/>):null
      }
    </>
     
  );
}
