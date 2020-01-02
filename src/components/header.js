import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/Logo.png"
import MenuBar from "../images/Menu.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"
import NavBar from "../components/navbar.js"
import Bebas from "../fonts/BebasNeue-Regular.ttf"
const Header = ({ siteTitle }) => (
  <header>
   <NavBar></NavBar>
    
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
