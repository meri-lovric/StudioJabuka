import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactWOW from "react-wow"
const Search = (props) => {
  let title =  (props.children || "Portfolio").toString()
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-dark "
        style={{ backgroundColor: "#00c851" }}
      >
        <ReactWOW animation="fadeIn">
          <div className="h1 portfolio-title" style={{ color: "white" }}>
            {title}
          </div>
        </ReactWOW>
        <div
          className="buttons-container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flexEnd",
          }}
        >
          <a href="/portfolio-weddings">
            <button
              className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
              type="submit"
             
            >
              Vjenčanja
            </button>
          </a>
          <a href="/portfolio-drone">
            <button
              className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
              type="submit"
            >
              Drone
            </button>
          </a>
          <a href="/portfolio-catering">
            <button
              className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
              type="submit"
            >
              Catering
            </button>
          </a>
          <a href="/portfolio">
            <button
              className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
              type="submit"
            >
              Sve
            </button>
          </a>
        </div>
      </nav>
      <style jsx>{`
      @media screen and (max-width: 900px){
        .portfolio-title{
          font-size: 1.4em;
        }
        .navbar{
          display:flex;
          flex-direction:column;
          align-items:center;
        }
      }
      `}</style>
    </React.Fragment>
  )
}

export default Search
