import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Search from "./lunrSearch"
import ReactWOW from "react-wow"
import { MDBIcon } from "mdbreact";


export default () => {
  return (
    <StaticQuery
      query={graphql`
          query SearchIndexQuery {
            siteSearchIndex {
              index
            }
          }
        `}
      render={data => (
        <React.Fragment>
        <nav
          class="navbar navbar-dark "
          style={{ 
            backgroundColor: "#00c851",
            marginTop: "150px",
            marginBottom: "20px"
        }}
        >
          <ReactWOW animation="fadeIn">
            <div className="h1" style={{ color: "white" }}>
              Blog
            </div>
          </ReactWOW>
          <form class="form-inline">
            <div class="md-form my-0">
            <MDBIcon icon="search" />
            <Search searchIndex={data.siteSearchIndex.index}/>
            </div>
            
          </form>
        </nav>
        <style jsx>{`
        a {
            color: white !important;
        }
        search {
            color: white !important;
        }
        `}</style>
      </React.Fragment>
      )}
    />
  )
}