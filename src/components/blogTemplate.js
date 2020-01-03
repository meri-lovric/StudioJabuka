import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import Helmet from "react-helmet";
import Header from "../components/header"
const TemplateWrapper = ({ children }) => (
    <div>
      <Helmet
        title="The Gray Web Blog"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header></Header>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
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