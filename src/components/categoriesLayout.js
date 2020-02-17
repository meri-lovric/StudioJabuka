import React from "react"
import "../styles/grid.scss"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"

const Categories = () => {
  const data = useStaticQuery(graphql`
  {
    drone: file(name: {eq: "drone"}, absolutePath: {regex: "//images/Categories//"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
    catering: file(name: {eq: "catering"}, absolutePath: {regex: "//images/Categories//"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
    weddings: file(name: {eq: "weddings"}, absolutePath: {regex: "//images/Categories//"}) {
      childImageSharp {
        fluid {
          base64
          tracedSVG
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
          originalName
          presentationWidth
          presentationHeight
        }
      }
    }
  }
`)
  return (
    <section className="grid-wrap text-center">
      <Link to="/weddings" className="tile text-center">
        <img src={data.weddings.childImageSharp.fluid.src} alt="" />
        <div className="text">
          <h1>Vjenčanja</h1>
          <h2 className="animate-text">Foto & video</h2>
          <p className="animate-text">
            U želji da maksimalno udovoljimo i najzahtjevnijim mladencima
            formirali smo nekoliko atraktivnih snimateljskih aranžmana kojima
            ćemo oživiti vašu svadbenu svečanost.{" "}
          </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Link>

      <Link to="/commercial" className="tile text-center">
        <img src={data.catering.childImageSharp.fluid.src} alt="" />
        <div className="text">
          <h1>Web, katalozi i promocija</h1>
          <h2 className="animate-text">Foto & video</h2>
          <p className="animate-text">
            Izrađujemo sve vrste profesionalnih stilskih i kataloških
            fotografija vaših proizvoda.{" "}
          </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Link>

      <Link to="/drone" className="tile text-center">
        <img src={data.drone.childImageSharp.fluid.src} alt="" />
        <div className="text">
          <h1>Dron</h1>
          <h2 className="animate-text">Foto & video</h2>
          <p className="animate-text">
            Ako želite prezentirati hotel, kuću, vilu, kamp ili restoran uz
            more, fotografije i video snimke iz zraka daju potpuno novu i
            atraktivnu perspektivu vašim objektima i lokacijama.{" "}
          </p>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Link>

      <style>{`
        @media screen and (max-width: 765px) {
          .grid-wrap{
            display: flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
            margin:5em 1em;
            height:100vh;
          }
          .tile h2{
            font-size:large;
          }
          .tile p{
            font-size:x-small;
          }
          .tile{
            width: 75%;
            height: 75%;
            margin: 10px;
            background-color: white;
            display: inline-block;
            background-size: cover;
            position: relative;
            cursor: pointer;
            transition: all 0.4s ease-out;
            box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
            overflow: hidden;
            color: white;
          }
        }
        body {
          background-color: #eee;
          background-color: #ffffff;
          background: url("../images/cubes.png");
        }
        .grid-wrap {
          display:flex;
          align-items:center;
          justify-content:center;
          height:100vh;
          
        }
        .tile {
          width: 40vh;
          height: 40vh;
          margin: 10px;
          background-color: white;
          display: inline-block;
          background-size: cover;
          position: relative;
          cursor: pointer;
          transition: all 0.4s ease-out;
          box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);
          overflow: hidden;
          color: white;
        }
        .tile img {
          height: 100%;
          width: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 0;
          transition: all 0.4s ease-out;
        }
        .tile .text {
          /*   z-index:99; */
          position: absolute;
          padding: 30px;
          height: calc(100% - 60px);
          font-size: 1.2em;
        }
        .tile h1 {
          font-weight: 300;
          margin: 0;
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
          //color: rgb(32, 31, 29);
          font-size:larger;
          color: rgba(0, 0, 0, 0.5);



          background-color:#fff;
    overflow:hidden;
    display:inline-block; 
    padding:10px; 
    font-weight:bold;
    font-family:arial;
    color:transparent;
        }
        .tile h2 {
          font-weight: 100;
          margin: 20px 0 0 0;
          color: #00c851;
          font-style: italic;
          transform: translateX(200px);
        }
        .tile p {
          font-weight: 300;
          margin: 20px 0 0 0;
          line-height: 25px;
          /*   opacity:0; */
          transform: translateX(-200px);
          transition-delay: 0.2s;
          color: rgb(32, 31, 29);
        }
        .animate-text {
          opacity: 0;
          transition: all 0.6s ease-in-out;
        }
        .tile:hover {
          /*   background-color:#99aeff; */
          box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);
          transform: scale(1.05);
        }
        .tile:hover img {
          opacity: 0.2;
        }
        .tile:hover .animate-text {
          transform: translateX(0);
          opacity: 1;
        }
        .dots {
          position: absolute;
          bottom: 20px;
          right: 30px;
          margin: 0 auto;
          width: 30px;
          height: 30px;
          color: rgb(32, 31, 29);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }

        .dots span {
          width: 5px;
          height: 5px;
          background-color: currentColor;
          border-radius: 50%;
          display: block;
          opacity: 0;
          transition: transform 0.4s ease-out, opacity 0.5s ease;
          transform: translateY(30px);
        }

        .tile:hover span {
          opacity: 1;
          transform: translateY(0px);
        }

        .dots span:nth-child(1) {
          transition-delay: 0.05s;
        }
        .dots span:nth-child(2) {
          transition-delay: 0.1s;
        }
        .dots span:nth-child(3) {
          transition-delay: 0.15s;
        }
      `}</style>
    </section>
  )
}

export default Categories
