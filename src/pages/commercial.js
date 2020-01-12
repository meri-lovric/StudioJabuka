import React from "react"
import Layout from "../components/layout"
import PricingCommercial from "../components/pricingCommercial"
import { Link } from "gatsby"
import Commercial from "../images/Prices/Commercial.png"

const CommercialsPage = () => {
  return (
    <Layout>
      <section className="grid-wrap">
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "white" }}
        >
          Cjenik snimanja za web, kataloge i promocije
        </h2>
        <p className="text-center font-weight-bold">
          Kvalitetne fotografije najvažniji su dio Vašeg oglasa. Bilo da se radi
          o prodaji nekretnine, o najmu ili reklami, fotografija daje
          vjerodostojan uvid. Zato je važno da fotografije budu atraktivne i
          kvalitetno snimljene. Također je važna i dobra priprema prostora i
          rasvjete prije samog početka.
        </p>
        <PricingCommercial></PricingCommercial>
        <p className="text-center font-weight-bold my-5">
          U cjeniku su prikazane osnovne cijene, međutim one ovise o složenosti
          i lokaciji fotografiranja.
          <br /> Ukoliko želite znati točan iznos ili imate drugih pitanja,
          javite nam se:
        </p>
        <div className="text-center">
          <Link to="/contact" className="btn-success btn">
            Kontakt
          </Link>
        </div>
      </section>
      <style jsx>{`
        .grid-wrap {
          padding: 4em 10em;
          background-image: url(${Commercial});
        }
        p {
          font-size: 1.2em;
        }
        .btn {
          border-radius: 10px;
          font-size: 1.1em;
        }
      `}</style>
    </Layout>
  )
}
export default CommercialsPage
