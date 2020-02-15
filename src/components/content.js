import React from "react"
import useTypewriter from "react-typewriter-hook"
import Carousel from "react-bootstrap/Carousel"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
export const Content = ({ data }) => {
  function MagicWriter(word) {
    const typing = useTypewriter(word)
    return typing
  }
  console.log("Data from page Predavanja:", data)

  const query = useStaticQuery(graphql`
    {
      allFile(filter: { absolutePath: { regex: "//images/SampleImages//" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid(
                quality: 100
                traceSVG: { turdSize: 10 }
                webpQuality: 100
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
              id
            }
          }
        }
      }
    }
  `)
  return (
    <React.Fragment>
      {" "}
      <nav
              className="navbar navbar-expand-md navbar-light md-light"
              style={{ padding: "0px" }}
            >
              <ul
                id="section-buttons"
                className="navbar-nav"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  width: "auto",
                  backdropFilter: "blur(5px) contrast(.8)",
                  height: "100%",
                  zIndex: "15"
                }}
              >
                <a
                  href="#section1"
                  className="nav-link"
                  style={{
                    color: "#a8dd53",
                  }}
                >
                  <li className="icon" id="uno">
                  <i className="fas fa-circle"></i>
                  </li>
                </a>
                <a
                  href="#section2"
                  className="nav-link"
                  style={{
                    color: "#a8dd53",
                  }}
                >
                  <li className="icon" id="due">
                  <i className="fas fa-circle"></i>
                  </li>
                </a>
                <a
                  href="#section3"
                  className="nav-link"
                  style={{
                    color: "#a8dd53",
                  }}
                >
                  <li className="icon" id="tre">
                  <i className="fas fa-circle"></i>
                  </li>
                </a><a
                  href="#section4"
                  className="nav-link"
                  style={{
                    color: "#a8dd53",

                  }}
                >
                  <li className="icon" id="quattro">
                  <i className="fas fa-circle"></i>
                  </li>
                </a>
              </ul>
            </nav>

      <Carousel>
        {query.allFile.edges.map(({ node }) => (
          <Carousel.Item key={node.id}>
            <Img
              style={{ height: "100vh" }}
              key={node.originalName}
              fluid={node.childImageSharp.fluid}
              alt=""
            />
            <Carousel.Caption>
              <h3
                style={{
                  top: "25px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                  minHeight: "10vh",
                  fontSize: "75px",
                  border: "solid 1px white",
                  fontFamily: "Roboto"
                }}
              >
                {MagicWriter("Studio Jabuka")}
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <style>
        {`
        #layout > div > div > div > div.carousel-caption{
          background-color: rgb(238, 238, 238,0.2);

        }
          #gatsby-focus-wrapper > div > div > a.carousel-control-prev {
            left: 50px;
          }
          #layout > div {
            z-index: 1;
          }

          .page {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
            -webkit-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
            -moz-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
            -o-transition: all 0.6s cubic-bezier(0.5, 0.2, 0.2, 1.1);
            color: #fff;
            overflow: hidden;
          }


          .page {
            position: absolute;
          }

          #p1 {
            left: 0;
          }

          #p2,
          #p3,
          #p4,
          #p5 {
            left: 200%;
          }

          #p1 {
            background: darkslateblue;
          }
          #p2 {
            background: tomato;
          }
          #p3 {
            background: gold;
          }
          #p4 {
            background: deeppink;
          }
          #p5 {
            background: rebeccapurple;
          }

          #t2:target #p2,
          #t3:target #p3,
          #t4:target #p4,
          #t5:target #p5 {
            transform: translateX(-190%);
            -webkit-transform: translateX(-190%);
            -moz-transform: translateX(-190%);
            -o-transform: translateX(-190%);
            transition-delay: 0.4s !important;
          }

          #t2:target #p1,
          #t3:target #p1,
          #t4:target #p1,
          #t5:target #p1 {
            background: black;
          }

          #t2:target #p1 .icon,
          #t3:target #p1 .icon,
          #t4:target #p1 .icon,
          #t5:target #p1 .icon {
            -webkit-filter: blur(3px);
          }

          .icon {
            color: rgb(0, 200, 81);
            display: block;
          }

          ul .icon:hover {
            opacity: 0.5;
          }

          .page .icon .title {
            line-height: 2;
          }

          #t2:target ul .icon,
          #t3:target ul .icon,
          #t4:target ul .icon,
          #t5:target ul .icon {
            transform: scale(0.6);
            -webkit-transform: scale(0.6);
            -moz-transform: scale(0.6);
            -o-transform: scale(0.6);
            transition-delay: 0.25s;
          }

          #t2:target #dos,
          #t3:target #tres,
          #t4:target #cuatro,
          #t4:target #cinco {
            transform: scale(1.2) !important;
            -webkit-transform: scale(1.2) !important;
            -moz-transform: scale(1.2) !important;
            -o-transform: scale(1.2) !important;
          }

          #section-buttons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: auto;
            height: 100%;
            z-index: 15;
            background-color: rgb(238, 238, 238,0.2);
          }
          @media screen and (max-width: 400px) {
            #section-buttons {
              display: none !important;
            }
          }

          ul {
            position: fixed;
            z-index: 1;
            top: 0;
            bottom: 0;
            left: 0;
            margin: auto;
            height: 100px;
            width: 10%;
            padding: 0;
            text-align: center;
          }
          #section-buttons li {
            height: 100%;
          }
          #section-buttons .icon {
            transition: all 0.5s ease-out !important;
            -webkit-transition: all 0.5s ease-out;
            -moz-transition: all 0.5s ease-out;
            -o-transition: all 0.5s ease-out;
          }
          #section-buttons a {
            height: 5%;
          }
          a {
            text-decoration: none;
          }

          .title,
          .hint {
            display: block;
          }

          .title {
            font-size: 38px;
          }

          .hint {
            font-size: 13px;
          }

          #p4 .hint {
            display: inherit !important;
          }

          .hint a {
            color: yellow;
            transition: all 250ms ease-out;
            -webkit-transition: all 250ms ease-out;
            -moz-transition: all 250ms ease-out;
            -o-transition: all 250ms ease-out;
          }

          .hint a:hover {
            color: #fff;
          }

          .line-trough {
            text-decoration: line-through;
          }

          .page .icon {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 10%;
            left: 0;
            width: 270px;
            height: 170px;
            margin: auto;
            text-align: center;
            font-size: 80px;
            line-height: 1.3;
            transform: translateX(360%);
            -webkit-transform: translateX(360%);
            -moz-transform: translateX(360%);
            -o-transform: translateX(360%);
            transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
            -webkit-transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
            -moz-transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
            -o-transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1.25);
          }

          .page#p1 .icon {
            height: 220px;
          }

          .page#p1 .icon {
            transform: translateX(10%) !important;
          }

          #t2:target .page#p2 .icon,
          #t3:target .page#p3 .icon,
          #t4:target .page#p4 .icon,
          #t5:target .page#p5 .icon {
            transform: translateX(0) !important;
            -webkit-transform: translateX(0) !important;
            -moz-transform: translateX(0) !important;
            -o-transform: translateX(0) !important;
            transition-delay: 1s;
          }
        `}
      </style>
    </React.Fragment>
  )
}
export default Content
