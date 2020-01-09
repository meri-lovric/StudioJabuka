import React from "react"
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact"
import Layout from "../components/layout"
import Contact from "../components/contactForm"
import LeafletMap from "../components/leafletMap"
import "../../node_modules/leaflet/dist/leaflet"

const ContactPage = () => {
  return (
    <Layout>
      <section className="my-5">
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "#00c851" }}
        >
          Kontaktirajte nas
        </h2>
        <p className="text-center w-responsive mx-auto pb-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur veniam.
        </p>
        <MDBRow style={{ margin: "0 10em" }}>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header">
                  <h3 className="h2-responsive text-center my-5">
                    Write to us:
                  </h3>
                </div>
                <div>
                  <Contact></Contact>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="7">
            <div
              id="map-container"
              className="rounded z-depth-1-half map-container"
            >
              {typeof window !== "undefined" && (
                <LeafletMap
                  position={[43.508133, 16.440193]}
                  zoom={13}
                  markerText={"Hello, this is a marker"}
                  style = {{height: "400px", width: "200px"}}
                />
              )}
            </div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="map-marker-alt" />
                </MDBBtn>
                <p>New York, 94126</p>
                <p className="mb-md-0">United States</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+ 01 234 567 89</p>
                <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                  <MDBIcon icon="envelope" />
                </MDBBtn>
                <p>info@gmail.com</p>
                <p className="mb-md-0">sale@gmail.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

      <style jsx>{``}</style>
    </Layout>
  )
}

export default ContactPage
