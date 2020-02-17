import React from "react"
import Author from "../components/author"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const backgroundPath = data.file.childImageSharp.fluid.src

  const post = data.markdownRemark
  return (
    <Layout style={{gridGap:"20vh"}}>
      {" "}
      <div
        className="blog-text"
        style={{background:"url("+backgroundPath+")"}}
      >
         <h2 className="h1-responsive font-weight-bold text-center my-5">
         {post.frontmatter.title}
          </h2>
          <p className="text-left w-responsive mx-auto mb-5">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </p>
        </div>
      <Author > {post.frontmatter.author}</Author>
      <style jsx>{`
      #layout{
        grid-gap:10vh;
      }
      #layout > div.blog-text > h2 {
        color: #9e9e9e !important;
      }
      `}</style>
    </Layout>
  )
}
export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        author
        date
      }
    }
    file(name: {eq: "cubes"}, absolutePath: {regex: "//images//"}) {
      id
      childImageSharp {
        fluid(quality: 100, traceSVG: {turdSize: 10}, webpQuality: 100, maxHeight: 320, maxWidth: 400) {
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
`
