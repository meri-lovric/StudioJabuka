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
              <MDBHamburgerToggler
                className="grow"
                style={{}}
                id="hamburger1"
                onClick={() => this.toggleSingleCollapse("collapse1")}
              />
              <MDBCollapse isOpen={this.state.collapse1} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <Link to="/">Home</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/portfolio">Portfolio</Link>
                  </MDBNavItem>
                  <MDBNavItem>
                    <Link to="/blog">Blog</Link>
                  </MDBNavItem>{" "}
                  <MDBNavItem>
                    <Link to="/categories">Ponuda</Link>
                  </MDBNavItem>{" "}
                  <MDBNavItem>
                    <Link to="/">Q&A</Link>
                  </MDBNavItem>{" "}
                  <MDBNavItem>
                    <Link to="/contact">Kontakt</Link>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                <MDBIcon icon="user-circle" style = {{color: "#00c851", backgroundColor:"white", borderRadius: "3em", fontSize: "3em"}}/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Something else here
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbar>
        </MDBContainer>
        <style jsx>{`
          #nav-icon1 {
            background-color: #a8dd53;
            text-align: center;
            padding: 1.5rem 3rem;
            border-radius: 25px;
          }
          #nav-icon1 span {
            width: 50%;
            display: inline-block;
          }
          #layout > header > div > nav > div {
            width: 100vw;
          }
          .navbar {
            box-shadow: none;
          }
          #hamburger1 .grow {
            display: inline-block;
            transition-duration: 0.3s;
            transition-property: transform;
          }
          .grow:hover {
            transform: scale(1.1);
          }
          #header-nav .navbar-nav {
            position: inherit;
          }
          #header-nav > div > div.collapse.show.navbar-collapse {
            background: white;
            opacity: 75%;
            backdrop-filter: blur(5px) contrast(0.8);
          }
          #menu li {
            margin-top:10px;
            border-bottom: 1px solid #9e9e9e
          }
          li {
            list-style-type: none;
          }
          #header-nav > li > div > a {
            color: #00c851;
          }
          #header-nav > div > div.collapse.show.navbar-collapse > ul > li > a {
            color: #00c851 !important;
            font-size: 1.25rem;
            font-weight: 300;
          }
          #header-nav > li > div > a {
            padding-bottom: 1em;
          }
          
        `}</style>
      </React.Fragment>
    )
  }
}

export default NavbarPage
