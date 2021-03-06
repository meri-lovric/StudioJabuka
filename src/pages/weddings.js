import React from "react"
import Layout from "../components/layout"
import PricingWeddings from "../components/pricingWeddings"
import PricingWeddingBooks from "../components/pricingWeddingBooks"
import { Link } from "gatsby"

const WeddingsPage = () => {
  return (
    <Layout>
      <section className="grid-wrap">
        <h2
          className="h1-responsive font-weight-bold text-center my-5"
          style={{ color: "#00c851",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column"
        }}
        >
          Cjenik fotografiranja i snimanja
        </h2>
        <p className="text-left">
          Naš cjenik osmišljen je da Vam na jednostavan i korektan način omogući
          potpunu fleksibilnost u odabiru usluga fotografiranja i video snimanja
          kao i dodatnih proizvoda. Ovakav pristup omogućava da sami kreirate
          ponudu koja će biti u potpunosti prilagođena Vašim individualnim
          željama i potrebama. Za fotografiranje vjenčanja i snimanje vjenčanja
          pripremili smo nekoliko posebnih ponuda, a možete ih i dodatno
          mijenjati.
        </p>
        <PricingWeddings></PricingWeddings>

        <h2
          className="h1-responsive text-center my-5"
          style={{ color: "white" }}
        >
          Wedding book
        </h2>
        <p className="text-left my-5">
          U booku je​​​​​ svaka fotografija odabrana i obrađena s pažnjom da
          najbolje opisuje događaje i emocije s Vašeg vjenčanja. Svaka kolekcija
          uključuje i USB sa svim fotografijama u punoj rezoluciji koje su
          također sve obrađene da stilom odgovaraju onima iz booka. Također, za
          svaki book moguće je odabrati različite opcije obrade za
          personalizaciju naslovne stranice te kutiju.
        </p>
        <PricingWeddingBooks></PricingWeddingBooks>
        <p className="text-center my-4">
          U cjeniku su prikazane osnovne cijene, međutim one ovise o složenosti
          i lokaciji fotografiranja.
          <br /> Ukoliko Vas zanima više informacija ili želite dogovoriti
          termin javite nam se:
        </p>
        <div className="text-center">
        <Link to="/categories" className="btn-success btn">
            Povratak na kategorije
          </Link>
          <Link to="/contact" className="btn-success btn ">
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
        #layout > section > div.text-center > a {
          font-size: 1.1em;
        }
        @media screen and (max-width: 768px) {
          .grid-wrap {
            padding: 1em !important;
          }
      `}</style>
    </Layout>
  )
}
export default WeddingsPage
