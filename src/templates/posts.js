import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import Author from "../components/author"
import Layout from "../components/layout"
export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout style={{gridGap:"20vh"}}>
      {" "}
      <div
        className="blog-text"
       
      >
         <h2 className="h1-responsive font-weight-bold text-center my-5">
         {post.frontmatter.title}
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          </p>
        </div>
      <Author> {post.frontmatter.author}</Author>
      <style jsx>{`
      #layout{
        grid-gap:20vh;
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
  }
`
