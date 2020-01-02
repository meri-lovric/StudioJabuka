import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactWOW from "react-wow"

const Search = () => {
  return (
    <React.Fragment>
      <nav
        class="navbar navbar-dark "
        style={{ backgroundColor: "#a8dd53"}}
      >
        <ReactWOW animation="fadeIn">
          <div className="h1" style={{ color: "white" }}>
            Portfolio
          </div>
        </ReactWOW>
        <form class="form-inline">
          <div class="md-form my-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
              aria-label="Search"
            ></input>
          </div>
          <button
            class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </React.Fragment>
  )
}

export default Search
