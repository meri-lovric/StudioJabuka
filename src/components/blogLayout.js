import React from "react"
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
import { useStaticQuery, graphql } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
        totalCount
        edges {
          node {
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
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Recent posts
        </h2>
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
            style={{ padding: "2em" }}
          >
            <MDBCol lg="5">
              <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
                <img
                  className="img-fluid"
                  src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                  alt=""
                />
                <a href="#!">
                  <MDBMask overlay="white-slight" />
                </a>
              </MDBView>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="utensils" className="pr-2" />
                  {node.frontmatter.tag}
                </h6>
              </a>
              <h3 className=" title font-weight-bold mb-3 p-0">
                <strong>{node.frontmatter.title}</strong>
              </h3>
              <p className="excerpt">{node.excerpt}</p>

              <p>
                by
                <p className="author">{node.frontmatter.author}</p>,{" "}
                <p className="date">
                  {node.frontmatter.date} {node.timeToRead}min read
                </p>
              </p>
              <MDBBtn color="success" size="md" className="waves-light ">
                Read more
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        ))}
      </MDBCardBody>
    </MDBCard>
  )
}

export default BlogPage
