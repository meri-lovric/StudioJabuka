import React from "react"
import Layout from "../components/layout"
import PricingCommercial from "../components/pricingCommercial"
import { Link } from "gatsby"

const CommercialsPage = () => {
  return (
    <Layout>
      <section
        className="grid-wrap"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
      >
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "#00c851" }}
        >
          Cjenik snimanja za web, kataloge i promocije
        </h2>
        <p className="text-left">
          Kvalitetne fotografije najvažniji su dio Vašeg oglasa. Bilo da se radi
          o prodaji nekretnine, o najmu ili reklami, fotografija daje
          vjerodostojan uvid. Zato je važno da fotografije budu atraktivne i
          kvalitetno snimljene. Također je važna i dobra priprema prostora i
          rasvjete prije samog početka.
        </p>
        <PricingCommercial></PricingCommercial>
        <p className="text-center  my-5">
          U cjeniku su prikazane osnovne cijene, međutim one ovise o složenosti
          i lokaciji fotografiranja.
          <br /> Ukoliko želite znati točan iznos ili imate drugih pitanja,
          javite nam se:
        </p>
        <div className="text-center">
        <Link to="/categories" className="btn-success btn">
            Povratak na kategorije
          </Link>
          <Link to="/contact" className="btn-success btn">
            Kontakt
          </Link>
          
        </div>
      </section>

      <style jsx>{`
        .grid-wrap {
          padding: 4em 10em;
          background-color: #ffffff;
          background: url("../images/cubes.png");
        }
        p {
          font-size: 1.2em;
        }
        #layout > section > div.text-center > a{
          font-size: 1.1em;
        }
        @media screen and (max-width: 768px) {
          .grid-wrap {
            padding: 1em !important;
          }
        }
      `}</style>
    </Layout>
  )
}
export default CommercialsPage
