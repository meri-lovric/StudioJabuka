import React from "react";
import { MDBContainer, MDBCardHeader, MDBIcon, MDBMedia } from "mdbreact";
import Comments from "remark-ninja-react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const BlogComponentsPage = ({children}) => {
  const data = useStaticQuery(graphql`
  {
    file(name: {eq: "circle-cropped"}, absolutePath: {regex: "//images//"}) {
      id
      absolutePath
      relativePath
      relativeDirectory
      url
      dir
      extension
      dev
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
`)
  return (
      <MDBContainer>
        <MDBCardHeader className="border-0  font-weight-bold d-flex justify-content-between">
          <p className="mr-4 mb-0">About the author</p>
          <ul className="list-unstyled text-default list-inline mb-0">
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="envelope"  />Send message</li>
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="user" />See profile</li>
            <li className="list-inline-item mr-3"><MDBIcon className="mr-2" icon="rss" />Follow</li>
          </ul>
        </MDBCardHeader>
        <MDBMedia className="p-4 bg-white">
          <MDBMedia >
            <Img className="card-img-100 rounded-circle d-flex z-depth-1 mr-3" fluid={data.file.childImageSharp.fluid} alt="" />
          </MDBMedia>
          <MDBMedia body>
            <h5 className="font-weight-bold text-default mt-0">
              {children}
            </h5>
            <ul className="list-unstyled list-inline mb-2 pt-1">
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="facebook" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="twitter" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="google-plus" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="linkedin" />
              </li>
              <li className="list-inline-item">
                <MDBIcon fab className="grey-text" size="lg" icon="instagram" />
              </li>
            </ul>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod consectetur accusamus velit nostrum et
            magnam.
          </MDBMedia>
        </MDBMedia>
        
        <Comments
                siteId="0a8e758d-d437-4231-a271-ea43ee0b9c25"
                threadSlug="komentari"
                />
      <style>
        {`
        #layout > div.container > div:nth-child(4) > form {
          margin-top: 2em;
        }
        #layout > div.container > div.media.p-4.bg-white > div.media-body > h5 {
          color: #00c851 !important;
        }
        #layout > div.container > div.card-header.border-0.font-weight-bold.d-flex.justify-content-between > ul {
          color: #00c851 !important;
        }
        `}
      </style>
      </MDBContainer>
  );
}
export default BlogComponentsPage;