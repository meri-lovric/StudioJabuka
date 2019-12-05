import React from "react"
import "../styles/grid.scss"
import Sample1 from "../images/Categories/26910197_1811510835580207_9147397433929883580_o.jpg"
import Sample2 from "../images/Categories/josephpaul-7.jpg"
import Sample3 from "../images/Categories/18238782_1559326514131975_3830999876402550223_o.jpg"

const Categories = () => {
  return (
    <section class="wrap">
      <div class="tile">
        <img src= {Sample3} />
        <div class="text">
          <h1>Vjenčanja</h1>
          <h2 class="animate-text">Vjenčanja</h2>
          <p class="animate-text">
          U želji da maksimalno udovoljimo i najzahtjevnijim mladencima formirali smo nekoliko atraktivnih snimateljskih aranžmana kojima ćemo oživiti vašu svadbenu svečanost {" "}
          </p>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class="tile">
        <img src= {Sample2}/>
        <div class="text">
          <h1>Catering</h1>
          <h2 class="animate-text">Snimanje ponude</h2>
          <p class="animate-text">
          Po definiciji, catering je­ služba koja se brine za opskrbu hranom i pićem putnika zrakoplovnih kompanija, uzvanika i gostiju različitih društvenih događaja i zabava. {" "}
          </p>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div class="tile">
        <img src= {Sample1}/>
        <div class="text">
          <h1>Nekretnine</h1>
          <h2 class="animate-text">Snimanje za oglase</h2>
          <p class="animate-text">
          Nekretnina u stvarnom pravu označava česticu zemljine površine, uključujući i sve što je s njom razmjerno trajno povezano na njezinoj površini ili ispod nje (prije svega zgrada, kuća, i sl.).{" "}
          </p>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        body
        {
          background-color:#eee
        }
        .wrap
        {
          margin:50px auto 0 auto;
          width:100%;
          display:flex;
          align-self:center;
          align-items:space-around;
          //max-width:1200px;
        }
        .tile
        {
          width:380px;
          height:380px;
          margin:10px;
          background-color:#f7e74c;
          display:inline-block;
          background-size:cover;
          position:relative;
          cursor:pointer;
          transition: all 0.4s ease-out;
          box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.44);
          overflow:hidden;
          color:white;
          font-family:'Roboto';
          
        }
        .tile img
        {
          height:100%;
          width:100%;
          position:absolute;
          top:0;
          left:0;
          z-index:0;
          transition: all 0.4s ease-out;
        }
        .tile .text
        {
        /*   z-index:99; */
          position:absolute;
          padding:30px;
          height:calc(100% - 60px);
        }
        .tile h1
        {
         
          font-weight:300;
          margin:0;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
        }
        .tile h2
        {
          font-weight:100;
          margin:20px 0 0 0;
          font-style:italic;
           transform: translateX(200px);
        }
        .tile p
        {
          font-weight:300;
          margin:20px 0 0 0;
          line-height: 25px;
        /*   opacity:0; */
          transform: translateX(-200px);
          transition-delay: 0.2s;
        }
        .animate-text
        {
          opacity:0;
          transition: all 0.6s ease-in-out;
        }
        .tile:hover
        {
        /*   background-color:#99aeff; */
        box-shadow: 0px 35px 77px -17px rgba(0,0,0,0.64);
          transform:scale(1.05);
        }
        .tile:hover img
        {
          opacity: 0.2;
        }
        .tile:hover .animate-text
        {
          transform:translateX(0);
          opacity:1;
        }
        .dots
        {
          position:absolute;
          bottom:20px;
          right:30px;
          margin: 0 auto;
          width:30px;
          height:30px;
          color:currentColor;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:space-around;
          
        }
        
        .dots span
        {
            width: 5px;
            height:5px;
            background-color: currentColor;
            border-radius: 50%;
            display:block;
          opacity:0;
          transition: transform 0.4s ease-out, opacity 0.5s ease;
          transform: translateY(30px);
         
        }
        
        .tile:hover span
        {
          opacity:1;
          transform:translateY(0px);
        }
        
        .dots span:nth-child(1)
        {
           transition-delay: 0.05s;
        }
        .dots span:nth-child(2)
        {
           transition-delay: 0.1s;
        }
        .dots span:nth-child(3)
        {
           transition-delay: 0.15s;
        }
        
        
        @media (max-width: 1000px) {
          .wrap {
           flex-direction: column;
            width:400px;
          }
        }
      `}</style>
    </section>
  )
}

export default Categories
