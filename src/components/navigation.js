import React from "react"
import AppleBranch from "../images/AppleBranch.png"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
const Navigation = () => {
  return (
    <div id="section3" class="container-fluid"
      className="navigation"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height:"100vh",
        marginBottom: "8rem",
        marginLeft: "8rem",
        marginRight:"8rem"
      }}
    >
      <a className=" menu-item underlined  underlined--thick"> Portfolio</a>
      <img src={AppleBranch} alt="apple-divider" />
      <a className=" menu-item underlined  underlined--thick" href="\categories"> Ponuda</a>
      <img src={AppleBranch} alt="apple-divider" />
      <a className=" menu-item underlined  underlined--thick" href="\blog"> Blog</a>
      <img src={AppleBranch} alt="apple-divider" />
      <a className=" menu-item underlined  underlined--thick"> Q&A</a>

      <style jsx>
        {`
          .menu-item {
            font-size: 2em;
            padding: 0.5em;
            max-width: 5em;
          }
        `}
      </style>
    </div>
  )
}
export default Navigation
