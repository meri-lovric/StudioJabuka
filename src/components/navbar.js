import React, { Component } from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavItem, MDBContainer } from "mdbreact"
import {
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBIcon,
} from "mdbreact"
import Logo from "../images/Logo.png"
import { Link } from "gatsby"
import Authentication from "./authentication"

class NavbarPage extends Component {
  state = {
    collapse1: false,
    collapseID: "",
  }

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }))
  }

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    })
  }

  render() {
    return (
      <MDBContainer>
        <MDBNavbar
          id="header-nav"
          color=" lighten-4"
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            position: "fixed",
            zIndex: "10",
            width: "95vw",
            paddingLeft: "2vw",
          }}
          light
        >
          <MDBContainer>
            <MDBNavbarBrand>
              <Link
                to="/"
                style={{
                  color: `white`,
                  textDecoration: `none`,
                }}
              >
                <img
                  className="grow animated bounce logo"
                  src={Logo}
                  alt="logo"
                  style={{
                    margin: 0,
                    width: "3em",
                    filter:
                      " brightness(0) saturate(200%) invert(91%) sepia(100%) saturate(2428%) hue-rotate(50deg) brightness(103%) contrast(73%)",
                    height: "3em",
                  }}
                />{" "}
              </Link>
            </MDBNavbarBrand>
            <div style={{ display: "flex", alignItems: "center" }}>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon
                      icon="chevron-circle-down"
                      style={{
                        color: "#00c851",
                        borderRadius: "3em",
                        fontSize: "3em",
                      }}
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100vw",
                        textAlign: "center",
                      }}
                    >
                      <Link to="/">Home</Link>
                      <Link to="/portfolio">Portfolio</Link>
                      <Link to="/blog">Blog</Link>
                      <Link to="/categories">Ponuda</Link>
                      <Link to="/faq">Pitanja i odgovori</Link>
                      <Link to="/contact">Kontakt</Link>
                    </div>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <Authentication></Authentication>
              </MDBNavItem>
            </div>
          </MDBContainer>
        </MDBNavbar>
        <style>{`
          @media screen and (max-width: 900px) {
            .logo {
              width: 2em;
              height: 2em;
            }
            .chevron-circle-down {
              width: 1em;
              height: 1em;
            }
          }
          @media screen and (max-width: 500px) {
            .logo {
              display: none;
            }
            #header-nav > div > div:nth-child(2) {
              display: flex;
              justify-content: space-between;
              width: 100vw;
            }
            #header-nav
              > div
              > div:nth-child(2)
              > li:nth-child(2)
              > div
              > div
              > a {
              width: min-content;
              line-height: normal;
            }
          }
          .fa-chevron-circle-down {
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
              0 2px 10px 0 rgba(0, 0, 0, 0.12);
          }
          .dropdown-menu {
            opacity: 75%;
            backdrop-filter: blur(5px) contrast(0.8);
          }
          header .container {
            max-width: 100vw;
            display: flex;
            justify-content: space-between;
          }
          #header-nav > div {
            max-width: 100vw;
            display: flex;
            justify-content: space-between;
          }

          .navbar {
            box-shadow: none;
          }
          #hamburger1 .grow {
            display: inline-block;
            transition-duration: 0.3s;
            transition-property: transform;
          }

          #header-nav .navbar-nav {
            position: inherit;
          }

          #menu li {
            margin-top: 10px;
            border-bottom: 1px solid #9e9e9e;
          }
          #header-nav > div > div > li> div > div > div > div > a:hover{
            box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
          }
          li {
            list-style-type: none;
          }

          #header-nav > li > div > a {
            padding-bottom: 1em;
          }

          #header-nav > div > div > li > div > div > div > div > a {
            color: #00c851 !important;
            font-size: 1.25rem;
            font-weight: 300;
          }

          #header-nav > div > div:nth-child(2) > li:nth-child(1) > div > a {
            color: #00c851;
          }
          #header-nav > div > div:nth-child(2) > li:nth-child(2) > div > a {
            color: #00c851 !important;
          }
        `}</style>
      </MDBContainer>
    )
  }
}

export default NavbarPage
