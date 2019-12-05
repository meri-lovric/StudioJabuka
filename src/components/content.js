import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import useTypewriter from "react-typewriter-hook"
import Carousel from "react-bootstrap/Carousel"
import 'bootstrap/dist/css/bootstrap.min.css';
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
            childImageSharp {
              fluid(quality: 100, traceSVG: { turdSize: 10 }, webpQuality: 100) {
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
    <Carousel>
      <Carousel.Item>
        <Img
          style={{ height: "100vh" }}
          className="carousel-img d-block w-100"
          fluid={query.allFile.edges[0].node.childImageSharp.fluid}
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
            }}
          >
            {MagicWriter("Studio Jabuka")}
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          style={{ height: "100vh" }}
          className="carousel-img d-block w-100"
          fluid={query.allFile.edges[1].node.childImageSharp.fluid}
          alt=""
        />

        <Carousel.Caption>
        <h3
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "10vh",
              fontSize: "75px",
              border: "solid 1px white",
            }}
          >
            {MagicWriter("Studio Jabuka")}
          </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          style={{ height: "100vh" }}
          className="carousel-img d-block w-100"
          fluid={query.allFile.edges[2].node.childImageSharp.fluid}
          alt=""
        />

        <Carousel.Caption>
        <h3
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "10vh",
              fontSize: "75px",
              border: "solid 1px white",
            }}
          >
            {MagicWriter("Studio Jabuka")}
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Img
          style={{ height: "100vh" }}
          className="carousel-img d-block w-100"
          fluid={query.allFile.edges[3].node.childImageSharp.fluid}
          alt=""
        />

        <Carousel.Caption>
        <h3
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              minHeight: "10vh",
              fontSize: "75px",
              border: "solid 1px white",
            }}
          >
            {MagicWriter("Studio Jabuka")}
          </h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
export default Content

/*
export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "//images/SampleImages/Sample1.jpg//" } }) {
      edges {
        node {
          id
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`*/
/*
export const data = useStaticQuery(graphql`
{
  allFile {
    edges {
      node {
        id
        childImageSharp {
          fluid {
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
  }
}
`)*/
