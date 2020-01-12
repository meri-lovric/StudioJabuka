import React from "react"
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn } from "mdbreact"
import Layout from "../components/layout"
import Contact from "../components/contactForm"


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
          Kako bismo Vam poslali najbolju ponudu, navedite posebne želje, Vaš
          okvirni budžet, očekivanja. Bit će nam drago prilagoditi se, jer
          uvijek pridajemo pažnju detaljima i Vašim potrebama. Predlažemo
          sastanak, jer naš favorit je ipak razgovor uz kavu ili telefonom.
          Ispunite obrazac ili izravno pošaljite e-mail na
          info@studiojabuka.com. Odgovorit ćemo na Vaš upit u roku 24 sata (pon
          – pet). Obično smo vikendima zauzeti ili putujemo radi posla.
          <br />
          Hvala što ste zainteresirani za naše usluge!
        </p>
        <MDBRow style={{ margin: "0 10em" }}>
          <MDBCol lg="5" className="lg-0 mb-4">
            <MDBCard>
              <MDBCardBody>
                <div className="form-header text-center">
                  <div
                    className="h3 fadeIn"
                    style={{
                      color: "#00c851",
                      animationName: "fadeIn",
                      visibility: "visible",
                      paddingTop: "1em",
                    }}
                  >
                    Write to us:
                  </div>
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
            ></div>
            <br />
            <MDBRow className="text-center">
              <MDBCol md="4">
                <MDBBtn color="success" tag="a">
                  <MDBIcon icon="map-marker-alt" style={{ color: "white" }} />
                </MDBBtn>
                <p>21251 Žrnovnica</p>
                <p className="mb-md-0">Hrvatska</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn color="success" tag="a">
                  <MDBIcon icon="phone" style={{ color: "white" }} />
                </MDBBtn>
                <p>+385 91 596 9080</p>
                <p className="mb-md-0">Pon - Pet, 8:00-22:00</p>
              </MDBCol>
              <MDBCol md="4">
                <MDBBtn color="success" tag="a">

                  <MDBIcon icon="envelope" style={{ color: "white" }} />
                </MDBBtn>
                <p>info@studiojabuka.com</p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>

      <style jsx>{`
        p {
          font-size: 1.2em;
        }
      `}</style>
    </Layout>
  )
}

export default ContactPage
