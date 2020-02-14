import React from "react"
import "../styles/grid.scss"
import Sample1 from "../images/Categories/26910197_1811510835580207_9147397433929883580_o.jpg"
import Sample2 from "../images/Categories/2.jpg"
import Sample3 from "../images/Categories/18238782_1559326514131975_3830999876402550223_o.jpg"
import { Link } from "gatsby"

const Categories = () => {
  return (
    <section className="grid-wrap text-center">
      <Link to="/weddings" className="tile text-center">
        <img src={Sample3} alt="" />
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
        <img src={Sample2} alt="" />
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
        <img src={Sample1} alt="" />
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

      <style jsx>{`
        body {
          background-color: #eee;
          background-color: #ffffff;
          background: url("../images/cubes.png");
        }
        .grid-wrap {
          margin: 9em 10em;
          
        }
        .tile {
          width: 23.75em;
          height: 23.73em;
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
          font-family: "Roboto";
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
          color: rgb(32, 31, 29);
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
