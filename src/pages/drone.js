import React from "react"
import Layout from "../components/layout"
import PricingDrone from "../components/pricingDrone"
import { Link } from "gatsby"

const CommercialsPage = () => {
  return (
    <Layout>
      <section className="grid-wrap">
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "#00c851" }}
        >
          Cjenik snimanja iz zraka dronom
        </h2>
        <p className="text-left">
          Naručenom poslu pristupamo vrlo savjesno te posjedujemo više
          bespilotnih letjelica s kojima radimo. Imamo više licenciranih pilota
          bespilotnih zrakoplova koje vam šaljemo na prethodno dogovorenu
          lokaciju.
        </p>
        <PricingDrone></PricingDrone>
        <p className="text-center">
          U cjeniku je prikazana osnovna cijena, međutim ona ovisi o složenosti
          i mjestu snimanja.
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
