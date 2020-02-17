import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Search from "./textSearch"
import "bootstrap/dist/css/bootstrap.min.css"

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBMask,
  MDBView,
  MDBBtn,
} from "mdbreact"
import { Link } from "gatsby"
import Img from "gatsby-image"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(name: { eq: "cubes" }, absolutePath: { regex: "//images//" }) {
        id
        childImageSharp {
          fluid(
            quality: 100
            traceSVG: { turdSize: 10 }
            webpQuality: 100
            maxHeight: 320
            maxWidth: 400
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
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              tags
              featuredIcon {
                childImageSharp {
                  fluid(maxHeight: 10, maxWidth: 10) {
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
              image {
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
            excerpt
            timeToRead
          }
        }
      }
    }
  `)
  const backgroundPath = data.file.childImageSharp.fluid.src
  return (
    <div>
      <MDBCard
        className=" px-5 pb-5"
        style={{ background: "url(" + backgroundPath + ")" }}
      >
        <MDBCardBody>
          <Search></Search>
          <p className="lead text-left w-responsive mx-auto pb-5">
            Kvaliteta usluga i proizvoda naš je prioritet, znanje i entuzijazam
            naš pokretač, a profesionalna oprema, ljudstvo i vaše povjerenje
            naša potpora. Donosimo vam najnovije vijesti vezane uz studio,
            pogodnosti, priče o klijentima... <br/>
            Hvala što nas pratite!
          </p>

          {data.allMarkdownRemark.edges.map(({ node }) => (
            <MDBRow
              key={node.id}
              className="article-box"
              style={{ padding: "15px" }}
            >
              <MDBCol lg="5">
                <Link
                  to={node.fields.slug}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <MDBView
                    className="rounded z-depth-2 mb-lg-0 mb-4"
                    hover
                    waves
                  >
                    <Img
                      className="img-fluid"
                      fluid={node.frontmatter.image.childImageSharp.fluid}
                    />
                    <a href="#!">
                      <MDBMask overlay="white-slight" />
                    </a>
                  </MDBView>{" "}
                </Link>
              </MDBCol>
              <MDBCol lg="7">
                <a href="#!" className="green-text">
                  <h6 className="font-weight-bold mb-3">
                    {node.frontmatter.tags}
                  </h6>
                </a>
                <Link to={node.fields.slug} style={{ textDecoration: "none" }}>
                  <h3 className="title font-weight-bold mb-3 p-0 green-text">
                    {" "}
                    <strong>{node.frontmatter.title}</strong>
                  </h3>
                </Link>

                <p className="excerpt">{node.excerpt}</p>

                <div>
                  <div className="author grey-text">{node.frontmatter.author}</div>{" "}
                  <div className="date grey-text">
                    {node.frontmatter.date} {node.timeToRead}min read
                  </div>
                </div>
                <MDBBtn color="purple" size="md" className="waves-light ">
                  <Link
                    to={node.fields.slug}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Pročitaj
                  </Link>
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          ))}

          <hr className="my-5" />
        </MDBCardBody>
      </MDBCard>
      <style>
        {`
            .px-5 {
              background-color: #ffffff;
            }
            #layout > div > div > div > div:nth-child(4) > div.col-lg-7 > button {
              background-color: 
            }
        `}
      </style>
    </div>
  )
}

export default BlogPage
