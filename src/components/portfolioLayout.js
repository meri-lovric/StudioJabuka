import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
 
  MDBMask,
  MDBView,
} from "mdbreact"
const PortfolioLayout = () => {
  const query = useStaticQuery(graphql`
  {
    allAirtable {
      edges {
        node {
          data {
            slika {
              localFiles {
                childImageSharp {
                  fluid(webpQuality: 100, pngQuality: 100, jpegQuality: 100, maxHeight: 235, maxWidth:350) {
                    base64
                    tracedSVG
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                    originalImg
                    originalName
                    presentationWidth
                    presentationHeight
                  }
                }
              }
            }
            Tip
          }
          id
        }
      }
    }
  }
`)
  return (
    <React.Fragment>
      <div
        id="portfolio-grid"
        class="container-fluid"
        style={{
          width: "inherit",
          display: "grid",
          gridTemplateColumns: "1fr",
          gridAutoFlow: "row",
          alignItems: "center",
          justifyContent: "center",
          overflowY: " scroll",
          position: "relative",
          height: "75vh",
          padding: "20px",
        }}
      >
        <div class="row my-n25 " style={{}}>
          {query.allAirtable.edges.map(({ node }) => (
            <div class="col-lg-4 w-50 h-50  px-25 py-25 " key={node.id}>
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <Img
                  style={{
                    objectFit: "cover",
                    margin: "15px",
                    width: "100%",
                    height: "100%",
                  }}
                  key={node.id}
                  fluid={node.data.slika.localFiles[0].childImageSharp.fluid}
                  alt={node.data.Tip}
                  class="img-fluid z-depth-1-half mask"
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        #portfolio-grid .view .gatsby-image-wrapper {
          position: initial !important;
        }
        #portfolio-grid > div > div > div {
          margin-bottom: 3vh !important;
        }
      `}</style>
    </React.Fragment>
  )
}

export default PortfolioLayout
