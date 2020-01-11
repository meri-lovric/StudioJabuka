import React, { Component } from "react"
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
} from "mdbreact"
import {
  MDBNavbarToggler,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact"
import Logo from "../images/Logo.png"
import { Link } from "gatsby"

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
      <React.Fragment>
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
                </Link>
              </MDBNavbarBrand>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret className="btn">
                      <MDBIcon
                        icon="chevron-circle-down"
                        style={{
                          color: "#00c851",
                          backgroundColor: "white",
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
                        <Link to="/">Q&A</Link>
                        <Link to="/contact">Kontakt</Link>
                      </div>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon
                        icon="user-circle"
                        style={{
                          color: "#00c851",
                          backgroundColor: "white",
                          borderRadius: "3em",
                          fontSize: "3em",
                        }}
                      />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown-default">
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </div>
            </MDBContainer>
          </MDBNavbar>
        </MDBContainer>
        <style jsx>{`
          .dropdown-menu {
            opacity: 75%;
            backdropfilter: blur(5px) contrast(0.8);
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
          
        `}</style>
      </React.Fragment>
    )
  }
}

export default NavbarPage
