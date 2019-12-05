import React from "react"
import "../styles/grid.scss"
import Sample1 from "../images/SampleImages/Sample1.jpg"
import Sample3 from "../images/SampleImages/Sample3.jpg"
import Sample4 from "../images/SampleImages/Sample4.jpg"
import Sample5 from "../images/SampleImages/Sample5.jpg"

const Blog = () => {
  return (
    <section className="blog" style={{ height: "100vh" }}>
      <div class="container my-5">
        <h2 class="text-center mb-5">Blog</h2>
        <div class="row mb-4">
          <div class="col-12">
            <div class="btn-list">
              <button
                class="btn-dark badge-pill px-3"
                data-mixitup-control
                data-filter="all"
              >
                All
              </button>
              <button
                class="btn-dark badge-pill px-3"
                data-mixitup-control
                data-filter=".category-a"
              >
                Weddings
              </button>
              <button
                class="btn-dark badge-pill px-3"
                data-mixitup-control
                data-filter=".category-b"
              >
                Catering
              </button>
              <button
                class="btn-dark badge-pill px-3"
                data-mixitup-control
                data-filter=".category-c"
              >
                Real Estate
              </button>
            </div>
          </div>
        </div>
        <div class="row mixitup">
          <div class="col-sm-6 col-lg-4 mix category-a">
            <div class="item">
              <img src={Sample1} alt="..." class="img-fluid" />
              <div class="overlay">
                
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 mix category-b">
            <div class="item">
              <img src={Sample5} alt="..." class="img-fluid" />
              <div class="overlay">
               
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 mix category-c">
            <div class="item">
              <img src={Sample3} alt="..." class="img-fluid" />
              <div class="overlay">
                
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 mix category-b">
            <div class="item">
              <img src={Sample4} alt="..." class="img-fluid" />
              <div class="overlay">
                
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 mix category-a">
            <div class="item">
              <img src={Sample5} alt="..." class="img-fluid" />
              <div class="overlay">
               
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-lg-4 mix category-c">
            <div class="item">
              <img src={Sample4} alt="..." class="img-fluid" />
              <div class="overlay">
                
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .blog {
            //width: 50vw;
            overflow: hidden;
            display: flex;
            align-self: center;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
            margin-top: 106px;
          }
          .mb-4 {
            margin-bottom: 1.5rem !important;
          }
          .col-12 {
            flex: 0 0 100%;
            max-width: 100%;
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
          }
          .row {
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          }
          button:focus {
            outline: none;
          }

          .btn-dark {
            color: #fff;
            background-color: #343a40;
            border-color: #343a40;
          }
          .badge-pill {
            padding-right: 0.6em;
            padding-left: 0.6em;
            border-radius: 10rem;
          }
          .btn-list button {
            margin: 0 5px;
          }
          .img-fluid {
            max-width: 100%;
            height: auto;
          }
          img {
            vertical-align: middle;
            filter:grayscale(75%);

          }
          .item {
            position: relative;
            overflow: hidden;
            border-radius: 4px;
          }
          .item:hover:before {
            opacity: 0.8;
          }
          .item:hover .overlay {
            opacity: 1;
          }
          .item:hover .overlay:after,
          .item:hover .overlay:before {
            opacity: 1;
            transform: scale(1);
          }
          .item:before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: #a8dd53;
            opacity: 0;
            z-index: 1;
            transition: all 0.5s ease 0s;
          }
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0;
            transition: all 0.5s ease 0s;
          }
          .overlay:after {
            border-right: 1px solid #fff;
            border-left: 1px solid #fff;
            transform: scale(1, 0);
          }
          .overlay:before {
            border-top: 1px solid #fff;
            border-bottom: 1px solid #fff;
            -webkit-transform: scale(0, 1);
            transform: scale(0, 1);
          }
          .overlay:before,
          .overlay:after {
            position: absolute;
            top: 30px;
            right: 30px;
            bottom: 30px;
            left: 30px;
            content: "";
            opacity: 0;
            z-index: -1;
            transition: opacity 0.5s, transform 0.5s;
          }
          .overlay a {
            color: #fff;
            display: inline-block;
            height: 3em;
            width: 10rem;
            border: 1px solid #fff;
            text-align: center;
            line-height: 1em;
            margin: 0 5px;
            font-size: 1em;
            -webkit-transition: all 0.5s ease 0s;
            transition: all 0.5s ease 0s;
          }
          .overlay a:hover {
            background: white;
          }
          .mix {
            margin: 10px 0 20px;
            position: relative;
            width: 100%;
            min-height: 1px;
            padding-right: 15px;
            padding-left: 15px;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Blog
