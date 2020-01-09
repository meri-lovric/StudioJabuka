import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Search from "./lunrSearch"
import ReactWOW from "react-wow"
<<<<<<< HEAD
import { MDBIcon } from "mdbreact"
=======
import { MDBIcon } from "mdbreact";
import { GoSearch } from "react-icons/go";


>>>>>>> 1059ee7a27e115e7a741c33dc2844fa01a6f8f12

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          site {
            siteMetadata {
              blogPosts {
                path
              }
            }
          }
          siteSearchIndex {
            index
          }
        }
      `}
      render={data => (
        
        <React.Fragment>
<<<<<<< HEAD
          <nav
            class="navbar navbar-dark "
            style={{
              backgroundColor: "#00c851",
              marginTop: "150px",
              marginBottom: "20px",
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
                <Search searchIndex={data.siteSearchIndex.index} />
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
=======
        <nav
          class="navbar navbar-dark "
          style={{ 
            backgroundColor: "#00c851",
            marginTop: "8em",
            marginBottom: "3em"
        }}
        >
          <ReactWOW animation="fadeIn">
            <div className="h1" style={{ color: "white" }}>
              Blog
            </div>
          </ReactWOW>
          <form class="form-inline">
            <div class="md-form my-0" style = {{display: "flex", paddingTop: "1em"}}>
            <div style = {{color: "white"}}>
            <GoSearch/>
            </div>
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
>>>>>>> 1059ee7a27e115e7a741c33dc2844fa01a6f8f12
      )}
    />
  )
}
