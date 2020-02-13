import React from "react"
import Layout from "../components/layout"
import { MDBIcon } from "mdbreact"
import { Link } from "gatsby"

const ThanksPage = () => {
  return (
    <Layout>
      <div className="grid-wrap">
        <div className="text-center">
          <MDBIcon icon="check" size="7x" className="animated bounceInDown" />
          <h1>Hvala Vam!</h1>
          <p>Vaša je poruka zaprimljena.</p>
          <p>Kontaktirat ćemo Vas u roku od 24h.</p>
          <Link to="/" className="link-to-home">
            Povratak na početnu stranicu
          </Link>
        </div>
      </div>
      <style jsx>{`
        p {
          font-size: 1.1em;
        }
        .link-to-home {
          color: #00c851;
          font-size: 1.2em;
          font-weight: 400;
          border-style: solid;
          padding: 5px;
          border-radius: 5px;
        }
        .bounceInDown {
          padding-bottom: 0.3em;
          color: #00c851;
        }
        .text-center {
          margin: 4.8em 0;
        }
        .grid-wrap {
          background-color: #ffffff;
          background-image: url("https://www.transparenttextures.com/patterns/cubes.png");
        }
      `}</style>
    </Layout>
  )
}
export default ThanksPage
