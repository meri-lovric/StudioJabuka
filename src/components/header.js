import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Logo.png"
import MenuBar from "../images/Menu.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"

import Bebas from "../fonts/BebasNeue-Regular.ttf"
const Header = ({ siteTitle }) => (
  <header>
   
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar" style={{boxShadow:"none"}}>
      <div class="container" style={{maxWidth:"100vw"}}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "transparent",
            marginLeft: "50px",

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
              className="grow animated bounce"
              src={Logo}
              alt="logo"
              style={{
                margin: 0,
                width: "75px",
                filter:
                  " brightness(0) saturate(200%) invert(91%) sepia(100%) saturate(2428%) hue-rotate(27deg) brightness(103%) contrast(73%)",
                height: "75px",
              }}
            />{" "}
            {siteTitle}
          </Link>
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
      </div>
    </nav>

    <style jsx>
      {`
      .navbar{
        box-shadow:none,
      }
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
    <link
      href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"
      rel="stylesheet"
    ></link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
