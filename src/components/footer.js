import React from "react"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Vimeo from "../images/Vimeo.png"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
 
  MDBMask,
  MDBView,
} from "mdbreact"
export const Footer = () => {
  const query = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "//images/Instagram//" } }) {
        edges {
          node {
            id
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
      id="footer"
    >
      <section
        className="SocialMedia"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center"
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
          <a href="https://hr-hr.facebook.com/studiojabuka/" >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/studiojabuka/?hl=hr"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a href="https://vimeo.com/studiojabuka">
            <img src={Vimeo} alt="vimeo" />
          </a>
        </div>
      </section>
      <div
        className="Instagram"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        {query.allFile.edges.map(({ node }) => (
          <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves key={node.id}>
            <Img
              fluid={node.childImageSharp.fluid}
              alt={"footer" + node.id}
              style={{ height: "10vw", width: "10vw", margin: "10px" }}
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
        ))}
      </div>
      <style jsx>{`
                @import url('https://fonts.googleapis.com/css?family=Prompt&display=swap');

      #footer{

        padding: 20px 0;
        width: 100vw;
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        z-index: 10;
        margin-bottom: 0px;
        background-color: #201f1d;
        color: white

      }
      .SocialMedia p{
        font-family: 'Prompt', sans-serif;

      }
      .Icons{
        display:flex;
        justify-content:space-around;

      }
      .Icons a {
       display:flex;
       justify-content:center;
       width: 45%;
      }
      .Icons img{
        width: 45%;

      }
        @media screen and (max-width: 1200px) {
          .Icons a {
            width: 45%;
          }
          .Icons img {
            width: 45%;
          }
          .SocialMedia p {
            font-size: 85%;
          }
          
        }
        @media screen and (max-width: 950px) {
          #footer{
            flex-direction:column-reverse;

          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
