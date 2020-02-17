import React from "react"
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact"
import Layout from "../components/layout"
import Contact from "../components/contactForm"
import LeafletMap from "../components/leafletMap"

const ContactPage = () => {
  return (
    <Layout>
      <div className="grid-wrapper">
        <section className="container-fluid my-5">
          <h2
            className="h1-responsive font-weight-bold text-center my-5"
            style={{ color: "#00c851", paddingTop:"1em" }}
          >
            Kontaktirajte nas
          </h2>
          <p className="lead text-lg-left w-responsive mx-auto">
            Kako bismo Vam poslali najbolju ponudu, navedite posebne želje, Vaš
            okvirni budžet, očekivanja. Bit će nam drago prilagoditi se, jer
            uvijek pridajemo pažnju detaljima i Vašim potrebama. <br />
            Predlažemo sastanak, jer naš favorit je ipak razgovor uz kavu ili
            telefonom. Ispunite obrazac ili izravno pošaljite e-mail na
            <a
              className="mail"
              href="mailto:info@studiojabuka.com"
            >
              {" "}
              info@studiojabuka.com
            </a>
            . Odgovorit ćemo na Vaš upit u roku 24 sata. Obično smo
            vikendima zauzeti ili putujemo radi posla.
          </p>
          <p className="lead text-center pb-5">
            Hvala što ste zainteresirani za naše usluge!
          </p>
          <MDBRow style={{ display:"flex", justifyContent:"center", alignItems:"center" }}>
            <MDBCol lg="5" className="xl-0 mb-4">
              <MDBCard>
                <MDBCardBody>
                  <div className="form-header text-center">
                    <div
                      className="h3 fadeIn"
                      style={{
                        color: "#9e9e9e",
                        animationName: "fadeIn",
                        visibility: "visible",
                        paddingTop: "1em",
                      }}
                    >
                      Pošaljite nam upit
                    </div>
                  </div>
                  <div>
                    <Contact></Contact>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="7" className="container-right">
              <div id="map-container" className="z-depth-1 map-container">
                <LeafletMap
                  position={[43.5313269, 16.5261697]}
                  zoom={11}
                ></LeafletMap>
              </div>
              <br />
              <MDBRow className="text-center">
                <MDBCol md="4">
                  
                    <MDBBtn tag="a" color="success" href="https://goo.gl/maps/dk4ZoQ1iMyVkspfg9">
                      <MDBIcon
                        icon="map-marker-alt"
                        style={{ color: "white" }}
                      />
                    </MDBBtn>
                    <p>21251 Žrnovnica</p>
                    <p className="mb-md-0">Hrvatska</p>
                  
                </MDBCol>
                <MDBCol md="4">
                    <MDBBtn color="success" tag="a" href="tel:+385915969080">
                      <MDBIcon icon="phone" style={{ color: "white" }} />
                    </MDBBtn>
                    <p>+385 91 596 9080</p>
                    <p className="mb-md-0">Pon - Pet, 8:00-22:00</p>
                </MDBCol>
                <MDBCol md="4">
                  
                    <MDBBtn color="success" tag="a" href="mailto:info@studiojabuka.com">
                      <MDBIcon icon="envelope" style={{ color: "white" }} />
                    </MDBBtn>
                    <p>info@studiojabuka.com</p>
                  
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </section>
      </div>
      <style jsx>{`
        .mail {
          color: #00c851;
        }
        a {
          color: black;
        }
        .map-container {
          z-index:-2;
        }
        .grid-wrapper {
          padding-top:1em;
          background-color: #ffffff;
          background: url("../images/cubes.png");
        }
        .xl-0 {
          max-width: 550px;
        }
        .container-right{
          max-width: 550px;
        }
      `}</style>
    </Layout>
  )
}

export default ContactPage
