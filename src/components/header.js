import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Logo.png"
import MenuBar from "../images/Menu.png"
import "bootstrap/dist/css/bootstrap.min.css"
import Bebas from "../fonts/BebasNeue-Regular.ttf"

//import "../styles/header.scss"
const Header = ({ siteTitle }) => (
  <header
    style={{
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      zIndex: 10,
      position: "fixed",
      margin: `0 0`,
      width: "95vw",
      padding: `1.45rem 1.0875rem`,
      display: `flex`,
      maxHeight: `10rem`,
      justifyContent: `space-between`,
      
    }}
  >
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: "transparent"
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <img
          className="grow"
          src={Logo}
          alt="logo"
          style={{ margin: 0, width: "75px", filter:" brightness(0) saturate(200%) invert(91%) sepia(100%) saturate(2428%) hue-rotate(27deg) brightness(103%) contrast(73%)",height: "75px"}}
        />{" "}
        {siteTitle}
      </Link>
      <nav class="navbar navbar-expand-md navbar-light md-light" >
        <ul class="navbar-nav" style={{ display: "flex", backdropFilter:"blur(5px) contrast(.8)" }}>
          <li>
            <a class="nav-link" style={{ color: "#a8dd53", fontFamily: 'Bebas Neue'}} href="#section1">
              Section 1
            </a>
          </li>
          <li>
            <a class="nav-link" style={{ color: "#a8dd53", fontFamily: 'Bebas Neue'}} href="#section2">
              Section 2
            </a>
          </li>
          <li>
            <a class="nav-link" style={{ color: "#a8dd53", fontFamily: 'Bebas Neue'}} href="#section3">
              Section 3
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div
      className="menu grow"
      style={{
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: "1rem",
        position: "relative",
        backgroundColor: "#a8dd53",
        maxWidth: "175px",
        width: "9em",
        padding: `1.45rem 1.0875rem`,
        borderRadius: "25px",
      }}
    >
      <img
        src={MenuBar}
        alt="menu"
        style={{
          position: "relative",
          width: "1.3em",
          height: "1em",
          top: "0",
          left: 0,
        }}
      />
      <div
        style={{
          position: "relative",
          left: "5px",
          fontFamily: "Source Code Pro",
          fontStyle: "normal",
          fontWeight: "200",
          fontSize: "1rem",
          textTransform: "uppercase",
          color: "white",
        }}
      >
        Izbornik
      </div>
    </div>
    <style jsx>
      {`
        .grow {
          display: inline-block;
          transition-duration: 0.3s;
          transition-property: transform;
        }
        .grow:hover {
          transform: scale(1.1);
        }
      `}
    </style>
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
  </header>
  
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
