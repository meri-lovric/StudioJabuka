import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Logo from "../images/Logo.png"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"
import ReactWOW from "react-wow"
import { Link } from "gatsby"
import NavButton from "./navbutton"
const Navigation = () => {
  return (
    <ReactWOW animation="fadeInLeft">
      <nav
        id="section4"
        className="navbar navbar-expand-lg"
        style={{ display: "flex", flexDirection: "column" }}
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
              margin: "50px",
              width: "75px",
              filter:
                " brightness(0) saturate(200%) invert(91%) sepia(100%) saturate(2428%) hue-rotate(50deg) brightness(103%) contrast(73%)",
              height: "75px",
            }}
          />{" "}
        </Link>
        <div
          className=" row text-center container-fluid animated slideInRight wow  responsive "
          data-wow-delay="0.6s"
        >
          <NavButton name="\portfolio" placeholder="Portfolio"></NavButton>
          <NavButton name="\categories" placeholder="Ponuda"></NavButton>
          <NavButton name="\blog" placeholder="Blog"></NavButton>
          <NavButton name="\faq" placeholder="FAQ"></NavButton>
          <NavButton name="\contact" placeholder="Kontakt"></NavButton>
        </div>

        <style jsx>
          {`
          @media screen and (max-width: 500px){
            .menu-item{
                font-size: 0.8em;
                width:45%;
            }
            
        } 
        @media screen and (max-width: 1200px){
              .menu-item{
                font-size: 1em;
                width:35%;
              }
            }
            .menu-item {
              padding: 0.5em;

              text-align: center;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
                0 2px 10px 0 rgba(0, 0, 0, 0.12);
              background-color: #00c851;
             
              color: white;
              display: flex;
              align-items: center;
              justify-content: space-around;
            }
            * {
              box-sizing: border-box;
            }
            #section4 {
              height: 100vh;
              justify-content: center;
              background-color: transparent;
              align-items: center;
              display: flex;
             /*backdrop-filter: blur(5px) contrast(0.8);*/
            }
            #section4 .container-fluid {
              border-top: 2.5px solid #00c851;
              padding: 100px;
              display: flex;
              justify-content: center;
            S
            }
          `}
        </style>
      </nav>
    </ReactWOW>
  )
}
export default Navigation
