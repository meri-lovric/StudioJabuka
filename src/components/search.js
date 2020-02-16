import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import ReactWOW from "react-wow"

const Search = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-dark "
        style={{ backgroundColor: "#00c851"}}
      >
        <ReactWOW animation="fadeIn">
          <div className="h1" style={{ color: "white" }}>
            Portfolio
          </div>
        </ReactWOW>
        <form className="form-inline">
          <div className="md-form my-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              aria-label="Pretraži"
            ></input>
          </div>
          <button
            className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
            type="submit"
          >
            Pretraži
          </button>
        </form>
      </nav>
    </React.Fragment>
  )
}

export default Search
