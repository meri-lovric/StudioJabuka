import React from "react"
import { graphql, StaticQuery, useStaticQuery } from "gatsby"
import Search from "./textSearch"

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
const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
              author
              tag
              
            }
            excerpt
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <MDBCard className=" px-5 pb-5">
      <MDBCardBody>
        <Search></Search>
        <p className="text-center w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
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
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                      alt=""
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
                <Link to={node.fields.slug} style={{textDecoration: 'none'}}><h3 className="title font-weight-bold mb-3 p-0 green-text"> <strong>{node.frontmatter.title}</strong></h3></Link>           
                
                <p className="excerpt">{node.excerpt}</p>

                <p>
                  by
                  <p className="author">{node.frontmatter.author}</p>,{" "}
                  <p className="date">
                    {node.frontmatter.date} {node.timeToRead}min read
                  </p>
                </p>
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
  )
}

export default BlogPage
