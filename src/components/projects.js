import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"

import { useStaticQuery, graphql } from "gatsby"
import ReactWOW from "react-wow"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
const Projects = () => {
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
              image{childImageSharp {
                fluid {
                  tracedSVG
                }
              }}
            }
            excerpt
            timeToRead
          }
        }
      }
    }
  `)
  return (
    <section
      id="section3"
      class="text-center py-5"
      style={{ backgroundColor: " #eee"}}
    >
      <div class="container">
        <h2 class="h1-responsive font-weight-bold mb-5" style = {{color: "#00c851"}}>Novosti</h2>
        <p class="grey-text w-responsive mx-auto mb-5">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit est laborum.
        </p>

        <div class="row text-center">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div class="col-lg-4 col-md-12 mb-lg-0 mb-4" key={node.id}>
              <div class="view overlay rounded z-depth-1">
                <Img
                  fluid={node.frontmatter.image[0].childImageSharp.fluid}
                  class="img-fluid"
                  alt="Sample project image"
                ></Img>
                <a href={node.fields.slug}>
                  <div class="mask rgba-white-slight"></div>
                </a>
              </div>
              <div class="card-body pb-0">
                <h4 class="font-weight-bold my-3"></h4>
                <p class="grey-text">{node.excerpt}</p>
                <a class="btn btn-purple btn-sm" href={node.fields.slug}>View project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
