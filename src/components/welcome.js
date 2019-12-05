import React from "react"
import "../styles/description.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { useStaticQuery, graphql } from "gatsby"

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
    <p
      id="section2"
      class="container-fluid"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
        wordWrap: "break-word",
        fontFamily: "'Source Code Pro' sans-serif",
        padding: "10% 20%",
        textAlign: "center",
      }}
    >
      <h2>Dobrodošli</h2>
      <p>
        <a className=" welcome underlined underlined--thin">
        **Studio Jabuka** je fotografski studio iz Splita.
    Naša ekipa nudi vam sve fotografske usluge, od _fotografiranja vjenčanja_ i raznih drugih
    prigoda, _snimanja foto-sessiona_ na lokaciji i u studiju i _izrade
    book-ova_ za modele, _obrade i retuširanja fotografija_ i pripreme za
    tisak, izrade foto albuma svih vrsta, _izrade najkvalitetnijih tiskanih
    book-albuma_...
    Nudimo vam i usluge snimanja i produkcije videa najviše
    kvalitete, snimanja vjenčanja i raznih drugih prigoda. Posjedujemo
    najmoderniju opremu i sve radimo u **HD kvaliteti**.
        </a>
      </p>
    </p>
  )
}
export default Welcome
