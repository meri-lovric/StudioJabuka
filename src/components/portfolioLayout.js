import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactWOW from "react-wow"
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBIcon,
  MDBView,
  MDBBtn,
} from "mdbreact"
const PortfolioLayout = ({}) => {
  const data = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "//images/Portfolio//" } }) {
        edges {
          node {
            childImageSharp {
              fluid(
                quality: 100
                traceSVG: { threshold: 10 }
                webpQuality: 100
                maxWidth: 350
                maxHeight: 235
              ) {
                aspectRatio
                originalImg
                base64
                originalName
                src
                srcSet
                srcSetWebp
                srcWebp
                presentationHeight
                presentationWidth
              }
            }
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
          {data.allFile.edges.map(({ node }) => (
            <div class="col-lg-4 w-50 h-50  px-25 py-25 ">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <Img
                  style={{
                    objectFit: "cover",
                    margin: "15px",
                    width: "100%",
                    height: "100%",
                  }}
                  key={node.id}
                  fluid={node.childImageSharp.fluid}
                  alt=""
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
      <style jsx>{`#portfolio-grid .view .gatsby-image-wrapper{
        position:initial !important;
       
      }
      
      `}</style>
    </React.Fragment>
  )
}

export default PortfolioLayout
