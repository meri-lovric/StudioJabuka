import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Helmet from "react-helmet";
import Header from "../components/header"

export const  query = graphql`query HomePageQuery{
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          fields{
            slug
          }
          frontmatter {
            title
            date
            author
            featuredIcon {
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
          excerpt
          timeToRead
        }
      }
    }
  }`
const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet
        title="Studio Jabuka"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header>
</Header>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0
        }}
      >
        {children()}
      </div>
    </div>
  )
  TemplateWrapper.propTypes = {
    children: PropTypes.func,
  }
  export default TemplateWrapper