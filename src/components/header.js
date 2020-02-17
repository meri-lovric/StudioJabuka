import PropTypes from "prop-types"
import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"
import NavBar from "../components/navbar.js"
const Header = () => (
  <header>
    <NavBar></NavBar>

    <link
      href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap"
      rel="stylesheet"
    ></link>

    <style jsx>{`
      #nav-icon1 > span:nth-child(3) {
        top: 30px !important;
        left: 12px !important;
      }
      #nav-icon1 > span:nth-child(1) {
        top: 14px !important;
        left: 12px !important;
      }
      #nav-icon1 > span:nth-child(2) {
        top: 22px !important;
        left: 12px !important;
      }
      #nav-icon1 {
        padding: 1.5rem !important;
        background-color: #00c851;
      }
      #header-nav > div > div:nth-child(2) > li:nth-child(1) > div > a::after {
        display:none;
      }
    `}</style>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
