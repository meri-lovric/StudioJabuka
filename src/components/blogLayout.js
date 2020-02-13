import React from "react"
import { graphql,  useStaticQuery } from "gatsby"
import Search from "./textSearch"
import "bootstrap/dist/css/bootstrap.min.css"

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
import { Link } from "gatsby"
import Img from "gatsby-image"
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
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
  return (
    <div>
      <MDBCard className=" px-5 pb-5">
        <MDBCardBody>
          <Search></Search>
          <p className="text-center w-responsive mx-auto mb-5">
            Kvaliteta usluga i proizvoda naš je prioritet, znanje i entuzijazam
            naš pokretač, a profesionalna oprema, ljudstvo i vaše povjerenje
            naša potpora. <br/>
            Donosimo vam najnovije vijesti vezane uz studio, pogodnosti, 
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
                    <MDBIcon icon="utensils" className="pr-2" />
                    {node.frontmatter.tag}
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
                  by
                   <div className="author">{node.frontmatter.author}</div>,{" "}
                  <div className="date">
                    {node.frontmatter.date} {node.timeToRead}min read
                  </div>
                </div>
                <MDBBtn color="success" size="md" className="waves-light ">
                  <Link
                    to={node.fields.slug}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    Read more
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
        background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
      }`}
      </style>
    </div>
  )
}

export default BlogPage
