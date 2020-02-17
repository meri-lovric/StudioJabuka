import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactWOW from "react-wow"

const Search = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-dark "
        style={{ backgroundColor: "#00c851" }}
      >
        <ReactWOW animation="fadeIn">
          <div className="h1" style={{ color: "white" }}>
            Portfolio
          </div>
        </ReactWOW>
        <div className="buttons-container" style={{display:"flex", flexDirection:"row", justifyContent:"flexEnd"}}>
          <button
            className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
            type="submit"
          >
            Vjenčanja
          </button>
          <button
            className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
            type="submit"
          >
            Dron
          </button>
          <button
            className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
            type="submit"
          >
            Catering
          </button>
        </div>
      </nav>
    </React.Fragment>
  )
}

export default Search
