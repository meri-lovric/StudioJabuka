import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { MDBMask, MDBView } from "mdbreact"
import {SRLWrapper} from "simple-react-lightbox"
const PortfolioGrid = (props) => {
 
  return (
    <SRLWrapper ><Img key={props.id} fluid={props.fluid}/></SRLWrapper>
  )
}
export default PortfolioGrid
