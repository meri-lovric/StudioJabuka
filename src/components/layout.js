import React from "react"
import Header from "./header"
import Footer from "./footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const query = useStaticQuery(graphql`
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
    }
  `)
  const backgroundPath = query.file.childImageSharp.fluid.src

  return (
    <div id="layout" style={{ background: "url(" + backgroundPath + ")" }}>
      <Header style={{ position: "fixed" }}></Header>
      {children}
      <Footer style={{ position: "fixed", bottom: "0" }}></Footer>
      <style jsx>{`
        #layout {
          width: 100vw;
          display: grid;
          grid-template-columns: 1fr;
        }
        ::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

export default Layout
