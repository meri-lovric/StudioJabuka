import React from "react"
import Layout from "../components/layout"
import PricingDrone from "../components/pricingDrone"
import { Link } from "gatsby"
import Drone from "../images/Prices/Drone.png"

const CommercialsPage = () => {
  return (
    <Layout>
      <section className="grid-wrap">
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "rgb(32, 31, 29)" }}
        >
          Cjenik snimanja iz zraka dronom
        </h2>
        <p className="text-center font-weight-bold">
          Naručenom poslu pristupamo vrlo savjesno te posjedujemo više
          bespilotnih letjelica s kojima radimo. Imamo više licenciranih pilota
          bespilotnih zrakoplova koje vam šaljemo na prethodno dogovorenu lokaciju.
        </p>
        <PricingDrone></PricingDrone>
        <p className="text-center font-weight-bold my-5">
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
          background-image: url(${Drone});
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