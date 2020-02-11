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
          className=" row text-center container animated slideInRight wow  responsive "
          data-wow-delay="0.6s"
        >
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <a
              className=" menu-item h1-responsive btn underlined  underlined--thick  "
              href="\portfolio"
              style={{
                backgroundColor: "#00c851",
                borderRadius: "15px",
                color: "white",
              }}
            >
              {" "}
              Portfolio
            </a>
          </div>
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <a
              className=" menu-item  btn underlined  underlined--thick "
              href="\categories"
              style={{ backgroundColor: "#00c851" }}
            >
              {" "}
              Ponuda
            </a>
          </div>
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <a
              className=" menu-item  btn underlined  underlined--thick"
              href="\blog"
              style={{ backgroundColor: "#00c851" }}
            >
              {" "}
              Blog
            </a>
          </div>
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <a
              className=" menu-item underlined  btn    underlined--thick"
              href="\faq"
              style={{ backgroundColor: "#00c851" }}
            >
              {" "}
              Pitanja i komentari
            </a>
          </div>
          <div class="col-lg-4 col-md-12 mb-lg-0 mb-4">
            <a
              className=" menu-item underlined  btn btn-success   underlined--thick "
              href="\contact"
              style={{ backgroundColor: "#00c851" }}
            >
              Kontakt
            </a>
          </div>
        </div>

        <style jsx>
          {`
            .menu-item {
              font-size: 1.8em;
              padding: 0.5em;

              text-align: center;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
                0 2px 10px 0 rgba(0, 0, 0, 0.12);
              background: white;
              background-color: #00c851;
              border-radius: 15px;
              color: white;
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
              backdrop-filter: blur(5px) contrast(0.8);
            }
            #section4 .container-fluid {
              border: 1px solid #e9e9e9;
              padding: 100px;
              display: flex;
              justify-content: center;
              background-color: white;
              box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
                0 2px 10px 0 rgba(0, 0, 0, 0.12);
            }
          `}
        </style>
      </nav>
    </ReactWOW>
  )
}
export default Navigation