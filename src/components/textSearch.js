import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Search from "./lunrSearch"
import ReactWOW from "react-wow"
<<<<<<< HEAD
import { GoSearch } from "react-icons/go"
=======
import { MDBIcon } from "mdbreact";
import { GoSearch } from "react-icons/go";
>>>>>>> 555d153d6121c213014c360e01a423501f8b230f

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
<<<<<<< HEAD
          <nav
            class="navbar navbar-dark "
            style={{
              backgroundColor: "#00c851",
              marginTop: "8em",
              marginBottom: "3em",
            }}
          >
            <ReactWOW animation="fadeIn">
              <div className="h1" style={{ color: "white" }}>
                Blog
              </div>
            </ReactWOW>
            <form class="form-inline">
              <div
                class="md-form my-0"
                style={{ display: "flex", paddingTop: "1em" }}
              >
                <div style={{ color: "white" }}>
                  <GoSearch />
                </div>
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
>>>>>>> 555d153d6121c213014c360e01a423501f8b230f
      )}
    />
  )
}
