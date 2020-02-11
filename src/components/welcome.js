import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import Sample from "../images/SampleImages/15110997_1379393578791937_2498445392797748409_o.jpg"
import { useStaticQuery, graphql } from "gatsby"
import ReactWOW from "react-wow"
const Welcome = () => {
  /*const data = useStaticQuery(graphql`
    {
      allFile(filter: {internal: {mediaType: {eq: "text/markdown"}}}) {
        edges {
          node {
            id
          }
        }
      }
    }
  `)*/
  return (
    <ReactWOW animation="fadeInUp">
      <section id="section2" className="py-5" style={{
          display:"flex",
          alignItems:"center",
          height: "100vh"
        }}>
        <div
          className="container"
          
        >
          <h2 className="h1-responsive font-weight-bold text-center mb-5" style = {{color: "#00c851"}}>
            Foto Studio
          </h2>
          <p className="lead grey-text text-center w-responsive mx-auto mb-5">
            Studio Jabuka je fotografski studio iz Splita. Naša ekipa nudi vam
            sve fotografske usluge, od fotografiranja vjenčanja i raznih drugih
            prigoda, do obrade i retuširanja fotografija.
          </p>
          <div className="row">
            <div className="col-lg-5 text-center text-lg-left view overlay rounded z-depth-1">
              <img className="img-fluid" src={Sample} alt="Sample image"></img>
              <div className="mask rgba-white-slight"></div>
            </div>

            <div className="col-lg-7">
              <div className="row mb-3">
                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">Foto</h5>
                  <p className="grey-text">
                    Snimanja foto-sessiona na lokaciji i u studiju, obrade i
                    retuširanja fotografija
                  </p>
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">Video</h5>
                  <p className="grey-text">
                    Usluge snimanja i produkcije videa najviše
                    kvalitete, snimanja vjenčanja i raznih drugih prigoda.
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-10 col-md-11 col-10">
                  <h5 className="font-weight-bold mb-3">Book</h5>
                  <p className="grey-text mb-0">
                    Izrade book-ova za modele, pripreme za tisak, izrade foto
                    albuma svih vrsta, izrade najkvalitetnijih tiskanih
                    book-albuma...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ReactWOW>
  )
}
export default Welcome
