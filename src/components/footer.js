import React from "react"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Vimeo from "../images/Vimeo.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
export const Footer = () => {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "//images/Instagram//" } }) {
        edges {
          node {
            childImageSharp {
              fluid(
                quality: 100
                traceSVG: { turdSize: 1.5, blackOnWhite: true }
                webpQuality: 100
                grayscale: true
                maxWidth: 100
                maxHeight: 100
                sizes: "100px"
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
    <footer
      className="container-fluid"
      style={{
        padding: "20px 0",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        zIndex: 20,
        marginBottom: `0px`,
        backgroundColor: "#201f1d",
        color: "white",
      }}
    >
      <section
        className="SocialMedia"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p>Find us here</p>
        <div
          className="Icons"
          style={{
            filter:
              "invert(99%) sepia(0%) saturate(2%) hue-rotate(184deg) brightness(75%) contrast(100%)",
          }}
        >
          <img src={Facebook} alt="facebook" />
          <img src={Instagram} alt="instagram" />
          <img src={Vimeo} alt="vimeo" />
        </div>
      </section>
      <div
        className="Instagram"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <Img
            fluid={query.allFile.edges[0].node.childImageSharp.fluid}
            alt="footer-1"
            style={{ height: "10vw", width: "10vw", margin: "10px" }}
          />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <Img
            fluid={query.allFile.edges[1].node.childImageSharp.fluid}
            alt="footer-1"
            style={{ height: "10vw", width: "10vw", margin: "10px" }}
          />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <Img
            fluid={query.allFile.edges[2].node.childImageSharp.fluid}
            alt="footer-1"
            style={{ height: "10vw", width: "10vw", margin: "10px" }}
          />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <Img
            fluid={query.allFile.edges[3].node.childImageSharp.fluid}
            alt="footer-1"
            style={{ height: "10vw", width: "10vw", margin: "10px" }}
          />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <Img
            fluid={query.allFile.edges[4].node.childImageSharp.fluid}
            alt="footer-1"
            style={{ height: "10vw", width: "10vw", margin: "10px" }}
          />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
        <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
          <Img
            fluid={query.allFile.edges[5].node.childImageSharp.fluid}
            alt="footer-1"
            style={{ height: "10vw", width: "10vw", margin: "10px" }}
          />
          <a href="#!">
            <MDBMask overlay="white-slight" />
          </a>
        </MDBView>
      </div>
    </footer>
  )
}

export default Footer
