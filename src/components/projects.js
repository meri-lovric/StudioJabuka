import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import "mdbootstrap/css/bootstrap.min.css"
import "mdbootstrap/css/mdb.min.css"

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
const Projects = () => {
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
    <section
      id="section3"
      className="text-center py-5"
      style={{ backgroundColor: " #eee" }}
    >
      <div className="container">
        <h2
          className="h1-responsive font-weight-bold mb-5"
          style={{ color: "#00c851" }}
        >
          Novosti
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          Naš blog donosi Vam pregled najnovijih vijesti i pogodnosti vezanih uz
          studio te priče i dojmove klijenata. Kvaliteta usluga i proizvoda naš
          je prioritet, a profesionalna
          oprema, ljudstvo i vaše povjerenje naša potpora. <br/>
          Hvala što nas pratite!
        </p>

        <div className="row text-center">
          {data.allMarkdownRemark.edges.slice(0, 3).map(({ node }) => (
            <div className="col-lg-4 col-md-12 mb-lg-0 mb-4" key={node.id}>
              <div className="view overlay rounded z-depth-1">
                <Img
                  key={node.id}
                  classNameName="img-fluid"
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <a href={node.fields.slug}>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body pb-0">
                <h4 className="font-weight-bold my-3">
                  {node.frontmatter.title}
                </h4>
                <p className="grey-text">{node.excerpt}</p>
                <a className="btn btn-purple btn-sm" href={node.fields.slug}>
                  Pročitaj
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default Projects
