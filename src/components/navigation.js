import React from "react"
import AppleBranch from "../images/AppleBranch.png"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Sample from "../images/SampleImages/Sample1.jpg"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"
import ReactWOW from "react-wow"
const Navigation = () => {
  return (
    <ReactWOW animation="fadeInLeft">
      <nav id="section4" class="navbar navbar-expand-lg  ">
        <div
          class="container animated slideInRight wow  "
          data-wow-delay="0.6s"
          
        >
          <a
            className=" menu-item   btn btn-green underlined  underlined--thick  "
            href="\portfolio"
          >
            {" "}
            Portfolio
          </a>

          <a
            className=" menu-item  btn btn-success  underlined  underlined--thick "
            href="\categories"
          >
            {" "}
            Ponuda
          </a>

          <a className=" menu-item  btn btn-success underlined  underlined--thick" href="\blog">
            {" "}
            Blog
          </a>

          <a className=" menu-item underlined  btn btn-success   underlined--thick "> Q&A</a>
          <a className=" menu-item underlined  btn btn-success   underlined--thick " href="\contact"> Kontakt</a>
        </div>{" "}
        <style jsx>
          {`
            .menu-item {
              font-size: 2em;
              padding: 0.5em;
             
              text-align: center;
              box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
              background: white;
              opacity: 75%;
              backdrop-filter: blur(5px) contrast(0.8);

            }
            * {
              box-sizing: border-box;
            }
            #section4 {
              height: 100vh;
              justify-content: center;
              background-color: whitesmoke;
              align-items: center;
              display: flex;
              opacity: 75%;
              backdrop-filter: blur(5px) contrast(0.8);
            }
            #section4 .container {
              border: 1px solid #e9e9e9;
              padding: 100px;
              display: flex;
              justify-content: center;
              background-color:white;
              box-shadow:0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
              
            }
            btn-green {
              background-color: #00c851 !important;
            }
          `}
        </style>
      </nav>
    </ReactWOW>
  )
}
export default Navigation
