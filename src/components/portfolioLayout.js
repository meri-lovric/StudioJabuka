import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ReactWOW from "react-wow"

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
      id= "portfolio-grid"
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
            </div>
          ))}
        </div>
      </div>

    </React.Fragment>
  )
}

export default PortfolioLayout
